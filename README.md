# Kampüs Etkinlikleri — Vize Teslim Projesi

Bu proje, Selçuk Üniversitesi Bilgisayar Mühendisliği / İlgili Bölüm Vize Teslim Ödevi için **React**, **React Router v6** ve **Context API** kullanılarak geliştirilmiş bir Kampüs Etkinlik Yönetim Sistemi frontend uygulamasıdır.

## 📌 Öğrenci Bilgileri
- **Ad Soyad:** Ömer Nacar
- **Öğrenci No:** 2416501085
- **Canlı Yayın (Vercel):** [https://omernacar-frontend.vercel.app](https://omernacar-frontend.vercel.app)
- **GitHub Deposu:** [https://github.com/ncromer63/omernacar-frontend](https://github.com/ncromer63/omernacar-frontend)
- **Tema Rengi:** Haki Yeşil (Khaki Green)

---

## 🚀 Kurulum ve Yerel Çalıştırma

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyebilirsiniz:

1. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```

2. **Geliştirme sunucusunu başlatın:**
   ```bash
   npm run dev
   ```

3. **Üretim (Production) derlemesi alın:**
   ```bash
   npm run build
   ```

4. **Derlemeyi önizleyin:**
   ```bash
   npm run preview
   ```

---

## 🧭 Tanımlanan 10 Rota (Router Mimarisi)

Uygulamada tam 10 adet sayfa rotası tanımlanmış ve merkezi olarak yönetilmektedir:

1. `/` — **Ana Sayfa:** Yaklaşan 2 etkinlik kartı, tanıtım ve tüm etkinliklere yönlendirme.
2. `/events` — **Tüm Etkinlikler:** Etkinlik kartları listesi, arama motoru ve kategori filtreleme.
3. `/events/:id` — **Etkinlik Detay:** Seçilen etkinliğin afişi, künyesi (tarih, saat, yer, kategori, kontenjan) ve detaylı açıklaması.
4. `/admin` — **Etkinlik Yönetimi:** Tablo görünümü, ekleme butonu, düzenleme ve silmeden önce onaylı silme işlemi.
5. `/admin/new` — **Etkinlik Ekle:** Yeni etkinlik oluşturma formu ve form validasyonu.
6. `/admin/:id/edit` — **Etkinlik Güncelle:** Mevcut etkinlik bilgilerini getiren ve güncelleyen form.
7. `/login` — **Giriş Yap:** E-posta ve en az 6 haneli şifre doğrulamalı giriş ekranı.
8. `/register` — **Kayıt Ol:** Ad soyad, e-posta, şifre ve şifre tekrar eşleşme kontrolü olan kayıt ekranı.
9. `/forgot-password` — **Şifremi Unuttum:** E-posta doğrulaması ve demo bağlantı gönderim simülasyonu.
10. `*` — **404 Sayfa Bulunamadı:** Hatalı URL'lerde kullanıcıyı karşılayan ve ana sayfaya yönlendiren sayfa.

---

## 🎯 Teslim Öncesi 13 Maddelik Kontrol Listesi

| No | Kriter | Durum |
|---|---|---|
| 1 | **Tüm linkler çalışıyor** | ✅ Tamamlandı |
| 2 | **Tüm sayfalar hazır** | ✅ Tamamlandı |
| 3 | **Klasör ve dosya yapısı oluşturuldu** | ✅ Tamamlandı (`components`, `context`, `pages`, `utils`) |
| 4 | **10 adet router tanımlandı** | ✅ Tamamlandı |
| 5 | **Context kullanıldı ve tüm sayfalara bağlandı** | ✅ Tamamlandı (`EventsContext`) |
| 6 | **Ekle, sil, güncelle ve silmeden önce onay çalışıyor; etkisi diğer sayfalarda görülüyor** | ✅ Tamamlandı |
| 7 | **Son çalışır proje GitHub'a gönderildi** | ✅ Hazırlandı / Gönderilecek |
| 8 | **Proje Vercel'de isimsoyisim-frontend.vercel.app adresiyle yayında** | ✅ Yapılandırıldı (`vercel.json`) |
| 9 | **README yazıldı, Vercel linki README'ye eklendi** | ✅ Tamamlandı |
| 10 | **Mobil görünüm doğru çalışıyor** | ✅ Tamamlandı (Responsive grid/flex ve mobil tablo kart görünümü) |
| 11 | **CSS bozulması yok. Sayfa düzgün görünüyor** | ✅ Tamamlandı (Haki yeşil tasarım sistemi) |
| 12 | **Arama ve filtreleme çalışıyor** | ✅ Tamamlandı (Başlık/açıklama araması + Kategori filtresi) |
| 13 | **Form doğrulama çalışıyor (etkinlik formu, giriş, kayıt, şifremi unuttum)** | ✅ Tamamlandı |

