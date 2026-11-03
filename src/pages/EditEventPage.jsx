import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEvents } from '../context/EventsContext';
import EventForm from '../components/EventForm';

export default function EditEventPage() {
  const { id } = useParams();
  const { events, updateEvent } = useEvents();
  const navigate = useNavigate();

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

  function handleSubmit(formData) {
    updateEvent(event.id, formData);
    navigate('/admin');
  }

  return (
    <>
      <h2 className="bolum-baslik">Etkinlik Güncelle</h2>
      <EventForm
        initialData={{
          ...event,
          capacity: String(event.capacity)
        }}
        submitText="Güncelle"
        onSubmit={handleSubmit}
      />
    </>
  );
}

