import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import getSpaceAvailability from 'utils/getSpaceAvailability';
import { vacancyIconColoringCss } from 'components/VacancyIcon';
import spaceTypeMessages from './spaceTypeMessages';
import { Title, Row as OneItemRow, RowLabel, Icon } from './wrappers';
import UserIcon from './icons/UserIcon';
import messages from './messages';

const Row = styled(OneItemRow)`
  justify-content: space-between;
`;

const RowItem = styled.div`
  display: flex;
  align-items: center;
`;

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

  font-size: 12px;
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

export const TooltipGrid = ({ groups }) => {
  if (groups.length === 0) {
    return null;
  }

  const [spaceType, spaces] = groups[0];
  const maxPeopleCount = spaces.length;
  const someSpaceCanBeReserved = spaces.some(space => space.canBeReserved);
  const spacesWithOrder = spaces.map((space, index) => ({
    ...space,
    order: index + 1,
  }));
  const halfwayThrough = Math.floor(spacesWithOrder.length / 2);
  const adjustedSpaceOrder = [
    ...spacesWithOrder.slice(halfwayThrough, spacesWithOrder.length).reverse(),
    ...spacesWithOrder.slice(0, halfwayThrough),
  ];
  const topRowLength = Math.ceil(adjustedSpaceOrder.length / 2);

  const getLabelPosition = index => {
    const isOnTopRow = index + 1 <= topRowLength;

    return isOnTopRow ? 'top' : 'bottom';
  };

  return (
    <>
      <Title>
        <FormattedMessage {...spaceTypeMessages[spaceType]} />
      </Title>
      <Row>
        <RowItem>
          <Icon>
            <UserIcon />
          </Icon>
          <RowLabel>{maxPeopleCount}</RowLabel>
        </RowItem>
        <RowItem>
          <RowLabel>
            {someSpaceCanBeReserved && (
              <FormattedMessage {...messages.reservationStatusLabel} />
            )}
            {!someSpaceCanBeReserved && (
              <FormattedMessage {...messages.notReservableStatusLabel} />
            )}
          </RowLabel>
        </RowItem>
      </Row>
      <Center>
        <Grid maxRowLength={topRowLength}>
          {adjustedSpaceOrder.map((spaceWithOrder, i) => (
            <Item
              key={spaceWithOrder.id}
              className={getSpaceAvailability(spaceWithOrder)}
            >
              <ItemNumber position={getLabelPosition(i)}>
                {spaceWithOrder.order}
              </ItemNumber>
            </Item>
          ))}
        </Grid>
      </Center>
    </>
  );
};

TooltipGrid.propTypes = {
  groups: PropTypes.array,
};

export default TooltipGrid;
