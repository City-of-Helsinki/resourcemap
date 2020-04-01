import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Sidebar from 'components/Sidebar';
import MapContainer from 'components/MapContainer';
import Tooltip from 'components/Tooltip';
import { makeSelectSpaces } from 'containers/HomePage/selectors';
import reducer from 'containers/HomePage/reducer';
import saga from 'containers/HomePage/saga';
import { Wrapper } from './wrappers';

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      highlighted: '',
      currentSpace: {
        id: 'Tilan id',
        title: 'Tilan nimi',
        available: null,
        useRespa: false,
      },
      tooltipState: {
        current: null,
        visible: false,
      },
      x: 0,
      y: 0,
    };

    this.roomRef = React.createRef();
    this.highlightSpaceType = this.highlightSpaceType.bind(this);
    this.onSpaceNameClick = this.onSpaceNameClick.bind(this);
    this.handleSpaceClick = this.handleSpaceClick.bind(this);
    this.spaceTooltip = this.spaceTooltip.bind(this);
    this.resetActiveSpace = this.resetActiveSpace.bind(this);
  }

  handleSpaceClick(event, space) {
    this.spaceTooltip(event.target, space);
  }

  spaceTooltip(spaceElement, space) {
    const spaceItem = space;
    const rect = spaceElement.getBoundingClientRect();
    const x = Math.round(rect.left);
    const y = Math.round(rect.top);
    // eslint-disable-next-line no-unused-vars
    const width = Math.round(rect.width);
    const xPos = Math.round(x + rect.width / 2);

    let spaceTitle = spaceItem.name || spaceItem.get('name');
    const spaceAvailable = spaceItem.available || spaceItem.get('available');
    const spaceUseRespa =
      typeof spaceItem.useRespa !== 'undefined'
        ? spaceItem.useRespa
        : spaceItem.get('useRespa');
    let showTooltip = false;
    let currentSpaceId = spaceElement.id;

    if (this.state.currentSpace.title === spaceTitle) {
      showTooltip = false;
      spaceTitle = '';
      currentSpaceId = '';
    } else {
      showTooltip = true;
    }

    // eslint-disable-next-line no-unused-vars, func-names
    this.setState(function(prevState, props) {
      return {
        tooltipState: {
          visible: showTooltip,
        },
        currentSpace: {
          id: currentSpaceId,
          title: spaceTitle,
          available: spaceAvailable,
          useRespa: spaceUseRespa,
        },
        x: xPos,
        y,
      };
    });
  }

  highlightSpaceType(highlight) {
    let hl = highlight;
    if (this.state.highlighted === hl) {
      hl = '';
    }

    // eslint-disable-next-line no-unused-vars, func-names
    this.setState(function(prevState, props) {
      return {
        highlighted: hl,
        currentSpace: {
          title: '',
          id: '',
          available: '',
          useRespa: '',
        },
        tooltipState: {
          visible: false,
        },
      };
    });
  }

  resetActiveSpace() {
    // eslint-disable-next-line no-unused-vars
    this.setState((prevState, props) => ({
      currentSpace: {
        id: '',
        title: '',
        available: '',
        useRespa: '',
      },
      tooltipState: {
        visible: false,
      },
    }));
  }

  onSpaceNameClick(space) {
    const spaceElementId = `#${space.get('id')}`;
    const spaceElement = this.roomRef.current.querySelector(spaceElementId);
    this.spaceTooltip(spaceElement, space);
  }

  render() {
    const { highlighted, currentSpace, tooltipState, x, y } = this.state;
    const { spaces } = this.props;

    return (
      <React.Fragment>
        <Wrapper>
          <MapContainer
            spaces={spaces}
            highlighted={highlighted}
            currentSpace={currentSpace}
            tooltipState={tooltipState}
            handleSpaceClick={this.handleSpaceClick}
            roomRef={this.roomRef}
          />

          <Sidebar
            spaces={spaces}
            currentSpace={currentSpace}
            onSpaceCategoryClick={this.highlightSpaceType}
            onSpaceNameClick={this.onSpaceNameClick}
          />
        </Wrapper>
        <TransitionGroup className="tooltip-animations">
          <CSSTransition
            key={currentSpace.id}
            timeout={1000}
            classNames="popup"
          >
            <Tooltip
              visible={tooltipState.visible}
              content={currentSpace}
              x={x}
              y={y}
              onClick={this.resetActiveSpace}
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
