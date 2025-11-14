import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';

const MainMenuScreen = ({ navigation }) => {
  const menuItems = [
    {
      id: 1,
      title: 'Data Karyawan',
      icon: '👥',
      color: '#4A90E2',
      screen: 'DataKaryawan',
    },
    {
      id: 2,
      title: 'Absensi',
      icon: '📋',
      color: '#5CB85C',
      screen: 'Absensi',
    },
    {
      id: 3,
      title: 'Merchandiser',
      icon: '🛍️',
      color: '#F0AD4E',
      screen: 'Merchandiser',
    },
    {
      id: 4,
      title: 'SPG',
      icon: '👩‍💼',
      color: '#9B59B6',
      screen: 'SPG',
    },
    {
      id: 5,
      title: 'Report',
      icon: '📊',
      color: '#E74C3C',
      screen: 'Report',
    },
    {
      id: 6,
      title: 'Logout',
      icon: '🚪',
      color: '#95A5A6',
      screen: 'Logout',
    },
  ];

  const handleMenuPress = (item) => {
    if (item.screen === 'Logout') {
      Alert.alert(
        'Logout',
        'Apakah Anda yakin ingin keluar?',
        [
          {
            text: 'Batal',
            style: 'cancel',
          },
          {
            text: 'Ya',
            onPress: () => navigation.replace('Login'),
          },
        ]
      );
    } else if (item.screen === 'DataKaryawan') {
      navigation.navigate('DataKaryawan');
    } else {
      Alert.alert('Info', `Fitur ${item.title} akan segera hadir`);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Menu Utama</Text>
        <Text style={styles.headerSubtitle}>Employee Management System</Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.menuContainer}
        showsVerticalScrollIndicator={false}
      >
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[styles.menuCard, { borderLeftColor: item.color }]}
            onPress={() => handleMenuPress(item)}
            activeOpacity={0.7}
          >
            <View style={[styles.iconContainer, { backgroundColor: item.color }]}>
              <Text style={styles.menuIcon}>{item.icon}</Text>
            </View>
            <View style={styles.menuTextContainer}>
              <Text style={styles.menuTitle}>{item.title}</Text>
            </View>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#4A90E2',
    padding: 30,
    paddingTop: 60,
    paddingBottom: 30,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  menuContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  menuCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
    borderLeftWidth: 5,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  menuIcon: {
    fontSize: 24,
  },
  menuTextContainer: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  arrow: {
    fontSize: 30,
    color: '#ccc',
    fontWeight: '300',
  },
});

export default MainMenuScreen;
