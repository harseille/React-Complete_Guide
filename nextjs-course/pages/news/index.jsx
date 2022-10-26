import Link from 'next/link';
import React from 'react';

const NewsPage = () => {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/great-framework"> NextJS is Great framework</Link>
        </li>
      </ul>
    </>
  );
};

export default NewsPage;
