import { getAllPostIds, getPostData } from '../../../lib/posts';
import Head from 'next/head';
import Link from 'next/link';

export default async function Post({ params }) {
  const postData = await getPostData(params.slug);

  return (
    <>
      <Head>
        <title>{postData.title}</title>
        <meta name="description" content={postData.description} />
      </Head>
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
        <div>
          {postData.tags && postData.tags.map(tag => (
            <Link key={tag} href={`/tags/${tag}`}>
              <span style={{ marginRight: '10px', cursor: 'pointer' }}>#{tag}</span>
            </Link>
          ))}
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </>
  );
}

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map((path) => ({
    slug: path.params.slug,
  }));
}
