import React from 'react';
import Heading from '../components/heading';
import Page from '../components/page';
import Text from '../components/text';

const About = () => {
  return (
    <Page meta={{ title: 'About' }}>
      <Heading as='h1'>About</Heading>
      <Text>
        Welcome to my about page! I will be sure to put some information here as
        soon as possible!
      </Text>
    </Page>
  );
};

export default About;
