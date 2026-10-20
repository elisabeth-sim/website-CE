"use strict";

/* === DATA WEBSITE JURUSAN TEKNIK KOMPUTER DAN INFORMATIKA ===*/

const MENU = [
  ["/", "Beranda"], ["/tentang", "Tentang Kami"], ["/prodi", "Pendidikan"],
  ["/penelitian", "Penelitian"], ["/sistem-informasi", "Sistem Informasi"], ["/berita", "Berita"], ["/kontak", "Kontak"]
];

// Daftar jurusan dan program studinya.
// Format program studi: ["Nama tampil", "kunci"]
// Hanya kunci yang ada di PRODI dengan buka: true yang menjadi link.
const JURUSAN = [
  { nama: "Teknik Mesin", prodi: [
    ["Program Studi Teknik Mesin"], ["Program Studi Teknik Konversi Energi"],
    ["Program Studi Teknologi Rekayasa Pengelasan dan Fabrikasi"],
    ["Program Studi Teknologi Rekayasa Energi Terbarukan"],
    ["Program Studi Teknologi Rekayasa Kimia Industri"],
    ["Program Studi Teknologi Rekayasa Manufaktur"] ] },
  { nama: "Teknik Sipil", prodi: [
    ["Program Studi Teknik Sipil"], ["Program Studi Teknik Perancangan Jalan dan Jembatan"],
    ["Program Studi Manajemen Rekayasa Konstruksi Gedung"] ] },
  { nama: "Teknik Elektro", prodi: [
    ["Program Studi Teknik Listrik"], ["Program Studi Teknik Elektronika"],
    ["Program Studi Teknik Telekomunikasi"],
    ["Program Studi Teknologi Rekayasa Jaringan Telekomunikasi"],
    ["Program Studi Teknologi Rekayasa Instalasi Listrik"],
    ["Program Studi Teknologi Rekayasa Otomasi"] ] },
  { nama: "Teknik Komputer dan Informatika", prodi: [
    ["Program Studi Teknik Komputer", "tk"],
    ["Program Studi Manajemen Informatika", "mi"],
    ["Program Studi Teknologi Rekayasa Perangkat Lunak", "trpl"],
    ["Program Studi Teknologi Rekayasa Multimedia Grafis", "trmg"] ] },
  { nama: "Akuntansi", prodi: [
    ["Program Studi Akuntansi"], ["Program Studi Keuangan dan Perbankan"],
    ["Program Studi Keuangan dan Perbankan Syariah"],
    ["Program Studi Akuntansi Keuangan Publik"],
    ["Magister Terapan Sistem Informasi Akuntansi"] ] },
  { nama: "Administrasi Niaga", prodi: [
    ["Program Studi Administrasi Bisnis"], ["Program Studi Manajemen Bisnis"],
    ["Program Studi Usaha Jasa Konvensi, Perjalanan Insentif dan Pameran"],
    ["Program Studi Bahasa Inggris"] ] }
];

// Halaman yang dihitung sebagai bagian dari menu lain
const PARENT_MENU = { profil: "tentang", selayang: "tentang", organisasi: "tentang", akademik: "prodi", fasilitas: "prodi" };

// Dropdown dua kolom: [judul kolom, [[label, alamat], ...]]
const DROPDOWN = {
  "/tentang": [
    ["Selayang Pandang", [
      ["Sambutan Direktur", "/selayang/sambutan"],
      ["Visi, Misi, Motto, Sejarah", "/selayang/visi"],
      ["Profil Institusi", "/selayang/profil-institusi"]
    ]],
    ["Organisasi", [
      ["Direktorat", "/organisasi/direktorat"],
      ["Senat", "/organisasi/senat"],
      ["Fungsionaris Jurusan", "/organisasi/fungsionaris"]
    ]]
  ],
  "/prodi": [
    ["Pendidikan", [
      ["Program Studi", "/prodi"],
      ["Fasilitas", "/fasilitas"],
      ["Kehidupan Kampus", "https://lpmneraca.com/category/kampus/"]
    ]]
  ]
};

