import React from 'react';
import { NavLink } from 'react-router-dom';

const NAV_ITEMS = [
  { to: '/', label: 'Ana Sayfa' },
  { to: '/events', label: 'Etkinlikler' },
  { to: '/admin', label: 'Yönetim' },
  { to: '/login', label: 'Giriş' }
];

export default function Navbar() {
  return (
    <nav className="menu" aria-label="Ana Menü">
      <ul>
        {NAV_ITEMS.map(item => (
          <li key={item.to}>
            <NavLink to={item.to} end={item.to === '/'}>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

