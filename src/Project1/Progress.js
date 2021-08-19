const Progress = () => {
  return (
    <section className='p-5'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col text-center mb-3'>
            <h1 className='text-warning display-2'>Progress</h1>
            <p className='lead text-secondary'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>

        <div className='row justify-content-center'>
          <div className='col-lg-6 col-sm-10 text-secondary'>
            <h2>HTML</h2>
            <div className='progress bg-secondary mb-3'>
              <div className='progress-bar' style={{ width: '50%' }}>
                50%
              </div>
            </div>
            <h2>CSS</h2>
            <div className='progress bg-secondary mb-3'>
              <div className='progress-bar bg-danger' style={{ width: '70%' }}>
                70%
              </div>
            </div>
            <h2>Javascript</h2>
            <div className='progress bg-secondary mb-3'>
              <div className='progress-bar bg-warning' style={{ width: '90%' }}>
                90%
              </div>
            </div>
            <h2>Bootstrap</h2>
            <div className='progress bg-secondary mb-3'>
              <div className='progress-bar bg-success' style={{ width: '95%' }}>
                95%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progress;
