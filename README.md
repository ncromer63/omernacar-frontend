https://omernacar-frontend.vercel.app

# Kampüs Etkinlikleri — Vize Teslim Projesi

Bu proje, **React**, **TypeScript**, **Vite**, **React Router** ve **Context API** kullanılarak geliştirilmiş, üniversite kampüsündeki seminer, atölye, söyleşi ve yarışma etkinliklerinin listelendiği, filtrelendiği ve yönetildiği tek sayfa uygulamasıdır (SPA).

## Öğrenci ve Yayın Bilgileri
- **Ad Soyad:** Ömer Nacar
- **Öğrenci No:** 2416501085
- **Tema Rengi:** Vişne Çürüğü (`--ton: 346`, `hsl(var(--ton) 65% 32%)`)
- **Vercel Canlı Link:** [https://omernacar-frontend.vercel.app](https://omernacar-frontend.vercel.app)
- **GitHub Deposu:** [https://github.com/ncromer63/omernacar-frontend](https://github.com/ncromer63/omernacar-frontend)
- **Yerel Geliştirme (Local):** `http://localhost:5173/` (`npm install` ardından `npm run dev`)

---

## Klasör ve Dosya Yapısı

```text
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx         # Aktif rotaya ve seçili etkinliğe göre dinamik başlık, alt yazı ve sekme adı (document.title) bileşeni
│   │   ├── Navigation.tsx     # NavLink ile aktif sayfa vurgulu (aria-current="page") 4 ana menü bağlantısı
│   │   └── Footer.tsx         # Öğrenci künyesini (Ömer Nacar · 2416501085 · 2026) barındıran alt bilgi bileşeni
│   ├── events/
│   │   ├── EventCard.tsx      # Tek bir etkinlik kartının görselleştirilmesi ve detay sayfasına yönlendirme linki
│   │   ├── EventList.tsx      # Etkinlik dizisini dönüp EventCard'ları listeleyen veya boş durum mesajı gösteren ortak bileşen
│   │   ├── EventFilter.tsx    # Başlık/açıklama arama kutusu ve kategori seçim formu (controlled inputs)
│   │   └── EventDetail.tsx    # Tekil etkinliğin afiş, künye (dl/dt/dd) ve açıklama detay bloğu
│   └── forms/
│       └── EventForm.tsx      # Etkinlik Ekle ve Etkinlik Güncelle sayfalarında kullanılan doğrulamalı ortak form bileşeni
├── context/
│   └── EventsContext.tsx      # EventsProvider ve useEvents kancası ile tüm sayfalara bağlı merkezi CRUD state yönetimi
├── data/
│   └── events.ts              # 6 adet tipli başlangıç etkinlik verisi (initialEvents)
├── pages/
│   ├── HomePage.tsx           # / — Tarihe göre yaklaşan ilk 2 etkinliği listeleyen ana sayfa
│   ├── EventsPage.tsx         # /events — Arama ve kategori filtreleme özellikli tüm etkinlikler sayfası
│   ├── EventDetailPage.tsx    # /events/:id — URL parametresindeki ID'ye göre etkinlik detayını gösteren sayfa
│   ├── AdminPage.tsx          # /admin — Etkinlik yönetim tablosu, düzenleme linki ve silmeden önce onay (window.confirm) işlemi
│   ├── EtkinlikEkle.tsx       # /admin/new — Yeni etkinlik ekleme sayfası (Context üzerinden ekler ve /admin'e yönlendirir)
│   ├── EtkinlikGuncelle.tsx   # /admin/:id/edit — Mevcut etkinliği güncelleyen sayfa (Context üzerinden günceller ve /admin'e yönlendirir)
│   ├── LoginPage.tsx          # /login — E-posta ve şifre doğrulamalı giriş sayfası
│   ├── RegisterPage.tsx       # /register — Ad soyad, e-posta, şifre ve şifre tekrarı doğrulamalı kayıt sayfası
│   ├── ForgotPasswordPage.tsx # /forgot-password — E-posta doğrulamalı şifre sıfırlama bağlantısı gönderim sayfası
│   └── NotFoundPage.tsx       # * — Bulunamayan sayfa veya etkinlikler için 404 karşılama ekranı
├── types/
│   └── campus-event.ts        # Category, CampusEvent ve EventFormData TypeScript veri tipleri
├── utils/
│   ├── filter-events.ts       # searchEvents, filterByCategory ve findEventById saf (pure) fonksiyonları
│   └── format-date.ts         # ISO tarih dizgesini Türkçe uzun tarih formatına çeviren yardımcı fonksiyon
├── App.css                    # Vişne çürüğü CSS değişkenleri, responsive grid, form hata stilleri ve mobil tablo görünümü
├── App.tsx                    # Header, Navigation, 10 adet Route tanımı ve Footer ana bileşeni
├── index.css                  # Genel stil sıfırlama dosyası
└── main.tsx                   # BrowserRouter ve EventsProvider sarmalayıcılarıyla React uygulamasını başlatan kök dosya
```

---

## Tanımlanan 10 Adet Router (`src/App.tsx`)

| # | Rota (Path) | Sayfa Bileşeni | Açıklama |
|---|---|---|---|
| 1 | `/` | `HomePage` | Tarihe göre yaklaşan 2 etkinlik ve tüm etkinliklere geçiş butonu |
| 2 | `/events` | `EventsPage` | Tüm etkinliklerin listesi, canlı metin araması ve kategori filtresi |
| 3 | `/events/:id` | `EventDetailPage` | Seçilen etkinliğin afişi, künyesi, açıklaması ve güncelleme bağlantısı |
| 4 | `/admin` | `AdminPage` | Etkinlik yönetim tablosu, yeni etkinlik ekleme, düzenleme ve onaylı silme |
| 5 | `/admin/new` | `EtkinlikEkle` | Doğrulamalı yeni etkinlik ekleme formu |
| 6 | `/admin/:id/edit` | `EtkinlikGuncelle` | Mevcut etkinlik verileriyle dolu doğrulamalı güncelleme formu |
| 7 | `/login` | `LoginPage` | E-posta (`@`) ve şifre (en az 6 karakter) doğrulamalı giriş formu |
| 8 | `/register` | `RegisterPage` | Ad soyad (en az 3 karakter), e-posta, şifre ve şifre tekrar doğrulamalı kayıt formu |
| 9 | `/forgot-password` | `ForgotPasswordPage` | Kayıtlı e-posta doğrulamalı şifre yenileme formu |
| 10 | `*` | `NotFoundPage` | Geçersiz adres veya silinmiş etkinliklerde gösterilen 404 sayfası |

---

## Kurulum ve Çalıştırma Komutları

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat (http://localhost:5173)
npm run dev

# TypeScript tip kontrolü ve üretim (production) derlemesi al
npm run build

# Üretim derlemesini yerel olarak önizle
npm run preview
```

---

## Teslim Öncesi Kontrol Listesi (13 Madde)

- [x] **1. Tüm linkler çalışıyor:** Menü (`Ana Sayfa`, `Etkinlikler`, `Yönetim`, `Giriş`), kart detay linkleri, yönetim butonları ve form alt bağlantıları eksiksiz çalışmaktadır.
- [x] **2. Tüm sayfalar hazır:** 10 sayfanın tamamı örnek sitedeki içerik ve işlevlerle birebir hazırlanmıştır.
- [x] **3. Klasör ve dosya yapısı oluşturuldu:** `components`, `context`, `data`, `pages`, `types`, `utils` klasör yapısı kuruldu.
- [x] **4. 10 adet router tanımlandı:** `src/App.tsx` içinde `<Routes>` altında 10 adet `<Route>` tanımlandı.
- [x] **5. Context kullanıldı ve tüm sayfalara bağlandı:** `EventsContext` (`EventsProvider` ve `useEvents`) ile tüm sayfalar merkezi veriye bağlandı.
- [x] **6. Ekle, sil, güncelle ve silmeden önce onay çalışıyor; etkisi diğer sayfalarda görülüyor:** `window.confirm` ile silme onayı alınmakta; ekleme, güncelleme ve silme işlemleri tüm sayfalara anında yansımaktadır.
- [x] **7. Son çalışır proje GitHub'a gönderildi:** Tüm kaynak kodlar public GitHub deposuna aktarıldı.
- [x] **8. Proje Vercel'de `isimsoyisim-frontend.vercel.app` adresiyle yayında:** SPA yönlendirmeleri için `vercel.json` eklendi ve `omernacar-frontend.vercel.app` adresine uyumlu yapılandırıldı.
- [x] **9. README yazıldı, Vercel linki README'ye eklendi:** İlk satırda ve yayın bilgileri bölümünde canlı Vercel linki yer almaktadır.
- [x] **10. Mobil görünüm doğru çalışıyor:** 700px altında ızgara tek sütuna düşmekte ve yönetim tablosu `data-baslik` öznitelikleriyle mobil kart görünümüne dönüşmektedir.
- [x] **11. CSS bozulması yok. Sayfa düzgün görünüyor:** Vişne çürüğü tema değişkenleri, `Palatino Linotype` yazı tipi ve 44px dokunma alanlarıyla (`--dokunma: 44px`) hatasız görünüm sağlandı.
- [x] **12. Arama ve filtreleme çalışıyor:** Başlık ve açıklama içinde Türkçe küçük/büyük harf duyarlı arama ile kategori filtreleme birlikte çalışmaktadır.
- [x] **13. Form doğrulama çalışıyor (etkinlik formu, giriş, kayıt, şifremi unuttum):** Dört formun tamamında alan bazlı doğrulama, `aria-invalid` işaretlemesi ve `.hata-metni` uyarıları çalışmaktadır.
