import { getSortedPostsData } from '../../../lib/posts';
import Link from 'next/link';

export default function Tag({ params }) {
  const allPostsData = getSortedPostsData();
  const filteredPosts = allPostsData.filter(post => post.tags && post.tags.includes(params.tag));

  return (
    <div>
      <h1>Статьи с тегом: {params.tag}</h1>
      <ul>
        {filteredPosts.map(({ id, date, title, description }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>
              {title}
            </Link>
            <br />
            <small>{date}</small>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function generateStaticParams() {
  const allPostsData = getSortedPostsData();
  const tags = new Set(allPostsData.flatMap(post => post.tags || []));
  return Array.from(tags).map(tag => ({ tag }));
}
