# Employee Management Mobile App

Aplikasi mobile cross-platform untuk manajemen data karyawan yang berjalan di Android dan iOS.

## Fitur Utama

### 1. Login
- Username default: `admin`
- Password default: `gis2025`
- Autentikasi sederhana untuk akses ke aplikasi

### 2. Menu Utama
Menu navigasi dengan 6 pilihan:
- **Data Karyawan** - Kelola data karyawan (CRUD lengkap)
- **Absensi** - Coming soon
- **Merchandiser** - Coming soon
- **SPG** - Coming soon
- **Report** - Coming soon
- **Logout** - Keluar dari aplikasi

### 3. Data Karyawan
Fitur lengkap CRUD (Create, Read, Update, Delete):
- **Tambah Data Karyawan**
  - NIK KTP (16 digit)
  - Nama Karyawan
  - Alamat
  - Nomor Telpon
  - Nama Bank
  - Nomor Rekening
  - Nama Sesuai Rekening
  - Upload Foto KTP (dari kamera atau galeri)

- **Lihat Daftar Karyawan**
  - Tampilan card dengan foto
  - Pull to refresh
  - Data lengkap setiap karyawan

- **Edit Data Karyawan**
  - Update semua field
  - Ganti foto KTP

- **Hapus Data Karyawan**
  - Konfirmasi sebelum menghapus
  - Data dihapus permanen dari database

## Teknologi

- **React Native** - Framework mobile cross-platform
- **Expo** - Build tool dan development platform
- **React Navigation** - Routing dan navigasi
- **Expo SQLite** - Database lokal
- **Expo Image Picker** - Upload foto dari kamera/galeri

## Instalasi

### Prasyarat
- Node.js versi 18 atau lebih baru
- npm atau yarn
- Expo Go app di smartphone (untuk testing)

### Langkah Instalasi

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Jalankan Aplikasi**
   ```bash
   npm start
   ```

3. **Test di Device**
   - Scan QR code dengan Expo Go app (Android/iOS)
   - Atau tekan 'a' untuk Android emulator
   - Atau tekan 'i' untuk iOS simulator (hanya di macOS)

## Cara Menggunakan

### Login
1. Buka aplikasi
2. Masukkan username: `admin`
3. Masukkan password: `gis2025`
4. Tekan tombol LOGIN

### Menambah Karyawan
1. Dari menu utama, pilih "Data Karyawan"
2. Tekan tombol + (floating button di kanan bawah)
3. Isi semua field yang required (*)
4. Tap area foto untuk upload foto KTP
5. Pilih sumber: Kamera atau Galeri
6. Tekan "Simpan Data"

### Mengedit Karyawan
1. Di halaman Data Karyawan, pilih card karyawan
2. Tekan tombol "Edit"
3. Update field yang diinginkan
4. Tekan "Update Data"

### Menghapus Karyawan
1. Di halaman Data Karyawan, pilih card karyawan
2. Tekan tombol "Hapus"
3. Konfirmasi penghapusan

## Struktur Database

Tabel: `karyawan`

| Field | Type | Description |
|-------|------|-------------|
| id | INTEGER | Primary key (auto increment) |
| nik_ktp | TEXT | NIK KTP (unique) |
| nama_karyawan | TEXT | Nama lengkap |
| alamat_karyawan | TEXT | Alamat lengkap |
| nomor_telpon | TEXT | Nomor telepon |
| nomor_rekening | TEXT | Nomor rekening bank |
| nama_bank | TEXT | Nama bank |
| nama_sesuai_rekening | TEXT | Nama pemilik rekening |
| foto_ktp_uri | TEXT | URI foto KTP |
| created_at | DATETIME | Waktu dibuat |
| updated_at | DATETIME | Waktu diupdate |

## Struktur Folder

```
employee-management-app/
├── App.js                      # Entry point aplikasi
├── app.json                    # Konfigurasi Expo
├── package.json                # Dependencies
├── src/
│   ├── database/
│   │   └── database.js         # SQLite database functions
│   ├── navigation/
│   │   └── AppNavigator.js     # Navigation setup
│   └── screens/
│       ├── LoginScreen.js      # Halaman login
│       ├── MainMenuScreen.js   # Menu utama
│       ├── DataKaryawanScreen.js    # List karyawan
│       ├── FormKaryawanScreen.js    # Form tambah/edit
│       ├── AbsensiScreen.js         # Placeholder
│       ├── MerchandiserScreen.js    # Placeholder
│       ├── SPGScreen.js             # Placeholder
│       └── ReportScreen.js          # Placeholder
└── assets/                     # Images dan icons
```

## Build untuk Production

### Android APK
```bash
# Install EAS CLI
npm install -g eas-cli

# Login ke Expo
eas login

# Build APK
eas build --platform android --profile preview
```

### iOS IPA
```bash
# Build untuk iOS (memerlukan Apple Developer Account)
eas build --platform ios
```

## Troubleshooting

### Database Error
Jika ada error database, hapus aplikasi dan install ulang untuk reset database.

### Image Picker Not Working
Pastikan permission untuk kamera dan galeri sudah diizinkan di device settings.

### Build Error
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

## Fitur Mendatang
- Absensi dengan GPS tracking
- Manajemen Merchandiser
- Manajemen SPG
- Report dan Analytics
- Export data ke Excel
- Backup dan restore database

## Lisensi
MIT License

## Kontak
Untuk pertanyaan dan dukungan, silakan hubungi tim development.
