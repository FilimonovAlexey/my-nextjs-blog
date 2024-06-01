import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { unified } from 'unified';
import rehypeParse from 'rehype-parse';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import rehypeExpressiveCode from 'rehype-expressive-code';

const postsDirectory = path.join(process.cwd(), 'src/posts');

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
      date: matterResult.data.date ? new Date(matterResult.data.date).toISOString() : null,
    };
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const processedHtml = await unified()
    .use(rehypeParse, { fragment: true })
    .use(rehypeRaw)
    .use(rehypeExpressiveCode, {
      copyButton: {
        text: "Скопировать",
        successText: "Скопировано"
      }
    })
    .use(rehypeStringify)
    .process(processedContent.toString());

  const contentHtml = processedHtml.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
    date: matterResult.data.date ? new Date(matterResult.data.date).toISOString() : null,
  };
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ''),
      },
    };
  });
}