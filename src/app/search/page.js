"use client";

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function Search() {
  const searchParams = useSearchParams();
  const query = searchParams.get('query');
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/posts');
      const allPostsData = await response.json();

      if (query) {
        const results = allPostsData.filter(post => {
          const titleMatch = post.title ? post.title.toLowerCase().includes(query.toLowerCase()) : false;
          const descriptionMatch = post.description ? post.description.toLowerCase().includes(query.toLowerCase()) : false;
          const contentMatch = post.content ? post.content.toLowerCase().includes(query.toLowerCase()) : false;
          return titleMatch || descriptionMatch || contentMatch;
        });
        setFilteredPosts(results);
      }
    }

    fetchData();
  }, [query]);

  return (
    <div>
      <h1>Результаты поиска: {query}</h1>
      <ul>
        {filteredPosts.map(({ id, date, title, description }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>
              {title}
            </Link>
            <br />
            <small>
              Опубликовано: {date ? new Date(date).toLocaleDateString('ru-RU', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              }) : 'Дата не указана'}
            </small>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
