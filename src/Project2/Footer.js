const Footer = () => {
  return (
    <footer>
      <div className='container-fluid'>
        <div className='row border-top pt-3'>
          <div className='col-xl-10 col-lg-9 col-md-8 ml-auto'>
            <div className='row'>
              <div className='col-lg-6 text-center'>
                <ul className='list-inline'>
                  <li className='list-inline-item mr-2'>
                    <a href='#' className='text-dark'>
                      CodeAndCreate
                    </a>
                  </li>
                  <li className='list-inline-item mr-2'>
                    <a href='#' className='text-dark'>
                      About
                    </a>
                  </li>
                  <li className='list-inline-item mr-2'>
                    <a href='#' className='text-dark'>
                      Support
                    </a>
                  </li>
                  <li className='list-inline-item mr-2'>
                    <a href='#' className='text-dark'>
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div className='col-lg-6 text-center'>
                <p>
                  &copy; 2021 Copyright Made with 
                  <i className='fas fa-heart text-danger'></i> by 
                  <span className='text-success'>ASC</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
