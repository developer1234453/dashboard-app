import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.primaryColor};
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
`;

const Footer = () => (
  <FooterContainer>
    <p>© 2024 My Dashboard</p>
  </FooterContainer>
);

export default Footer;
