import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.aside`
  width: 250px;
  height: 100vh;
  background-color: ${({ theme }) => theme.primaryColor};
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 60px;
`;

const Sidebar = () => (
  <SidebarContainer>
    <nav>
      <ul>
        <li>Overview</li>
        <li>Analytics</li>
        <li>Settings</li>
      </ul>
    </nav>
  </SidebarContainer>
);

export default Sidebar;
