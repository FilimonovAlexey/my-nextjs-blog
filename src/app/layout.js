import './globals.css';
import Header from '../components/Header';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Filimonov.dev',
  description: 'Personal blog of Filimonov',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <footer>
          <p>Copyright © 2024 Filimonov.dev</p>
          <div>
            <Link href="/">Главная</Link>
            <span>|</span>
            <Link href="/about">Обо мне</Link>
            <span>|</span>
            <Link href="/blog">Блог</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
