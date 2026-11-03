https://omernacar-frontend.vercel.app/

# Kampüs Etkinlikleri — Vize Teslim Projesi

Üniversite Kampüs Etkinlikleri web uygulamasının **Vite + React + TypeScript**, **React Router (10 Rota)** ve **Context API** mimarisiyle geliştirilmiş vize teslim sürümüdür. Uygulama; kampüsteki seminer, atölye, söyleşi ve yarışma etkinliklerinin listelenmesi, anlık aranması, kategoriye göre filtrelenmesi, detaylarının incelenmesi ve yönetim paneli üzerinden ekleme, güncelleme ve onaylı silme (CRUD) işlemlerinin yapılmasını sağlar.

---

## 🌐 Yayın ve Çalıştırma Adresleri

| Ortam / Kaynak | Adres | Açıklama |
|---|---|---|
| **Vercel Canlı Link** | [https://omernacar-frontend.vercel.app](https://omernacar-frontend.vercel.app) | Canlı üretim (Production) ortamı |
| **GitHub Deposu** | [https://github.com/ncromer63/omernacar-frontend](https://github.com/ncromer63/omernacar-frontend) | Public kaynak kod deposu |
| **Yerel Geliştirme (Local)** | `http://localhost:5173` | Vite geliştirme sunucusu (`npm run dev`) |
| **Yerel Önizleme (Preview)** | `http://localhost:4173` | Production build önizlemesi (`npm run preview`) |

- **Vercel Yapılandırması:** Framework Preset: `Vite`, SPA yönlendirmeleri `vercel.json` ile yapılandırılmıştır.

---

## 🚀 Hızlı Başlangıç ve Local Test

Projeyi yerel ortamınızda çalıştırmak için sadece **Node.js (v18+)** ve **npm** yeterlidir.

### Gereksinimler

- **[Node.js LTS](https://nodejs.org/)** (v18 veya v22+ önerilir, `npm` birlikte gelir)

### Adım Adım Kurulum

#### 1. Bağımlılıkları Yükleyin

```bash
npm install
```

#### 2. Geliştirme Sunucusunu Başlatın

```bash
npm run dev
```

#### 3. Tarayıcıda Açın

```text
http://localhost:5173
```

#### 4. Yönetim Paneli ve Form Sayfaları

| Sayfa | Adres | Açıklama |
|---|---|---|
| **Yönetim Paneli** | `http://localhost:5173/admin` | Etkinlik tablosu, düzenleme ve onaylı silme |
| **Etkinlik Ekle** | `http://localhost:5173/admin/new` | Doğrulamalı yeni etkinlik ekleme formu |
| **Giriş Yap** | `http://localhost:5173/login` | E-posta ve şifre doğrulamalı giriş ekranı |
| **Kayıt Ol** | `http://localhost:5173/register` | Şifre eşleşme kontrollü kayıt ekranı |

> Başlangıçta `src/data/events.ts` içindeki 6 adet örnek kampüs etkinliği `EventsContext` üzerinden otomatik yüklenir; ek bir veritabanı kurulumu gerekmez.

---

## 🛠️ Kullanım Komutları

```bash
# Bağımlılıkları kur
npm install

# Geliştirme sunucusunu başlat (HMR aktif)
npm run dev

# TypeScript tip kontrolü yap ve üretim (production) paketini derle
npm run build

# Derlenen üretim paketini (dist/) yerel sunucuda test et
npm run preview
```

---

## 🗺️ Rotalar ve Sayfalar (10 Adet Router)

Uygulamada `react-router-dom` kullanılarak `src/App.tsx` içerisinde tam **10 adet rota** tanımlanmıştır:

| # | Rota (Path) | Bileşen | Görevi ve Özellikleri |
|---|---|---|---|
| 1 | `/` | `HomePage.tsx` | Tarihe göre yaklaşan ilk 2 etkinliği (`sort + slice`) listeler |
| 2 | `/events` | `EventsPage.tsx` | Tüm etkinlikleri listeler; anlık metin arama ve kategori filtreleme sunar |
| 3 | `/events/:id` | `EventDetailPage.tsx` | Seçilen etkinliğin afişi, künyesi, açıklaması ve güncelleme butonunu gösterir |
| 4 | `/admin` | `AdminPage.tsx` | Tüm etkinlikleri tabloda listeler; düzenleme ve `window.confirm` onaylı silme yapar |
| 5 | `/admin/new` | `EtkinlikEkle.tsx` | Yeni etkinlik oluşturur, Context'e kaydeder ve `/admin` sayfasına yönlendirir |
| 6 | `/admin/:id/edit` | `EtkinlikGuncelle.tsx` | Seçili etkinliğin mevcut verilerini forma doldurur ve günceller |
| 7 | `/login` | `LoginPage.tsx` | E-posta (`@`) ve şifre (en az 6 karakter) doğrulamalı giriş formu |
| 8 | `/register` | `RegisterPage.tsx` | Ad soyad (en az 3 karakter), e-posta, şifre ve şifre tekrarı doğrulamalı kayıt formu |
| 9 | `/forgot-password` | `ForgotPasswordPage.tsx` | Kayıtlı e-posta doğrulaması ve şifre sıfırlama bağlantısı simülasyonu |
| 10 | `*` | `NotFoundPage.tsx` | Geçersiz URL veya bulunamayan etkinliklerde açılan 404 sayfası |

---

## 📂 Klasör Yapısı ve Dosyaların Görevleri

```text
omernacar-frontend/
├── public/
│   ├── afis.svg                   # Kariyer Günleri 2026 etkinlik afişi (vektörel)
│   └── favicon.svg                # Sekme ikonu (Vişne çürüğü temalı)
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx         # Rotaya göre dinamik başlık, alt yazı ve sekme adı (document.title)
│   │   │   ├── Navigation.tsx     # NavLink ile aktif sayfa vurgulu (aria-current="page") menü
│   │   │   └── Footer.tsx         # Öğrenci künyesini barındıran alt bilgi bileşeni
│   │   ├── events/
│   │   │   ├── EventCard.tsx      # Tek bir etkinlik kartının görselleştirilmesi
│   │   │   ├── EventList.tsx      # Etkinlik dizisini dönüp EventCard'ları listeleyen ortak bileşen
│   │   │   ├── EventFilter.tsx    # Arama kutusu ve kategori seçim formu (Controlled inputs)
│   │   │   └── EventDetail.tsx    # Tekil etkinliğin afiş, künye ve açıklama detay bloğu
│   │   └── forms/
│   │       └── EventForm.tsx      # Etkinlik Ekle ve Güncelle sayfalarında kullanılan ortak doğrulamalı form
│   ├── context/
│   │   └── EventsContext.tsx      # EventsProvider ve useEvents ile merkezi CRUD state yönetimi
│   ├── data/
│   │   └── events.ts              # 6 adet tipli etkinlik başlangıç verisi (initialEvents)
│   ├── pages/
│   │   ├── HomePage.tsx           # Ana sayfa (Yaklaşan 2 etkinlik)
│   │   ├── EventsPage.tsx         # Tüm etkinlikler, arama ve filtreleme sayfası
│   │   ├── EventDetailPage.tsx    # Etkinlik detay sayfası
│   │   ├── AdminPage.tsx          # Etkinlik yönetim tablosu ve silme onayı sayfası
│   │   ├── EtkinlikEkle.tsx       # Yeni etkinlik ekleme sayfası
│   │   ├── EtkinlikGuncelle.tsx   # Mevcut etkinliği güncelleme sayfası
│   │   ├── LoginPage.tsx          # Giriş yap sayfası ve form doğrulaması
│   │   ├── RegisterPage.tsx       # Kayıt ol sayfası ve form doğrulaması
│   │   ├── ForgotPasswordPage.tsx # Şifremi unuttum sayfası ve form doğrulaması
│   │   └── NotFoundPage.tsx       # 404 Sayfa bulunamadı ekranı
│   ├── types/
│   │   └── campus-event.ts        # Category, CampusEvent ve EventFormData tipleri
│   ├── utils/
│   │   ├── filter-events.ts       # Arama, kategori filtreleme ve ID ile bulma saf fonksiyonları
│   │   └── format-date.ts         # Türkçe tarih formatlama yardımcı fonksiyonu
│   ├── App.css                    # Uygulama stilleri (Öğrenci No: 2416501085, Vişne Çürüğü tema, responsive)
│   ├── App.tsx                    # Ana orkestrasyon bileşeni ve 10 adet Route tanımı
│   ├── index.css                  # Genel CSS sıfırlama dosyası
│   └── main.tsx                   # BrowserRouter ve EventsProvider ile React'i başlatan kök dosya
├── index.html                     # Tek HTML sayfası; div#root kapsayıcısı
├── package.json                   # Proje adı, bağımlılıklar ve çalışma betikleri (dev, build, preview)
├── tsconfig.json                  # TypeScript yapılandırma dosyası
├── vercel.json                    # Vercel SPA yönlendirme (rewrite) kuralları
└── vite.config.ts                 # Vite ve React eklenti ayarları
```

### Temel Dosyaların Özeti
- `package.json` — Proje adı (`omernacar-frontend`), komutlar (`dev`, `build`, `preview`) ve paket listesi.
- `tsconfig*.json` — Sıkı (`strict: true`, `verbatimModuleSyntax: true`) TypeScript derleyici ayarları.
- `src/context/EventsContext.tsx` — Tüm sayfalara bağlanan `events` listesi ile `addEvent`, `updateEvent`, `deleteEvent` fonksiyonlarını sağlar.
- `src/components/forms/EventForm.tsx` — Etkinlik adı (en az 3 karakter), kategori, tarih, saat, yer, kontenjan (1–1000 arası tam sayı) ve açıklama (en az 10 karakter) doğrulamalarını yapar.
- `src/App.css` — Vişne çürüğü (`--ton: 346`) renk değişkenleri, 700px/1000px responsive kırılımları ve 699px altında tabloyu mobil kartlara dönüştüren `data-baslik` kuralları.

---

## 📌 Sprint Özeti ve Mimari Gelişim

1. **Sprint 1 (HTML, Git ve Yayına Alma):** Semantik HTML5 iskeleti, 5 temel sayfa ve erişilebilir form yapısı.
2. **Sprint 2 (CSS ve Responsive Tasarım):** Öğrenci numarasına özel CSS değişkenleri, grid kart düzeni, 44px dokunma alanları ve mobil uyumlu tasarım.
3. **Sprint 3 (JavaScript ve DOM):** Modüler ES yapısı, anlık metin arama + kategori filtreleme ve dinamik detay gösterimi.
4. **Sprint 4 (Vite, TypeScript ve React):** React + TypeScript (`react-ts`) geçişi, tipli veri (`CampusEvent`), saf filtreleme fonksiyonları (`filter-events.ts`), `useState` ve `useEffect` ile dinamik sekme başlığı.
5. **Sprint 5 (React Bileşenleri & Modüler Mimari):** Uygulamanın `layout`, `events` ve `forms` altında yeniden kullanılabilir, tipli (`interface`) bileşenlere ayrıştırılması.
6. **Vize Teslim (React Router, Context API, CRUD & Form Doğrulama):**
   - `react-router-dom` ile **10 adet rota** tanımlandı.
   - `EventsContext` ile merkezi durum yönetimi kurularak tüm sayfalara bağlandı.
   - Ekleme, güncelleme ve silmeden önce onay (`window.confirm`) işlemleri tüm sayfalara anlık yansıyacak şekilde tamamlandı.
   - Etkinlik formu, Giriş, Kayıt ve Şifremi Unuttum sayfalarında tam kapsamlı form doğrulama (validation) kuralları uygulandı.

---

## 🩺 Sorun Giderme

### Sayfa yenilendiğinde Vercel'de 404 hatası alınırsa
Proje kök dizinindeki `vercel.json` dosyası tüm alt rotaları (`/events`, `/admin`, `/login` vb.) `index.html`'e yönlendirir. Vercel'de **Root Directory** ayarının proje kökünü gösterdiğinden ve **Framework Preset** değerinin `Vite` olduğundan emin olun.

### Port çakışması (5173 portu doluysa)
Vite varsayılan olarak `5173` portunu kullanır; doluysa otomatik olarak bir sonraki uygun porta (`5174`) geçer ve terminalde yeni adresi gösterir.

### Derleme (`npm run build`) sırasında tip hatası alınırsa
Proje `verbatimModuleSyntax` kuralını kullanır. Sadece tip içe aktarırken `import type { CampusEvent }` sözdiziminin kullanıldığından emin olun.

---

## 👤 Öğrenci Bilgileri
- **Ad Soyad:** Ömer Nacar
- **Öğrenci No:** 2416501085
- **GitHub:** [https://github.com/ncromer63](https://github.com/ncromer63)
