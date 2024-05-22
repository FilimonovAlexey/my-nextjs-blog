import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';

export default async function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <div>
      <h1>My Blog</h1>
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
    </div>
  );
}