import * as React from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Layout from '../components/Layout';
import Navigation from '../components/Navigation';
import Projects from '../components/Projects';
import SEO from '../components/seo';

const Home = () => {
  const aboutRef = React.useRef();
  const projectsRef = React.useRef();
  const contactRef = React.useRef();
  return (
    <Layout>
      <SEO title="Portfolio" />
      <Navigation aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef} />
      <About forwardRef={aboutRef} />
      <Projects forwardRef={projectsRef} />
      <Contact forwardRef={contactRef} />
    </Layout>
  );
};

export default Home;