// Program studi TKI (kartu di beranda + halaman detail).
// buka: true = bisa diklik dan punya halaman detail.
const PRODI = {
  tk: {
    buka: true, ikon: "CE",
    nama: "Program Studi Teknik Komputer",
    jurusan: "Teknik Komputer dan Informatika",
    ringkas: "Program studi yang berfokus pada sistem komputer, perangkat keras, dan jaringan.",
    situs: "https://ce.polmed.ac.id/",
    visi: "Menjadi program studi teknik komputer unggul dalam pendidikan, pelatihan, maupun pengembangan teknik komputer terapan secara profesional di bidang automation pada tahun 2025.",
    misi: [
      "Mendidik mahasiswa yang beriman dan bertaqwa kepada Tuhan yang Maha Esa serta patuh terhadap berbagai peraturan.",
      "Melaksanakan dengan maksimal seluruh kegiatan tridarma perguruan tinggi dalam bidang teknik komputer terapan terkini yang inovatif dan dengan cara-cara yang kreatif.",
      "Menjalin kerjasama yang erat dengan berbagai industri lokal, nasional, maupun internasional dalam rangka menjaga kesesuaian topik maupun materi ajar dengan perkembangan dunia industri.",
      "Menyesuaikan sarana dan prasarana laboratorium maupun workshop teknik komputer terapan dengan teknologi yang digunakan di industri.",
      "Mengikuti perkembangan teknik komputer terapan terkini dengan mengikutsertakan sivitas akademika pada pertemuan-pertemuan ilmiah baik dengan institusi pendidikan vokasi, perusahaan-perusahaan, maupun dengan praktisi-praktisi industri.",
      "Menjaga kesesuaian baik pengetahuan maupun keterampilan dosen-dosen dan tenaga-tenaga kependidikan dengan pertumbuhan dan pengembangan teknik komputer terapan di industri-industri."
    ],
    struktur: {
      judul: "Struktur Organisasi Jurusan Teknik Komputer dan Informatika (Program Studi Teknik Komputer) Politeknik Negeri Medan",
      foto: "imagee/struktur%20ce.png"
    }
  },
  mi: {
    buka: true, ikon: "MI",
    nama: "Program Studi Manajemen Informatika",
    jurusan: "Teknik Komputer dan Informatika",
    ringkas: "Program studi yang berfokus pada sistem informasi dan pengelolaan data.",
    situs: "https://mi.polmed.ac.id/",
    visi: "Menjadi program studi yang unggul dalam pengembangan aplikasi web dan mobile serta mampu bersaing di tingkat regional, nasional, dan internasional pada tahun 2025.<br><br>Menjadi pusat pendidikan vokasi yang adaptif, inovatif, dan kolaboratif di bidang manajemen informatika berbasis teknologi terapan.",
    misi: [
      "Mendidik mahasiswa untuk mencapai kompetensi di bidang manajemen informatika sesuai standar industri, dengan menjunjung tinggi nilai akseptabilitas, akuntabilitas, dan profitabilitas.",
      "Menghasilkan lulusan yang kompeten, inovatif, adaptif, dan mampu bersaing di tingkat regional, nasional, dan internasional.",
      "Melaksanakan penelitian terapan untuk pengembangan ilmu pengetahuan dan teknologi di bidang manajemen informatika, khususnya pengembangan aplikasi web dan mobile."
    ],
    struktur: {
      judul: "Struktur Organisasi Program Studi Manajemen Informatika Politeknik Negeri Medan",
      foto: "imagee/Struktur%20mi.png"
    }
  },
  trpl: {
    buka: true, ikon: "TRPL",
    nama: "Program Studi Teknologi Rekayasa Perangkat Lunak",
    jurusan: "Teknik Komputer dan Informatika",
    ringkas: "Program studi yang berfokus pada rekayasa dan pengembangan perangkat lunak.",
    situs: "https://trpl.polmed.ac.id/",
    visi: "Menjadi program studi pendidikan vokasi yang profesional, unggul dan dapat bersaing di tingkat nasional maupun internasional di bidang Teknologi Rekayasa Perangkat Lunak sesuai dengan perkembangan dunia usaha dan industri.",
    misi: [
      "Memajukan pendidikan vokasi untuk menghasilkan tenaga vokasi di bidang teknologi rekayasa perangkat lunak.",
      "Mengembangkan penelitian, pengabdian serta publikasi ilmiah dan antar disiplin ilmu untuk pengembangan ilmu pengetahuan di bidang ilmu teknologi rekayasa perangkat lunak secara nasional dan internasional.",
      "Meningkatkan kesadaran terhadap interkoneksitas, interdisiplin, untuk memecahkan masalah-masalah yang dihadapi dan mengembangkan kemampuan dalam kewirausahaan."
    ],
    struktur: {
      judul: "Struktur Organisasi Jurusan Teknik Komputer dan Informatika (Program Studi Teknologi Rekayasa Perangkat Lunak) Politeknik Negeri Medan",
      foto: "imagee/trpl.png"
    }
  },
  trmg: {
    buka: true, ikon: "TRMG",
    nama: "Program Studi Teknologi Rekayasa Multimedia Grafis",
    jurusan: "Teknik Komputer dan Informatika",
    ringkas: "Program studi yang berfokus pada multimedia dan desain grafis.",
    situs: "https://trmg.polmed.ac.id/",
    visi: "Menjadi program studi pendidikan vokasi yang unggul di bidang teknologi multimedia grafis yang menghasilkan sumber daya manusia yang berkompetensi dan profesional di tingkat nasional dan internasional pada tahun 2026.",
    misi: [
      "Menyelenggarakan pendidikan vokasi bidang teknologi multimedia grafis.",
      "Mengembangkan penelitian bidang teknologi multimedia grafis.",
      "Melaksanakan kerja sama dengan dunia industri dan masyarakat dalam menerapkan teknologi multimedia grafis."
    ],
    struktur: {
      judul: "Struktur Organisasi Jurusan Teknik Komputer dan Informatika (Program Studi Teknologi Rekayasa Multimedia Grafis) Politeknik Negeri Medan",
      foto: "imagee/trmg.png"
    }
  }
};

