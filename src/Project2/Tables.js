const Tables = () => {
  return (
    <section>
      <div className='container-fluid'>
        <div className='row mb-5'>
          <div className='col-xl-10 col-lg-9 col-md-8 ml-auto'>
            <div className='row align-items-center'>
              <div className='col-xl-6 col-12 mb-4 mb-xl-0'>
                <h3 className='text-muted text-center mb-3'>Staff Salary</h3>
                <table className='table bg-light text-center'>
                  <thead>
                    <tr className='text-muted'>
                      <th>#</th>
                      <th>Name</th>
                      <th>Salary</th>
                      <th>Date</th>
                      <th>Content</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>1</th>
                      <td>John</td>
                      <td>$2000</td>
                      <td>25/05/2021</td>
                      <td>
                        <button type='button' className='btn btn-info btn-sm'>
                          Message
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th>2</th>
                      <td>Ann</td>
                      <td>$2000</td>
                      <td>25/05/2021</td>
                      <td>
                        <button type='button' className='btn btn-info btn-sm'>
                          Message
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th>3</th>
                      <td>Mark</td>
                      <td>$2000</td>
                      <td>25/05/2021</td>
                      <td>
                        <button type='button' className='btn btn-info btn-sm'>
                          Message
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th>4</th>
                      <td>Mary</td>
                      <td>$2000</td>
                      <td>25/05/2021</td>
                      <td>
                        <button type='button' className='btn btn-info btn-sm'>
                          Message
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th>5</th>
                      <td>Bob</td>
                      <td>$2000</td>
                      <td>25/05/2021</td>
                      <td>
                        <button type='button' className='btn btn-info btn-sm'>
                          Message
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <nav>
                  <ul className='pagination justify-content-center'>
                    <li className='page-item'>
                      <a href='#' className='page-link py-2 px-3'>
                        <span>&laquo;</span>
                      </a>
                    </li>
                    <li className='page-item active'>
                      <a href='#' className='page-link py-2 px-3'>
                        1
                      </a>
                    </li>
                    <li className='page-item'>
                      <a href='#' className='page-link py-2 px-3'>
                        2
                      </a>
                    </li>
                    <li className='page-item'>
                      <a href='#' className='page-link py-2 px-3'>
                        <span>&raquo;</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className='col-xl-6 col-12'>
                <h3 className='text-muted text-center mb-3'>Recent Payments</h3>
                <table className='table table-dark table-hover text-center'>
                  <thead>
                    <tr className='text-muted'>
                      <th>#</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>1</th>
                      <td>Monica</td>
                      <td>$2000</td>
                      <td>25/05/2021</td>
                      <td>
                        <span className='badge badge-success w-75 py-2'>
                          Approved
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th>2</th>
                      <td>Nick</td>
                      <td>$2000</td>
                      <td>25/05/2021</td>
                      <td>
                        <span className='badge badge-success w-75 py-2'>
                          Approved
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th>3</th>
                      <td>Alex</td>
                      <td>$2000</td>
                      <td>25/05/2021</td>
                      <td>
                        <span className='badge badge-danger w-75 py-2'>
                          Pending
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th>4</th>
                      <td>Jane</td>
                      <td>$2000</td>
                      <td>25/05/2021</td>
                      <td>
                        <span className='badge badge-danger w-75 py-2'>
                          Pending
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th>5</th>
                      <td>Kate</td>
                      <td>$2000</td>
                      <td>25/05/2021</td>
                      <td>
                        <span className='badge badge-success w-75 py-2'>
                          Approved
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <nav>
                  <ul className='pagination justify-content-center'>
                    <li className='page-item'>
                      <a href='#' className='page-link py-2 px-3'>
                        <span>Previous</span>
                      </a>
                    </li>
                    <li className='page-item active'>
                      <a href='#' className='page-link py-2 px-3'>
                        1
                      </a>
                    </li>
                    <li className='page-item'>
                      <a href='#' className='page-link py-2 px-3'>
                        2
                      </a>
                    </li>
                    <li className='page-item'>
                      <a href='#' className='page-link py-2 px-3'>
                        <span>Next</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tables;
