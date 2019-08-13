import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import ContentDisplay from './components/ContentDisplay/ContentDisplay';

import './App.css';

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  ${'' /* justify-content: space-evenly; */}
  max-width: 960px;
  margin: 0 auto;
  padding: 6.5rem 1rem 3rem;
  @media screen and (min-width: 700px) {
    flex-direction: row;
    ${'' /* flex: 100%;
    flex-wrap: wrap; */}
  }
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
