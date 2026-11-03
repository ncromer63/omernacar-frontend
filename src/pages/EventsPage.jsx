import React, { useState } from 'react';
import { useEvents } from '../context/EventsContext';
import EventFilter from '../components/EventFilter';
import EventList from '../components/EventList';

export default function EventsPage() {
  const { events } = useEvents();
  const [searchText, setSearchText] = useState('');
  const [category, setCategory] = useState('');

  const categories = [...new Set(events.map(e => e.category))];

  // Filtering
  const filteredEvents = events.filter(item => {
    const query = searchText.trim().toLowerCase();
    const matchesSearch = query === '' ||
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query);

    const matchesCategory = category === '' || item.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <EventFilter
        searchText={searchText}
        onSearchChange={setSearchText}
        category={category}
        categories={categories}
        onCategoryChange={setCategory}
      />
      {filteredEvents.length > 0 && (
        <p className="sonuc">{filteredEvents.length} etkinlik listeleniyor.</p>
      )}
      <EventList
        events={filteredEvents}
        emptyText="Aramanıza uygun etkinlik bulunamadı."
      />
    </>
  );
}
