import * as React from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Layout from '../components/Layout';
import Projects from '../components/Projects';
import SEO from '../components/seo';

const Home = () => {
  return (
    <Layout>
      <SEO title="Strona główna" />
      <About />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default Home;