// foto: alamat file gambar (kosongkan atau hapus baris foto kalau tidak ada foto)
const BERITA = [
  { id: 1,
    judul: "Mahasiswa Polmed Raih Tiga Prestasi Nasional di KMIPN 2026",
    tanggal: "17 September 2026",
    foto: "imagee/image1.png",
    isi: ["Mahasiswa Politeknik Negeri Medan (Polmed) meraih tiga prestasi nasional dalam KMIPN 2026 yang berlangsung pada 9–11 September 2026. Prestasi tersebut meliputi Juara 1 Animasi Kategori Poster, Juara 2 Keamanan Siber Kategori Consistent Flag Seeker, dan Juara 3 Pengembangan Aplikasi Permainan Kategori Narration and Storytelling."] },
  { id: 2,
    judul: "Prestasi Polmed Melonjak pada PORSENI XV 2026, Koleksi 10 Emas dan Total 47 Medali",
    tanggal: "2 Agustus 2026",
    foto: "imagee/imge1.png",
    isi: ["Politeknik Negeri Medan (Polmed) meraih 47 medali pada PORSENI XV 2026, terdiri dari 10 emas, 11 perak, dan 26 perunggu. Prestasi ini meningkat signifikan dibandingkan PORSENI XIV 2024 yang hanya meraih 18 medali, menunjukkan daya saing mahasiswa Polmed yang semakin kuat di tingkat nasional."] },
  { id: 3,
    judul: "Delapan Gelar, Polmed Raih Juara Umum III National Welding Competition 2026",
    tanggal: "20 Juli 2026",
    foto: "imagee/image2.png",
    isi: ["Politeknik Negeri Medan (Polmed) meraih Juara Umum III pada <i>National Welding Competition</i> (NWC) 2026 di PPNS, 13–17 Juli 2026. Prestasi ini diraih kontingen Jurusan Teknik Mesin melalui delapan gelar juara dalam berbagai kategori pengelasan, dengan peserta dari D3 Teknik Mesin dan D4 Teknik Rekayasa Pengelasan dan Fabrikasi."] }
];

const FITUR = [["▣", "Pendidikan Berkualitas"], ["☺", "Dosen Profesional"], ["⚙", "Fasilitas Modern"], ["✦", "Riset & Inovasi"], ["⇄", "Kolaborasi Industri"], ["◎", "Peluang Karier Luas"]];

/* Data halaman Sistem Informasi */
const SIAKAD_URL = "https://siakad.polmed.ac.id/";
// ikon: emoji, ATAU nama file gambar (mis. "imagee/si-siakad.png")
const SISTEM_INFO = {
  banner: "imagee/sistem-informasi.png",
  judul: "PORTAL SISTEM INFORMASI POLITEKNIK NEGERI MEDAN",
  item: [
    { ikon: "🎓", nama: "SIAKAD", url: SIAKAD_URL, ket: "Sistem Informasi Akademik" },
    { ikon: "🧑‍🏫", nama: "Portal Akademik", url: "https://portal.polmed.ac.id/", ket: "Portal Akademik" },
    { ikon: "👥", nama: "SIMPEG", url: "http://simpeg.polmed.ac.id/", ket: "Sistem Informasi Karyawan" },
    { ikon: "📱", nama: "SIPADI", url: "https://sipadi.polmed.ac.id/", ket: "Sistem Pembelajaran Digital" },
    { ikon: "📊", nama: "Tautan Polmed", url: "https://link.polmed.ac.id/", ket: "Data Statistik Polmed" },
    { ikon: "🔬", nama: "SIMLITABMAS", url: "http://simlitabmas.polmed.ac.id/", ket: "Sistem Informasi Penelitian dan Pelayanan Masyarakat" },
    { ikon: "🗄️", nama: "GUDANG", url: "http://library.polmed.ac.id/repository", ket: "Sistem Repositori" },
    { ikon: "🧭", nama: "Studi Pelacakan", url: "https://tracerstudy.polmed.ac.id/", ket: "Sistem untuk Alumni" },
    { ikon: "📚", nama: "Perpustakaan Digital", url: "http://library.polmed.ac.id/", ket: "Koleksi Buku Digital" },
    { ikon: "✅", nama: "SIMUTU", url: "https://simutu.polmed.ac.id/", ket: "Sistem Penjaminan Mutu" },
    { ikon: "📝", nama: "RegCama", url: "https://regcama.polmed.ac.id/", ket: "Pendaftaran Calon Mahasiswa" }
  ]
};

/* Data halaman Penelitian */
const PENELITIAN = {
  banner: "imagee/bannery.jpg",
  isi: "Dalam upaya untuk menciptakan dan mengembangkan penelitian inovatif, kami mengembangkan penelitian kami dengan perspektif kearifan lokal. Selain berfokus pada teori dan praktik pendidikan, yang merupakan titik terkuat kami, kami juga aktif dalam melakukan penelitian dari berbagai disiplin ilmu yang berkontribusi dalam menciptakan solusi strategis untuk pemberdayaan masyarakat.",
  hibah: [
    ["SIMLITABMAS", "http://simlitabmas.polmed.ac.id/", "Sistem Informasi Pengelolaan Penelitian dan Pengabdian kepada Masyarakat Lembaga Penelitian dan Pengabdian kepada Masyarakat Politeknik Negeri Medan"],
    ["SIMLITABMAS KEMDIKBUD", "https://simlitabmas.kemdikbud.go.id/", "Sistem Informasi Manajemen Penelitian dan Pengabdian Kepada Masyarakat Kemendikbud"]
  ],
  jurnal: [
    ["OJS", "https://ojs.polmed.ac.id/", "Sistem Jurnal Terbuka"],
    ["SINTA", "https://sinta.kemdikbud.go.id/journals", "Indeks Sains dan Teknologi"]
  ],
  proyek: "Dalam upaya untuk menciptakan dan mengembangkan penelitian inovatif, kami mengembangkan penelitian kami dengan perspektif kearifan lokal. Selain berfokus pada teori dan praktik pendidikan, yang merupakan titik terkuat kami, kami juga aktif dalam melakukan penelitian dari berbagai disiplin ilmu yang berkontribusi dalam menciptakan solusi strategis untuk pemberdayaan masyarakat.",
  gambar: ["imagee/TOP-10.jpg"]   // gambar tambahan di bawah (boleh lebih dari satu)
};

