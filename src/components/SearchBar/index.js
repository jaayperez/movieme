import React from 'react';
import { MdSearch } from 'react-icons/md';
import PropTypes from 'prop-types';

import { SearchBarContainer, SearchIcon, SearchInput } from './styled';

function Search({ handler, value }) {
  return (
    <SearchBarContainer>
      <SearchIcon>
        <MdSearch />
      </SearchIcon>
      <SearchInput
        onChange={handler}
        value={value}
        placeholder='Search Movies'
      />
    </SearchBarContainer>
  );
}

Search.propTypes = {
  handler: PropTypes.func,
  value: PropTypes.string
};

Search.defaultProps = {
  handler: () => {},
  value: ''
};

export default Search;
