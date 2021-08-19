import { useState } from 'react';
import Collapse from './Collapse';
import Cust1 from './images/cust1.jpeg';
import Cust2 from './images/cust2.jpeg';
import Cust3 from './images/cust3.jpeg';

const Activities = () => {
  const desc1 =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et saepe beatae eligendi debitis corrupti voluptatum minima, consectetur repellat. Quibusdam aliquam quis aspernatur neque fuga quisquam?';
  return (
    <section>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xl-10 col-lg-9 col-md-8 ml-auto'>
            <div className='row align-items-top mb-5'>
              <div className='col-xl-7'>
                <h4 className='text-muted mb-4'>Recent Customer Activities</h4>
                <Collapse
                  img={Cust1}
                  shortText='John posted a new comment'
                  desc={desc1}
                />
                <Collapse
                  img={Cust2}
                  shortText='John posted a new comment'
                  desc={desc1}
                />
                <Collapse
                  img={Cust3}
                  shortText='John posted a new comment'
                  desc={desc1}
                />
              </div>
              <div className='col-xl-5 mt-5'>
                <div className='card rounded'>
                  <div className='card-body'>
                    <h5 className='text-muted text-center mb-4'>
                      Qick Status Post
                    </h5>
                    <ul className='list-inline text-center py-3'>
                      <li className='list-inline-item mr-4'>
                        <a href='#'>
                          <i className='fas fa-pencil-alt text-success'></i>
                          <span className='h6 text-muted'>Status</span>
                        </a>
                      </li>
                      <li className='list-inline-item mr-4'>
                        <a href='#'>
                          <i className='fas fa-camera text-info'></i>
                          <span className='h6 text-muted'>Photo</span>
                        </a>
                      </li>
                      <li className='list-inline-item'>
                        <a href='#'>
                          <i className='fas fa-map-marker-alt text-primary'></i>
                          <span className='h6 text-muted'>Check-in</span>
                        </a>
                      </li>
                    </ul>
                    <form>
                      <div className='form-group'>
                        <input
                          type='text'
                          className='form-control py-2 mb-3'
                          placeholder='Whats your status?'
                        />
                        <button className='btn btn-block text-uppercase font-weight-bold text-light bg-info py-2 mb-5'>
                          Submit post
                        </button>
                      </div>
                    </form>
                    <div className='row'>
                      <div className='col-6'>
                        <div className='card bg-light'>
                          <i className='far fa-calendar-alt fa-8x text-warning d-block m-auto py-3'></i>
                          <div className='card-body'>
                            <p className='card-text text-center font-weight-bold text-uppercase'>
                              Mon, may30
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='col-6'>
                        <div className='card bg-light'>
                          <i className='far fa-clock fa-8x text-danger d-block m-auto py-3'></i>
                          <div className='card-body'>
                            <p className='card-text text-center font-weight-bold text-uppercase'>
                              3:50
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default Activities;
