import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import ContentDisplay from './components/ContentDisplay/ContentDisplay';

import './App.css';

const BodyWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  width: 980px;
  padding: 6.5rem 1rem 3rem;
`;

const App = () => (
  <Router
    basename={process.env.PUBLIC_URL}
  >
    <Navbar />
    <BodyWrapper>
      <Sidebar />
      <ContentDisplay />
    </BodyWrapper>
  </Router>
);

export default App;
