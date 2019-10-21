import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MaterialButton from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const Button = ({ type, name, label, startIcon, color }) => {
  const classes = useStyles();
  const id = `btn-${name}`;

  return (
    <MaterialButton
      type={type}
      id={id}
      variant="contained"
      color={color}
      className={classes.button}
      startIcon={startIcon}
      size="large"
    >
      {label}
    </MaterialButton>
  );
};

Button.defaultProps = {
  startIcon: null,
  color: 'default',
  type: null,
};

Button.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  startIcon: PropTypes.element,
  color: PropTypes.string,
};

export default Button;
