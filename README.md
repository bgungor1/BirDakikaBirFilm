# 🎬 Bir Dakikada Film Tahmini (Movie Quiz App)

![React](https://img.shields.io/badge/React-19.0-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.0-purple?logo=vite)
![Tailwind](https://img.shields.io/badge/TailwindCSS-3.0-38bdf8?logo=tailwindcss)
![DaisyUI](https://img.shields.io/badge/DaisyUI-4.0-ff69b4?logo=daisyui)
![License](https://img.shields.io/badge/license-MIT-green)

**Bir Dakikada Film Tahmini**, React + Vite ile geliştirilmiş, modern ve kullanıcı dostu bir quiz uygulamasıdır.  
Kullanıcılar, Open Trivia Database API'sinden gelen gerçek film sorularıyla quiz yapabilir.  
60 saniye süreli Timer ⏱, ProgressBar 📊, Dark/Light Tema 🌗 desteği, localStorage sonuç takibi 🏆 ve interaktif UI bileşenleriyle kapsamlı bir deneyim sunar.

---

## ✨ Özellikler (Features)

### 🎯 Temel Özellikler
- 🎥 **Gerçek Film Soruları**: Open Trivia Database API entegrasyonu
- ⏱ **60 Saniye Timer**: Süre bittiğinde otomatik sonraki soruya geçiş  
- 📊 **ProgressBar**: Quiz ilerlemesini gösterir  
- 🌗 **Dark/Light Tema**: DaisyUI ile tema toggle (localStorage'da kaydedilir)
- ✅ **Doğru/Yanlış Geri Bildirim**: Seçilen cevaba göre buton renkleri değişir  
- 📱 **Responsive Tasarım**: Web ve mobil için uyumlu

### 🏆 Gelişmiş Özellikler
- 🧭 **Navigation Bar**: Quiz başlatma, sonuçlar ve hakkında bölümleri
- 📈 **Sonuç Takibi**: localStorage'da quiz sonuçlarının saklanması
- 🏅 **Skor Sıralaması**: Performansa göre otomatik sıralama (yüzde > doğru sayısı > tarih)
- 🗑️ **Sonuç Sıfırlama**: Tek tıkla tüm sonuçları silme özelliği
- 📧 **Newsletter**: Yeni quiz bildirimleri için abonelik sistemi
- 🎊 **Confetti Efekti**: Yüksek skorlarda kutlama animasyonu

### 🔧 Teknik Özellikler
- 🔄 **API Entegrasyonu**: Dinamik soru çekme sistemi
- ⚡ **Loading States**: Veri yüklenirken kullanıcı deneyimi
- 🚨 **Error Handling**: API hatalarında retry mekanizması
- 🎨 **Modern UI**: DaisyUI component library
- 📦 **Barrel Exports**: Temiz import yapısı

---

## 🌍 English Version

Movie Quiz App is a modern and interactive quiz application built with React + Vite.
Players answer real movie questions from Open Trivia Database API.
Includes 60s timer, progress bar, dark/light theme toggle, localStorage result tracking, and comprehensive UI components.

### Core Features
- 🎥 Real movie questions from Open Trivia Database API
- ⏱ 60 seconds per question (auto skip on timeout)
- 📊 Progress bar to show quiz progress
- 🌗 Dark/Light theme toggle (saved in localStorage)
- ✅ Instant feedback (button colors change for correct/wrong answers)
- 📱 Responsive design for both desktop and mobile

### Advanced Features
- 🧭 Navigation bar with quiz start, results, and about sections
- 📈 Result tracking with localStorage persistence
- 🏅 Score ranking system (percentage > correct answers > date)
- 🗑️ Result clearing functionality
- 📧 Newsletter subscription for new quiz notifications
- 🎊 Confetti effects for high scores

---

## 📸 Ekran Görüntüleri (Screenshots)

### Light Tema
![Light Screenshot](screenshots/light-theme.png.png)

### Dark Tema
![Dark Screenshot](screenshots/dark-theme.png.png)

---

## 🚀 Kurulum (Installation)

Projeyi klonlayın ve bağımlılıkları yükleyin:

```bash
git clone https://github.com/bgungor1/BirDakikaBirFilm.git
cd BirDakikaBirFilm
npm install
```

Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

Production build için:
```bash
npm run build
npm run deploy
```

---

## 🏗️ Proje Yapısı

```
BirDakikaBirFilm/
├── src/
│   ├── components/
│   │   ├── index.js              # Barrel exports
│   │   ├── StartScreen.jsx       # Başlangıç ekranı
│   │   ├── Quiz.jsx              # Ana quiz bileşeni
│   │   ├── ResultScreen.jsx      # Sonuç ekranı
│   │   ├── Timer.jsx             # Zamanlayıcı
│   │   ├── ProgressBar.jsx       # İlerleme çubuğu
│   │   ├── LoadingScreen.jsx     # Yükleme ekranı
│   │   ├── ErrorScreen.jsx       # Hata ekranı
│   │   ├── Navbar.jsx            # Navigasyon çubuğu
│   │   └── Footer.jsx            # Alt bilgi
│   ├── services/
│   │   ├── api.js                # Open Trivia API servisi
│   │   └── mockApi.js            # Mock API (test için)
│   ├── App.jsx                   # Ana uygulama bileşeni
│   ├── main.jsx                  # Giriş noktası
│   └── index.css                 # Global stiller
├── screenshots/                  # Ekran görüntüleri
├── package.json                  # Bağımlılıklar
├── vite.config.js               # Vite konfigürasyonu
└── tailwind.config.js           # Tailwind konfigürasyonu
```

---

## 🎯 Kullanım (Usage)

### 1. Quiz Başlatma
- **Ana Sayfa:** "Quiz Başlat" butonuna tıklayın
- **Navbar:** Sağ üstteki "Quiz Başlat" butonunu kullanın
- **Loading:** Sorular API'den yüklenirken loading ekranı görünür

### 2. Quiz Oynama
- **Süre:** Her soru için 60 saniye
- **Seçenekler:** 4 farklı cevap seçeneği
- **Geri Bildirim:** Doğru/yanlış anında gösterilir
- **İlerleme:** Progress bar ile quiz durumu

### 3. Sonuç Takibi
- **Otomatik Kayıt:** Quiz bitiminde sonuç localStorage'a kaydedilir
- **Sonuçlar Modal:** Navbar'dan "Sonuçlar" butonuna tıklayın
- **Sıralama:** En yüksek skorlar üstte görünür
- **Sıfırlama:** "🗑️ Tüm Sonuçları Sıfırla" ile temizleyin

### 4. Tema Değiştirme
- **DaisyUI Toggle:** Otomatik tema değiştirme
- **LocalStorage:** Tema tercihi kaydedilir
- **Responsive:** Tüm cihazlarda uyumlu

---

## 🔌 API Entegrasyonu

### Open Trivia Database API
```javascript
// API Endpoint
const API_URL = 'https://opentdb.com/api.php?amount=10&category=11&type=multiple';

// Parametreler
- amount: Soru sayısı (1-50)
- category: 11 (Film kategorisi)
- type: multiple (Çoktan seçmeli)
- difficulty: easy, medium, hard (opsiyonel)
```

### Veri Dönüşümü
```javascript
// API'den gelen format
{
  question: "Who played Batman in the 1997 film 'Batman and Robin'?",
  correct_answer: "George Clooney",
  incorrect_answers: ["Michael Keaton", "Val Kilmer", "Christian Bale"]
}

// Projemizin formatına dönüştürülür
{
  question: "Who played Batman in the 1997 film 'Batman and Robin'?",
  options: ["George Clooney", "Michael Keaton", "Val Kilmer", "Christian Bale"],
  answer: "George Clooney"
}
```

### HTML Entity Decoding
```javascript
// API'den gelen HTML entities otomatik decode edilir
"Baymax&#039;" → "Baymax'"
"&quot;The Matrix&quot;" → ""The Matrix""
```

---

## 🏆 Sonuç Sistemi

### localStorage Yapısı
```javascript
// quizResults array'i
[
  {
    id: 1,
    score: 8,
    total: 10,
    percentage: 80,
    date: "2025-01-15",
    time: "14:30"
  }
]
```

### Sıralama Algoritması
1. **Yüzde (%)** - En yüksek yüzde üstte
2. **Doğru Sayısı** - Yüzde aynıysa doğru sayısına bak
3. **Tarih** - Her ikisi de aynıysa en yeni üstte

### Görsel Göstergeler
- **🥇🥈🥉** - İlk 3 sıra için madalya
- **📊 Badge'ler** - Yeşil (≥80%), Sarı (≥60%), Kırmızı (<60%)
- **📈 Yüzde** - Renkli yüzde göstergeleri

---

## 🛠️ Teknolojiler

### Frontend
- **React 19** - Modern UI framework
- **Vite** - Hızlı build tool
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library

### API & Data
- **Open Trivia Database** - Gerçek quiz soruları
- **Fetch API** - HTTP istekleri
- **localStorage** - Client-side veri saklama

### Development
- **ESLint** - Code linting
- **GitHub Pages** - Deployment
- **Responsive Design** - Mobile-first approach

---

## 🚀 Deployment

### GitHub Pages
```bash
# Build ve deploy
npm run build
npm run deploy
```

### Vite Config
```javascript
// vite.config.js
export default defineConfig({
  base: '/BirDakikaBirFilm/',
  plugins: [react(), tailwindcss()]
})
```

---

## 🔧 Geliştirme

### Yeni Özellik Ekleme
1. Component'i `src/components/` altında oluştur
2. `src/components/index.js`'e export ekle
3. `App.jsx`'te import et ve kullan

### API Değişiklikleri
1. `src/services/api.js`'i güncelle
2. Error handling ekle
3. Loading states kontrol et

### Stil Değişiklikleri
1. Tailwind CSS classes kullan
2. DaisyUI component'lerini tercih et
3. Responsive design'a dikkat et

---

## 📝 Gelecek Geliştirmeler

### 🎯 Planlanan Özellikler
- [ ] Farklı kategoriler (TV, spor, bilim vb.)
- [ ] Zorluk seviyesi filtreleme
- [ ] Offline cache desteği
- [ ] Progressive loading
- [ ] Error boundary'ler
- [ ] Token sistemi (daha fazla soru için)
- [ ] Çoklu dil desteği
- [ ] Sosyal medya paylaşımı
- [ ] Quiz istatistikleri
- [ ] Kullanıcı profilleri

### 🐛 Bug Fixes
- [x] Çift kayıt sorunu çözüldü
- [x] HTML entity decoding eklendi
- [x] Loading spinner merkezlendi
- [x] API error handling iyileştirildi

---

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request açın

---

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için `LICENSE` dosyasına bakın.

---

## 👨‍💻 Geliştirici

**Burak Güngör**
- GitHub: [@bgungor1](https://github.com/bgungor1)
- Proje: [BirDakikaBirFilm](https://github.com/bgungor1/BirDakikaBirFilm)

---

## 🙏 Teşekkürler

- [Open Trivia Database](https://opentdb.com/) - Quiz soruları için
- [DaisyUI](https://daisyui.com/) - UI component'leri için
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework için
- [React](https://reactjs.org/) - JavaScript library için

---

**⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!** 






