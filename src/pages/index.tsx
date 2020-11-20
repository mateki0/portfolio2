import * as React from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Layout from '../components/Layout';
import Navigation from '../components/Navigation';
import Projects from '../components/Projects';
import SEO from '../components/seo';

const Home = () => {
  const projectsRef = React.useRef();
  const contactRef = React.useRef();
  return (
    <Layout>
      <SEO title="Portfolio" />
      <Navigation projectsRef={projectsRef} contactRef={contactRef} />
      <About />
      <Projects forwardRef={projectsRef} />
      <Contact forwardRef={contactRef} />
    </Layout>
  );
};

export default Home;
