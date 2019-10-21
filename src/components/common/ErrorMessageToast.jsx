import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import PropTypes from 'prop-types';
import MessageToast from './MessageToast';

const ErrorMessageToast = ({ show, message }) => {
  const [open, setOpen] = React.useState(show);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <MessageToast onClose={handleClose} variant="error" message={message} />
      </Snackbar>
    </>
  );
};

ErrorMessageToast.defaultProps = {
  show: false,
};

ErrorMessageToast.propTypes = {
  show: PropTypes.bool,
  message: PropTypes.string.isRequired,
};

export default ErrorMessageToast;
