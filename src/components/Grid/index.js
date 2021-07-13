import React from 'react';
import PropTypes from 'prop-types';

import GridItem from '../Item';

import GridContainer from './styled';

import Constants from '../../utils/Constants';

function Grid({ items }) {
  return (
    <GridContainer>
      {items.map((item, i) => {
        const idx = i;
        return (
          <GridItem
            key={idx}
            title={item.title}
            image={`${Constants.IMAGE_URL}/${item.poster_path}`}
            overview={item.overview}
            ratings={item.vote_average}
          />
        );
      })}
    </GridContainer>
  );
}

Grid.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any)
};

Grid.defaultProps = {
  items: []
};

export default Grid;
