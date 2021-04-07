import React from 'react';
import Heading from '../components/heading';
import Page from '../components/page';
import Text from '../components/text';

const Index = () => {
  return (
    <Page meta={{ title: 'Home' }}>
      <Heading as='h1'>Homepage</Heading>
      <Text>
        Welcome to my website! Why not click on the about page to see some more
        information? Thanks for visiting!
      </Text>
    </Page>
  );
};

export default Index;
