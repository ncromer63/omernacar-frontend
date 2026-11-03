import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useEvents } from '../context/EventsContext';
import { formatDate } from '../utils/formatDate';

export default function EventDetailPage() {
  const { id } = useParams();
  const { events } = useEvents();

  const event = events.find(item => item.id === id);

  if (!event) {
    return (
      <>
        <p>Aradığınız sayfa ya da etkinlik yok.</p>
        <p>
          <Link className="buton" to="/">
            Ana sayfaya dön
          </Link>
        </p>
      </>
    );
  }

  return (
    <article className="detay">
      <div className="detay-ust">
        {event.image && (
          <figure>
            <img
              src={event.image}
              alt={`${event.title} afişi`}
              width="480"
              height="270"
            />
            <figcaption>{event.title} afişi</figcaption>
          </figure>
        )}
        <section className="kunye">
          <h2>Etkinlik Künyesi</h2>
          <dl>
            <dt>Tarih</dt>
            <dd>
              <time dateTime={`${event.date}T${event.time}`}>
                {formatDate(event.date)}, {event.time}
              </time>
            </dd>
            <dt>Yer</dt>
            <dd>{event.location}</dd>
            <dt>Kategori</dt>
            <dd>{event.category}</dd>
            <dt>Kontenjan</dt>
            <dd>{event.capacity} kişi</dd>
          </dl>
        </section>
      </div>

      <h2>Açıklama</h2>
      <p>{event.description}</p>

      <p className="form-butonlar">
        <Link className="buton" to="/events">
          ← Listeye dön
        </Link>
        <Link className="buton" to={`/admin/${event.id}/edit`}>
          Bu etkinliği güncelle
        </Link>
      </p>
    </article>
  );
}
