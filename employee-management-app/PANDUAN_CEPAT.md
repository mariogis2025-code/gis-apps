# Panduan Cepat - Employee Management App

## Cara Menjalankan Aplikasi

### 1. Install Dependencies
```bash
npm install
```

### 2. Jalankan Aplikasi
```bash
npm start
```

### 3. Test di Smartphone
Setelah menjalankan `npm start`, akan muncul QR code:

**Untuk Android:**
1. Install aplikasi "Expo Go" dari Google Play Store
2. Buka Expo Go
3. Scan QR code yang muncul di terminal
4. Aplikasi akan otomatis terbuka

**Untuk iPhone:**
1. Install aplikasi "Expo Go" dari App Store
2. Buka Camera app bawaan iPhone
3. Scan QR code yang muncul di terminal
4. Tap notifikasi untuk membuka di Expo Go

### Alternatif: Menggunakan Emulator

**Android Emulator:**
```bash
npm start
# Tekan 'a' setelah muncul menu
```

**iOS Simulator (hanya di Mac):**
```bash
npm start
# Tekan 'i' setelah muncul menu
```

## Login ke Aplikasi

Default credentials:
- **Username:** admin
- **Password:** gis2025

## Menggunakan Fitur Data Karyawan

### Menambah Karyawan Baru
1. Di menu utama, tap "Data Karyawan"
2. Tap tombol + (floating button biru di kanan bawah)
3. Isi semua field yang required (ditandai dengan *)
4. Untuk upload foto KTP:
   - Tap area foto
   - Pilih "Kamera" atau "Galeri"
   - Ambil/pilih foto
5. Tap "Simpan Data"

### Melihat Daftar Karyawan
- Pull down (drag ke bawah) untuk refresh data
- Scroll untuk melihat semua karyawan
- Setiap card menampilkan foto dan info lengkap

### Edit Karyawan
1. Tap tombol "Edit" (hijau) di card karyawan
2. Update field yang diinginkan
3. Tap "Update Data"

### Hapus Karyawan
1. Tap tombol "Hapus" (merah) di card karyawan
2. Konfirmasi penghapusan
3. Data akan dihapus permanen

## Field yang Harus Diisi

Semua field berikut WAJIB diisi:
- ✅ NIK KTP (16 digit)
- ✅ Nama Karyawan
- ✅ Alamat Karyawan
- ✅ Nomor Telpon
- ✅ Nomor Rekening
- ✅ Nama Bank
- ✅ Nama Sesuai Rekening

Field opsional:
- Foto KTP (sangat direkomendasikan)

## Tips

1. **NIK KTP harus unik** - Tidak boleh ada NIK yang sama
2. **Data tersimpan lokal** - Data disimpan di database SQLite di device
3. **Foto tersimpan sebagai URI** - Foto disimpan di storage device
4. **Pull to refresh** - Drag ke bawah untuk refresh data

## Troubleshooting

### Permission Kamera/Galeri
Jika muncul error permission:
1. Buka Settings smartphone
2. Cari aplikasi "Expo Go"
3. Enable permission untuk Camera dan Photos/Storage

### Data Tidak Muncul
1. Pull down untuk refresh
2. Pastikan data sudah disimpan
3. Restart aplikasi jika perlu

### Aplikasi Crash
1. Close aplikasi
2. Hapus dari recent apps
3. Buka kembali Expo Go
4. Scan QR code lagi

## Build APK untuk Production

Jika ingin membuat file APK untuk distribusi:

```bash
# Install EAS CLI
npm install -g eas-cli

# Login
eas login

# Build APK
eas build --platform android --profile preview
```

Tunggu proses build selesai (sekitar 10-15 menit), kemudian download APK dari link yang diberikan.

## Menu Lainnya

Menu berikut masih dalam pengembangan:
- Absensi
- Merchandiser
- SPG
- Report

Saat ini yang sudah berfungsi penuh adalah:
- Login/Logout
- Data Karyawan (CRUD lengkap)

## Dukungan

Jika ada pertanyaan atau masalah, silakan buka issue di repository atau hubungi tim development.
