import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MaterialTextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

const TextField = ({ name, label, valueRequired, defaultValue, onChange }) => {
  const classes = useStyles();
  const id = `txt-${name}`;

  return (
    <MaterialTextField
      required={valueRequired}
      id={id}
      label={label}
      defaultValue={defaultValue}
      className={classes.textField}
      margin="normal"
      variant="outlined"
      onChange={onChange}
    />
  );
};

TextField.defaultProps = {
  defaultValue: '',
  valueRequired: false,
};

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  valueRequired: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default TextField;
