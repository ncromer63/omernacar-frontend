import React from 'react';
import { Link } from 'react-router-dom';
import { useEvents } from '../context/EventsContext';
import EventList from '../components/EventList';

export default function AnaSayfa() {
  const { events } = useEvents();

  const upcomingEvents = [...events]
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, 2);

  return (
    <>
      <h2 className="bolum-baslik">Yaklaşan 2 Etkinlik</h2>
      <EventList events={upcomingEvents} />
      <p>
        <Link className="buton" to="/events">
          Tüm etkinlikleri gör
        </Link>
      </p>
    </>
  );
}
