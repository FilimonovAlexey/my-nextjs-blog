import { getPostData, getAllPostIds } from '../../../lib/posts';
import Link from 'next/link';

export default async function Post({ params }) {
  const postData = await getPostData(params.slug);

  return (
    <div>
      <article>
        <h1>{postData.title}</h1>
        <div>
          <small>
            Опубликовано: {postData.date ? new Date(postData.date).toLocaleDateString('ru-RU', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }) : 'Дата не указана'}
          </small>
        </div>
        <div className="tags">
          {postData.tags && postData.tags.map(tag => (
            <Link key={tag} href={`/tags/${tag}`}>
              <span className="tag">#{tag}</span>
            </Link>
          ))}
        </div>
        <div className="content" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <Link href="/blog">← Назад к блогу</Link>
    </div>
  );
}

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map((path) => ({
    slug: path.params.slug,
  }));
}