// Video profil: taruh file di folder Video1 lalu tulis namanya di sini.
const VIDEO_PROFIL = "Video1/Videoprofil.mp4";

const PRESTASI = [["1982", "Didirikan"], ["8.109", "Mahasiswa"], ["355", "Kerjasama"], ["676", "Pengajar & Staff"]];

/* Data Selayang Pandang */
const SAMBUTAN = [
  "Atas nama seluruh Civitas Akademika Politeknik Negeri Medan, saya mengucapkan selamat datang di situs resmi Politeknik Negeri Medan",
  "Politeknik Negeri Medan merupakan salah satu Perguruan Tinggi Negeri Vokasi satu-satunya di Sumatera Utara yang bernaung di bawah Kementerian Pendidikan dan Kebudayaan. Politeknik Negeri Medan membangun era baru dalam bentuk digitalisasi kampus yang memudahkan Civitas Akademika dalam berbagai hal agar meningkatkan efisiensi dan juga menunjang mutu Politeknik Negeri Medan.",
  "Politeknik Negeri Medan berfokus pada pengembangan Pendidikan Vokasi di Sumatera Utara, menetapkan pengembangan kualitas pendidikan dan pembelajaran untuk mendukung kebutuhan industri di Sumatera Utara. Hal ini menjamin setiap mahasiswa mendapat pengalaman langsung dari industri dan tempat kerja lainnya melalui studi ekskursi, dan menawarkan teknologi dan fasilitas yang lengkap sesuai dengan bidang yang mereka pilih sehingga link and match kebutuhan dunia pendidikan dan dunia kerja atau mitra usaha yang ada dapat terpenuhi.",
  "Politeknik Negeri Medan juga berkomitmen untuk menghasilkan bentuk kerjasama dengan berbagai pihak, baik dalam maupun luar negeri yang saling menguntungkan merupakan salah satu tujuan dalam mewujudkan visi Politeknik Negeri Medan sebagai Perguruan Tinggi Vokasi yang unggul, mengembangkan berbagai transfer teknologi yang mengeksploitasi penemuan dan keterampilan masyarakat kampus untuk kepentingan masyarakat umum. Eksploitasi ini merupakan tanggung jawab sosial lembaga dalam peran aktif pembangunan sosial dan pencarian nilai-nilai etika bagi masyarakat modern.",
  "Saya berharap website ini mampu menjadi sumber informasi yang dibutuhkan dan dapat memberikan manfaat bagi semua pihak."
];

const PROFIL_INSTITUSI = [
  "Sebagai salah satu perguruan tinggi negeri di Sumatera Utara, Politeknik Negeri Medan saat ini menjadi pusat pendidikan vokasi yang berfokus pada pengembangan kemampuan sumber daya manusia dan memiliki visi global untuk turut serta meningkatkan angka partisipasi kasar pendidikan di Indonesia.",
  "Dengan 26 program studi yang ada dan fasilitas kampus seluas 8.5 ha, Politeknik Negeri Medan mempersiapkan kurikulum berbasis kompetensi yang sesuai dengan kebutuhan industri. Politeknik Negeri Medan juga memberikan beasiswa bagi mahasiswa tidak mampu dan turut serta mengembangkan jiwa wirausaha bagi para peserta didik. Saat ini Politeknik Negeri Medan mendidik lebih dari 5.500 mahasiswa dan telah menamatkan lebih dari 20.000 alumni yang telah bekerja di berbagai sektor industri.",
  "Politeknik Negeri Medan secara aktif juga terlibat dalam berbagai penelitian terapan. Selain itu para dosen Politeknik Negeri Medan juga ikut serta dalam berbagai kegiatan pengabdian masyarakat sebagai rasa tanggung jawab sosial. Selain itu dalam rangka pengembangan jaringan, Politeknik Negeri Medan juga melakukan berbagai kerjasama dengan berbagai pihak baik regional maupun internasional"
];

const VISI_POLMED = "Mewujudkan institusi pendidikan tinggi vokasi yang profesional, unggul dan bertaraf internasional melalui inovasi teknologi yang relevan dengan kebutuhan industri";

const MISI_POLMED = [
  "Menyelenggarakan pendidikan tinggi vokasi berkualitas yang menghasilkan lulusan terampil, kompeten dan berkarakter di bidang pembangunan infrastruktur, manufaktur, teknologi kelautan, bio industri, elektronika dan kelistrikan, ekonomi digital berbasis industri kreatif ramah lingkungan, logistik, pariwisata, teknologi informasi dan komunikasi di tingkat lokal, nasional dan internasional.",
  "Melaksanakan penelitian terapan dan inovasi teknologi yang relevan dengan kebutuhan industri dan berkontribusi pada kemajuan sektor-sektor unggulan serta solusi untuk tantangan lokal, nasional dan internasional.",
  "Melaksanakan pengabdian kepada masyarakat yang berdampak positif, dengan fokus pada pemberdayaan masyarakat dan pengembangan ekonomi melalui penerapan teknologi dalam rangka meningkatkan kesejahteraan masyarakat serta memajukan kewirausahaan di tingkat lokal, nasional dan internasional.",
  "Menyelenggarakan tata kelola dengan prinsip efisien, efektif, akuntabel dan transparan dalam semua aspek operasional institusi untuk mendukung pencapaian visi.",
  "Menjalin kemitraan strategis dengan industri, pemerintah, dan lembaga internasional untuk memperkuat relevansi pendidikan, penelitian, dan pengabdian kepada masyarakat untuk meningkatkan daya saing lulusan."
];

