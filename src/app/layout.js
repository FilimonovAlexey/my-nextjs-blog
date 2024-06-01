import Link from 'next/link';
import Image from 'next/image';
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
          <h1>
            <Image src="/icon.svg" alt="Logo" width={40} height={40} />
            Filimonov.dev
          </h1>
          <nav>
            <ul>
              <li><Link href="/">Главная</Link></li>
              <li><Link href="/about">Обо мне</Link></li>
              <li><Link href="/blog">Блог</Link></li>
            </ul>
          </nav>
        </header>
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
