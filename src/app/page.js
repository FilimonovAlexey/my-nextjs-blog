import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';
import Projects from '../components/Projects';

export default async function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <div>
      <section>
        <p>
          Алексей. Занимаюсь frontend-разработкой и пишу SQL скрипты в одной IT компании, веду канал на YouTube. На развитие канала автору!
        </p>
      </section>
      <h1>Мои статьи</h1>
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>
              {title}
            </Link>
            <br />
            <small>{date}</small>
          </li>
        ))}
      </ul>
      <Projects />
    </div>
  );
}
