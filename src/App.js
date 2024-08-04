// src/App.js
import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

const App = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Sidebar />
      <Dashboard />
      <Footer />
    </ThemeProvider>
  );
};

export default App; // Make sure to export App as default
