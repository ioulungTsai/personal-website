import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import ContentDisplay from './components/ContentDisplay/ContentDisplay';
import styled from 'styled-components';

import './App.css';

const BodyWrapper = styled.div`
  display: flex;
  padding: 6.5rem 3rem 3rem;
`;

const App = () => (
  <Fragment>
    <Navbar />
    <BodyWrapper>
      <Sidebar />
      <ContentDisplay />
    </BodyWrapper>
  </Fragment>
);

export default App;
