import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Ders ve Proje Standart İsimlendirmeleri
import AnaSayfa from './pages/AnaSayfa';
import Etkinlikler from './pages/Etkinlikler';
import EtkinlikDetay from './pages/EtkinlikDetay';
import EtkinlikYonetimi from './pages/EtkinlikYonetimi';
import EtkinlikEkle from './pages/EtkinlikEkle';
import EtkinlikGuncelle from './pages/EtkinlikGuncelle';
import GirisYap from './pages/GirisYap';
import KayitOl from './pages/KayitOl';
import SifremiUnuttum from './pages/SifremiUnuttum';
import SayfaBulunamadi from './pages/SayfaBulunamadi';

export default function App() {
  return (
    <>
      <Header />
      <Navbar />
      <main>
        <Routes>
          {/* 10 adet ana router tanımı (Örnek siteye birebir uyumlu) */}
          <Route path="/" element={<AnaSayfa />} />
          <Route path="/events" element={<Etkinlikler />} />
          <Route path="/events/:id" element={<EtkinlikDetay />} />
          <Route path="/admin" element={<EtkinlikYonetimi />} />
          <Route path="/admin/new" element={<EtkinlikEkle />} />
          <Route path="/admin/:id/edit" element={<EtkinlikGuncelle />} />
          <Route path="/login" element={<GirisYap />} />
          <Route path="/register" element={<KayitOl />} />
          <Route path="/forgot-password" element={<SifremiUnuttum />} />

          {/* Türkçe URL Takma Adları (Ders kodlarıyla tam entegrasyon) */}
          <Route path="/etkinlikler" element={<Etkinlikler />} />
          <Route path="/etkinlik-ekle" element={<EtkinlikEkle />} />
          <Route path="/etkinlik-guncelle/:id" element={<EtkinlikGuncelle />} />
          <Route path="/etkinlik-detay/:id" element={<EtkinlikDetay />} />
          <Route path="/admin/ekle" element={<EtkinlikEkle />} />
          <Route path="/admin/:id/guncelle" element={<EtkinlikGuncelle />} />
          <Route path="/giris" element={<GirisYap />} />
          <Route path="/kayit" element={<KayitOl />} />
          <Route path="/sifremi-unuttum" element={<SifremiUnuttum />} />

          {/* 404 Sayfa Bulunamadı */}
          <Route path="*" element={<SayfaBulunamadi />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
