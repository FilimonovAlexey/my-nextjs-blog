import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';
import Projects from '../components/Projects';

export default async function Home() {
  const allPostsData = getSortedPostsData().filter(post => post.title && post.date);

  return (
    <div>
      <section>
        <p>Алексей. Занимаюсь frontend-разработкой и пишу SQL скрипты в одной IT компании, веду канал на YouTube. На развитие канала автору!</p>
        <p>Я в социальных сетях:</p>
        <ul>
          <li><a href="#">Telegram</a></li>
          <li><a href="#">YouTube</a></li>
          <li><a href="#">GitHub</a></li>
        </ul>
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
