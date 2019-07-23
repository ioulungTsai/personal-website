import React from 'react';
import styled from 'styled-components';
import { Switch, Route, withRouter } from "react-router-dom";

import About from './About'
import Resume from './Resume'
import Contact from './Contact'
import Projects from './Projects'

const Display = styled.div`
  ${'' /* color: #d6d6d6; */}
  background: #bbbbbb;
  min-width: 22rem;
  width: 60rem;
  height: 60rem;
  padding: 1rem;
  ${'' /* position: absolute;
  top: 60px;
  left: 22rem; */}
  ${'' /* & > * {
    border-top: 1px solid #d6d6d6;
    margin: 3rem 0 0 0;
    padding: 3rem 0 0 0;
  } */}
`;

const ContentDisplay = ({location}) => (
  <Display>
    <Switch location={location}>
      <Route path="/about" component={About} />
      <Route path="/resume" component={Resume} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects" component={Projects} />
    </Switch>
  </Display>
)

export default withRouter(ContentDisplay);
