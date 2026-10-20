"use strict";

/* ===== LOGIKA APLIKASI (membutuhkan js/data.js dimuat lebih dulu) ===== */

/* 1. HELPER */
const $ = (selector) => document.querySelector(selector);
const esc = (text) => String(text).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const list = (items, tag = "ul") => `<${tag} class="list">${items.map((i) => `<li>${i}</li>`).join("")}</${tag}>`;
const stats = (items) => items.map(([nilai, label]) => `<div class="stat"><b>${nilai}</b><small>${label}</small></div>`).join("");
const baris = (k, v) => (v ? `<tr><th>${k}</th><td>${v}</td></tr>` : "");

// Paragraf biasa dan bait lagu (Selayang Pandang)
const paragraf = (items) => items.map((t) => `<p>${t}</p>`).join("");
const bait = (items) => items.map((b) => `<p>${b.join("<br>")}</p>`).join("");

// Tabel fungsionaris jurusan (Organisasi)
const fungsionaris = (f) => `
  <div class="card mt">
    <h3>${f.judul}</h3>
    <table>
      ${f.baris.map(([k, v, tebal]) => {
        const t = tebal ? "th" : "td";
        return `<tr><${t}>${k}</${t}><${t}>${v}</${t}></tr>`;
      }).join("")}
    </table>
  </div>`;

// Program studi yang bisa dibuka (punya halaman detail)
const bisaDibuka = (key) => Boolean(key && PRODI[key] && PRODI[key].buka);

// Foto berita (kosong kalau tidak ada foto)
const foto = (n) => (n.foto ? `<img src="${n.foto}" alt="${esc(n.judul)}">` : "");

// crumbs: [["Label", "/path"], ["Halaman aktif"]]
const breadcrumb = (...crumbs) =>
  `<div class="breadcrumb"><a href="#/">Beranda</a>${crumbs.map(([label, path]) => path ? ` / <a href="#${path}">${label}</a>` : ` / ${label}`).join("")}</div>`;

const pageHead = (crumbs, title) => breadcrumb(...crumbs) + `<h1 class="page-title">${title}</h1>`;

/* 2. KOMPONEN */
const prodiCard = (key, p) => `
  <div class="card">
    <div class="icon">${p.ikon}</div>
    <h3 style="font-size:15px;margin-top:10px">${p.nama}</h3>
    <p style="font-size:13px;color:var(--muted)">${p.ringkas}</p>
    ${p.buka ? `<a class="link" href="#/prodi/${key}">Detail Program →</a>` : ""}
  </div>`;

const beritaCard = (n) => `
  <a class="card" href="#/berita/${n.id}">
    <div class="thumb">${foto(n)}</div>
    <small style="color:var(--muted)">${n.tanggal}</small>
    <h3 style="font-size:15px;margin:2px 0 0">${n.judul}</h3>
  </a>`;

// Hanya program studi yang bisa dibuka yang menjadi link
const jurusanCard = (j) => `
  <div>
    <span class="jurusan-label">${j.nama}</span>
    <ul class="jurusan-prodi">
      ${j.prodi.map(([label, key]) =>
        `<li>${bisaDibuka(key) ? `<a href="#/prodi/${key}">${label}</a>` : label}</li>`
      ).join("")}
    </ul>
  </div>`;

const prodiCards = () => Object.entries(PRODI).map(([k, p]) => prodiCard(k, p)).join("");
const beritaCards = () => BERITA.map(beritaCard).join("");