const MOTTO = "Disiplin dan Prima dalam layanan pendidikan";

const SEJARAH = [
  "Pada tahun 1979 Universitas Sumatera Utara ditetapkan sebagai salah satu dari 6 Universitas/Institut yang mendapat proyek pembangunan Pendidikan Politeknik Tahap I dari DIKTI, dengan nama Politeknik Universitas Sumatera Utara (Politeknik USU) Medan. Pembangunan Politeknik USU dibiayai oleh Bank Dunia (World Bank). Pada tahap I yang dibangun adalah pendidikan bidang keteknikan yang pelaksanaannya mendapat bantuan tenaga ahli dari Swiss yang ditempatkan di Medan .",
  "Selanjutnya pada tahap II dibangun pendidikan bidang tata niaga yang didukung oleh bantuan tenaga ahli dan fasilitas dari Australia. Pembangunan pendidikan bidang tata niaga mulai diselenggarakan pada tahun 1986 dan dibantu seorang tenaga ahli dari Australia.",
  "Pembangunan Politeknik USU dan Politeknik lainnya, merupakan proyek pemerintah melalui Depdikbud Ditjen DIKTI yang dilaksanakan oleh Pusat Pengembangan Pendidikan Politeknik dikenal dengan singkatan PEDC (Polytechnic Education Development Center) di Bandung.",
  "Melalui Surat Keputusan Mendikbud No. 084/O/1997 tentang Pendirian Politeknik Negeri Medan, maka Politeknik USU Medan secara resmi menjadi Politeknik mandiri dengan nama Politeknik Negeri Medan (Polmed) yang isinya telah diperbaharui dengan SK Mendiknas No.: 130/O/2002 tentang organisasi dan tata kerja Politeknik Negeri Medan."
];

const LAMBANG = [
  "Lingkaran menggambarkan dunia usaha dan industri yang merupakan sasaran pendidikan profesional Polmed. Warna oranye menggambarkan sinar matahari yang berarti harapan yang lebih baik di masa mendatang.",
  "Gunung berwarna hijau menggambarkan Bukit Barisan yang merupakan ciri khas daerah Sumatera Utara tempat Polmed berada. Sedangkan Tiga gunung melambangkan tridharma perguruan tinggi.",
  "Buku dengan posisi terbuka melambangkan Polmed sebagai institusi pendidikan.",
  "Pita warna ungu melambangkan kemampuan melahirkan alumni yang memiliki kreatifitas dan inspirasi serta disiplin yang tinggi"
];

// Bait lagu: setiap bait = daftar baris
const MARS = [
  ["Politeknik Negeri Medan Politeknik Negeri Medan akulah kebanggaanmu",
   "Dunia tlah mengajak kita berilmu dan berbudaya menjadi penggerak bangsa",
   "Disiplin semangat baja menjadi modal utama tak segan aku bekerja",
   "Tuk menggapai cita-cita tuk membangun Indonesia."],
  ["Reff",
   "Aku cinta Politeknik Aku cinta Politeknik maju terus Politeknik Negeri Medan",
   "Aku bangga Politeknik Aku cinta Politeknik mari maju bersama"],
  ["Politeknik Negeri Medan Politeknik Negeri Medan akulah kebanggaanmu",
   "Tegap kakiku melangkah tangan diayun merata sorot mata ke satu arah",
   "Semangat bekerjasama menjunjung harkat manusia kebenaran kan dibela",
   "Masa depan tak bercela bagimu nusa dan bangsa"],
  ["Reff",
   "Aku cinta Politeknik Aku cinta Politeknik maju terus Politeknik Negeri Medan",
   "Aku bangga Politeknik Aku cinta Politeknik mari maju bersama"],
  ["Politeknik Negeri Medan Politeknik Negeri Medan akulah kebanggaanmu",
   "Tunasmu terus bertambah sepanjang musim dan masa ke empat penjuru dunia",
   "Harum bungamu pesona teruntai manis dan indah kujadikan tanda mata",
   "Kini ku datang sambutlah dengan penuh bahagia"],
  ["Reff"]
];

const HIMNE = [
  ["Bagai cahaya fajar",
   "Menyinari langkahku",
   "Menuju hari depan yang cerah",
   "Penuh harapan gemilang",
   "Kupersembahkan syukur kepadamu",
   "Politeknik Negeri Medan"],
  ["Terima kasihku",
   "Padamu takkan sirna",
   "Walaupun aku jauh di sana",
   "Berbakti untuk negeriku",
   "Akan kukenang sepanjang hidupku",
   "Jasa dan pengabdianmu"],
  ["Reff:",
   "Kan kucurahkan, semua baktiku",
   "Untuk kebesaran namamu",
   "Semoga engkau",
   "Semakin jaya dan abadi",
   "Kudoakan selalu"]
];

