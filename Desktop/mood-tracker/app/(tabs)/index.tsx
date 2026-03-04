import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hoş Geldiniz</Text>
      
      {/* Expo Router'da sayfa geçişleri Link bileşeni ile yapılır */}
      <Link href="/mood" style={styles.button}>Nasıl Hissediyorum?</Link>
      <Link href="/feeding" style={styles.button}>Besleme Takibi</Link>
      <Link href="/panas" style={styles.button}>Panas Testi</Link>
      <Link href="/diary" style={styles.button}>Bebeğim İçin</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' },
  title: { fontSize: 24, marginBottom: 30, fontWeight: 'bold' },
  button: { 
    backgroundColor: '#ff6b81', // Pembe T1 temasına bir göz kırpalım
    color: 'white', 
    padding: 15, 
    borderRadius: 10, 
    marginVertical: 10,
    fontSize: 16,
    overflow: 'hidden'
  }
});