import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { insertKaryawan, updateKaryawan } from '../database/database';

const FormKaryawanScreen = ({ navigation, route }) => {
  const karyawan = route.params?.karyawan;
  const isEdit = !!karyawan;

  const [formData, setFormData] = useState({
    nik_ktp: karyawan?.nik_ktp || '',
    nama_karyawan: karyawan?.nama_karyawan || '',
    alamat_karyawan: karyawan?.alamat_karyawan || '',
    nomor_telpon: karyawan?.nomor_telpon || '',
    nomor_rekening: karyawan?.nomor_rekening || '',
    nama_bank: karyawan?.nama_bank || '',
    nama_sesuai_rekening: karyawan?.nama_sesuai_rekening || '',
    foto_ktp_uri: karyawan?.foto_ktp_uri || null,
  });

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert('Permission Required', 'Izin akses galeri diperlukan untuk memilih foto');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.8,
    });

    if (!result.canceled) {
      updateField('foto_ktp_uri', result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert('Permission Required', 'Izin akses kamera diperlukan untuk mengambil foto');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.8,
    });

    if (!result.canceled) {
      updateField('foto_ktp_uri', result.assets[0].uri);
    }
  };

  const showImageOptions = () => {
    Alert.alert(
      'Upload Foto KTP',
      'Pilih sumber foto',
      [
        { text: 'Kamera', onPress: takePhoto },
        { text: 'Galeri', onPress: pickImage },
        { text: 'Batal', style: 'cancel' },
      ]
    );
  };

  const validateForm = () => {
    if (!formData.nik_ktp.trim()) {
      Alert.alert('Error', 'NIK KTP harus diisi');
      return false;
    }
    if (!formData.nama_karyawan.trim()) {
      Alert.alert('Error', 'Nama Karyawan harus diisi');
      return false;
    }
    if (!formData.alamat_karyawan.trim()) {
      Alert.alert('Error', 'Alamat harus diisi');
      return false;
    }
    if (!formData.nomor_telpon.trim()) {
      Alert.alert('Error', 'Nomor Telpon harus diisi');
      return false;
    }
    if (!formData.nomor_rekening.trim()) {
      Alert.alert('Error', 'Nomor Rekening harus diisi');
      return false;
    }
    if (!formData.nama_bank.trim()) {
      Alert.alert('Error', 'Nama Bank harus diisi');
      return false;
    }
    if (!formData.nama_sesuai_rekening.trim()) {
      Alert.alert('Error', 'Nama Sesuai Rekening harus diisi');
      return false;
    }
    return true;
  };

  const handleSave = async () => {
    if (!validateForm()) return;

    try {
      if (isEdit) {
        await updateKaryawan(karyawan.id, formData);
        Alert.alert('Sukses', 'Data berhasil diupdate', [
          { text: 'OK', onPress: () => navigation.goBack() }
        ]);
      } else {
        await insertKaryawan(formData);
        Alert.alert('Sukses', 'Data berhasil disimpan', [
          { text: 'OK', onPress: () => navigation.goBack() }
        ]);
      }
    } catch (error) {
      console.error('Error saving karyawan:', error);
      if (error.message && error.message.includes('UNIQUE constraint failed')) {
        Alert.alert('Error', 'NIK KTP sudah terdaftar');
      } else {
        Alert.alert('Error', 'Gagal menyimpan data');
      }
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      keyboardVerticalOffset={0}
    >
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>‹ Kembali</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>
          {isEdit ? 'Edit Karyawan' : 'Tambah Karyawan'}
        </Text>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.formContainer}>
          <View style={styles.photoSection}>
            <Text style={styles.photoLabel}>Foto KTP</Text>
            <TouchableOpacity onPress={showImageOptions} style={styles.photoContainer}>
              {formData.foto_ktp_uri ? (
                <Image source={{ uri: formData.foto_ktp_uri }} style={styles.photoPreview} />
              ) : (
                <View style={styles.photoPlaceholder}>
                  <Text style={styles.photoPlaceholderIcon}>📷</Text>
                  <Text style={styles.photoPlaceholderText}>Tap untuk upload foto</Text>
                </View>
              )}
            </TouchableOpacity>
            {formData.foto_ktp_uri && (
              <TouchableOpacity onPress={() => updateField('foto_ktp_uri', null)}>
                <Text style={styles.removePhotoText}>Hapus Foto</Text>
              </TouchableOpacity>
            )}
          </View>

          <InputField
            label="NIK KTP *"
            value={formData.nik_ktp}
            onChangeText={(text) => updateField('nik_ktp', text)}
            placeholder="Masukkan NIK KTP"
            keyboardType="numeric"
            maxLength={16}
          />

          <InputField
            label="Nama Karyawan *"
            value={formData.nama_karyawan}
            onChangeText={(text) => updateField('nama_karyawan', text)}
            placeholder="Masukkan nama lengkap"
          />

          <InputField
            label="Alamat *"
            value={formData.alamat_karyawan}
            onChangeText={(text) => updateField('alamat_karyawan', text)}
            placeholder="Masukkan alamat lengkap"
            multiline
            numberOfLines={3}
          />

          <InputField
            label="Nomor Telpon *"
            value={formData.nomor_telpon}
            onChangeText={(text) => updateField('nomor_telpon', text)}
            placeholder="08xxxxxxxxxx"
            keyboardType="phone-pad"
          />

          <InputField
            label="Nama Bank *"
            value={formData.nama_bank}
            onChangeText={(text) => updateField('nama_bank', text)}
            placeholder="Contoh: BCA, Mandiri, BRI"
          />

          <InputField
            label="Nomor Rekening *"
            value={formData.nomor_rekening}
            onChangeText={(text) => updateField('nomor_rekening', text)}
            placeholder="Masukkan nomor rekening"
            keyboardType="numeric"
          />

          <InputField
            label="Nama Sesuai Rekening *"
            value={formData.nama_sesuai_rekening}
            onChangeText={(text) => updateField('nama_sesuai_rekening', text)}
            placeholder="Nama pemilik rekening"
          />

          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>
              {isEdit ? '💾 Update Data' : '💾 Simpan Data'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const InputField = ({ label, value, onChangeText, placeholder, multiline, numberOfLines, keyboardType, maxLength }) => (
  <View style={styles.inputContainer}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={[styles.input, multiline && styles.textArea]}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      multiline={multiline}
      numberOfLines={numberOfLines}
      keyboardType={keyboardType}
      maxLength={maxLength}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#4A90E2',
    padding: 20,
    paddingTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 15,
  },
  backButtonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: '300',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  scrollView: {
    flex: 1,
  },
  formContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  photoSection: {
    marginBottom: 25,
    alignItems: 'center',
  },
  photoLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  photoContainer: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#f0f0f0',
  },
  photoPreview: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  photoPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderWidth: 2,
    borderColor: '#ddd',
    borderStyle: 'dashed',
  },
  photoPlaceholderIcon: {
    fontSize: 48,
    marginBottom: 10,
  },
  photoPlaceholderText: {
    fontSize: 14,
    color: '#999',
  },
  removePhotoText: {
    color: '#E74C3C',
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  saveButton: {
    backgroundColor: '#5CB85C',
    padding: 18,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 3,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FormKaryawanScreen;