/* Data Pendidikan & Fasilitas */
const PENDIDIKAN = "Politeknik Negeri Medan menyelenggarakan berbagai program pendidikan antara lain program pascasarjana, profesional, spesialis dan diploma. Beberapa fakultas juga menyelenggarakan program internasional baik program sarjana maupun pascasarjana.";

const FAS_INTRO = "Politeknik Negeri Medan berada di lingkungan area kampus Universitas Sumatera Utara sehingga memiliki atmosfer akademik yang sangat tinggi. Dilengkapi dengan berbagai fasilitas mulai dari laboratorium, workshop, lapangan olahraga, tempat ibadah, hall, IT Center, Kafetaria, sampai dengan area parkir yang luas. Semua ini disiapkan agar mahasiswa mendapatkan pengalaman tersendiri ketika mengikuti pendidikan di Politeknik Negeri Medan.";

const FAS_LAB = {
  isi: "Laboratorium yang ada di Lingkungan Politeknik Negeri Medan membantu mahasiswa untuk lebih memahami perangkat lunak maupun perangkat keras yang digunakan di dunia industri. Hal ini memberikan pengalaman kepada mahasiswa sehingga ketika para mahasiswa memasuki dunia kerja mereka tidak mengalami kesulitan dalam memahami peralatan yang digunakan.",
  pengantar: "Beberapa laboratorium yang ada di lingkungan Politeknik Negeri Medan :",
  daftar: [
    "Laboratorium Komputer di setiap Jurusan", "Laboratorium Teknik Sipil", "Laboratorium Teknik Mesin",
    "Laboratorium Welding (ATB)", "Laboratorium Teknik Konversi Energi", "Laboratorium CNC dan CAD/ CAM",
    "Laboratorium Teknik Listrik", "Laboratorium Terpadu Kontrol Elektronika Daya", "Laboratorium Elektronika",
    "Laboratorium Teknik Telekomunikasi", "Laboratorium Bank Mini", "Laboratorium Bahasa",
    "Laboratorium Manajemen Informatika", "Laboratorium Teknik Komputer"
  ]
};

const FAS_WORKSHOP = {
  isi: "Workshop atau bengkel kerja memberikan kesempatan kepada para mahasiswa untuk mengembangkan keahlian yang sesuai dengan bidang yang ditekuni. Bengkel kerja atau workshop memberikan kesempatan kepada setiap individu untuk meningkatkan keahlian mereka untuk dapat bersaing di dunia industri.",
  pengantar: "Workshop (Bengkel Kerja) di Lingkungan Politeknik Negeri Medan terdiri dari :",
  daftar: [
    "Workshop/ Bengkel Teknik Sipil", "Workshop/ Bengkel Teknik Mesin",
    "Workshop/ Bengkel Teknik Listrik", "Workshop/ Bengkel Teknik Elektronika"
  ]
};

// Galeri: [label, file gambar]
const GALERI = [
  ["Laboratorium", "imagee/lab.png"], ["Workshop", "imagee/Picture13.png"],
  ["Perpustakaan", "imagee/Picture14.png"], ["Masjid", "imagee/Picture15.png"],
  ["Lapangan Futsal", "imagee/Picture16.png"], ["Kantin", "imagee/Picture17.png"],
  ["UKM", "imagee/Picture18.png"]
];

