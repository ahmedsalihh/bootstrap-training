const Section3 = () => {
  return (
    <div>
      <p className='bg-primary text-light mb-5'>Lorem ipsum dolor sit amet</p>
      <p className='bg-info text-white mx-3'>Lorem ipsum dolor sit amet</p>
      <p className='bg-info text-white my-3'>Lorem ipsum dolor sit amet</p>
      <p className='bg-warning'>Lorem ipsum dolor sit amet</p>
      <p className='bg-warning p-3'>Lorem ipsum dolor sit amet</p>
      <p className='bg-warning pl-5'>Lorem ipsum dolor sit amet</p>
      <p className='bg-warning p-sm-1 p-md-4 p-xl-5'>
        Lorem ipsum dolor sit amet
      </p>

      <div className='bg-secondary' style={{ width: '800px', height: '600px' }}>
        <div className='bg-primary text-light p-3 w-25 h-25'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </div>
        <div className='bg-danger text-light p-3 w-50'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </div>
        <div className='bg-success text-light p-3 w-75'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </div>
        <div className='bg-warning text-light p-3 w-100'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </div>
        <div className='bg-danger text-light p-3 w-50 m-auto'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </div>
    </div>
  );
};

export default Section3;
