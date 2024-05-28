import { getSortedPostsData } from '../../lib/posts';
import Link from 'next/link';

export default function Blog() {
  const allPostsData = getSortedPostsData();

  // Собираем все уникальные теги
  const tags = Array.from(new Set(allPostsData.flatMap(post => post.tags || [])));

  return (
    <div className="blog-container">
      <div className="posts-container">
        <h1>Статьи</h1>
        <ul>
          {allPostsData.map(({ id, date, title, description, tags }) => (
            <li key={id} className="post-item">
              <Link href={`/posts/${id}`}>
                {title}
              </Link>
              <br />
              <small>{new Date(date).toLocaleDateString('ru-RU', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</small>
              <p>{description}</p>
              <div className="tags">
                {tags && tags.map(tag => (
                  <span key={tag} className="tag">#{tag}</span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="tags-container">
        <h2>Теги</h2>
        <ul>
          {tags.map(tag => (
            <li key={tag} className="tag-item">
              <Link href={`/tags/${tag}`}>
                {tag}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
