# Kuesioner Posyandu Remaja

Aplikasi kuesioner komprehensif untuk evaluasi efektivitas Program Posyandu Remaja dalam Meningkatkan Kesadaran Mental dan Reproduksi Remaja di Kota Depok.

## Fitur

- Form kuesioner multi-bagian dengan logika dinamis
- Validasi form otomatis
- Pertanyaan kondisional berdasarkan jawaban sebelumnya
- Desain responsif untuk mobile dan desktop
- Ekspor data sebagai file JSON
- UI/UX modern dan user-friendly
- Progress bar untuk tracking kemajuan pengisian

## Struktur Kuesioner

1. **Pernyataan Kesediaan Responden** - Informed consent
2. **Bagian I: Identitas Responden** - Data demografi dengan logika dinamis untuk Puskesmas berdasarkan Kecamatan
3. **Bagian II: Keterlibatan dengan Posyandu Remaja** - Pertanyaan tentang partisipasi dengan logika kondisional
4. **Bagian III: Partisipasi dalam Program** - Hanya muncul jika pernah mengikuti
5. **Bagian IV: Konteks Program** - Skala penilaian 1-5 (hanya untuk yang pernah mengikuti)
6. **Bagian V: Masukan Program** - Skala penilaian 1-5 (hanya untuk yang pernah mengikuti)
7. **Bagian VI: Proses Pelaksanaan Program** - Skala penilaian 1-5 (hanya untuk yang pernah mengikuti)
8. **Bagian VII: Dampak Program** - Skala penilaian 1-5 (hanya untuk yang pernah mengikuti)

## Instalasi

```bash
npm install
```

## Development

```bash
npm start
```

Aplikasi akan berjalan di [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
```

Membangun aplikasi untuk production ke folder `build`.

## Deploy ke GitHub Pages

### Metode 1: Menggunakan npm script

1. Update `homepage` di `package.json` dengan URL repository GitHub Anda:
   ```json
   "homepage": "https://username.github.io/kuesioner-posyandu-remaja"
   ```

2. Install gh-pages (jika belum):
   ```bash
   npm install --save-dev gh-pages
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

### Metode 2: Menggunakan GitHub Actions (Otomatis)

Repository ini sudah dilengkapi dengan GitHub Actions workflow yang akan otomatis deploy setiap kali ada push ke branch `main` atau `master`.

1. Pastikan file `.github/workflows/deploy.yml` sudah ada
2. Push kode ke repository GitHub
3. GitHub Actions akan otomatis build dan deploy ke GitHub Pages

### Setup GitHub Pages

1. Buka Settings di repository GitHub Anda
2. Pergi ke bagian Pages
3. Pilih source: "GitHub Actions" atau "Deploy from a branch"
4. Jika menggunakan branch, pilih branch `gh-pages` dan folder `/root`

## Teknologi yang Digunakan

- React 18.2.0
- React Router DOM 6.20.0
- Create React App
- CSS3 dengan animasi modern

## Struktur Project

```
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Questionnaire.js
│   │   ├── Questionnaire.css
│   │   ├── FormSection.js
│   │   ├── FormSection.css
│   │   ├── QuestionField.js
│   │   ├── QuestionField.css
│   │   ├── ProgressBar.js
│   │   └── ProgressBar.css
│   ├── data/
│   │   └── questionnaireData.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── .github/
│   └── workflows/
│       └── deploy.yml
├── package.json
└── README.md
```

## Catatan Penting

- Pastikan semua pertanyaan wajib diisi sebelum melanjutkan ke bagian berikutnya
- Data akan diunduh sebagai file JSON setelah kuesioner selesai diisi
- Bagian evaluasi (IV-VII) hanya muncul untuk responden yang pernah mengikuti kegiatan Posyandu Remaja
- Pilihan Puskesmas akan otomatis muncul berdasarkan Kecamatan yang dipilih

## License

MIT

