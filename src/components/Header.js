"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    window.location.href = `/search?query=${searchTerm}`;
  };

  return (
    <header>
      <h1>
        <Image src="/icon.svg" alt="Logo" width={50} height={50} />
        Filimonov.dev
      </h1>
      <nav>
        <ul>
          <li><Link href="/">Главная</Link></li>
          <li><Link href="/about">Обо мне</Link></li>
          <li><Link href="/blog">Блог</Link></li>
        </ul>
      </nav>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Поиск..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Поиск</button>
      </form>
    </header>
  );
}
