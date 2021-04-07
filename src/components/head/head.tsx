import React from 'react';
import NextHead from 'next/head';

export interface HeadProps {
  title: string;
}

const Head = ({ title }: HeadProps) => {
  return (
    <NextHead>
      <title>{`${title} - Rees Morris`}</title>
    </NextHead>
  );
};

export default Head;
