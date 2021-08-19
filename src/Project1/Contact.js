const Contact = () => {
  return (
    <section className='p-5 bg-light'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col text-center mb-3'>
            <h1 className='text-warning display-2'>Contact Us</h1>
            <p className='lead text-secondary'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>

        <div className='row justify-content-center'>
          <div className='col-lg-6 col-md-8 col-sm-10'>
            <div className='text-center text-secondary'>
              <h2>Got Question?</h2>
              <p>Stay Connected</p>
            </div>
            <form className='text-muted'>
              <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input type='text' className='form-control' id='name' />
              </div>
              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input type='text' className='form-control' id='email' />
              </div>
              <div className='form-group'>
                <label htmlFor='message'>Message</label>
                <textarea
                  className='form-control'
                  id='message'
                  rows='3'
                ></textarea>
              </div>
              <button
                className='btn btn-outline-warning btn-block'
                type='submit'
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
