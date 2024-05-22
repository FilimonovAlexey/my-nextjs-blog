import { getAllPostIds, getPostData } from '../../../lib/posts';
import Head from 'next/head';

export default async function Post({ params }) {
  const postData = await getPostData(params.slug);

  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1>{postData.title}</h1>
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