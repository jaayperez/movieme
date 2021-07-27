import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  SideBarTitle,
  SideBarItem,
  ItemActiveTick,
  ItemContainer,
  ItemIcon,
  ItemText
} from './styled';

import Constants from '../../utils/Constants';

function SideBar({ handler }) {
  const [toggleStatus, setToggleStatus] = useState([
    true,
    ...new Array(Constants.SideBarItems.length - 1).fill(false)
  ]);

  return (
    <>
      <SideBarTitle>Movie Me</SideBarTitle>
      {Constants.SideBarItems.map((val, i) => {
        const key = i;
        return (
          <SideBarItem key={key}>
            <ItemContainer
              onClick={() => {
                handler(val.text);
                setToggleStatus(status => {
                  return status.map((s, idx) => i === idx);
                });
              }}>
              <ItemActiveTick bg={toggleStatus[i] && '#3CE7F5'} />
              <ItemIcon color={(toggleStatus[i] && '#A1A3B2') || undefined}>
                {val.icon}
              </ItemIcon>
              <ItemText color={(toggleStatus[i] && '#A1A3B2') || undefined}>
                {val.text}
              </ItemText>
            </ItemContainer>
          </SideBarItem>
        );
      })}
    </>
  );
}

SideBar.propTypes = {
  handler: PropTypes.func
};

SideBar.defaultProps = {
  handler: () => {}
};
export default SideBar;
