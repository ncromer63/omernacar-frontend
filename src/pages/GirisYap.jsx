import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function GirisYap() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = {};

    if (!email.includes('@')) {
      newErrors.email = 'Geçerli bir e-posta girin.';
    }

    if (password.length < 6) {
      newErrors.password = 'Şifre en az 6 karakter olmalı.';
    }

    setErrors(newErrors);
    setIsSuccess(Object.keys(newErrors).length === 0);
  }

  return (
    <>
      {isSuccess && (
        <p className="mesaj mesaj-basari">
          Form geçerli. Gerçek giriş Sprint 10'da eklenecek.
        </p>
      )}

      <form className="form" noValidate onSubmit={handleSubmit}>
        <p className="alan">
          <label htmlFor="email">E-posta</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            aria-invalid={errors.email ? true : undefined}
          />
          <span className="hata-metni">{errors.email}</span>
        </p>

        <p className="alan">
          <label htmlFor="password">Şifre</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            aria-invalid={errors.password ? true : undefined}
          />
          <span className="hata-metni">{errors.password}</span>
        </p>

        <p className="form-butonlar">
          <button type="submit" className="buton">
            Giriş yap
          </button>
        </p>
      </form>

      <p className="form-baglantilar">
        <Link to="/forgot-password">Şifremi unuttum</Link>
        <Link to="/register">Hesabın yok mu? Kayıt ol</Link>
      </p>
    </>
  );
}
