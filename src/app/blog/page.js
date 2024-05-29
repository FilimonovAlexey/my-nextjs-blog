import { getSortedPostsData } from '../../lib/posts';
import Link from 'next/link';

export default function Blog() {
  const allPostsData = getSortedPostsData().filter(post => post.title && post.date); // фильтруем только статьи с заголовком и датой

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
              <small>{date ? new Date(date).toLocaleDateString('ru-RU', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              }) : 'Дата не указана'}</small>
              <p>{description}</p>
              <div className="tags">
                {tags && tags.map(tag => (
                  <Link key={tag} href={`/tags/${tag}`}>
                    <span className="tag">#{tag}</span>
                  </Link>
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
