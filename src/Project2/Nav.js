/* eslint-disable jsx-a11y/anchor-is-valid */
const Nav = ({ onSignOut }) => {
  const signOut = () => {
    onSignOut();
  };

  return (
    <div className='row align-items-center'>
      <div className='col-md-4'>
        <h4 className='text-white text-uppercase pt-2'>Dashboard</h4>
      </div>
      <div className='col-md-5'>
        <form>
          <div className='input-group'>
            <input
              type='text'
              className='form-control search-input'
              placeholder='Search...'
            />
            <button type='button' className='btn btn-light search-button'>
              <i className='fas fa-search text-danger'></i>
            </button>
          </div>
        </form>
      </div>
      <div className='col-md-3'>
        <ul className='navbar-nav'>
          <li className='nav-item item-parent'>
            <a href='#' className='nav-link icon-bullet'>
              <i className='fas fa-comments text-muted fa-lg'></i>
            </a>
          </li>
          <li className='nav-item item-parent'>
            <a href='#' className='nav-link icon-bullet'>
              <i className='fas fa-bell text-muted fa-lg'></i>
            </a>
          </li>
          <li className='nav-item ml-md-auto'>
            <a href='#' className='nav-link' onClick={signOut}>
              <i className='fas fa-sign-out-alt text-danger fa-lg'></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
