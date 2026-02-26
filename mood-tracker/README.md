# 🚀 Mood Tracker & Baby Care Assistant

Bu proje, bir mobil uygulama geliştirme challenge'ı kapsamında, belirlenen bir "mood board" (Pano T2) üzerinden ilham alınarak 2 gün içerisinde geliştirilmiştir. Uygulama, ebeveynlerin bebeklerinin besleme rutinlerini takip etmelerine ve kendi duygu durumlarını (PANAS Testi dahil) kayıt altına almalarına yardımcı olur.

## ✨ Öne Çıkan Özellikler

- **Modern Navigasyon:** Expo Router kullanılarak dosya tabanlı, hızlı ve güvenli sayfa geçişleri sağlandı.
- **T2 Tasarım Dili:** Proje; koyu yeşil, açık yeşil ve gri tonlarından oluşan "Doğa ve Huzur" temalı T2 panosuna sadık kalınarak tasarlandı.
- **Dinamik Veri Akışı:** Besleme kayıtları ve günlük notları anlık olarak state yönetimi ile listelenmektedir.
- **Gelişmiş Kullanıcı Deneyimi (UX):** - Besleme ekranında metin girişi yerine profesyonel **Slider (Kaydırma Çubuğu)** yapısı kullanıldı.
  - Kayıt ekleme işlemleri şık bir **Modal (Açılır Pencere)** üzerinden gerçekleştirilmektedir.
  - Liste boş olduğunda kullanıcıyı yönlendiren "Empty State" mesajları eklendi.

## 🛠️ Kullanılan Teknolojiler

- **Framework:** React Native + Expo (SDK 50+)
- **Navigation:** Expo Router
- **UI Components:** React Native Community Slider
- **Language:** JavaScript / TypeScript
- **Version Control:** Git & GitHub

## 📂 Proje Yapısı

```text
/app             # Tüm ekranlar ve yönlendirme mantığı (Index, Mood, Feeding, Panas, Diary)
/assets          # Uygulama içi görseller ve ikonlar
/components      # Tekrar kullanılabilir arayüz bileşenleri