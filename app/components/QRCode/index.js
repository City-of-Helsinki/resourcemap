import React from 'react';
import styled from 'styled-components';
import QRCodeReact from 'qrcode.react';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DescriptionWrapper = styled.div`
  margin-top: 10px;
  text-align: center;
`;

const QRCode = ({ link, description }) => (
  <Wrapper>
    <QRCodeReact value={link} includeMargin size={70} />
    <DescriptionWrapper>{description}</DescriptionWrapper>
  </Wrapper>
);

QRCode.propTypes = {
  link: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
};

export default QRCode;
