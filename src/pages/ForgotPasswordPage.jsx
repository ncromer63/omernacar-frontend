import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const hasError = !email.includes('@');
    const errorMsg = hasError ? 'Geçerli bir e-posta girin.' : '';

    setError(errorMsg);
    setIsSuccess(!hasError && email.trim() !== '');
  }

  return (
    <>
      <p>Kayıtlı e-posta adresinizi yazın, şifre yenileme bağlantısı gönderelim.</p>

      {isSuccess && (
        <p className="mesaj mesaj-basari">
          Bağlantı {email} adresine gönderildi (demo).
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
            aria-invalid={error ? true : undefined}
          />
          <span className="hata-metni">{error}</span>
        </p>

        <p className="form-butonlar">
          <button type="submit" className="buton">
            Bağlantı gönder
          </button>
        </p>
      </form>

      <p className="form-baglantilar">
        <Link to="/login">← Girişe dön</Link>
      </p>
    </>
  );
}
