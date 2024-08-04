import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.primaryColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Header = () => (
  <HeaderContainer>
    <h1>Dashboard</h1>
    <div>
      <span>User Profile</span>
    </div>
  </HeaderContainer>
);

export default Header;
