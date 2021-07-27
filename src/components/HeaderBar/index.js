import React from 'react';
import PropTypes from 'prop-types';

import { HeaderBarContainer, HeaderText } from './styled';

function HeaderBar({ title }) {
  return (
    <HeaderBarContainer>
      <HeaderText>{title}</HeaderText>
    </HeaderBarContainer>
  );
}

HeaderBar.propTypes = {
  title: PropTypes.string
};

HeaderBar.defaultProps = {
  title: 'Movie Me App'
};

export default HeaderBar;
