import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Content,
  Image,
  Text,
  FAB,
  Separator,
  Button
} from './styled';

function Item({ image, title, overview, ratings }) {
  return (
    <Container>
      <Image image={image} />
      <Content>
        <Text weight='bolder' relative>
          {title}
        </Text>
        <Text color='#BFC0CE' height>
          {overview}
        </Text>
        <FAB>{ratings}</FAB>
        <Separator />
        <Button>Details</Button>
      </Content>
    </Container>
  );
}

Item.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  overview: PropTypes.string,
  ratings: PropTypes.string
};

Item.defaultProps = {
  image: '',
  title: '',
  overview: '',
  ratings: ''
};

export default Item;
