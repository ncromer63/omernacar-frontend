import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEvents } from '../context/EventsContext';
import EventForm from '../components/EventForm';

const EMPTY_EVENT = {
  title: '',
  category: '',
  date: '',
  time: '',
  location: '',
  capacity: '',
  description: ''
};

export default function AddEventPage() {
  const { addEvent } = useEvents();
  const navigate = useNavigate();

  function handleSubmit(formData) {
    addEvent(formData);
    navigate('/admin');
  }

  return (
    <>
      <EventForm
        initialData={EMPTY_EVENT}
        submitText="Kaydet"
        onSubmit={handleSubmit}
      />
    </>
  );
}

