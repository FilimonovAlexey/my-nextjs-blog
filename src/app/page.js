import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';
import Projects from '../components/Projects';

export default async function Home() {
  const allPostsData = getSortedPostsData().filter(post => post.title && post.date);

  return (
    <div>
      <section>
        <p>Алексей. Занимаюсь frontend-разработкой и пишу SQL скрипты в одной IT компании, веду канал на YouTube. На развитие канала автору!</p>
        <p style={{ display: 'flex', alignItems: 'center' }}>
          Я в социальных сетях:
          <ul className="social-icons" style={{ marginLeft: '10px' }}>
            <li>
              <Link href="https://www.youtube.com/" target="_blank">
                <img src="/icons/youtube.svg" alt="YouTube" />
              </Link>
            </li>
            <li>
              <Link href="https://telegram.org/" target="_blank">
                <img src="/icons/telegram.svg" alt="Telegram" />
              </Link>
            </li>
            <li>
              <Link href="https://github.com/" target="_blank">
                <img src="/icons/github.svg" alt="GitHub" />
              </Link>
            </li>
          </ul>
        </p>
      </section>
      <h1>Статьи</h1>
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>
              {title}
            </Link>
            <br />
            <small>{date ? new Date(date).toLocaleDateString('ru-RU', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }) : 'Дата не указана'}</small>
          </li>
        ))}
      </ul>
      <Projects />
    </div>
  );
}
