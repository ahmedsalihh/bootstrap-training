import Banner from './Banner';
import Contact from './Contact';
import Footer from './Footer';
import './index.css';
import Nav from './Nav';
import Progress from './Progress';
import Projects from './Project';
import Skillls from './Skills';
import Team from './Team';

const Project1 = () => {
  return (
    <div>
      <Nav />
      <Banner />
      <Skillls />
      <Projects />
      <Team />
      <Progress />
      <Contact />
      <Footer />
    </div>
  );
};

export default Project1;
