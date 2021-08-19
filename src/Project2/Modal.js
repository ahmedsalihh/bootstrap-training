const Modal = ({ show, onDismiss }) => {
  const dismiss = () => {
    onDismiss();
  };

  const onLeave = () => {
    onDismiss();
  };

  return (
    <div className='modal' style={{ display: `${show ? 'flex' : 'none'}` }}>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h4 className='modal-title'>Want to leave?</h4>
            <button type='button' className='close' onClick={dismiss}>
              &times;
            </button>
          </div>
          <div className='modal-body'>Press ok to leave</div>
          <div className='modal-footer'>
            <button type='button' className='btn btn-success' onClick={dismiss}>
              Stay Here
            </button>
            <button type='button' className='btn btn-danger' onClick={onLeave}>
              Leave
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
