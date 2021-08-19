const Footer = () => {
  return (
    <section className='bg-secondary'>
      <div className='container'>
        <div className='row'>
          <div className='col text-center'>
            <h1 className='text-white font-weight-light text-capitalized p-3'>
              Pure Bootstrap Project
            </h1>
            <h3 className='text-light font-weight-light font-italic mb-3'>
              Lorem ipsum dolor sit amet.
            </h3>
            <div className='p-2'>
              <a href='#'>
                <i className='fab fa-facebook fa-2x text-primary mx-3'></i>
                <i className='fab fa-twitter fa-2x text-info mx-3'></i>
                <i className='fab fa-youtube fa-2x text-danger mx-3'></i>
              </a>
            </div>
            <p className='text-light py-4 m-0'>&copy;Copyright 2021 - Made By me</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
