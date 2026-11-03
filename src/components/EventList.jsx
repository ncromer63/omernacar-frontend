import React from 'react';
import EventCard from './EventCard';

export default function EventList({ events, emptyText = 'Gösterilecek etkinlik yok.' }) {
  if (events.length === 0) {
    return <p className="sonuc">{emptyText}</p>;
  }

  return (
    <section className="etkinlik-listesi" aria-label="Etkinlikler">
      {events.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}