// Akreditasi: [program studi, peringkat, no SK, tanggal kadaluarsa, link SK]
const AKREDITASI = [
  ["Administrasi Bisnis", "B", "2641/SK/BAN-PT/Ak-PPJ/Dipl-III/V/2021", "29 April 2026", "https://drive.google.com/file/d/1zUMk8D_8FqPOQ25VxR9mZ2kakm6y5KSV/view?usp=drive_link"],
  ["Akuntansi", "Unggul", "2286/DE/A.5/AR.10/V/2025", "16 Mei 2030", "https://drive.google.com/file/d/13NzjbDbjn9kwpwPFODv12p_FEIIzeYBF/view?usp=drive_link"],
  ["Akuntansi Keuangan Publik", "Unggul", "607/DE/A.5/AR.10/VIII/2023", "22 Mei 2028", "https://drive.google.com/file/d/1SwV7KsN4E6VxiMUQu5k-996Ym2XQeTNC/view?usp=drive_link"],
  ["Keuangan Dan Perbankan", "Unggul", "2333/DE/A.5/AR.10/VI/2025", "2 Juni 2030", "https://drive.google.com/file/d/1UtqiQ_2XfPjdZKtcrzI7-uAJDsJI-6dv/view?usp=drive_link"],
  ["Keuangan Dan Perbankan Syariah", "Baik Sekali", "536/DE/A.5/AR.10/VII/2023", "25 Juli 2028", "https://drive.google.com/file/d/1XGDFozZaZrA-m8kQXcsNJd15SiIlKmoV/view?usp=drive_link"],
  ["Manajemen Bisnis", "Baik", "9629/SK/BAN-PT/Ak/STr/XI/2022", "16 November 2027", "https://drive.google.com/file/d/1QKZf0XPOgroBgordY8QPJyDkyGyTrkra/view?usp=drive_link"],
  ["Manajemen Informatika", "Unggul", "247/SK/LAM-INFOKOM/Ak/D3/VIII/2025", "18 Agustus 2030", "https://drive.google.com/file/d/1E1rDwW-lobhP2fLE0VgAOB00J0eAvtXt/view?usp=drive_link"],
  ["Manajemen Rekayasa Konstruksi Gedung", "Unggul", "0791/SK/LAM Teknik/VST/XII/2024", "20 Desember 2029", "https://drive.google.com/file/d/1ufr4gjmSVpv5u7QxSLbbptGYjEQpx9El/view?usp=drive_link"],
  ["Sistem Informasi Akuntansi", "Baik", "3139/SK/BAN-PT/Ak/MTr/VIII/2023", "8 Agustus 2028", "https://drive.google.com/file/d/1ul4VnW-mYI4_f_P8h5rQxhXVv9b6z04T/view?usp=drive_link"],
  ["Teknik Elektronika", "Baik Sekali", "0194/SK/LAM Teknik/VD3/XII/2022", "20 Desember 2027", "https://drive.google.com/file/d/1HcpJNnI0BmdyNquWT2K_tri66x-sim1n/view?usp=drive_link"],
  ["Teknik Komputer", "Unggul", "049/SK/LAM-INFOKOM/Ak/D3/IV/2023", "7 April 2028", "https://drive.google.com/file/d/1IbR6rmhmPl_yVcv4NyC2hG-_Uo5pZamM/view?usp=drive_link"],
  ["Teknik Konversi Energi", "B", "294/SK/BAN-PT/Ak-PPJ/Dipl-III/I/2021", "30 Desember 2025", "https://drive.google.com/file/d/1_58CIqHh_y7yoyNz8xJV-BUEsYa4hoyK/view?usp=drive_link"],
  ["Teknik Listrik", "Unggul", "0151/SK/LAM Teknik/VD3/IV/2024", "20 April 2029", "https://drive.google.com/file/d/1XJsdPQmm_gm6u2prT5BWC5fch6Mzb4lI/view?usp=drive_link"],
  ["Teknik Mesin", "Baik Sekali", "0231/SK/LAM Teknik/VD3/XII/2022", "20 Desember 2027", "https://drive.google.com/drive/folders/1OL4TCEmg8Ia8TlyzqTsobo7Qq5anfbBm?usp=drive_link"],
  ["Teknik Perancangan Jalan Dan Jembatan", "Baik Sekali", "0451/SK/LAM Teknik/VST/VIII/2024", "20 Agustus 2029", "https://drive.google.com/file/d/1unl9mrsh5L8pZnISRfFNpZmg-6sXl7ZF/view?usp=sharing"],
  ["Teknik Sipil", "B", "9507/SK/BAN-PT/Ak-PPJ/Dipl-III/VII/2021", "15 Juli 2026", "https://drive.google.com/file/d/1zco9yLjl9eTnoTsHPIUpplMuXsYbLIQ6/view?usp=drive_link"],
  ["Teknik Telekomunikasi", "Baik Sekali", "0080/SK/LAM Teknik/VD3/IV/2023", "20 April 2028", "https://drive.google.com/drive/folders/1sOs3joHGEgG5O_XZh-eL6YedLZfKOJHS?usp=drive_link"],
  ["Teknologi Rekayasa Instalasi Listrik", "Baik", "6956/SK/BAN-PT/Ak.P/STr/XII/2024", "26 September 2024", "https://drive.google.com/file/d/14PY6AxCQa2J6kaHwzEepO95Lc8y3aIEB/view?usp=drive_link"],
  ["Teknologi Rekayasa Jaringan Telekomunikasi", "Baik", "0393/SK/LAM Teknik/VST/XII/2023", "20 Desember 2028", "https://drive.google.com/file/d/1O37uDacB1ob_Ji4tT9a1dsF5U0n9_Kee/view?usp=drive_link"],
  ["Teknologi Rekayasa Multimedia Grafis", "Baik", "691/SK/BAN-PT/Ak/STr/III/2023", "7 Maret 2028", "https://drive.google.com/file/d/1wkWtrCWrMokIJj2DGjCKB0gsF-ZtWMhc/view?usp=drive_link"],
  ["Teknologi Rekayasa Pengelasan Dan Fabrikasi", "Baik", "7132/SK/BAN-PT/Ak.P/STr/XII/2024", "2 November 2024", "https://drive.google.com/file/d/1NRE0sjxyX0uOvudEQiYxNUAnQEbiHIXA/view?usp=drive_link"],
  ["Teknologi Rekayasa Perangkat Lunak", "Baik", "555/SK/BAN-PT/Ak/STr/II/2023", "22 Februari 2028", "https://drive.google.com/file/d/1Q6Z6hbEIQaz8uCSWtyMgMVxXHe8xIYYq/view?usp=drive_link"],
  ["Usaha Jasa Konvensi, Perjalanan Insentif Dan Pameran (MICE)", "A", "6714/SK/BAN-PT/Akred/ST/X/2020", "27 Oktober 2025", "https://drive.google.com/file/d/11OhGfg6Za4vEAoUf787nx04nqTXCsi7k/view?usp=drive_link"],
  ["Teknologi Rekayasa Energi Terbarukan", "Baik", "6132/SK/BAN-PT/Ak.P/STr/X/2024", "3 Oktober 2026", "https://drive.google.com/file/d/1kfyM8IWoHdCxy2VOHD-g-fuAe5BOH3GW/view?usp=drive_link"],
  ["Teknologi Rekayasa Otomasi", "Baik", "0315/SK/LAM Teknik/PB.VST/IV/2024", "20 April 2026", "https://drive.google.com/file/d/1k5i19sAfzbgAxNnLN21B4WUQ8_115bE5/view?usp=drive_link"],
  ["Teknologi Rekayasa Manufaktur", "Baik", "0314/SK/LAM Teknik/PB.VST/IV/2024", "20 April 2026", "https://drive.google.com/file/d/14W7c9rtmd845yMS201rH4xXvtwCZsCzz/view?usp=drive_link"],
  ["Teknologi Rekayasa Kimia Industri", "Baik", "0313/SK/LAM Teknik/PB.VST/IV/2024", "20 April 2026", "https://drive.google.com/file/d/1FgaDijoOVA0VBTqcAIXGvzell2QGxiZ5/view?usp=drive_link"]
];

