🚀 Mood Tracker & Baby Care Assistant
Bu proje, bir mobil uygulama geliştirme challenge'ı kapsamında, belirlenen bir "mood board" (Pano T2) üzerinden ilham alınarak geliştirilmiştir. Uygulama, ebeveynlerin bebeklerinin besleme rutinlerini takip etmelerine ve kendi duygu durumlarını (PANAS Testi dahil) kayıt altına almalarına yardımcı olur.

✨ Öne Çıkan Özellikler
Modern Navigasyon: Expo Router kullanılarak dosya tabanlı, hızlı ve güvenli sayfa geçişleri sağlandı.

T2 Tasarım Dili: Proje; koyu yeşil, açık yeşil ve gri tonlarından oluşan "Doğa ve Huzur" temalı T2 panosuna sadık kalınarak tasarlandı.

Dinamik Veri Akışı: Besleme kayıtları ve günlük notları anlık olarak state yönetimi ile listelenmektedir.

Gelişmiş Kullanıcı Deneyimi (UX): - Besleme ekranında metin girişi yerine profesyonel Slider (Kaydırma Çubuğu) yapısı kullanıldı.

Kayıt ekleme işlemleri şık bir Modal (Açılır Pencere) üzerinden gerçekleştirilmektedir.

Liste boş olduğunda kullanıcıyı yönlendiren "Empty State" mesajları eklendi.

🛠️ Kullanılan Teknolojiler
Framework: React Native + Expo (SDK 50+)

Navigation: Expo Router

UI Components: React Native Community Slider

IDE & Build: Android Studio (Gradle 8.0+)

Language: JavaScript / TypeScript

📂 Proje Yapısı
Plaintext
/app             # Tüm ekranlar ve yönlendirme mantığı (Index, Mood, Feeding, Panas, Diary)
/assets          # Uygulama içi görseller ve ikonlar
/components      # Tekrar kullanılabilir arayüz bileşenleri (Button, Modal, ListItem)
/constants       # Renk paleti (T2 Pano Renkleri) ve sabit veriler
/android         # Native Android Build dosyaları
🎥 Proje Tanıtım Videosu
Uygulamanın emülatör üzerindeki çalışma performansını ve özelliklerini içeren videoya aşağıdan ulaşabilirsiniz:

👉 45 Saniyelik Tanıtım Videosunu İzle

📱 APK İndir (v1.0.0)
GitHub dosya boyutu sınırları nedeniyle, derlenmiş APK dosyasına "Releases" sekmesinden veya aşağıdaki direkt bağlantıdan ulaşabilirsiniz:

👉 MoodTracker_Sueda.apk İndir

🛠️ Kurulum ve Çalıştırma Notları
Projeyi klonlayın ve npm install komutunu çalıştırın.

Android Studio ile android klasörünü açın.

Gradle Sync tamamlandıktan sonra emülatör üzerinden veya npx expo start --android komutu ile uygulamayı başlatın.

💡 Teknik Notlar
Geliştirme Ortamı: React Native + Expo + Android Studio

Build Süreci: Proje Android Studio üzerinden Gradle kullanılarak başarıyla derlenmiştir.

Tasarım: T2 Mood Board renk paletine (Doğa ve Huzur teması) sadık kalınmıştır.
