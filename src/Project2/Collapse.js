import { useState } from 'react';

const Collapse = ({ img, shortText, desc }) => {
  const [collapse, setCollapse] = useState(true);

  const onCollapse = () => {
    setCollapse(!collapse);
  };
  return (
    <div>
      <div className='card'>
        <div className='card-header'>
          <button
            onClick={onCollapse}
            className='btn btn-block bg-secondary text-light text-left'
          >
            <img src={img} alt='' width='50px' className='mr-3 rounded' />
            {shortText}
          </button>
        </div>
        <div className={`${collapse ? 'collapse' : ''}`}>
          <div className='card-body'>{desc}</div>
        </div>
      </div>
    </div>
  );
};

export default Collapse;
