import React from 'react';
import Room from 'components/Room';
import styled from 'styled-components';
import Icons from './icons';
import Structures from './structures';
import { Wrapper, Content } from './wrappers';

const SvgMap = props => {
  return (
    <Wrapper>
      <svg viewBox="0 0 2000 456" version="1.1" ref={props.roomRef}>
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g id="Oodi_Pohjakartta_2krs" fillRule="nonzero">
            <Structures />
            <g
              id="spaces"
              fill="#FFFFFF"
              fillRule="nonzero"
              stroke="#000000"
              strokeWidth="3"
              transform="translate(99.000000, 9.000000)"
            >
              {props.rooms.map(item => (
                <Room
                  key={item.get('id')}
                  name={item.get('name')}
                  svgtype={item.get('svgtype')}
                  info={item.get('info')}
                  available={item.get('available')}
                  id={item.get('id')}
                  d={item.get('d')}
                  category={item.get('category')}
                  onSpaceClick={props.onSpaceClick}
                  highlighted={props.highlighted}
                  currentSpace={props.currentSpace}
                />
              ))}
            </g>

            <Icons />
          </g>
        </g>
      </svg>
    </Wrapper>
  );
};

export default SvgMap;
