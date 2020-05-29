import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2px;
`;

export const LanguageList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;

  list-style: none;
`;

const LanguageItem = styled.li`
  padding: 0;

  font-size: ${props => props.theme.fontSize.get(2)};
  font-weight: bold;

  &:not(:last-child) {
    margin-right: 20px;
  }
`;

const LanguageButton = styled.button`
  padding: 0;
  margin: 0;

  color: inherit;
  font-weight: inherit;

  background: none;
  border: none;
`;

export const LanguageOption = ({ onClick, children }) => (
  <LanguageItem>
    <LanguageButton type="button" onClick={onClick}>
      {children}
    </LanguageButton>
  </LanguageItem>
);

LanguageOption.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
