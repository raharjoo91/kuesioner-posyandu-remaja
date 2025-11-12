# 🚀 Setup Google Sheets - Panduan Lengkap Step by Step

Ikuti langkah-langkah ini dengan teliti untuk menghubungkan kuesioner dengan Google Sheets.

## 📋 LANGKAH 1: Buat Google Sheet Baru

1. Buka browser dan kunjungi: **https://sheets.google.com**
2. Klik tombol **"Blank"** atau **"+"** untuk membuat spreadsheet baru
3. Beri nama spreadsheet: **"Kuesioner Posyandu Remaja - Responses"**
4. Di baris pertama (Row 1), copy-paste header berikut (satu kolom per header):

```
Timestamp|Usia|Tanggal Lahir|Jenis Kelamin|Tingkat Pendidikan|Pendidikan Lainnya|Status|Kecamatan|Puskesmas|Pernah Mengikuti|Nama Posyandu|RT/RW Posyandu|Lama Anggota|Tahu Posyandu|Wilayah Memiliki Posyandu|Alasan Tidak Ikut|Alasan Lainnya|Frekuensi Kehadiran|Pernah Kader|Jenis Kegiatan|Jenis Kegiatan Lainnya|Sumber Informasi|Sumber Informasi Lainnya|Akses Lokasi|Alasan Mengikuti|Alasan Mengikuti Lainnya|Konteks 1|Konteks 2|Konteks 3|Konteks 4|Konteks 5|Konteks 6|Konteks 7|Konteks 8|Konteks 9|Konteks 10|Konteks 11|Konteks 12|Konteks 13|Konteks 14|Konteks 15|Masukan 1|Masukan 2|Masukan 3|Masukan 4|Masukan 5|Masukan 6|Masukan 7|Masukan 8|Masukan 9|Masukan 10|Masukan 11|Masukan 12|Masukan 13|Masukan 14|Masukan 15|Proses 1|Proses 2|Proses 3|Proses 4|Proses 5|Proses 6|Proses 7|Proses 8|Proses 9|Proses 10|Proses 11|Proses 12|Proses 13|Proses 14|Proses 15|Dampak 1|Dampak 2|Dampak 3|Dampak 4|Dampak 5|Dampak 6|Dampak 7|Dampak 8|Dampak 9|Dampak 10|Dampak 11|Dampak 12|Dampak 13|Dampak 14|Dampak 15|Dampak 16|Dampak 17
```

**Cara cepat:**
- Copy semua teks di atas
- Klik cell A1 di Google Sheet
- Paste (Ctrl+V atau Cmd+V)
- Google Sheets akan otomatis memisahkan ke kolom yang berbeda

5. **Freeze baris pertama**: Klik View > Freeze > 1 row (agar header selalu terlihat)

---

## 🔧 LANGKAH 2: Buat Google Apps Script

1. Di Google Sheet yang sama, klik menu **Extensions** (Ekstensi) di bagian atas
2. Pilih **Apps Script**
3. Tab baru akan terbuka dengan editor Apps Script
4. **Hapus semua kode default** yang ada (yang berisi `function myFunction()`)
5. **Copy semua isi file `GOOGLE_APPS_SCRIPT_CODE.js`** dari repository ini
6. **Paste** ke editor Apps Script
7. Klik **Save** (Ctrl+S atau Cmd+S) atau klik ikon 💾
8. Beri nama project: **"Kuesioner Posyandu Handler"**
9. Klik **OK**

---

## 🚀 LANGKAH 3: Deploy sebagai Web App

1. Di editor Apps Script, klik menu **Deploy** (di bagian atas)
2. Pilih **New deployment**
3. Klik ikon **⚙️ Settings** (gear icon) di sebelah "Select type"
4. Pilih **Web app**
5. Isi form deployment:
   - **Description**: `Kuesioner Posyandu Remaja API`
   - **Execute as**: Pilih **Me** (email Anda)
   - **Who has access**: Pilih **Anyone** (penting untuk public access)
6. Klik **Deploy**
7. **PENTING**: Akan muncul popup "Authorization required"
   - Klik **Authorize access**
   - Pilih akun Google Anda
   - Klik **Advanced** > **Go to [Project Name] (unsafe)**
   - Klik **Allow**
8. Setelah authorization, akan muncul popup dengan **Web App URL**
9. **COPY URL tersebut** - contoh formatnya:
   ```
   https://script.google.com/macros/s/AKfycby.../exec
   ```
10. Klik **Done**

---

## 🔗 LANGKAH 4: Update index.html dengan URL Web App

1. Buka file `index.html` di editor Anda
2. Cari baris ini (sekitar line 1578):
   ```javascript
   const GOOGLE_SHEETS_WEB_APP_URL = '';
   ```
3. Paste URL Web App yang Anda copy di antara tanda kutip:
   ```javascript
   const GOOGLE_SHEETS_WEB_APP_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
   ```
4. **Save** file
5. **Commit dan push** ke GitHub:
   ```bash
   git add index.html
   git commit -m "Add Google Sheets Web App URL"
   git push origin main
   ```

---

## ✅ LANGKAH 5: Test

1. Buka aplikasi kuesioner di browser
2. Isi kuesioner (atau gunakan data test)
3. Klik **"Kirim Kuesioner"**
4. Cek Google Sheet Anda - data seharusnya muncul di baris baru
5. File JSON juga akan terunduh sebagai backup

---

## 🐛 Troubleshooting

### Data tidak masuk ke Sheet?
- ✅ Pastikan Web App di-deploy dengan akses **"Anyone"**
- ✅ Cek apakah ada error di Apps Script: **View > Execution log**
- ✅ Pastikan header di Sheet sesuai dengan urutan di script

### Error "Authorization required"?
- ✅ Klik **Deploy** > **Manage deployments**
- ✅ Klik ikon **pensil** (edit) pada deployment
- ✅ Pastikan "Who has access" = **Anyone**
- ✅ Klik **Deploy** lagi

### CORS Error di browser console?
- ✅ Ini normal dengan mode `no-cors` - data tetap terkirim meskipun ada warning
- ✅ Cek Google Sheet untuk memastikan data masuk

### Kolom tidak sesuai?
- ✅ Pastikan header di Sheet sama persis dengan urutan di script
- ✅ Atau modifikasi script untuk menyesuaikan struktur Sheet Anda

---

## 📝 Catatan Penting

- **Keamanan**: URL Web App akan terlihat di source code. Untuk keamanan lebih, gunakan "Anyone with Google account"
- **Backup**: Aplikasi tetap akan mengunduh file JSON sebagai backup
- **Format Data**: Data disimpan dalam format flat (satu baris per respons) untuk memudahkan analisis di Excel/Google Sheets

---

## 🎉 Selesai!

Setelah setup selesai, setiap kali ada yang mengisi kuesioner dan klik "Kirim Kuesioner", data akan otomatis tersimpan ke Google Sheet Anda!

