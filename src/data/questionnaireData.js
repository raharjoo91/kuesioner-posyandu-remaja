export const questionnaireData = {
  title: "KUESIONER PENELITIAN",
  subtitle: "EVALUASI EFEKTIVITAS PROGRAM POSYANDU REMAJA DALAM MENINGKATKAN KESADARAN MENTAL DAN REPRODUKSI REMAJA DI KOTA DEPOK",
  description: "Petunjuk Pengisian:\n1. Bacalah setiap pernyataan dengan saksama dan tanpa terburu-buru.\n2. Isi dan berilah tanda centang (✓) pada kolom yang sesuai dengan pendapat Anda!",
  
  sections: [
    {
      id: "informed_consent",
      title: "PERNYATAAN KESEDIAAN RESPONDEN",
      description: "Kami mengundang Saudara/i untuk menjadi responden dalam penelitian dengan judul \"Evaluasi Efektivitas Program Posyandu Remaja dalam Meningkatkan Kesadaran Mental dan Reproduksi Remaja di Kota Depok\". Penelitian ini dilakukan oleh kami tim peneliti dari Fakultas Ilmu Kesehatan Universitas Pembangunan Nasional Veteran Jakarta.",
      questions: [
        {
          id: "consent_info",
          type: "info",
          label: "Informasi Penelitian",
          content: `Sebelum anda melanjutkan, harap membaca informasi tersebut secara seksama:

1. Partisipasi Bersifat Sukarela
Saudara/i bebas untuk berpartisipasi atau menolak untuk mengisi kuesioner ini tanpa konsekuensi apa pun dan dapat berhenti kapan saja.

2. Kerahasiaan Data
Semua jawaban dan informasi yang telah diberikan akan dijaga kerahasiaannya dan hanya digunakan untuk kepentingan penelitian.

3. Durasi dan Cara Pengisian
Pengisian kuesioner ini akan memakan waktu sekitar 25 – 30 menit.

4. Keuntungan dan Risiko
Tidak ada risiko yang besar dalam penelitian ini, tetapi partisipasi anda akan membantu dalam peningkatan pemahaman mengenai efektivitas program Posyandu Remaja dalam meningkatkan kesehatan mental dan reproduksi remaja.`
        },
        {
          id: "consent_agreement",
          type: "radio",
          label: "Dengan melanjutkan kuesioner ini maka saya telah membaca dan memahami semua informasi diatas dan menyatakan bahwa:",
          required: true,
          options: [
            { value: "setuju", label: "Saya setuju untuk berpartisipasi dalam penelitian ini." },
            { value: "tidak_setuju", label: "Saya tidak setuju untuk berpartisipasi." }
          ]
        }
      ]
    },
    {
      id: "identitas",
      title: "BAGIAN I: IDENTITAS RESPONDEN",
      questions: [
        {
          id: "usia",
          type: "number",
          label: "Usia",
          required: true,
          placeholder: "Masukkan usia dalam tahun",
          min: 10,
          max: 25
        },
        {
          id: "tanggal_lahir",
          type: "date",
          label: "Tanggal Lahir",
          required: true
        },
        {
          id: "jenis_kelamin",
          type: "radio",
          label: "Jenis Kelamin",
          required: true,
          options: [
            { value: "laki_laki", label: "Laki-Laki" },
            { value: "perempuan", label: "Perempuan" }
          ]
        },
        {
          id: "tingkat_pendidikan",
          type: "radio",
          label: "Tingkat Pendidikan",
          required: true,
          options: [
            { value: "sd", label: "SD" },
            { value: "smp", label: "SMP/sederajat" },
            { value: "sma", label: "SMA/sederajat" },
            { value: "lainnya", label: "Lainnya" }
          ]
        },
        {
          id: "pendidikan_lainnya",
          type: "text",
          label: "Sebutkan tingkat pendidikan lainnya",
          conditional: {
            field: "tingkat_pendidikan",
            value: "lainnya"
          }
        },
        {
          id: "status",
          type: "checkbox",
          label: "Status",
          required: true,
          options: [
            { value: "masih_sekolah", label: "Masih Sekolah" },
            { value: "sudah_lulus", label: "Sudah Lulus" },
            { value: "bekerja", label: "Bekerja" },
            { value: "tidak_bekerja", label: "Tidak Bekerja" }
          ]
        },
        {
          id: "kecamatan",
          type: "radio",
          label: "Kecamatan Tempat Tinggal",
          required: true,
          options: [
            { value: "beji", label: "Beji" },
            { value: "bojongsari", label: "Bojongsari" },
            { value: "cilodong", label: "Cilodong" },
            { value: "cimanggis", label: "Cimanggis" },
            { value: "cinere", label: "Cinere" },
            { value: "cipayung", label: "Cipayung" },
            { value: "limo", label: "Limo" },
            { value: "pancoran_mas", label: "Pancoran Mas" },
            { value: "sawangan", label: "Sawangan" },
            { value: "sukmajaya", label: "Sukmajaya" },
            { value: "tapos", label: "Tapos" }
          ]
        },
        {
          id: "puskesmas",
          type: "radio",
          label: "Wilayah Binaan Puskesmas",
          required: true,
          options: [
            { value: "uptd_sawangan", label: "UPTD Puskesmas Sawangan" },
            { value: "uptd_pasir_putih", label: "UPTD Puskesmas Pasir Putih" },
            { value: "uptd_kedaung", label: "UPTD Puskesmas Kedaung" },
            { value: "uptd_cinangka", label: "UPTD Puskesmas Cinangka" },
            { value: "uptd_pengasinan", label: "UPTD Puskesmas Pengasinan" }
          ]
        },
        {
          id: "puskesmas_bojongsari",
          type: "radio",
          label: "Wilayah Binaan Puskesmas",
          required: true,
          options: [
            { value: "uptd_bojongsari", label: "UPTD Puskesmas Bojongsari" },
            { value: "uptd_duren_seribu", label: "UPTD Puskesmas Duren Seribu" }
          ]
        },
        {
          id: "puskesmas_pancoran_mas",
          type: "radio",
          label: "Wilayah Binaan Puskesmas",
          required: true,
          options: [
            { value: "uptd_pancoran_mas", label: "UPTD Puskesmas Pancoran Mas" },
            { value: "uptd_depok_jaya", label: "UPTD Puskesmas Depok Jaya" },
            { value: "uptd_mampang", label: "UPTD Puskesmas Mampang" },
            { value: "uptd_rangkapan_jaya_baru", label: "UPTD Puskesmas Rangkapan Jaya Baru" }
          ]
        },
        {
          id: "puskesmas_cipayung",
          type: "radio",
          label: "Wilayah Binaan Puskesmas",
          required: true,
          options: [
            { value: "uptd_cipayung", label: "UPTD Puskesmas Cipayung" },
            { value: "uptd_ratu_jaya", label: "UPTD Puskesmas Ratu Jaya" }
          ]
        },
        {
          id: "puskesmas_sukmajaya",
          type: "radio",
          label: "Wilayah Binaan Puskesmas",
          required: true,
          options: [
            { value: "uptd_sukmajaya", label: "UPTD Puskesmas Sukmajaya" },
            { value: "uptd_abadi_jaya", label: "UPTD Puskesmas Abadi Jaya" },
            { value: "uptd_bhaktijaya", label: "UPTD Puskesmas Bhaktijaya" },
            { value: "uptd_pondok_sukmajaya", label: "UPTD Puskesmas Pondok Sukmajaya" }
          ]
        },
        {
          id: "puskesmas_cilodong",
          type: "radio",
          label: "Wilayah Binaan Puskesmas",
          required: true,
          options: [
            { value: "uptd_cilodong", label: "UPTD Puskesmas Cilodong" },
            { value: "uptd_villa_pertiwi", label: "UPTD Puskesmas Villa Pertiwi" },
            { value: "uptd_kalimulya", label: "UPTD Puskesmas Kalimulya" }
          ]
        },
        {
          id: "puskesmas_cimanggis",
          type: "radio",
          label: "Wilayah Binaan Puskesmas",
          required: true,
          options: [
            { value: "uptd_cimanggis", label: "UPTD Puskesmas Cimanggis" },
            { value: "uptd_tugu", label: "UPTD Puskesmas Tugu" },
            { value: "uptd_harjamukti", label: "UPTD Puskesmas Harjamukti" },
            { value: "uptd_pasir_gunung_selatan", label: "UPTD Puskesmas Pasir Gunung Selatan" },
            { value: "uptd_mekarsari", label: "UPTD Puskesmas Mekarsari" },
            { value: "uptd_cisalak_pasar", label: "UPTD Puskesmas Cisalak Pasar" }
          ]
        },
        {
          id: "puskesmas_tapos",
          type: "radio",
          label: "Wilayah Binaan Puskesmas",
          required: true,
          options: [
            { value: "uptd_tapos", label: "UPTD Puskesmas Tapos" },
            { value: "uptd_sukatani", label: "UPTD Puskesmas Sukatani" },
            { value: "uptd_jatijajar", label: "UPTD Puskesmas Jatijajar" },
            { value: "uptd_cilangkap", label: "UPTD Puskesmas Cilangkap" },
            { value: "uptd_cimpaeun", label: "UPTD Puskesmas Cimpaeun" },
            { value: "uptd_sukamaju_baru", label: "UPTD Puskesmas Sukamaju Baru" }
          ]
        },
        {
          id: "puskesmas_beji",
          type: "radio",
          label: "Wilayah Binaan Puskesmas",
          required: true,
          options: [
            { value: "uptd_beji", label: "UPTD Puskesmas Beji" },
            { value: "uptd_depok_utara", label: "UPTD Puskesmas Depok Utara" },
            { value: "uptd_tanah_baru", label: "UPTD Puskesmas Tanah Baru" },
            { value: "uptd_kemiri_muka", label: "UPTD Puskesmas Kemiri Muka" }
          ]
        },
        {
          id: "puskesmas_limo",
          type: "radio",
          label: "Wilayah Binaan Puskesmas",
          required: true,
          options: [
            { value: "uptd_limo", label: "UPTD Puskesmas Limo" }
          ]
        },
        {
          id: "puskesmas_cinere",
          type: "radio",
          label: "Wilayah Binaan Puskesmas",
          required: true,
          options: [
            { value: "uptd_cinere", label: "UPTD Puskesmas Cinere" }
          ]
        }
      ]
    },
    {
      id: "keterlibatan",
      title: "BAGIAN II: KETERLIBATAN DENGAN POSYANDU REMAJA",
      questions: [
        {
          id: "pernah_mengikuti",
          type: "radio",
          label: "Apakah Anda pernah mengikuti kegiatan Posyandu Remaja?",
          required: true,
          options: [
            { value: "ya", label: "Ya" },
            { value: "tidak", label: "Tidak" }
          ]
        },
        {
          id: "nama_posyandu",
          type: "text",
          label: "Nama Posyandu Remaja",
          required: true,
          conditional: {
            field: "pernah_mengikuti",
            value: "ya"
          },
          placeholder: "Masukkan nama Posyandu Remaja"
        },
        {
          id: "rt_rw_posyandu",
          type: "text",
          label: "RT/RW Posyandu Remaja",
          required: true,
          conditional: {
            field: "pernah_mengikuti",
            value: "ya"
          },
          placeholder: "Contoh: RT 05/RW 03"
        },
        {
          id: "lama_anggota",
          type: "radio",
          label: "Lama menjadi anggota Posyandu Remaja",
          required: true,
          conditional: {
            field: "pernah_mengikuti",
            value: "ya"
          },
          options: [
            { value: "kurang_6_bulan", label: "< 6 bulan" },
            { value: "6_12_bulan", label: "6 – 12 bulan" },
            { value: "lebih_12_bulan", label: "> 12 bulan" }
          ]
        },
        {
          id: "tahu_posyandu",
          type: "radio",
          label: "Apakah Anda tahu tentang Posyandu Remaja?",
          required: true,
          conditional: {
            field: "pernah_mengikuti",
            value: "tidak"
          },
          options: [
            { value: "ya", label: "Ya" },
            { value: "tidak", label: "Tidak" }
          ]
        },
        {
          id: "wilayah_memiliki_posyandu",
          type: "radio",
          label: "Apakah wilayah Anda memiliki Posyandu Remaja?",
          required: true,
          conditional: {
            field: "pernah_mengikuti",
            value: "tidak"
          },
          options: [
            { value: "ya", label: "Ya" },
            { value: "tidak", label: "Tidak" }
          ]
        },
        {
          id: "alasan_tidak_ikut",
          type: "radio",
          label: "Jika tidak ikut, apa alasan Anda tidak mengikuti kegiatan Posyandu Remaja?",
          required: true,
          conditional: {
            field: "pernah_mengikuti",
            value: "tidak"
          },
          options: [
            { value: "tidak_tahu", label: "Tidak tahu tentang Posyandu Remaja" },
            { value: "tidak_ada", label: "Tidak ada Posyandu Remaja di wilayah saya" },
            { value: "tidak_tertarik", label: "Tidak tertarik" },
            { value: "waktu_tidak_sesuai", label: "Waktu tidak sesuai" },
            { value: "lainnya", label: "Alasan lainnya" }
          ]
        },
        {
          id: "alasan_lainnya",
          type: "text",
          label: "Sebutkan alasan lainnya",
          conditional: {
            field: "alasan_tidak_ikut",
            value: "lainnya"
          },
          placeholder: "Masukkan alasan lainnya"
        }
      ]
    },
    {
      id: "partisipasi",
      title: "BAGIAN III: PARTISIPASI DALAM PROGRAM POSYANDU REMAJA",
      description: "Bagian ini bertujuan untuk mengetahui tingkat partisipasi dan dukungan lingkungan responden terhadap pelaksanaan kegiatan Posyandu Remaja",
      questions: [
        {
          id: "frekuensi_kehadiran",
          type: "radio",
          label: "Frekuensi kehadiran dalam kegiatan Posyandu Remaja",
          required: true,
          conditional: {
            field: "pernah_mengikuti",
            value: "ya"
          },
          options: [
            { value: "jarang", label: "Jarang (< 3 kali dalam 6 bulan)" },
            { value: "kadang_kadang", label: "Kadang-kadang (tidak rutin)" },
            { value: "setiap_bulan", label: "Setiap bulan" }
          ]
        },
        {
          id: "pernah_kader",
          type: "radio",
          label: "Pernah menjadi kader Posyandu Remaja",
          required: true,
          conditional: {
            field: "pernah_mengikuti",
            value: "ya"
          },
          options: [
            { value: "ya", label: "Ya" },
            { value: "tidak", label: "Tidak" }
          ]
        },
        {
          id: "jenis_kegiatan",
          type: "radio",
          label: "Jenis kegiatan yang paling sering diikuti",
          required: true,
          conditional: {
            field: "pernah_mengikuti",
            value: "ya"
          },
          options: [
            { value: "penyuluhan", label: "Penyuluhan/ edukasi kesehatan" },
            { value: "konseling", label: "Konseling/ diskusi kelompok" },
            { value: "pemeriksaan", label: "Pemeriksaan kesehatan" },
            { value: "keterampilan", label: "Kegiatan keterampilan/ pelatihan" },
            { value: "lainnya", label: "Lainnya" }
          ]
        },
        {
          id: "jenis_kegiatan_lainnya",
          type: "text",
          label: "Sebutkan jenis kegiatan lainnya",
          conditional: {
            field: "jenis_kegiatan",
            value: "lainnya"
          },
          placeholder: "Masukkan jenis kegiatan lainnya"
        },
        {
          id: "sumber_informasi",
          type: "radio",
          label: "Sumber informasi utama yang membuat Anda mengetahui tentang Posyandu Remaja",
          required: true,
          conditional: {
            field: "pernah_mengikuti",
            value: "ya"
          },
          options: [
            { value: "sekolah", label: "Sekolah/ guru" },
            { value: "teman", label: "Teman sebaya" },
            { value: "keluarga", label: "Keluarga/ orang tua" },
            { value: "lainnya", label: "Lainnya" }
          ]
        },
        {
          id: "sumber_informasi_lainnya",
          type: "text",
          label: "Sebutkan sumber informasi lainnya",
          conditional: {
            field: "sumber_informasi",
            value: "lainnya"
          },
          placeholder: "Masukkan sumber informasi lainnya"
        },
        {
          id: "akses_lokasi",
          type: "radio",
          label: "Akses ke Lokasi Posyandu Remaja",
          required: true,
          conditional: {
            field: "pernah_mengikuti",
            value: "ya"
          },
          options: [
            { value: "jauh", label: "Jauh (> 15 menit naik kendaraan)" },
            { value: "sedang", label: "Sedang (≤ 15 menit naik kendaraan)" },
            { value: "dekat", label: "Dekat (dapat berjalan kaki)" }
          ]
        },
        {
          id: "alasan_mengikuti",
          type: "radio",
          label: "Alasan utama mengikuti kegiatan Posyandu Remaja",
          required: true,
          conditional: {
            field: "pernah_mengikuti",
            value: "ya"
          },
          options: [
            { value: "ingin_tahu", label: "Ingin mengetahui tentang kesehatan reproduksi dan kesehatan mental" },
            { value: "mengikuti_teman", label: "Mengikuti teman yang lain" },
            { value: "arahan_orangtua", label: "Arahan orang tua" },
            { value: "manfaat", label: "Ingin mendapat manfaat (sertifikat, hadiah, dll)" },
            { value: "lainnya", label: "Lainnya" }
          ]
        },
        {
          id: "alasan_mengikuti_lainnya",
          type: "text",
          label: "Sebutkan alasan lainnya",
          conditional: {
            field: "alasan_mengikuti",
            value: "lainnya"
          },
          placeholder: "Masukkan alasan lainnya"
        }
      ]
    },
    {
      id: "konteks",
      title: "BAGIAN IV: KONTEKS PROGRAM (CONTEXT)",
      description: "Bagian ini bertujuan untuk menilai sejauh mana program Posyandu Remaja sesuai dengan kebutuhan, harapan dan dukungan lingkungan remaja. Keterangan: 1 = Sangat Tidak Setuju; 2 = Tidak Setuju; 3 = Ragu-ragu; 4 = Setuju; 5 = Sangat Setuju",
      questions: [
        {
          id: "konteks_1",
          type: "scale",
          label: "Saya membutuhkan informasi tentang kesehatan mental dan reproduksi.",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        },
        {
          id: "konteks_2",
          type: "scale",
          label: "Topik kegiatan Posyandu Remaja sesuai dengan permasalahan remaja saat ini.",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        },
        {
          id: "konteks_3",
          type: "scale",
          label: "Kegiatan Posyandu Remaja membantu saya memahami masalah psikologis yang saya hadapi.",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        },
        {
          id: "konteks_4",
          type: "scale",
          label: "Program ini relevan dengan kebutuhan remaja di lingkungan saya.",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        },
        {
          id: "konteks_5",
          type: "scale",
          label: "Saya merasa Posyandu Remaja penting untuk menjaga kesehatan remaja.",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        },
        {
          id: "konteks_6",
          type: "scale",
          label: "Posyandu Remaja menjadi tempat yang aman untuk berdiskusi tentang kesehatan mental.",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        },
        {
          id: "konteks_7",
          type: "scale",
          label: "Posyandu Remaja menyediakan informasi yang jarang saya dapatkan di sekolah.",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        },
        {
          id: "konteks_8",
          type: "scale",
          label: "Orang tua saya mendukung keikutsertaan saya dalam kegiatan Posyandu Remaja.",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        },
        {
          id: "konteks_9",
          type: "scale",
          label: "Teman-teman saya juga tertarik mengikuti kegiatan Posyandu Remaja.",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        },
        {
          id: "konteks_10",
          type: "scale",
          label: "Jadwal kegiatan Posyandu Remaja sesuai dengan waktu luang yang saya miliki.",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        },
        {
          id: "konteks_11",
          type: "scale",
          label: "Lingkungan sekitar (RT/RW) saya mendukung adanya Posyandu Remaja.",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        },
        {
          id: "konteks_12",
          type: "scale",
          label: "Materi tentang kesehatan reproduksi disampaikan dengan memperhatikan budaya lokal.",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        },
        {
          id: "konteks_13",
          type: "scale",
          label: "Program pada Posyandu Remaja memperhatikan perbedaan kebutuhan antara remaja laki-laki dan Perempuan.",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        },
        {
          id: "konteks_14",
          type: "scale",
          label: "Saya merasa dihargai pendapatnya dalam kegiatan Posyandu Remaja.",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        },
        {
          id: "konteks_15",
          type: "scale",
          label: "Program Posyandu Remaja membantu membangun rasa percaya diri saya sebagai remaja.",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        }
      ]
    },
    {
      id: "masukan",
      title: "BAGIAN V: MASUKAN PROGRAM (INPUT)",
      description: "Bagian ini bertujuan untuk menilai kesiapan sumber daya manusia, sarana, media dan dukungan kelembagaan. Keterangan: 1 = Sangat Tidak Setuju; 2 = Tidak Setuju; 3 = Ragu-ragu; 4 = Setuju; 5 = Sangat Setuju",
      questions: [
        {
          id: "masukan_1",
          type: "scale",
          label: "Kader Posyandu Remaja menjelaskan materi dengan Bahasa yang mudah dipahami.",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        },
        {
          id: "masukan_2",
          type: "scale",
          label: "Kader memiliki pengetahuan yang baik tentang kesehatan mental dan reproduksi.",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        },
        {
          id: "masukan_3",
          type: "scale",
          label: "Kader memiliki sikap yang ramah dan terbuka.",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        },
        {
          id: "masukan_4",
          type: "scale",
          label: "Kader mampu memberikan konseling sederhana kepada remaja yang memiliki masalah.",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        },
        {
          id: "masukan_5",
          type: "scale",
          label: "Jumlah kader Posyandu Remaja sudah mencukupi untuk melayani peserta.",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        },
        {
          id: "masukan_6",
          type: "scale",
          label: "Tempat kegiatan Posyandu Remaja bersih, aman dan nyaman.",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        },
        {
          id: "masukan_7",
          type: "scale",
          label: "Fasilitas kegiatan (kursi, meja, alat tulis, dll) sudah memadai dalam pelaksanaan kegiatan.",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        },
        {
          id: "masukan_8",
          type: "scale",
          label: "Media edukasi (poster, video, dll) menarik dan mudah dimengerti.",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        },
        {
          id: "masukan_9",
          type: "scale",
          label: "Materi yang digunakan selalu diperbaharui sesuai dengan perkembangan remaja.",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        },
        {
          id: "masukan_10",
          type: "scale",
          label: "Program Posyandu Remaja mendapat dukungan dari puskesmas.",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        },
        {
          id: "masukan_11",
          type: "scale",
          label: "Ada kerja sama dengan tenaga professional seperti bidan, psikolog hingga penyuluh.",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        },
        {
          id: "masukan_12",
          type: "scale",
          label: "Kegiatan Posyandu Remaja memiliki dukungan dana yang memadai untuk pelaksanaan rutin.",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        },
        {
          id: "masukan_13",
          type: "scale",
          label: "Kegiatan didukung oleh pemerintah setempat.",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        },
        {
          id: "masukan_14",
          type: "scale",
          label: "Promosi kegiatan (Pamflet, brosur, media sosial dll) dilakukan dengan baik.",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        },
        {
          id: "masukan_15",
          type: "scale",
          label: "Kader mengikuti pelatihan rutin untuk meningkatkan kemampuan mereka.",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        }
      ]
    },
    {
      id: "proses",
      title: "BAGIAN VI: PROSES PELAKSANAAN PROGRAM (PROCESS)",
      description: "Bagian ini untuk menilai bagaimana kegiatan dijalankan, partisipasi peserta dan efektivitas metode penyampaian yang sudah dilakukan. Keterangan: 1 = Sangat Tidak Setuju; 2 = Tidak Setuju; 3 = Ragu-ragu; 4 = Setuju; 5 = Sangat Setuju",
      questions: [
        {
          id: "proses_1",
          type: "scale",
          label: "Kegiatan Posyandu Remaja dilaksanakan secara rutin sesuai dengan jadwal yang telah ditentukan.",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        },
        {
          id: "proses_2",
          type: "scale",
          label: "Saya selalu mendapatkan pemberitahuan sebelum kegaitan akan dimulai.",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        },
        {
          id: "proses_3",
          type: "scale",
          label: "Saya hadir secara rutin dalam setiap kegiatan Posyandu Remaja.",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        },
        {
          id: "proses_4",
          type: "scale",
          label: "Kegiatan berlangsung tepat waktu dan teratur.",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        },
        {
          id: "proses_5",
          type: "scale",
          label: "Saya aktif dalam sesi diskusi dan tanya jawab selama kegiatan berlangsung.",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        },
        {
          id: "proses_6",
          type: "scale",
          label: "Kader memberikan kesempatan kepada peserta untuk menyampaikan pendapatnya.",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        },
        {
          id: "proses_7",
          type: "scale",
          label: "Materi disampaikan dengan cara yang menarik dan mudah untuk dipahami.",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        },
        {
          id: "proses_8",
          type: "scale",
          label: "Kegiatan menggunakan metode yang bervariasi (diskusi, games, simulasi, video, dll).",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        },
        {
          id: "proses_9",
          type: "scale",
          label: "Kader dan peserta berinteraksi dengan baik selama kegiatan sedang berlangsung.",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        },
        {
          id: "proses_10",
          type: "scale",
          label: "Saya merasa suasana kegiatan menyenangkan dan tidak membosankan.",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        },
        {
          id: "proses_11",
          type: "scale",
          label: "Ada evaluasi atau refleksi di akhir kegiatan.",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        },
        {
          id: "proses_12",
          type: "scale",
          label: "Kegiatan Posyandu Remaja berjalan sesuai dengan rencana kerja.",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        },
        {
          id: "proses_13",
          type: "scale",
          label: "Ada dokumentasi kegiatan (foto, video, laporan, daftar hadir) setiap pelaksanaan kegiatan.",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        },
        {
          id: "proses_14",
          type: "scale",
          label: "Kader memberi contoh perilaku hidup sehat yang baik.",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        },
        {
          id: "proses_15",
          type: "scale",
          label: "Kegiatan Posyandu Remaja mendorong saya untuk menjadi pribadi yang lebih terbuka dalam menceritakan masalah pribadi dengan orang lain.",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        }
      ]
    },
    {
      id: "dampak",
      title: "BAGIAN VII: DAMPAK PROGRAM (PRODUCT)",
      description: "Bagian ini untuk menilai dampak program terhadap pengetahuan, sikap, perilaku dan perubahan sosial pada remaja. Keterangan: 1 = Sangat Tidak Setuju; 2 = Tidak Setuju; 3 = Ragu-ragu; 4 = Setuju; 5 = Sangat Setuju",
      questions: [
        {
          id: "dampak_1",
          type: "scale",
          label: "Saya menjadi lebih memahami pentingnya menjaga kesehatan mental dan kesehatan reproduksi.",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        },
        {
          id: "dampak_2",
          type: "scale",
          label: "Saya tahu cara mengelola stres dan kecemasan ringan.",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        },
        {
          id: "dampak_3",
          type: "scale",
          label: "Saya menjaga keseimbangan aktivitas belajar, istirahat dan hiburan untuk mendukung kesehatan mental saya.",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        },
        {
          id: "dampak_4",
          type: "scale",
          label: "Saya mengetahui risiko perilaku seksual yang tidak sehat.",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        },
        {
          id: "dampak_5",
          type: "scale",
          label: "Saya memiliki sikap positif terhadap pentingnya menjaga kesehatan diri.",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        },
        {
          id: "dampak_6",
          type: "scale",
          label: "Saya mulai menerapkan kebiasaan hidup sehat (makan bergizi, olahraga, tidak bergadang).",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        },
        {
          id: "dampak_7",
          type: "scale",
          label: "Saya merasa lebih percaya diri setelah mengikuti kegiatan Posyandu Remaja.",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        },
        {
          id: "dampak_8",
          type: "scale",
          label: "Saya berani berkonsultasi dengan kader atau tenaga kesehatan saat memiliki masalah.",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        },
        {
          id: "dampak_9",
          type: "scale",
          label: "Saya lebih terbuka membicarakan masalah kesehatan mental dengan teman.",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        },
        {
          id: "dampak_10",
          type: "scale",
          label: "Saya dapat membedakan informasi kesehatan yang benar dan yang salah di media sosial.",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        },
        {
          id: "dampak_11",
          type: "scale",
          label: "Saya mengajak teman untuk ikut kegiatan Posyandu Remaja.",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        },
        {
          id: "dampak_12",
          type: "scale",
          label: "Kegiatan Posyandu Remaja mengubah cara pandang saya terhadap isu pernikahan dini.",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        },
        {
          id: "dampak_13",
          type: "scale",
          label: "Saya berinisiatif mengajak teman untuk hidup sehat dan menjaga kesehatan reproduksi.",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        },
        {
          id: "dampak_14",
          type: "scale",
          label: "Saya merasa lebih peduli terhadap kesehatan teman sebaya.",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        },
        {
          id: "dampak_15",
          type: "scale",
          label: "Saya ingin Posyandu Remaja terus dilaksanakan secara berkelanjutan.",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        },
        {
          id: "dampak_16",
          type: "scale",
          label: "Saya menjadi lebih mampu mengenali tanda-tanda stress atau tekanan psikologis pada diri saya sendiri.",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        },
        {
          id: "dampak_17",
          type: "scale",
          label: "Saya menjadi lebih peduli terhadap teman yang mengalami masalah kesehatan mental.",
          required: true,
          scale: 5,
          scaleLabels: {
            min: "Sangat Tidak Setuju",
            max: "Sangat Setuju"
          }
        }
      ]
    }
  ]
};

