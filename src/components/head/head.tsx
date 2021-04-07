import React from 'react';
import NextHead from 'next/head';

export interface HeadProps {
  title: string;
}

const Head = ({ title }: HeadProps) => {
  return (
    <NextHead>
      <title>{`${title} - RandomNumbers`}</title>
    </NextHead>
  );
};

export default Head;
