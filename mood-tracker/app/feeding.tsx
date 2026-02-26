import Slider from '@react-native-community/slider';
import { Stack } from 'expo-router';
import React, { useState } from 'react';
import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function FeedingScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [typeDropdownVisible, setTypeDropdownVisible] = useState(false);
  
  const [selectedType, setSelectedType] = useState('Biberon');
  const [duration, setDuration] = useState(30); // dakika
  const [amount, setAmount] = useState(50); // mL
  const [records, setRecords] = useState([]);

  const types = ['Meme', 'Biberon', 'Mama'];

  // Kaydet butonuna basılınca çalışacak
  const handleSave = () => {
    const newRecord = {
      id: Date.now().toString(),
      type: selectedType,
      // Süreyi "1 s 30 dk" formatına çeviriyoruz
      duration: `${Math.floor(duration / 60) > 0 ? Math.floor(duration / 60) + ' s ' : ''}${duration % 60} dk`, 
      amount: `${amount} mL`,
      date: new Date().toLocaleDateString('tr-TR'),
      time: new Date().toLocaleTimeString('tr-TR').slice(0, 5),
    };
    setRecords([newRecord, ...records]); // Listeye ekle
    setModalVisible(false); // Modalı kapat
  };

  return (
    <View style={styles.container}>
      {/* T2 Koyu Yeşil Header Ayarı */}
      <Stack.Screen 
        options={{ 
          title: 'Besleme',
          headerStyle: { backgroundColor: '#2B4A3B' }, 
          headerTintColor: '#fff'
        }} 
      />

      {/* Üstteki Tür Seçici (Dropdown Simülasyonu) */}
      <View style={styles.topBar}>
        <TouchableOpacity 
          style={styles.dropdownButton} 
          onPress={() => setTypeDropdownVisible(!typeDropdownVisible)}
        >
          <Text style={styles.dropdownButtonText}>{selectedType}  ▼</Text>
        </TouchableOpacity>
      </View>

      {/* Tür Seçme Menüsü (Açıksa Görünür) */}
      {typeDropdownVisible && (
        <View style={styles.dropdownMenu}>
          {types.map((type) => (
            <TouchableOpacity 
              key={type} 
              style={styles.dropdownItem}
              onPress={() => {
                setSelectedType(type);
                setTypeDropdownVisible(false);
              }}
            >
              <Text style={styles.dropdownItemText}>{type}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* Kayıtlar Listesi (Ortadaki Yeşil Kartlar) */}
      <ScrollView style={styles.recordsContainer}>
        {records.length === 0 ? (
          <Text style={styles.emptyText}>Henüz kayıt yok. Sağ alttaki + butonuna basın.</Text>
        ) : (
          records.map((record) => (
            <View key={record.id} style={styles.recordCard}>
              <View style={styles.recordHeader}>
                <Text style={styles.recordDate}>{record.date} / {record.time}</Text>
              </View>
              <Text style={styles.recordType}>{record.type}</Text>
              <View style={styles.recordDetails}>
                <Text style={styles.recordValue}>{record.duration}</Text>
                <Text style={styles.recordValue}>{record.amount}</Text>
              </View>
            </View>
          ))
        )}
      </ScrollView>

      {/* Sağ Alt Köşedeki Yuvarlak (+) Butonu */}
      <TouchableOpacity 
        style={styles.fab} 
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>

      {/* Kayıt Ekleme Pop-up'ı (Modal) */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{selectedType} Kayıt</Text>

            {/* Süre Slider */}
            <View style={styles.sliderContainer}>
              <Text style={styles.sliderLabel}>Süre:</Text>
              <View style={styles.sliderValueContainer}>
                <Text style={styles.sliderValueText}>
                  {Math.floor(duration / 60) > 0 ? Math.floor(duration / 60) + ' s ' : ''}{duration % 60} dk
                </Text>
              </View>
              <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={120}
                step={5}
                value={duration}
                onValueChange={setDuration}
                minimumTrackTintColor="#5CB85C"
                maximumTrackTintColor="#d3d3d3"
                thumbTintColor="#2B4A3B"
              />
            </View>

            {/* Miktar Slider (Meme seçili değilse gösterilir) */}
            {selectedType !== 'Meme' && (
              <View style={styles.sliderContainer}>
                <Text style={styles.sliderLabel}>Miktar:</Text>
                <View style={styles.sliderValueContainer}>
                  <Text style={styles.sliderValueText}>{amount} mL</Text>
                </View>
                <Slider
                  style={styles.slider}
                  minimumValue={0}
                  maximumValue={300}
                  step={10}
                  value={amount}
                  onValueChange={setAmount}
                  minimumTrackTintColor="#5CB85C"
                  maximumTrackTintColor="#d3d3d3"
                  thumbTintColor="#2B4A3B"
                />
              </View>
            )}

            {/* Modal İptal/Kaydet Butonları */}
            <View style={styles.modalButtons}>
              <TouchableOpacity 
                style={[styles.modalButton, { backgroundColor: '#A9A9A9' }]} 
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>İptal</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={[styles.modalButton, { backgroundColor: '#5CB85C' }]} 
                onPress={handleSave}
              >
                <Text style={styles.modalButtonText}>Kaydet</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  
  topBar: { alignItems: 'center', marginTop: 20, zIndex: 10 },
  dropdownButton: { backgroundColor: '#2B4A3B', paddingVertical: 10, paddingHorizontal: 30, borderRadius: 20 },
  dropdownButtonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  
  dropdownMenu: { position: 'absolute', top: 65, alignSelf: 'center', backgroundColor: '#6FA984', borderRadius: 10, width: 150, zIndex: 20, elevation: 5 },
  dropdownItem: { padding: 15, borderBottomWidth: 1, borderBottomColor: '#5C9070' },
  dropdownItemText: { color: 'white', textAlign: 'center', fontWeight: 'bold' },

  recordsContainer: { padding: 20, marginTop: 10 },
  emptyText: { textAlign: 'center', color: '#888', marginTop: 50 },
  recordCard: { backgroundColor: '#5CB85C', padding: 15, borderRadius: 10, marginBottom: 15 },
  recordHeader: { borderBottomWidth: 1, borderBottomColor: '#4CAe4C', paddingBottom: 5, marginBottom: 10 },
  recordDate: { color: '#E0F2E0', fontSize: 12 },
  recordType: { color: 'white', fontWeight: 'bold', fontSize: 16, marginBottom: 5 },
  recordDetails: { flexDirection: 'row', justifyContent: 'space-between' },
  recordValue: { color: 'white', fontSize: 16, fontWeight: 'bold' },

  fab: { position: 'absolute', bottom: 30, right: 30, backgroundColor: '#2B4A3B', width: 60, height: 60, borderRadius: 30, justifyContent: 'center', alignItems: 'center', elevation: 8, shadowColor: '#000', shadowOpacity: 0.3, shadowRadius: 5 },
  fabText: { color: 'white', fontSize: 30, fontWeight: 'bold', marginTop: -2 },

  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'center', alignItems: 'center' },
  modalContent: { backgroundColor: '#F5F5F5', width: '85%', padding: 25, borderRadius: 20 },
  modalTitle: { fontSize: 20, fontWeight: 'bold', color: '#2B4A3B', marginBottom: 20 },
  
  sliderContainer: { marginBottom: 25 },
  sliderLabel: { fontSize: 14, color: '#666', marginBottom: 5 },
  sliderValueContainer: { alignItems: 'center', marginBottom: 10 },
  sliderValueText: { fontSize: 18, fontWeight: 'bold', color: '#2B4A3B' },
  slider: { width: '100%', height: 40 },

  modalButtons: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  modalButton: { paddingVertical: 12, paddingHorizontal: 30, borderRadius: 10 },
  modalButtonText: { color: 'white', fontWeight: 'bold', fontSize: 16 }
});