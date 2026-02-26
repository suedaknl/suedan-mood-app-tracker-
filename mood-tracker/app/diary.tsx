import { Stack } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function DiaryScreen() {
  const [note, setNote] = useState('');
  const [records, setRecords] = useState([]); // Geçmiş notları tutacağımız liste

  const handleSave = () => {
    if (!note.trim()) {
      alert('Lütfen bir not yazın.');
      return;
    }
    
    // Yeni notu oluştur
    const newRecord = {
      id: Date.now().toString(),
      text: note,
      date: new Date().toLocaleTimeString().slice(0, 5), // Saat formatı
    };
    
    // Yeni notu listenin başına ekle ve kutuyu temizle
    setRecords([newRecord, ...records]);
    setNote('');
    alert('Notunuz kaydedildi!');
  };

  return (
    <ScrollView style={styles.container}>
      <Stack.Screen options={{ title: 'Bebeğim İçin' }} />

      <View style={styles.formContainer}>
        <Text style={styles.title}>Bugün bebeğim için .... yaptım.</Text>
        
        <TextInput
          style={styles.input}
          multiline={true}
          numberOfLines={5}
          placeholder="Buraya yazın..."
          value={note}
          onChangeText={setNote}
          textAlignVertical="top"
        />

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Kaydet</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.recordsContainer}>
        <Text style={styles.sectionTitle}>Geçmiş Notlar</Text>
        
        {records.length === 0 ? (
          <Text style={styles.emptyText}>Henüz bir not eklemediniz.</Text>
        ) : (
          records.map((record) => (
            <View key={record.id} style={styles.recordCard}>
              <Text style={styles.recordTime}>{record.date}</Text>
              <Text style={styles.recordText}>{record.text}</Text>
            </View>
          ))
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF0F5' },
  formContainer: { backgroundColor: '#FFB6C1', margin: 15, padding: 20, borderRadius: 15 },
  title: { fontSize: 18, fontWeight: 'bold', color: 'white', marginBottom: 15 },
  input: { backgroundColor: 'white', borderRadius: 10, padding: 15, fontSize: 16, minHeight: 100 },
  saveButton: { backgroundColor: '#FF1493', paddingVertical: 12, borderRadius: 10, alignItems: 'center', marginTop: 15 },
  saveButtonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
  
  recordsContainer: { marginHorizontal: 15, paddingBottom: 20 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#FF1493', marginBottom: 10 },
  emptyText: { textAlign: 'center', color: '#888', fontStyle: 'italic' },
  recordCard: { backgroundColor: '#FFE4E1', padding: 15, borderRadius: 10, marginBottom: 10 },
  recordTime: { fontSize: 12, color: '#FF69B4', marginBottom: 5, fontWeight: 'bold' },
  recordText: { fontSize: 16, color: '#333' }
});