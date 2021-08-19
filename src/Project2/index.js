import { useState } from 'react';
import Activities from './Activities';
import Card from './Card';
import Footer from './Footer';
import './index.css';
import Modal from './Modal';
import Navbar from './Navbar';
import Progress from './Progress';
import Tables from './Tables';

const Project2 = () => {
  const [show, setShow] = useState(false);

  const onSignOut = () => {
    setShow(true);
  };

  const onDismiss = () => {
    setShow(false);
  };

  return (
    <div>
      <Navbar onSignOut={onSignOut} />
      {show ? <Modal show={show} onDismiss={onDismiss} /> : null}
      <Card />
      <Tables />
      <Progress />
      <Activities />
      <Footer />
    </div>
  );
};

export default Project2;