/* 3. HALAMAN */
const pages = {
  beranda: () => `
    <section class="hero">
      <small style="letter-spacing:.2em">JURUSAN</small>
      <h1>Teknik Komputer dan <b>Informatika</b></h1>
      <strong>Politeknik Negeri Medan</strong>
      <p>Membentuk talenta digital yang kompeten, inovatif, dan siap menghadapi tantangan industri 4.0.</p>
      <div class="actions">
        <a class="btn" href="#/profil">Profil →</a>
        <button class="btn garis" type="button" data-video>▶ Video Profil</button>
      </div>
    </section>

    <section class="features">${FITUR.map(([i, t]) => `<div><span class="icon">${i}</span>${t}</div>`).join("")}</section>

    <div class="grid g2">
      <section class="card">
        <h2 class="section-title">Tentang Jurusan</h2>
        <p>Jurusan Teknik Komputer dan Informatika Politeknik Negeri Medan berkomitmen untuk menghasilkan lulusan yang unggul
           dan kompeten di bidang teknologi komputer, jaringan, perangkat lunak, serta sistem informasi. Lulusan dipersiapkan
           untuk mampu beradaptasi dengan perkembangan teknologi dan bersaing di tingkat nasional maupun global.</p>
        <a class="btn" href="#/tentang">Selengkapnya →</a>
      </section>
      <section class="card">
        <h2 class="section-title">Program Studi <a href="#/prodi">Lihat Semua →</a></h2>
        <div class="grid g2">${prodiCards()}</div>
      </section>
    </div>

    <div class="grid g2 mt">
      <section class="card">
        <h2 class="section-title">Berita & Kegiatan <a href="#/berita">Lihat Semua →</a></h2>
        <div class="grid g3">${beritaCards()}</div>
      </section>
      <section class="card">
        <h2 class="section-title">Dalam Angka</h2>
        <div class="grid g4">${stats(PRESTASI)}</div>
      </section>
    </div>`,

  tentang: () => pageHead([["Tentang Kami"]], "Tentang Kami") + `
    <div class="grid">
      <div class="card">
        <h3>Visi</h3>
        <p>${VISI_POLMED}</p>
        <h3>Misi</h3>
        ${list(MISI_POLMED, "ol")}
      </div>

      <div class="card">
        <h3>Sekilas Jurusan</h3>
        <p>Jurusan Teknik Komputer dan Informatika memiliki beberapa
          program studi yang didukung oleh berbagai laboratorium, seperti
          jaringan, pemrograman, multimedia, dan sistem tertanam. Jurusan juga
          menjalin kemitraan dengan berbagai perusahaan teknologi untuk mendukung pengembangan kompetensi mahasiswa.</p>
        <div class="row">
          <a class="btn" href="#/profil">Lihat Profil</a>
        </div>
      </div>
    </div>`,

  selayang: () => pageHead([["Tentang Kami", "/tentang"], ["Selayang Pandang"]], "Selayang Pandang") + `
    <div class="grid">
      <div class="card" id="sambutan">
        <h3>Sambutan Direktur</h3>
        <div class="sambutan">
          <div>
            <img src="imagee/direktur_min.png" alt="Dr. Ir. Idham Kamil, S.T., M.T" onerror="this.remove()">
            <p class="nama"><strong>Dr. Ir. Idham Kamil, S.T., M.T</strong><br>Direktur Politeknik Negeri Medan</p>
          </div>
          <div>
            <p><strong>Selamat Datang</strong></p>
            ${paragraf(SAMBUTAN)}
          </div>
        </div>
      </div>

      <div class="card" id="visi">
        <h3>Visi</h3>
        <p>${VISI_POLMED}</p>
        <h3>Misi</h3>
        ${list(MISI_POLMED)}
        <h3>Motto</h3>
        <p>${MOTTO}</p>
        <h3>Sejarah</h3>
        ${paragraf(SEJARAH)}
      </div>

      <div class="card" id="profil-institusi">
        <h3>Profil Institusi</h3>
        <img class="gambar-lebar" src="imagee/Picture3_min.png" alt="Gedung Politeknik Negeri Medan" onerror="this.remove()">
        ${paragraf(PROFIL_INSTITUSI)}
      </div>

      <div class="card" id="lambang">
        <h3>Lambang Politeknik Negeri Medan</h3>
        <div class="lambang">
          <img src="imagee/picture4_min.png" alt="Lambang Politeknik Negeri Medan" onerror="this.remove()">
          <div>${paragraf(LAMBANG)}</div>
        </div>
      </div>

      <div id="mars" class="lagu">
        <div class="himne">
          <h3>Himne Politeknik Negeri Medan</h3>
          <h3>Abdiku Untuk Politeknik</h3>
          ${bait(HIMNE)}
        </div>
        <div class="mars">
          <h3>Mars Politeknik Negeri Medan</h3>
          <h3>Akulah Kebanggaanmu</h3>
          ${bait(MARS)}
        </div>
      </div>
    </div>`,

  organisasi: () => pageHead([["Tentang Kami", "/tentang"], ["Organisasi"]], "Organisasi") + `
    <div class="grid">
      <div class="card" id="direktorat">
        <h3>Direktorat</h3>
        <div class="bagan">
          <img src="imagee/Picture5_min.png" alt="Pimpinan Politeknik Negeri Medan" onerror="this.remove()">
        </div>
        <div class="bagan" style="margin-top:14px">
          <img src="imagee/Picture6_min.png" alt="Wakil Direktur Politeknik Negeri Medan" onerror="this.remove()">
        </div>
      </div>

      <div class="card" id="senat">
        <h3>Senat</h3>
        <p><strong>SENAT AKADEMIK</strong><br>${SENAT_AKADEMIK}</p>
        <div class="senat-sejajar">
          <a href="imagee/Picture7_min.png" target="_blank" rel="noopener" title="Klik untuk memperbesar">
            <img src="imagee/Picture7_min.png" alt="Anggota Senat Politeknik Negeri Medan" onerror="this.remove()">
          </a>
          <a href="imagee/Picture8_min.png" target="_blank" rel="noopener" title="Klik untuk memperbesar">
            <img src="imagee/Picture8_min.png" alt="Anggota Senat Politeknik Negeri Medan (lanjutan)" onerror="this.remove()">
          </a>
        </div>
      </div>

      <div class="card" id="fungsionaris">
        <h3>FUNGSIONARIS JURUSAN 2025 -2029</h3>
      </div>
    </div>
    ${FUNGSIONARIS.map(fungsionaris).join("")}`,

  profil: () => pageHead([["Tentang Kami", "/tentang"], ["Profil"]], "Profil") + `
    <div class="grid">
      <div class="card">
        <h3>Sejarah Singkat</h3>
        <p>Jurusan Teknik Komputer dan Informatika merupakan salah satu jurusan di Politeknik Negeri Medan yang bergerak di bidang teknologi komputer dan informatika.
          Polmed awalnya berdiri sebagai Politeknik Universitas Sumatera Utara pada tahun 1982. Pada tahun 1997, Politeknik USU berubah menjadi Politeknik Negeri Medan
          (Polmed). Seiring perkembangan teknologi, jurusan ini terus mengembangkan pendidikan di bidang komputer, jaringan, perangkat lunak, dan sistem informasi.
          Jurusan ini berkomitmen menghasilkan lulusan yang kompeten dan siap menghadapi kebutuhan dunia industri.</p>
        <h3>Fasilitas</h3>
        ${list(["Laboratorium jaringan dan keamanan", "Laboratorium pemrograman dan basis data", "Laboratorium IoT dan robotika", "Ruang kolaborasi proyek mahasiswa"])}
      </div>
    </div>`,

  prodi: (key) => {
    // Daftar jurusan + program studi
    if (!key) {
      return pageHead([["Pendidikan"]], "Pendidikan") +
        `<div class="card" style="margin-bottom:24px"><h3>Pendidikan</h3><p>${PENDIDIKAN}</p></div>` +
        `<div class="jurusan-grid">${JURUSAN.map(jurusanCard).join("")}</div>` +
        `<div class="card mt" id="akademik">
          <h3>Akademik</h3>
          <h3 style="font-size:15px;color:var(--muted)">Kalender Akademik Semester Ganjil 2025/2026</h3>
          <a class="kalender" href="imagee/kalender_min" target="_blank" rel="noopener" title="Klik untuk memperbesar">
            <img src="imagee/kalender_min.png" alt="Kalender Akademik Semester A (Ganjil) Tahun Akademik 2025/2026 Politeknik Negeri Medan">
          </a>
          <p class="kalender-info">Bila ada perubahan tentang hari libur akan diumumkan kemudian.</p>
        </div>`;
    }

    // Hanya program studi yang buka: true yang punya halaman
    if (!bisaDibuka(key)) return pages.notFound();
    const p = PRODI[key];

    return pageHead([["Pendidikan", "/prodi"], [p.nama]], p.nama) + `
      <p style="color:var(--muted)">${p.ringkas}</p>

      <div class="card">
        <h3>Informasi Program</h3>
        <table>
          ${baris("Jurusan", p.jurusan)}
          ${baris("Institusi", "Politeknik Negeri Medan")}
          ${baris("Website", `<a class="link" href="${p.situs}" target="_blank" rel="noopener">${p.situs.replace("https://", "").replace(/\/$/, "")}</a>`)}
        </table>
      </div>

      ${p.visi ? `
      <div class="card mt">
        <h3>Visi</h3>
        <p>${p.visi}</p>
        ${p.misi ? `<h3>Misi</h3>${list(p.misi)}` : ""}
      </div>` : ""}

      ${p.struktur ? `
      <div class="card mt">
        <h3>${p.struktur.judul}</h3>
        <a class="struktur" href="${p.struktur.foto}" target="_blank" rel="noopener" title="Klik untuk memperbesar">
          <img src="${p.struktur.foto}" alt="${esc(p.struktur.judul)}">
        </a>
        <p class="kalender-info">Klik gambar untuk melihat ukuran penuh.</p>
      </div>` : ""}

      <p><a class="link" href="#/prodi">← Semua program studi</a></p>`;
  },

  akademik: () => pages.prodi(),

  fasilitas: () => pageHead([["Pendidikan", "/prodi"], ["Fasilitas"]], "Fasilitas") + `
    <div class="grid">
      <section class="card fas-intro"><p>${FAS_INTRO}</p></section>

      <section class="card">
        <h2 class="section-title">Laboratorium</h2>
        <p>${FAS_LAB.isi}</p>
        <p><strong>${FAS_LAB.pengantar}</strong></p>
        ${list(FAS_LAB.daftar).replace('<ul class="list">', '<ul class="fas-list">')}
      </section>

      <section class="card">
        <h2 class="section-title">Workshop</h2>
        <p>${FAS_WORKSHOP.isi}</p>
        <p><strong>${FAS_WORKSHOP.pengantar}</strong></p>
        ${list(FAS_WORKSHOP.daftar).replace('<ul class="list">', '<ul class="fas-list">')}
      </section>

      <section class="card">
        <h2 class="section-title">Galeri Fasilitas</h2>
        <div class="galeri">${GALERI.map(([label, src]) =>
          `<figure><img src="${src}" alt="${esc(label)}" onerror="this.remove()"><figcaption>${label}</figcaption></figure>`
        ).join("")}</div>
      </section>

      <section class="card">
        <h2 class="section-title">Akreditasi Program Studi</h2>
        <div class="tabel-scroll">
          <table>
            <tr><th>PROGRAM STUDI</th><th>Peringkat</th><th>NO SK</th><th>Tanggal Kadaluarsa</th></tr>
            ${AKREDITASI.map(([prodi, rank, sk, tgl, url]) => `
            <tr>
              <td>${prodi}</td>
              <td><span class="pill${rank === "Unggul" || rank === "A" ? " top" : ""}">${rank}</span></td>
              <td><a class="link" href="${url}" target="_blank" rel="noopener">${sk}</a></td>
              <td>${tgl}</td>
            </tr>`).join("")}
          </table>
        </div>
      </section>
    </div>`,

  "sistem-informasi": () => {
    const S = SISTEM_INFO;
    const ikon = (i) => (i.includes("/") ? `<img src="${i}" alt="" onerror="this.remove()">` : i);
    return pageHead([["Sistem Informasi"]], "Sistem Informasi") + `
    <div class="si-panel">
      <div class="si-banner">
        <div><small>POLITEKNIK NEGERI MEDAN</small>INFORMATION SYSTEM</div>
        <img src="${S.banner}" alt="Information System Politeknik Negeri Medan" onerror="this.remove()">
      </div>
      <div class="si-judul">${S.judul}</div>
      <div class="si-grid">
        ${S.item.map((x) => `
        <div class="si-item">
          <div class="si-ikon">${ikon(x.ikon)}</div>
          <a class="nama" href="${x.url}" target="_blank" rel="noopener">${x.nama}</a>
          <p>${x.ket}</p>
        </div>`).join("")}
      </div>
    </div>`;
  },

  penelitian: () => {
    const P = PENELITIAN;
    const item = ([tag, url, teks]) => `<div class="riset-item"><a class="tag" href="${url}" target="_blank" rel="noopener">${tag}</a><p>${teks}</p></div>`;
    return `
    <div class="riset-banner">
      <div>Research<br><b>Excellencies.</b></div>
      <img src="${P.banner}" alt="Research Excellencies - Politeknik Negeri Medan" onerror="this.remove()">
    </div>
    <div class="card"><p style="margin:0">${P.isi}</p></div>

    <section class="riset-band navy mt">
      <div class="riset-row"><h3>Peluang Hibah Penelitian</h3><div>${P.hibah.map(item).join("")}</div></div>
      <div class="riset-row"><h3>Journal Polmed</h3><div>${P.jurnal.map(item).join("")}</div></div>
    </section>

    <section class="riset-band abu">
      <div class="riset-row"><h3>Proyek penelitian</h3><p style="margin:0;font-size:14px;line-height:1.7">${P.proyek}</p></div>
    </section>

    <section class="riset-band putih">
      ${P.gambar.map((g) => `<img class="riset-gambar" src="${g}" alt="Top 10 Research Publication" onerror="this.remove()">`).join("")}
    </section>`;
  },

  berita: (id) => {
    if (!id) return pageHead([["Berita"]], "Berita & Kegiatan") + `<div class="grid g3">${beritaCards()}</div>`;
    const n = BERITA.find((b) => b.id === Number(id));
    if (!n) return pages.notFound();
    return breadcrumb(["Berita", "/berita"], [n.judul]) + `
      <article class="card" style="max-width:760px">
        <small style="color:var(--muted)">${n.tanggal}</small>
        <h1 class="page-title">${n.judul}</h1>
        <div class="thumb" style="height:260px">${foto(n)}</div>
        ${n.isi.map((p) => `<p>${p}</p>`).join("")}
        <a class="link" href="#/berita">← Kembali ke berita</a>
      </article>`;
  },

  kontak: () => pageHead([["Kontak"]], "Kontak") + `
    <div class="grid g2">
      <div class="card">
        <h3>Alamat</h3>
        <p><br>Politeknik Negeri Medan<br>Jl. Almamater No. 1, Kampus USU</p>
        <p> Medan, Sumatera Utara 20155 </p>
        <p>Email: polmed@polmed.ac.id  <br>Telepon: 061- 8211235</p>
      </div>
      <div class="card">
        <h3>Kirim Pesan</h3>
        <div id="kontak-form">
          <label for="k-nama">Nama</label><input id="k-nama" autocomplete="name">
          <label for="k-email">Email</label><input id="k-email" type="email" autocomplete="email">
          <label for="k-pesan">Pesan</label><textarea id="k-pesan" rows="4"></textarea>
          <button class="btn" type="button" data-kirim>Kirim pesan</button>
        </div>
      </div>
    </div>`,

  notFound: () => `<div class="card"><h2>Halaman tidak ditemukan</h2><a class="link" href="#/">Kembali ke beranda</a></div>`
};

