import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEvents } from '../context/EventsContext';
import EventForm from '../components/EventForm';

const BOS_ETKINLIK = {
  title: '',
  category: '',
  date: '',
  time: '',
  location: '',
  capacity: '',
  description: ''
};

export default function EtkinlikEkle() {
  const { addEvent } = useEvents();
  const navigate = useNavigate();

  function handleSubmit(formData) {
    addEvent(formData);
    navigate('/admin');
  }

  return (
    <EventForm
      initialData={BOS_ETKINLIK}
      submitText="Kaydet"
      onSubmit={handleSubmit}
    />
  );
}
