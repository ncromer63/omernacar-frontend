import React, { useEffect } from 'react';
import { useLocation, matchPath } from 'react-router-dom';
import { useEvents } from '../context/EventsContext';

const ROUTE_INFO = [
  { path: '/', title: 'Kampüs Etkinlikleri', text: 'Fakültedeki seminer, atölye ve söyleşileri tek yerden takip edin.' },
  { path: '/events', title: 'Tüm Etkinlikler', text: 'Ekim ayında kampüste düzenlenen etkinlikler.' },
  { path: '/admin', title: 'Etkinlik Yönetimi' },
  { path: '/admin/new', title: 'Etkinlik Ekle' },
  { path: '/login', title: 'Giriş Yap' },
  { path: '/register', title: 'Kayıt Ol' },
  { path: '/forgot-password', title: 'Şifremi Unuttum' }
];

export default function Header() {
  const { pathname } = useLocation();
  const { events } = useEvents();

  // Check dynamic detail/edit routes
  const matchDetail = matchPath('/events/:id', pathname);
  const matchEdit = matchPath('/admin/:id/edit', pathname);
  const match = matchDetail || matchEdit;

  const currentEvent = match ? events.find(e => e.id === match.params.id) : undefined;
  const staticRoute = ROUTE_INFO.find(r => matchPath({ path: r.path, end: true }, pathname));

  const pageTitle = currentEvent ? currentEvent.title : (staticRoute ? staticRoute.title : 'Sayfa Bulunamadı');
  const pageSubtitle = currentEvent
    ? `${currentEvent.category} · ${currentEvent.location}`
    : staticRoute?.text;

  useEffect(() => {
    const baseTitle = 'Kampüs Etkinlikleri';
    document.title = pageTitle === baseTitle ? baseTitle : `${pageTitle} — ${baseTitle}`;
  }, [pageTitle]);

  return (
    <header className="site-baslik">
      <h1>{pageTitle}</h1>
      {pageSubtitle && <p>{pageSubtitle}</p>}
    </header>
  );
}
