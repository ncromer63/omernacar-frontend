import React, { useState } from 'react';
import { useEvents } from '../context/EventsContext';
import EventFilter from '../components/EventFilter';
import EventList from '../components/EventList';

export default function Etkinlikler() {
  const { events } = useEvents();
  const [searchText, setSearchText] = useState('');
  const [category, setCategory] = useState('');

  const categories = [...new Set(events.map(e => e.category))];

  const filteredEvents = events.filter(item => {
    const rawQuery = searchText.trim();
    if (rawQuery !== '') {
      const lowerQuery = rawQuery.toLocaleLowerCase('tr-TR');
      const titleLower = item.title.toLocaleLowerCase('tr-TR');
      const descLower = item.description.toLocaleLowerCase('tr-TR');
      const matchesSearch = titleLower.includes(lowerQuery) ||
        descLower.includes(lowerQuery) ||
        item.title.includes(rawQuery) ||
        item.description.includes(rawQuery);
      if (!matchesSearch) return false;
    }

    if (category !== '' && item.category !== category) {
      return false;
    }

    return true;
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
