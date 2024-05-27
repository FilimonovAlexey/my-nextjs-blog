import { getSortedPostsData } from '../../lib/posts';
import Link from 'next/link';

export default function Blog() {
  const allPostsData = getSortedPostsData();

  return (
    <div>
      <h1>Блог</h1>
      <ul>
        {allPostsData.map(({ id, date, title, description, tags }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>
              {title}
            </Link>
            <br />
            <small>{date}</small>
            <p>{description}</p>
            <div>
              {tags && tags.map(tag => (
                <Link key={tag} href={`/tags/${tag}`}>
                  <span style={{ marginRight: '10px', cursor: 'pointer' }}>#{tag}</span>
                </Link>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
