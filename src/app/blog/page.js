import { getSortedPostsData } from '../../lib/posts';
import Link from 'next/link';

export default function Blog() {
  const allPostsData = getSortedPostsData();

  return (
    <div>
      <h1>Блог</h1>
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
