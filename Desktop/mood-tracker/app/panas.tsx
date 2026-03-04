import { Stack } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function PanasScreen() {
  // Her sorunun 1-5 arası cevabını tutacağımız state objesi
  const [scores, setScores] = useState({});

  // Görseldeki sorular
  const questions = [
    { id: '1', title: '1. İlgili' },
    { id: '2', title: '2. Sıkıntılı' },
    { id: '3', title: '3. Heyecanlı' },
    { id: '4', title: '4. Mutsuz' },
  ];

  // Butona basıldığında o sorunun puanını güncelleyen fonksiyon
  const handleSelect = (questionId, score) => {
    setScores({ ...scores, [questionId]: score });
  };

  const handleSave = () => {
    // Kaç soru cevaplanmış kontrolü yapabiliriz
    const answeredCount = Object.keys(scores).length;
    if (answeredCount < questions.length) {
      alert('Lütfen tüm soruları cevaplayın.');
    } else {
      alert('Panas Testi başarıyla kaydedildi!');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Stack.Screen options={{ title: 'Panas Testi' }} />

      {questions.map((q) => (
        <View key={q.id} style={styles.card}>
          <Text style={styles.questionTitle}>{q.title}</Text>
          
          <View style={styles.optionsContainer}>
            {[1, 2, 3, 4, 5].map((num) => (
              <TouchableOpacity
                key={num}
                style={[
                  styles.scoreButton,
                  scores[q.id] === num && styles.selectedScoreButton
                ]}
                onPress={() => handleSelect(q.id, num)}
              >
                <Text style={[
                  styles.scoreText,
                  scores[q.id] === num && styles.selectedScoreText
                ]}>
                  {num}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Alt kısımdaki Hiç / Çok Fazla etiketleri */}
          <View style={styles.labelsContainer}>
            <Text style={styles.labelText}>Hiç</Text>
            <Text style={styles.labelText}>Oldukça</Text>
            <Text style={styles.labelText}>Çok fazla</Text>
          </View>
        </View>
      ))}

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Kaydet</Text>
      </TouchableOpacity>
      
      {/* Alt kısımda biraz boşluk bırakmak için */}
      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF0F5', padding: 15 },
  card: { backgroundColor: '#FFB6C1', padding: 15, borderRadius: 15, marginBottom: 15 }, // T1 Pembe kart arka planı
  questionTitle: { fontSize: 18, fontWeight: 'bold', color: 'white', marginBottom: 15 },
  optionsContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  
  scoreButton: { 
    backgroundColor: '#FF69B4', 
    width: 45, 
    height: 45, 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 10 
  },
  selectedScoreButton: { 
    backgroundColor: 'white', 
    borderWidth: 2, 
    borderColor: '#FF1493' 
  },
  
  scoreText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  selectedScoreText: { color: '#FF1493' },
  
  labelsContainer: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5 },
  labelText: { color: 'white', fontSize: 12 },
  
  saveButton: { backgroundColor: '#FF1493', paddingVertical: 15, borderRadius: 10, alignItems: 'center', marginTop: 10 },
  saveButtonText: { color: 'white', fontSize: 18, fontWeight: 'bold' }
});