/* 4. AKSI (form kontak) */
// Situs ini statis (tanpa server), jadi pesan dikirim lewat aplikasi email pengguna.
const EMAIL_TUJUAN = "polmed@polmed.ac.id";

function kirimPesan() {
  const nama = $("#k-nama").value.trim();
  const email = $("#k-email").value.trim();
  const pesan = $("#k-pesan").value.trim();
  if (!nama || !pesan) {
    alert("Isi nama dan pesan terlebih dahulu.");
    return;
  }
  const isi = `${pesan}\n\n--\n${nama}${email ? " (" + email + ")" : ""}`;
  location.href = `mailto:${EMAIL_TUJUAN}?subject=${encodeURIComponent("Pesan dari website TKI - " + nama)}&body=${encodeURIComponent(isi)}`;
  $("#kontak-form").innerHTML = '<p class="ok">Aplikasi email Anda akan terbuka. Silakan tekan Kirim di sana untuk menyelesaikan pengiriman pesan.</p>';
}

$("#app").addEventListener("click", (e) => { if (e.target.closest("[data-kirim]")) kirimPesan(); });

/* 5. ROUTER */
function render() {
  const [name = "", param] = location.hash.slice(1).split("/").filter(Boolean);
  const has = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);
  const page = name === "" ? pages.beranda : (has(pages, name) ? pages[name] : null);

  $("#app").innerHTML = page && name !== "notFound" ? page(param) : pages.notFound();
  document.title = "Jurusan Teknik Komputer dan Informatika - Politeknik Negeri Medan";

  const active = "/" + (has(PARENT_MENU, name) ? PARENT_MENU[name] : name);
  $("#nav").innerHTML = MENU
    .map(([path, label]) => {
      const cls = path === active ? ' class="on" aria-current="page"' : "";
      const sub = DROPDOWN[path];
      if (!sub) return `<a href="#${path}"${cls}>${label}</a>`;
      return `<div class="has-sub"><a href="#${path}"${cls}>${label} <span aria-hidden="true">⌄</span></a>
        <div class="mega">${sub.map(([judul, items]) =>
          `<div><h4>${judul}</h4>${items.map(([l, p]) => /^https?:/.test(p) ? `<a href="${p}" target="_blank" rel="noopener">${l}</a>` : `<a href="#${p}">${l}</a>`).join("")}</div>`
        ).join("")}</div></div>`;
    })
    .join("");

  // Link dropdown menuju bagian tertentu di halaman Selayang Pandang / Organisasi
  const tujuan = name === "akademik" ? document.getElementById("akademik") : ((name === "selayang" || name === "organisasi") && param ? document.getElementById(param) : null);
  if (tujuan) tujuan.scrollIntoView(); else window.scrollTo(0, 0);
}

