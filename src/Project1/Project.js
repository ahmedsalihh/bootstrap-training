import project1 from './images/project1.jpg';
import project2 from './images/project2.jpg';
import project3 from './images/project3.jpg';
import project4 from './images/project4.jpg';

const Projects = () => {
  return (
    <section className='p-5'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col text-center mb-3'>
            <h1 className='text-warning display-2'>Projects</h1>
            <p className='lead text-secondary'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-3 col-sm-6'>
            <img src={project1} alt='project1' className='img-thumbnail' />
            <h2 className='my-3 text-warning'>Project One</h2>
            <p className='text-muted'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </div>
          <div className='col-lg-3 col-sm-6 mt-3'>
            <img src={project2} alt='project2' className='img-thumbnail' />
            <h2 className='my-3 text-warning'>Project Two</h2>
            <p className='text-muted'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </div>
          <div className='col-lg-3 col-sm-6 mt-4'>
            <img src={project3} alt='project3' className='img-thumbnail' />
            <h2 className='my-3 text-warning'>Project Three</h2>
            <p className='text-muted'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </div>
          <div className='col-lg-3 col-sm-6 mt-5'>
            <img src={project4} alt='project4' className='img-thumbnail' />
            <h2 className='my-3 text-warning'>Project Four</h2>
            <p className='text-muted'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
