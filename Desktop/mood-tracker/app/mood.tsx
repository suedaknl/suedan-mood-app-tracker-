import { Stack } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function MoodScreen() {
  // Seçilen duyguyu hafızada tutmak için state kullanıyoruz
  const [selectedMood, setSelectedMood] = useState(null);

  const moods = [
    { id: 'notr', emoji: '😐', label: 'Nötr' },
    { id: 'mutlu', emoji: '🙂', label: 'Mutlu' },
    { id: 'cok_mutlu', emoji: '😃', label: 'Çok Mutlu' },
  ];

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Nasıl Hissediyorum?' }} />

      <View style={styles.card}>
        <Text style={styles.question}>Nasıl Hissediyorum?</Text>
        
        <View style={styles.emojiContainer}>
          {moods.map((item) => (
            <TouchableOpacity 
              key={item.id} 
              style={[
                styles.emojiButton, 
                selectedMood === item.id && styles.selectedEmojiButton
              ]}
              onPress={() => setSelectedMood(item.id)}
            >
              <Text style={styles.emoji}>{item.emoji}</Text>
              <Text style={[
                styles.emojiLabel,
                selectedMood === item.id && styles.selectedEmojiLabel
              ]}>
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity 
          style={styles.saveButton}
          onPress={() => alert(selectedMood ? 'Kaydedildi!' : 'Lütfen bir duygu seçin')}
        >
          <Text style={styles.saveButtonText}>Kaydet</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF0F5', alignItems: 'center', justifyContent: 'center' }, // Pembe arka plan
  card: { backgroundColor: 'white', padding: 20, borderRadius: 20, width: '90%', elevation: 5, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 10 },
  question: { fontSize: 20, fontWeight: 'bold', color: '#FF69B4', textAlign: 'center', marginBottom: 20 },
  emojiContainer: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 30 },
  emojiButton: { alignItems: 'center', padding: 10, borderRadius: 15 },
  selectedEmojiButton: { backgroundColor: '#FFE4E1' }, // Seçilince hafif pembe arka plan
  emoji: { fontSize: 40 },
  emojiLabel: { fontSize: 14, color: '#888', marginTop: 5 },
  selectedEmojiLabel: { color: '#FF69B4', fontWeight: 'bold' },
  saveButton: { backgroundColor: '#FF69B4', paddingVertical: 15, borderRadius: 10, alignItems: 'center' },
  saveButtonText: { color: 'white', fontSize: 18, fontWeight: 'bold' }
});