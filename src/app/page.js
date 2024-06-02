import Image from 'next/image';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';
import Projects from '../components/Projects';

export default async function Home() {
  const allPostsData = getSortedPostsData().filter(post => post.title && post.date);

  return (
    <div>
      <section>
        <p>Алексей. Занимаюсь frontend-разработкой и пишу SQL скрипты в одной IT компании, веду канал на YouTube. На развитие канала автору!</p>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p>Я в социальных сетях:</p>
          <ul className="social-icons">
            <li>
              <Link href="https://youtube.com/@tehno.maniak" target="_blank">
                <Image src="/icons/youtube.svg" alt="YouTube" width={24} height={24} />
              </Link>
            </li>
            <li>
              <Link href="https://t.me/tehnomaniak07" target="_blank">
                <Image src="/icons/telegram.svg" alt="Telegram" width={24} height={24} />
              </Link>
            </li>
            <li>
              <Link href="https://github.com/FilimonovAlexey" target="_blank">
                <Image src="/icons/github.svg" alt="GitHub" width={24} height={24} />
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <h2>Статьи</h2>
      <ul className="home-posts-list">
        {allPostsData.map(({ id, date, title }) => (
          <li key={id} className="home-post-item">
            <small className="home-post-date">{date ? new Date(date).toLocaleDateString('ru-RU', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }) : 'Дата не указана'}</small>
            <Link href={`/posts/${id}`} className="home-post-title">
              {title}
            </Link>
          </li>
        ))}
      </ul>
      <Projects />
    </div>
  );
}
