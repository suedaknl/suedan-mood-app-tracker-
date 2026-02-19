import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Stack = createNativeStackNavigator();

// --- ORTAK BAŞLIK (HEADER) ---
const Header = ({ title, navigation }) => (
  <View style={styles.headerBar}>
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
      <Text style={{fontSize: 24, color: '#fff'}}>←</Text>
    </TouchableOpacity>
    <Text style={styles.headerBarTitle}>{title}</Text>
    <View style={{width: 40}} />
  </View>
);

// --- GİRİŞ EKRANI ---
function LoginScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.loginContainer}>
      <View style={styles.loginHeader}>
        <Text style={styles.loginTitle}>Giriş</Text>
        <Text style={styles.loginSubtitle}>Yap</Text>
      </View>
      <View style={styles.loginForm}>
        <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
        <TextInput style={styles.input} placeholder="Parola" secureTextEntry />
        <TouchableOpacity style={styles.mainButton} onPress={() => navigation.replace('Dashboard')}>
          <Text style={styles.mainButtonText}>Giriş Yap</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// --- ANA DASHBOARD (9'LU IZGARA) ---
function DashboardScreen({ navigation }) {
  const menuItems = [
    { id: '1', title: 'Belirti Yönetimi', icon: '🔥', screen: 'Symptoms', color: '#F87171' },
    { id: '2', title: 'Uzmana Sor', icon: '💬', screen: 'AskExpert', color: '#6366F1' },
    { id: '3', title: 'Hasta Deneyimi', icon: '🧍', screen: 'Alert', color: '#2DD4BF' },
    { id: '4', title: 'Belirti Takvimi', icon: '📅', screen: 'Alert', color: '#F87171' },
    { id: '5', title: 'Kan Tahlili', icon: '💧', screen: 'Alert', color: '#F472B6' },
    { id: '6', title: 'Öneriler', icon: '🩺', screen: 'Symptoms', color: '#2DD4BF' },
    { id: '7', title: 'İletişim', icon: '📞', screen: 'Contact', color: '#2DD4BF' },
    { id: '8', title: 'Hakkında', icon: '❓', screen: 'Info', color: '#6366F1' },
    { id: '9', title: 'Çıkış Yap', icon: '🚪', screen: 'Login', color: '#64748B' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topHeader}>
        <Text style={styles.topHeaderText}>Kolorektal Kanser</Text>
        <Text style={styles.userName}>Aynur Bilgi</Text>
      </View>
      <ScrollView contentContainerStyle={{ padding: 15 }}>
        <TouchableOpacity style={[styles.banner, { backgroundColor: '#8B5CF6' }]} onPress={() => navigation.navigate('Info')}>
          <Text style={styles.bannerText}>Covid-19 Bilgilendirme</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.banner, { backgroundColor: '#F59E0B' }]} onPress={() => navigation.navigate('Info')}>
          <Text style={styles.bannerText}>Kanser Hakkında Bilgilendirme</Text>
        </TouchableOpacity>
        <View style={styles.grid}>
          {menuItems.map((item) => (
            <TouchableOpacity 
              key={item.id} 
              style={[styles.card, { backgroundColor: item.color }]} 
              onPress={() => item.id === '9' ? navigation.replace('Login') : navigation.navigate(item.screen)}
            >
              <Text style={styles.cardIcon}>{item.icon}</Text>
              <Text style={styles.cardTitle}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// --- DİĞER EKRANLAR (Özet) ---
const InfoScreen = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <Header title="Bilgilendirme" navigation={navigation} />
    <ScrollView style={{ padding: 20 }}>
      <Text style={styles.infoTitle}>Risk Faktörleri</Text>
      <Text style={styles.infoText}>• Yaş{"\n"}• Beslenme alışkanlıkları{"\n"}• Fiziksel aktivite azlığı</Text>
    </ScrollView>
  </SafeAreaView>
);

const AskExpertScreen = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <Header title="Uzmana Sor" navigation={navigation} />
    <View style={styles.centered}>
      <TouchableOpacity style={styles.optionBtn}><Text style={styles.optionText}>📝 Yazılı Soru</Text></TouchableOpacity>
      <TouchableOpacity style={[styles.optionBtn, {backgroundColor: '#2DD4BF'}]}><Text style={styles.optionText}>🎙️ Sesli Mesaj</Text></TouchableOpacity>
    </View>
  </SafeAreaView>
);

const ContactScreen = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <Header title="İletişim" navigation={navigation} />
    <View style={{ padding: 20 }}>
      <TextInput style={styles.input} placeholder="Ad Soyad" />
      <TouchableOpacity style={styles.mainButton}><Text style={styles.mainButtonText}>Gönder</Text></TouchableOpacity>
    </View>
  </SafeAreaView>
);

const SymptomsScreen = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <Header title="Öneriler" navigation={navigation} />
    <View style={{ padding: 20 }}>
      <Text>Hastalık belirtileri ve tavsiyeler modülü.</Text>
    </View>
  </SafeAreaView>
);

// --- ANA NAVİGASYON ---
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Info" component={InfoScreen} />
        <Stack.Screen name="AskExpert" component={AskExpertScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
        <Stack.Screen name="Symptoms" component={SymptomsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC' },
  loginContainer: { flex: 1, backgroundColor: '#2DD4BF' },
  loginHeader: { height: '35%', justifyContent: 'center', paddingLeft: 30 },
  loginTitle: { fontSize: 40, fontWeight: 'bold', color: '#fff' },
  loginSubtitle: { fontSize: 24, color: '#fff', opacity: 0.8 },
  loginForm: { flex: 1, backgroundColor: '#fff', borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 30 },
  input: { backgroundColor: '#F1F5F9', padding: 15, borderRadius: 10, marginBottom: 15 },
  mainButton: { backgroundColor: '#2DD4BF', padding: 18, borderRadius: 10, alignItems: 'center' },
  mainButtonText: { color: '#fff', fontWeight: 'bold' },
  topHeader: { flexDirection: 'row', justifyContent: 'space-between', padding: 20, backgroundColor: '#2DD4BF' },
  topHeaderText: { color: '#fff', fontWeight: 'bold' },
  userName: { color: '#fff', opacity: 0.8 },
  banner: { padding: 15, borderRadius: 10, marginBottom: 10 },
  bannerText: { color: '#fff', fontWeight: 'bold', textAlign: 'center' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  card: { width: '48%', height: 120, borderRadius: 15, justifyContent: 'center', alignItems: 'center', marginBottom: 15 },
  cardIcon: { fontSize: 35, marginBottom: 5 },
  cardTitle: { color: '#fff', fontSize: 12, fontWeight: 'bold', textAlign: 'center' },
  headerBar: { height: 60, backgroundColor: '#2DD4BF', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 15 },
  headerBarTitle: { color: '#fff', fontWeight: 'bold' },
  backButton: { padding: 5 },
  infoTitle: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  infoText: { fontSize: 16, lineHeight: 24 },
  centered: { flex: 1, justifyContent: 'center', padding: 20 },
  optionBtn: { backgroundColor: '#6366F1', padding: 20, borderRadius: 10, marginBottom: 15 },
  optionText: { color: '#fff', fontWeight: 'bold', textAlign: 'center' }
});