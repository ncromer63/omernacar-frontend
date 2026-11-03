import React, { createContext, useContext, useState, useEffect } from 'react';

const INITIAL_EVENTS = [
  {
    id: 'event-1',
    title: 'Kariyer Günleri 2026',
    category: 'Seminer',
    capacity: 100,
    date: '2026-10-12',
    time: '14:00',
    location: 'A Blok Konferans Salonu',
    description: 'Mezunlarla kariyer söyleşileri ve şirket standları.',
    image: '/afis.svg'
  },
  {
    id: 'event-2',
    title: 'Robotik Atölyesi',
    category: 'Atölye',
    capacity: 20,
    date: '2026-10-20',
    time: '10:00',
    location: 'Bilgisayar Laboratuvarı 2',
    description: 'Arduino ile çizgi izleyen robot yapımı, başlangıç seviyesi.'
  },
  {
    id: 'event-3',
    title: 'Siber Güvenlik Söyleşisi',
    category: 'Söyleşi',
    capacity: 50,
    date: '2026-10-27',
    time: '13:00',
    location: 'B Blok Amfi 1',
    description: 'Sektörden bir uzmanla güvenlik kariyeri üzerine sohbet.'
  },
  {
    id: 'event-4',
    title: 'Web Tasarım Atölyesi',
    category: 'Atölye',
    capacity: 30,
    date: '2026-11-03',
    time: '15:00',
    location: 'Bilgisayar Laboratuvarı 1',
    description: 'HTML ve CSS ile ilk kişisel sayfanı yap.'
  },
  {
    id: 'event-5',
    title: 'Kodlama Yarışması',
    category: 'Yarışma',
    capacity: 10,
    date: '2026-11-10',
    time: '09:30',
    location: 'Kütüphane Etkinlik Alanı',
    description: 'Üç kişilik takımlarla dört saatlik algoritma yarışması.'
  },
  {
    id: 'event-6',
    title: 'Yapay Zekâ Semineri',
    category: 'Seminer',
    capacity: 50,
    date: '2026-11-17',
    time: '14:30',
    location: 'A Blok Konferans Salonu',
    description: 'Büyük dil modelleri nasıl çalışır? Temel kavramlar ve örnekler.'
  }
];

const EventsContext = createContext(null);

function formatEvent(id, data) {
  return {
    id,
    title: data.title.trim(),
    category: data.category,
    capacity: Number(data.capacity),
    date: data.date,
    time: data.time,
    location: data.location.trim(),
    description: data.description.trim()
  };
}

export function EventsProvider({ children }) {
  const [events, setEvents] = useState(() => {
    try {
      const saved = localStorage.getItem('kampus_etkinlikleri');
      return saved ? JSON.parse(saved) : INITIAL_EVENTS;
    } catch {
      return INITIAL_EVENTS;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('kampus_etkinlikleri', JSON.stringify(events));
    } catch (err) {
      console.error('Failed to save events to localStorage:', err);
    }
  }, [events]);

  function addEvent(data) {
    const newEvent = formatEvent(`event-${Date.now()}`, data);
    setEvents(prev => [...prev, newEvent]);
    return newEvent;
  }

  function updateEvent(id, data) {
    setEvents(prev =>
      prev.map(item =>
        item.id === id ? { ...formatEvent(id, data), image: item.image } : item
      )
    );
  }

  function deleteEvent(id) {
    setEvents(prev => prev.filter(item => item.id !== id));
  }

  return (
    <EventsContext.Provider value={{ events, addEvent, updateEvent, deleteEvent }}>
      {children}
    </EventsContext.Provider>
  );
}

export function useEvents() {
  const context = useContext(EventsContext);
  if (!context) {
    throw new Error('useEvents, EventsProvider içinde kullanılmalı.');
  }
  return context;
}
