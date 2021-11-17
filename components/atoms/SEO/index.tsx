import Head from 'next/head';

interface SeoProps {
  title: string;
  description: string;
  image: string;
}

export default function SEO(props: SeoProps) {
  const { title, description, image } = props;
  const metaData = [
    {
      name: 'description',
      content: description,
    },
    {
      name: 'og:title',
      content: `WhatFlix - ${title}`,
    },
    {
      name: 'og:description',
      content: description,
    },
    {
      name: 'og:type',
      content: 'website',
    },
    {
      name: 'og:url',
      content: 'https://whatflix.vercel.app',
    },
    {
      name: 'og:image',
      content: image,
    },
  ];

  return (
    <Head>
      <title>
        WhatFlix -
        {' '}
        {title}
      </title>
      {metaData.map(({ name, content }) => (
        <meta key={name} name={name} content={content} />
      ))}
    </Head>
  );
}
