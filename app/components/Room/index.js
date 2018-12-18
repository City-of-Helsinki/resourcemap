import React from 'react';
import Path from 'components/Path';

class Room extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  render() {
    const {
      svgtype,
      available,
      category,
      onSpaceClick,
      highlighted,
      currentSpace,
      id,
      useRespa,
      ...props
    } = this.props;

    // Generate classname.
    let className = '';

    // First check if this item is highlighted, but not necessarily opened.
    let classNameHighlighted = category === highlighted ? 'is-highlighted' : '';

    // Check also if this space is actually clicked and opened.
    if (currentSpace.id === id) {
      className = classNameHighlighted + ' clicked';
    } else {
      className = classNameHighlighted;
    }

    // Concat to final classname.
    className = className + ' ' + available;

    return (
      <Path
        {...props}
        available={available}
        id={id}
        useRespa={useRespa}
        className={className}
        onSpaceClick={onSpaceClick}
      />
    );
  }
}

export default Room;
