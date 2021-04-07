import React from 'react';
import NextHead from 'next/head';

export interface HeadProps {
  title: string;
}

const Head = ({ title }: HeadProps) => {
  return (
    <NextHead>
      <title>{`${title} - RandomNumbers`}</title>
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link
        href='https://fonts.googleapis.com/css2?family=Lexend:wght@300;500&display=swap'
        rel='stylesheet'
      />
    </NextHead>
  );
};

export default Head;
