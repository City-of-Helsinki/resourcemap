import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { FormattedMessage } from 'react-intl';
import get from 'lodash/get';

import { makeSelectSpaces } from 'containers/HomePage/selectors';
import reducer from 'containers/HomePage/reducer';
import saga from 'containers/HomePage/saga';
import LocaleToggle from 'containers/LocaleToggle';
import MapContainer from 'components/MapContainer';
import Tooltip from 'components/Tooltip';
import ButtonList from 'components/ButtonList';
import VacancyList from 'components/VacancyList';
import H1 from 'components/H1';
import QRCode from 'components/QRCode';
import {
  Wrapper,
  MapWrapper,
  HorizontalLine,
  ControlsWrapper,
  ButtonsWrapper,
  FloorLabel,
  QRCodeWrapper,
  QRCodeDescription,
  QRCodeLink,
} from './wrappers';
import messages from './messages';

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      highlighted: '',
      currentRoom: null,
      tooltipState: {
        current: null,
        visible: false,
      },
      x: 0,
      y: 0,
    };

    this.roomRef = React.createRef();
    this.highlightRoomType = this.highlightRoomType.bind(this);
    this.onSpaceNameClick = this.onSpaceNameClick.bind(this);
    this.handleRoomClick = this.handleRoomClick.bind(this);
    this.roomTooltip = this.roomTooltip.bind(this);
    this.resetActiveRoom = this.resetActiveRoom.bind(this);
  }

  get currentRoom() {
    const { currentRoom } = this.state;

    if (!currentRoom) {
      return null;
    }

    const roomSpaces = this.props.spaces.filter(
      space => space.room === currentRoom,
    );

    return {
      id: currentRoom,
      spaces: roomSpaces,
    };
  }

  handleRoomClick(event, room) {
    this.roomTooltip(event.target, room);
  }

  roomTooltip(roomElement, room) {
    const rect = roomElement.getBoundingClientRect();
    const x = Math.round(rect.left);
    const y = Math.round(rect.top);
    const xPos = Math.round(x + rect.width / 2);

    this.setState(previousState => ({
      tooltipState: {
        visible: !(
          room === previousState.currentRoom &&
          previousState.tooltipState.visible
        ),
      },
      currentRoom: room,
      x: xPos,
      y,
    }));
  }

  highlightRoomType(highlight) {
    let hl = highlight;
    if (this.state.highlighted === hl) {
      hl = '';
    }

    this.setState({
      highlighted: hl,
      currentRoom: null,
      tooltipState: {
        visible: false,
      },
    });
  }

  resetActiveRoom() {
    this.setState({
      currentRoom: null,
      tooltipState: {
        visible: false,
      },
    });
  }

  onSpaceNameClick(space) {
    const roomElementId = `#${space.room}`;
    const roomElement = this.roomRef.current.querySelector(roomElementId);

    this.roomTooltip(roomElement, space.room);
  }

  render() {
    const { highlighted, tooltipState, x, y } = this.state;
    const { spaces } = this.props;

    const QRCodeHref = 'https://varaamo.hel.fi/search?&unit=tprek%3A51342';
    const QRCodeLinkValue = 'varaamo.hel.fi';

    return (
      <React.Fragment>
        <Wrapper>
          <QRCodeWrapper>
            <QRCode
              link={QRCodeHref}
              description={
                <>
                  <FormattedMessage {...messages.makeReservationInVaraamo}>
                    {text => <QRCodeDescription>{text}</QRCodeDescription>}
                  </FormattedMessage>
                  <br />
                  <QRCodeLink>{QRCodeLinkValue}</QRCodeLink>
                </>
              }
            />
          </QRCodeWrapper>
          <H1>
            Oodi{' '}
            <FormattedMessage {...messages.mapTitle}>
              {text => <FloorLabel>{text}</FloorLabel>}
            </FormattedMessage>
          </H1>
          <MapWrapper>
            <MapContainer
              spaces={spaces}
              highlighted={highlighted}
              currentRoom={this.currentRoom}
              tooltipState={tooltipState}
              handleRoomClick={this.handleRoomClick}
              roomRef={this.roomRef}
            />
          </MapWrapper>
          <ControlsWrapper>
            <LocaleToggle />
            <VacancyList />
          </ControlsWrapper>
          <HorizontalLine />
          <ButtonsWrapper>
            <ButtonList
              currentRoom={this.currentRoom}
              onSpaceCategoryClick={this.highlightRoomType}
              onSpaceNameClick={this.onSpaceNameClick}
              spaces={spaces}
            />
          </ButtonsWrapper>
        </Wrapper>
        <TransitionGroup className="tooltip-animations">
          <CSSTransition
            key={get(this.currentRoom, 'id', null)}
            timeout={1000}
            classNames="popup"
          >
            <Tooltip
              visible={tooltipState.visible}
              content={get(this.currentRoom, 'spaces', [])}
              x={x}
              y={y}
              onClick={this.resetActiveRoom}
            />
          </CSSTransition>
        </TransitionGroup>
      </React.Fragment>
    );
  }
}

Container.propTypes = {
  spaces: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  spaces: makeSelectSpaces(),
});

const withConnect = connect(mapStateToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Container);
