import * as SQLite from 'expo-sqlite';

let db;

export const initDatabase = async () => {
  db = await SQLite.openDatabaseAsync('employeeManagement.db');

  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS karyawan (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nik_ktp TEXT NOT NULL UNIQUE,
      nama_karyawan TEXT NOT NULL,
      alamat_karyawan TEXT NOT NULL,
      nomor_telpon TEXT NOT NULL,
      nomor_rekening TEXT NOT NULL,
      nama_bank TEXT NOT NULL,
      nama_sesuai_rekening TEXT NOT NULL,
      foto_ktp_uri TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  console.log('Database initialized successfully');
  return db;
};

export const getDatabase = () => {
  if (!db) {
    throw new Error('Database not initialized. Call initDatabase first.');
  }
  return db;
};

export const insertKaryawan = async (karyawan) => {
  const database = getDatabase();

  const result = await database.runAsync(
    `INSERT INTO karyawan (
      nik_ktp, nama_karyawan, alamat_karyawan, nomor_telpon,
      nomor_rekening, nama_bank, nama_sesuai_rekening, foto_ktp_uri
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      karyawan.nik_ktp,
      karyawan.nama_karyawan,
      karyawan.alamat_karyawan,
      karyawan.nomor_telpon,
      karyawan.nomor_rekening,
      karyawan.nama_bank,
      karyawan.nama_sesuai_rekening,
      karyawan.foto_ktp_uri || null
    ]
  );

  return result.lastInsertRowId;
};

export const getAllKaryawan = async () => {
  const database = getDatabase();
  const allRows = await database.getAllAsync('SELECT * FROM karyawan ORDER BY created_at DESC');
  return allRows;
};

export const getKaryawanById = async (id) => {
  const database = getDatabase();
  const result = await database.getFirstAsync('SELECT * FROM karyawan WHERE id = ?', [id]);
  return result;
};

export const updateKaryawan = async (id, karyawan) => {
  const database = getDatabase();

  await database.runAsync(
    `UPDATE karyawan SET
      nik_ktp = ?,
      nama_karyawan = ?,
      alamat_karyawan = ?,
      nomor_telpon = ?,
      nomor_rekening = ?,
      nama_bank = ?,
      nama_sesuai_rekening = ?,
      foto_ktp_uri = ?,
      updated_at = CURRENT_TIMESTAMP
    WHERE id = ?`,
    [
      karyawan.nik_ktp,
      karyawan.nama_karyawan,
      karyawan.alamat_karyawan,
      karyawan.nomor_telpon,
      karyawan.nomor_rekening,
      karyawan.nama_bank,
      karyawan.nama_sesuai_rekening,
      karyawan.foto_ktp_uri || null,
      id
    ]
  );
};

export const deleteKaryawan = async (id) => {
  const database = getDatabase();
  await database.runAsync('DELETE FROM karyawan WHERE id = ?', [id]);
};
