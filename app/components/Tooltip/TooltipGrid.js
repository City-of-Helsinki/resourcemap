import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import SpaceAvailability from 'constants/SpaceAvailability';
import { vacancyIconColoringCss } from 'components/VacancyIcon';

const Center = styled.div`
  display: flex;
  justify-content: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 20px);
  grid-template-rows: 20px 20px;
  grid-gap: 20px 20px;
  max-width: ${props =>
    props.maxRowLength * 20 + (props.maxRowLength - 1) * 20 + 2 * 3}px;
  margin: 20px 0;

  border: 3px solid #191919;
`;

const Item = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;

  ${vacancyIconColoringCss};
`;

const ItemNumber = styled.div`
  position: absolute;

  font-size: ${props => props.theme.fontSize.get(1)};
  font-weight: 500;

  ${props => {
    if (props.position === 'top') {
      return 'top: -100%';
    }

    if (props.position === 'bottom') {
      return 'bottom: -100%';
    }

    return '';
  }}
`;

export const TooltipGrid = ({ items }) => {
  const topRowLength = Math.ceil(items.length / 2);

  const getLabelPosition = index => {
    const isOnTopRow = index + 1 <= topRowLength;

    return isOnTopRow ? 'top' : 'bottom';
  };

  return (
    <Center>
      <Grid maxRowLength={topRowLength}>
        {items.map((item, i) => (
          <Item key={item.id} className={item.availability}>
            <ItemNumber position={getLabelPosition(i)}>{item.label}</ItemNumber>
          </Item>
        ))}
      </Grid>
    </Center>
  );
};

TooltipGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.node.isRequired,
      // Ideally we would make this component agnostic of business
      // logic, but I skipped a corner here in order to reduce the
      // complexity of the final code.
      availability: PropTypes.oneOf(Object.values(SpaceAvailability))
        .isRequired,
    }),
  ),
};

export default TooltipGrid;
