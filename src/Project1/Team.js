import kid1 from './images/kid1.jpg';
import kid2 from './images/kid2.jpg';
import kid3 from './images/kid3.jpg';

const Team = () => {
  return (
    <section className='p-sm-5 p-2 bg-secondary'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col text-center mb-3'>
            <h1 className='text-warning display-2'>Team</h1>
            <p className='lead text-light'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-4 col-sm-10 mx-auto mb-4'>
            <div className='card'>
              <img src={kid1} className='card-image-top' alt='kid1' />
              <div className='card-body'>
                <div className='card-title'>
                  <h3 className='text-muted'>Michael</h3>
                </div>
                <div className='card-subtitle'>
                  <p className='lead text-secondary'>
                    Lorem ipsum dolor sit amet.
                  </p>
                  <div className='text-right'>
                    <a href='#'>
                      <i className='fab fa-facebook fa-2x mx-2 text-primary'></i>
                      <i className='fab fa-twitter fa-2x mx-2 text-info'></i>
                      <i className='fab fa-youtube fa-2x mx-2 text-danger'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-sm-10 mx-auto mb-4'>
            <div className='card'>
              <img src={kid2} className='card-image-top' alt='kid2' />
              <div className='card-body'>
                <div className='card-title'>
                  <h3 className='text-muted'>Andy</h3>
                </div>
                <div className='card-subtitle'>
                  <p className='lead text-secondary'>
                    Lorem ipsum dolor sit amet.
                  </p>
                  <div className='text-right'>
                    <a href='#'>
                      <i className='fab fa-facebook fa-2x mx-2 text-primary'></i>
                      <i className='fab fa-twitter fa-2x mx-2 text-info'></i>
                      <i className='fab fa-youtube fa-2x mx-2 text-danger'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-sm-10 mx-auto mb-4'>
            <div className='card'>
              <img src={kid3} className='card-image-top' alt='kid3' />
              <div className='card-body'>
                <div className='card-title'>
                  <h3 className='text-muted'>Jane</h3>
                </div>
                <div className='card-subtitle'>
                  <p className='lead text-secondary'>
                    Lorem ipsum dolor sit amet.
                  </p>
                  <div className='text-right'>
                    <a href='#'>
                      <i className='fab fa-facebook fa-2x mx-2 text-primary'></i>
                      <i className='fab fa-twitter fa-2x mx-2 text-info'></i>
                      <i className='fab fa-youtube fa-2x mx-2 text-danger'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
