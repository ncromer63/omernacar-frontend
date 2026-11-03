import React, { useState } from 'react';

const CATEGORIES = ['Seminer', 'Atölye', 'Söyleşi', 'Yarışma'];

export function validateEvent(values) {
  const errors = {};

  if (!values.title || values.title.trim().length < 3) {
    errors.title = 'Etkinlik adı en az 3 karakter olmalı.';
  }

  if (!values.category || values.category === '') {
    errors.category = 'Bir kategori seçin.';
  }

  if (!values.date || values.date === '') {
    errors.date = 'Tarih seçin.';
  }

  if (!values.time || values.time === '') {
    errors.time = 'Saat seçin.';
  }

  if (!values.location || values.location.trim() === '') {
    errors.location = 'Yer boş olamaz.';
  }

  const capacityNum = Number(values.capacity);
  if (!Number.isInteger(capacityNum) || capacityNum < 1 || capacityNum > 1000) {
    errors.capacity = 'Kontenjan 1 ile 1000 arasında bir tam sayı olmalı.';
  }

  if (!values.description || values.description.trim().length < 10) {
    errors.description = 'Açıklama en az 10 karakter olmalı.';
  }

  return errors;
}

export default function EventForm({ initialData, submitText, onSubmit }) {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validateEvent(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      onSubmit(formData);
    }
  }

  return (
    <form className="form" noValidate onSubmit={handleSubmit}>
      <p className="alan">
        <label htmlFor="title">Etkinlik Adı</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Örn. Kariyer Günleri 2026"
          value={formData.title}
          onChange={handleChange}
          aria-invalid={errors.title ? true : undefined}
        />
        <span className="hata-metni">{errors.title}</span>
      </p>

      <p className="alan">
        <label htmlFor="category">Kategori</label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          aria-invalid={errors.category ? true : undefined}
        >
          <option value="">Seçiniz</option>
          {CATEGORIES.map(cat => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <span className="hata-metni">{errors.category}</span>
      </p>

      <p className="alan">
        <label htmlFor="date">Tarih</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          aria-invalid={errors.date ? true : undefined}
        />
        <span className="hata-metni">{errors.date}</span>
      </p>

      <p className="alan">
        <label htmlFor="time">Saat</label>
        <input
          type="time"
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          aria-invalid={errors.time ? true : undefined}
        />
        <span className="hata-metni">{errors.time}</span>
      </p>

      <p className="alan">
        <label htmlFor="location">Yer</label>
        <input
          type="text"
          id="location"
          name="location"
          placeholder="Örn. A Blok Konferans Salonu"
          value={formData.location}
          onChange={handleChange}
          aria-invalid={errors.location ? true : undefined}
        />
        <span className="hata-metni">{errors.location}</span>
      </p>

      <p className="alan">
        <label htmlFor="capacity">Kontenjan</label>
        <input
          type="number"
          id="capacity"
          name="capacity"
          placeholder="Örn. 50"
          value={formData.capacity}
          onChange={handleChange}
          aria-invalid={errors.capacity ? true : undefined}
        />
        <span className="hata-metni">{errors.capacity}</span>
      </p>

      <p className="alan">
        <label htmlFor="description">Açıklama</label>
        <textarea
          id="description"
          name="description"
          rows={5}
          placeholder="Etkinlik hakkında en az 10 karakterlik açıklama..."
          value={formData.description}
          onChange={handleChange}
          aria-invalid={errors.description ? true : undefined}
        />
        <span className="hata-metni">{errors.description}</span>
      </p>

      <p className="form-butonlar">
        <button type="submit" className="buton">
          {submitText}
        </button>
      </p>
    </form>
  );
}
