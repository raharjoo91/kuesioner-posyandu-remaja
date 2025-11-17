/**
 * Google Apps Script untuk Kuesioner Posyandu Remaja
 * Copy paste kode ini ke Google Apps Script Editor
 */

// Add doGet function for testing (optional)
function doGet(e) {
  return ContentService.createTextOutput('Kuesioner Posyandu Remaja API is running. Use POST method to submit data.')
    .setMimeType(ContentService.MimeType.TEXT);
}

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
      identitas.nama || '',
      identitas.nomor_handphone || '',
      identitas.usia || '',
      identitas.tanggal_lahir || '',
      identitas.jenis_kelamin || '',
      identitas.tingkat_pendidikan || '',
      identitas.pendidikan_lainnya || '',
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

