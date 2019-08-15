import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import ContentDisplay from './components/ContentDisplay/ContentDisplay';

import './App.css';

const BodyWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 4.25rem 0rem 3rem;
  @media screen and (min-width: 700px) {
    display: flex;
    padding-top: 6.5rem;
    padding: 6rem 1rem 3rem;
    flex-direction: row-reverse;
  }
`;

const App = () => (
  <Router
    basename={process.env.PUBLIC_URL}
  >
    <Navbar />
    <BodyWrapper>
      <ContentDisplay />
      <Sidebar />
    </BodyWrapper>
  </Router>
);

export default App;
