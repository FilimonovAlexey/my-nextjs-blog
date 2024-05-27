import Link from 'next/link';
import './globals.css';

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
        <header>
          <img src="/icon.svg" alt="Logo" style={{ width: '40px', marginRight: '10px' }} />
          <h1>Filimonov.dev</h1>
          <nav>
            <ul>
              <li><Link href="/">Главная</Link></li>
              <li><Link href="/about">Обо мне</Link></li>
              <li><Link href="/blog">Блог</Link></li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
