import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'Filimonov.dev',
  description: 'Personal blog of Filimonov',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
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
