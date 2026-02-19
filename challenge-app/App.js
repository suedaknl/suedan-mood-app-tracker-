import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Stack = createNativeStackNavigator();

// --- Ortak Başlık Bileşeni ---
const Header = ({ title, navigation, showBack = true }) => (
  <View style={styles.headerBar}>
    {showBack && (
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={{ fontSize: 24, color: '#fff' }}>←</Text>
      </TouchableOpacity>
    )}
    <Text style={styles.headerBarTitle}>{title}</Text>
    <View style={{ width: 40 }} />
  </View>
);

// --- 1. GİRİŞ EKRANI ---
function LoginScreen({ navigation }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <SafeAreaView style={styles.loginContainer}>
      <StatusBar barStyle="light-content" />
      <View style={styles.loginHeader}>
        <Text style={styles.loginTitle}>Giriş</Text>
        <Text style={styles.loginSubtitle}>Yap</Text>
      </View>
      <View style={styles.loginForm}>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput style={styles.loginInput} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
        <Text style={styles.inputLabel}>Parola</Text>
        <TextInput style={styles.loginInput} placeholder="Parola" value={password} onChangeText={setPassword} secureTextEntry />
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.replace('Dashboard')}>
          <Text style={styles.loginButtonText}>Giriş Yap</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerButtonText}>Kayıt Ol</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// --- 2. ANA MENÜ (DASHBOARD) ---
function DashboardScreen({ navigation }) {
  const menuItems = [
    { id: '1', title: 'Belirti Yönetimi', icon: '🔥', screen: 'Info', color: '#F87171' },
    { id: '2', title: 'Uzmana Sor', icon: '⚛️', screen: 'AskExpert', color: '#6366F1' },
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
      <View style={styles.dashboardTopBar}>
        <Text style={styles.dashboardBrand}>Kolorektal Kanser</Text>
        <Text style={styles.userName}>Aynur Bilgi</Text>
      </View>

      <ScrollView contentContainerStyle={{ padding: 15 }}>
        <TouchableOpacity style={[styles.infoBanner, { backgroundColor: '#8B5CF6' }]} onPress={() => navigation.navigate('Info')}>
          <Text style={styles.bannerText}>Covid-19 Bilgilendirme</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.infoBanner, { backgroundColor: '#F59E0B' }]} onPress={() => navigation.navigate('Info')}>
          <Text style={styles.bannerText}>Kolorektal Kanser Hakkında Bilgilendirme</Text>
        </TouchableOpacity>

        <View style={styles.gridContainer}>
          {menuItems.map((item) => (
            <TouchableOpacity 
              key={item.id} 
              style={[styles.menuCard, { backgroundColor: item.color }]} 
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

// --- 3. DİĞER EKRANLAR (Özet) ---
const InfoScreen = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <Header title="Bilgilendirme" navigation={navigation} />
    <ScrollView style={{ padding: 20 }}>
      <Text style={styles.infoTitle}>Risk Faktörleri Nelerdir?</Text>
      <Text style={styles.infoText}>• Yaş{"\n"}• Aşırı kilolu olmak{"\n"}• Fiziksel olarak aktif olmamak{"\n"}• Sigara ve alkol kullanımı</Text>
    </ScrollView>
  </SafeAreaView>
);

const AskExpertScreen = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <Header title="Uzmana Sor" navigation={navigation} />
    <View style={styles.centeredContent}>
      <TouchableOpacity style={styles.optionBtn}><Text style={styles.optionBtnText}>📝 Yazılı Soru Sor</Text></TouchableOpacity>
      <TouchableOpacity style={[styles.optionBtn, {backgroundColor: '#2DD4BF'}]}><Text style={styles.optionBtnText}>🎙️ Sesli Mesaj Gönder</Text></TouchableOpacity>
    </View>
  </SafeAreaView>
);

const ContactScreen = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <Header title="İletişim" navigation={navigation} />
    <View style={{ padding: 20 }}>
      <TextInput style={styles.loginInput} placeholder="Ad Soyad" />
      <TextInput style={styles.loginInput} placeholder="E-mail" />
      <TouchableOpacity style={styles.loginButton}><Text style={styles.loginButtonText}>Gönder</Text></TouchableOpacity>
    </View>
  </SafeAreaView>
);

const SymptomsScreen = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <Header title="Öneriler" navigation={navigation} />
    <View style={{ padding: 20 }}>
      <Text>Belirti yönetimi ve tavsiyeler burada yer alır.</Text>
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
  // Giriş Ekranı Stilleri
  loginContainer: { flex: 1, backgroundColor: '#2DD4BF' },
  loginHeader: { height: '35%', justifyContent: 'center', paddingLeft: 30 },
  loginTitle: { fontSize: 40, fontWeight: 'bold', color: '#fff' },
  loginSubtitle: { fontSize: 24, color: '#fff', opacity: 0.8 },
  loginForm: { flex: 1, backgroundColor: '#fff', borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 30 },
  inputLabel: { color: '#64748B', marginBottom: 5, fontWeight: '600' },
  loginInput: { backgroundColor: '#F1F5F9', padding: 15, borderRadius: 10, marginBottom: 20 },
  loginButton: { backgroundColor: '#2DD4BF', padding: 18, borderRadius: 10, alignItems: 'center' },
  loginButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  registerButton: { marginTop: 15, alignItems: 'center' },
  registerButtonText: { color: '#64748B', fontWeight: '600' },
  // Dashboard Stilleri
  dashboardTopBar: { flexDirection: 'row', justifyContent: 'space-between', padding: 20, backgroundColor: '#2DD4BF' },
  dashboardBrand: { color: '#fff', fontWeight: 'bold', fontSize: 18 },
  userName: { color: '#fff', opacity: 0.9 },
  infoBanner: { padding: 15, borderRadius: 12, marginBottom: 10, elevation: 3 },
  bannerText: { color: '#fff', fontWeight: 'bold', textAlign: 'center' },
  gridContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 10 },
  menuCard: { width: '48%', height: 120, borderRadius: 15, justifyContent: 'center', alignItems: 'center', marginBottom: 15, elevation: 4 },
  cardIcon: { fontSize: 35, marginBottom: 8 },
  cardTitle: { color: '#fff', fontWeight: 'bold', fontSize: 13, textAlign: 'center' },
  // Header & Diğerleri
  headerBar: { height: 60, backgroundColor: '#2DD4BF', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 15 },
  headerBarTitle: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  infoTitle: { fontSize: 22, fontWeight: 'bold', color: '#1E293B', marginBottom: 15 },
  infoText: { fontSize: 16, lineHeight: 28, color: '#475569' },
  centeredContent: { flex: 1, justifyContent: 'center', padding: 20 },
  optionBtn: { backgroundColor: '#6366F1', padding: 20, borderRadius: 15, marginBottom: 20 },
  optionBtnText: { color: '#fff', fontWeight: 'bold', textAlign: 'center', fontSize: 16 }
});