import React from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';
import Button from './Button';

const SearchButton = ({ name, label }) => {
  return (
    <Button
      type="submit"
      name={name}
      label={label}
      startIcon={<SearchIcon />}
      onSu
    />
  );
};

SearchButton.defaultProps = {
  label: 'Search',
};

SearchButton.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default SearchButton;
