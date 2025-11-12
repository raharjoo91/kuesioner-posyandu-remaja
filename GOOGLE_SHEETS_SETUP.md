# Setup Google Sheets sebagai Database

Panduan ini akan membantu Anda mengatur Google Sheets untuk menyimpan respons kuesioner secara otomatis.

## Langkah 1: Buat Google Sheet Baru

1. Buka [Google Sheets](https://sheets.google.com)
2. Buat spreadsheet baru
3. Beri nama sheet pertama sebagai "Responses" (atau nama lain yang Anda inginkan)
4. Di baris pertama (header), tambahkan kolom berikut:
   - Timestamp
   - Usia
   - Tanggal Lahir
   - Jenis Kelamin
   - Tingkat Pendidikan
   - Status
   - Kecamatan
   - Puskesmas
   - Pernah Mengikuti
   - (dan kolom lainnya sesuai kebutuhan)

## Langkah 2: Buat Google Apps Script

1. Di Google Sheet, klik **Extensions** > **Apps Script**
2. Hapus kode default dan paste kode berikut:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    // Flatten the responses object into a single row
    const row = [];
    
    // Add timestamp
    row.push(new Date(data.timestamp).toLocaleString('id-ID'));
    
    // Extract data from each section
    const responses = data.responses;
    
    // Identitas section
    const identitas = responses.identitas || {};
    row.push(
      identitas.usia || '',
      identitas.tanggal_lahir || '',
      identitas.jenis_kelamin || '',
      identitas.tingkat_pendidikan || '',
      Array.isArray(identitas.status) ? identitas.status.join(', ') : identitas.status || '',
      identitas.kecamatan || '',
      identitas.puskesmas || identitas.puskesmas_bojongsari || identitas.puskesmas_pancoran_mas || 
      identitas.puskesmas_cipayung || identitas.puskesmas_sukmajaya || identitas.puskesmas_cilodong || 
      identitas.puskesmas_cimanggis || identitas.puskesmas_tapos || identitas.puskesmas_beji || 
      identitas.puskesmas_limo || identitas.puskesmas_cinere || ''
    );
    
    // Keterlibatan section
    const keterlibatan = responses.keterlibatan || {};
    row.push(
      keterlibatan.pernah_mengikuti || '',
      keterlibatan.nama_posyandu || '',
      keterlibatan.rt_rw_posyandu || '',
      keterlibatan.lama_anggota || '',
      keterlibatan.tahu_posyandu || '',
      keterlibatan.wilayah_memiliki_posyandu || '',
      keterlibatan.alasan_tidak_ikut || '',
      keterlibatan.alasan_lainnya || ''
    );
    
    // Partisipasi section (if exists)
    const partisipasi = responses.partisipasi || {};
    row.push(
      partisipasi.frekuensi_kehadiran || '',
      partisipasi.pernah_kader || '',
      partisipasi.jenis_kegiatan || '',
      partisipasi.jenis_kegiatan_lainnya || '',
      partisipasi.sumber_informasi || '',
      partisipasi.sumber_informasi_lainnya || '',
      partisipasi.akses_lokasi || '',
      partisipasi.alasan_mengikuti || '',
      partisipasi.alasan_mengikuti_lainnya || ''
    );
    
    // Evaluation sections (konteks, masukan, proses, dampak)
    // Convert scale responses to comma-separated values
    const konteks = responses.konteks || {};
    const masukan = responses.masukan || {};
    const proses = responses.proses || {};
    const dampak = responses.dampak || {};
    
    // Add all scale responses
    for (let i = 1; i <= 15; i++) {
      row.push(konteks[`konteks_${i}`] || '');
    }
    for (let i = 1; i <= 15; i++) {
      row.push(masukan[`masukan_${i}`] || '');
    }
    for (let i = 1; i <= 15; i++) {
      row.push(proses[`proses_${i}`] || '');
    }
    for (let i = 1; i <= 17; i++) {
      row.push(dampak[`dampak_${i}`] || '');
    }
    
    // Add the row to the sheet
    sheet.appendRow(row);
    
    return ContentService.createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Klik **Save** (Ctrl+S atau Cmd+S)
4. Beri nama project, misalnya "Kuesioner Posyandu Handler"

## Langkah 3: Deploy sebagai Web App

1. Klik **Deploy** > **New deployment**
2. Klik ikon gear (⚙️) di sebelah "Select type" dan pilih **Web app**
3. Isi konfigurasi:
   - **Description**: "Kuesioner Posyandu Remaja API"
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone (atau "Anyone with Google account" untuk lebih aman)
4. Klik **Deploy**
5. **PENTING**: Copy **Web App URL** yang muncul
6. Klik **Done**

## Langkah 4: Update index.html

1. Buka file `index.html`
2. Cari baris ini:
   ```javascript
   const GOOGLE_SHEETS_WEB_APP_URL = '';
   ```
3. Paste URL Web App yang Anda copy di antara tanda kutip:
   ```javascript
   const GOOGLE_SHEETS_WEB_APP_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
   ```
4. Save dan push ke GitHub

## Catatan Penting

- **Keamanan**: URL Web App Anda akan terlihat di source code. Untuk keamanan lebih, gunakan "Anyone with Google account" sebagai akses.
- **Format Data**: Data akan disimpan dalam format flat (satu baris per respons) untuk memudahkan analisis.
- **Backup**: Aplikasi tetap akan mengunduh file JSON sebagai backup, bahkan jika pengiriman ke Google Sheets berhasil.
- **Error Handling**: Jika koneksi ke Google Sheets gagal, aplikasi tetap akan mengunduh file JSON.

## Troubleshooting

- **Data tidak masuk ke Sheet**: 
  - Pastikan Web App sudah di-deploy dengan akses "Anyone"
  - Cek apakah ada error di Apps Script (View > Execution log)
  
- **CORS Error**: 
  - Pastikan menggunakan `mode: 'no-cors'` (sudah ada di kode)
  - Mode ini tidak memungkinkan membaca response, tapi data tetap terkirim

- **Kolom tidak sesuai**:
  - Sesuaikan header di Sheet dengan urutan data di Apps Script
  - Atau modifikasi script untuk menyesuaikan dengan struktur Sheet Anda