/* Data Organisasi */
const SENAT_AKADEMIK = "Merupakan lembaga perumus dan pemantau garis besar kebijaksanaan umum di dalam Politeknik adalah Senat seperti yang dimaksud di dalam Keputusan Menteri Pendidikan Nasional No. 130/O/2002 tentang Organisasi dan Tata Kerja Politeknik Negeri Medan. Senat terdiri dari wakil unsur lembaga dan kelompok dosen, dipimpin oleh seorang Ketua Senat dengan dibantu oleh seorang Sekretaris Senat.";

// Format baris: [label, isi, labelTebal]
const FUNGSIONARIS = [
  { judul: "Jurusan Teknik Komputer dan Informatika", baris: [
    ["Ketua Jurusan", ": Zakaria Sembiring, S.T., M.Sc.", true],
    ["Sekretaris Jurusan", ": Marliana Sari, S.T., M.MSI", true],
    ["Koord. Program Studi", "", true],
    ["D3 Teknik Komputer", ": Junus Sinuraya, S.T., M. Kom."],
    ["D3 Manajemen Informatika", ": Bister Purba, M.Kom."],
    ["D4 Teknik Rekayasa Perangkat Lunak", ": Yuyun Yusnida Lase, S.Kom., M.Kom."],
    ["D4 Teknik Rekayasa Multimedia Grafis", ": Andi Supriadi Chan, S. Kom., M.Kom"],
    ["Kepala Laboratorium", "", true],
    ["Komputer D3 Teknik Komputer", ": Azanuddin, S.Kom.,M.Kom."],
    ["Komputer D3 Manajemen Informatika", ": Rian Syahputra, M.Kom."],
    ["Komputer D4 Teknologi Rekayasa Perangkat Lunak", ": Sharfina Faza, S.Kom., M.Kom."],
    ["Komputer D4 Teknologi Rekayasa Multimedia Grafis", ": Friendly, S.T., M.T."]
  ] },
  { judul: "Jurusan Teknik Elektro", baris: [
    ["Ketua Jurusan", ": Suprianto, S.T., M.T.", true],
    ["Sekretaris Jurusan", ": Muhammad Rusdi, S.T., M.T.", true],
    ["Koord. Program Studi", "", true],
    ["D3 Teknik Listrik", ": Cholish, S.T., M.T."],
    ["D3 Teknik Elektronika", ": Yuvina, S.T., M.T"],
    ["D3 Teknik Telekomunikasi", ": Fitria Nova Hulu, S.T., M.T."],
    ["D4 Teknologi Rekayasa Jaringan Telekomunikasi", ": Tuti Adi Tama Nasution, S.T., M.T."],
    ["D4 Teknologi Rekayasa Instalasi Listrik", ": Abdullah, S.Si., M.T"],
    ["D4 Teknologi Rekayasa Otomasi", ": Henry Hasian Lumban Toruan, S.T., M.T."],
    ["Kepala Bengkel", "", true],
    ["D3 Teknik Listrik/ D4 Teknologi Rekayasa Instalasi Listrik", ": Nobert Sitorus, S.T., M.T"],
    ["D3 Teknik Elektronika/ D3 Telekomunikasi/ D4 Teknologi Rekayasa Jaringan Telekomunikasi/ D4 Teknologi Rekayasa Otomasi", ": Mardiana, S.T., M.Kom."],
    ["Kepala Laboratorium", "", true],
    ["D3 Teknik Elektronika/ D4 Teknologi Rekayasa Otomasi", ": Samaria Chrisna HS, S.T., M.T."],
    ["D3 Teknik Listrik/ D4 Teknologi Rekayasa Instalasi Listrik", ": Michael Stevano Sinurat, M.T."],
    ["D3 Teknik Telekomunikasi/ D4 Teknologi Rekayasa Jaringan", ": Budi Harianto, S.T. M.T."]
  ] },
  { judul: "Jurusan Teknik Sipil", baris: [
    ["Ketua Jurusan", ": Efri Debby Ekinola Ritonga, S.T., M.T.", true],
    ["Sekretaris Jurusan", ": Muhammad Mabrur, S.T., M.T.", true],
    ["Koord. Program Studi", "", true],
    ["D3 Teknik Sipil", ": Rudianto Surbakti, S.T., M.T."],
    ["D4 Teknik Perancangan Jalan dan Jembatan", ": Rhini Wulan Dary, S.T., M.T."],
    ["D4 Manajemen Rekayasa Konstruksi Gedung", ": Mizanuddin Sitompul, S.T., M.T."],
    ["Kepala Laboratorium", "", true],
    ["Konstruksi", ": Oktavia Ully Artha Silalahi,S.T., M.T."],
    ["Komputer", ": Citra Utami, S.T.,M.T"],
    ["Material", ": Wirdatun Nafiah Putri, S.T., M.T."]
  ] }
];