// Tutup dropdown setelah salah satu link-nya diklik
    $("#nav").addEventListener("click", (e) => { if (e.target.closest(".mega")) $("#nav").classList.add("tutup"); });
    $("#nav").addEventListener("mouseleave", () => $("#nav").classList.remove("tutup"));

/* 6. VIDEO PROFIL (jendela pop-up) */
    const vm = document.createElement("div");
    vm.id = "video-modal"; vm.hidden = true;
    vm.innerHTML = '<div class="kotak"><button class="tutup-video" aria-label="Tutup video">×</button><div class="layar"></div></div>';
    document.body.appendChild(vm);

let pemicuVideo = null;
function bukaVideo() 
{
  pemicuVideo = document.activeElement;
  const layar = vm.querySelector(".layar");
  layar.innerHTML = `<video src="${esc(VIDEO_PROFIL)}" controls autoplay playsinline></video>`;
  layar.querySelector("video").addEventListener("error", () => 
      {
      layar.innerHTML = "<p>Video tidak ditemukan. Pastikan file " + esc(VIDEO_PROFIL) + " ada.</p>";
      });
    vm.hidden = false;
    vm.querySelector(".tutup-video").focus();
}
const tutupVideo = () => 
  {
    if (vm.hidden) return;
    vm.hidden = true;
    vm.querySelector(".layar").innerHTML = "";
    if (pemicuVideo && document.contains(pemicuVideo)) pemicuVideo.focus();
  };

  $("#app").addEventListener("click", (e) => { if (e.target.closest("[data-video]")) bukaVideo(); });
  vm.addEventListener("click", (e) => { if (e.target === vm || e.target.closest(".tutup-video")) tutupVideo(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") tutupVideo(); });
  window.addEventListener("hashchange", tutupVideo);

  window.addEventListener("hashchange", render);
  render();
