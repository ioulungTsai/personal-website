import React from 'react';
import styled from 'styled-components';
import { Switch, Route, withRouter } from "react-router-dom";

import Home from './Home'
import About from './About'
import Resume from './Resume'
import Contact from './Contact'
import Projects from './Projects'

const Display = styled.div`
  width: 60rem;
  height: 60rem;
  padding: 1rem;
  min-width: 22rem;
  background: #bbbbbb;
`;

const ContentDisplay = ({location}) => (
  <Display>
    <Switch location={location}>
      <Route path={process.env.PUBLIC_URL + '/'} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/resume" component={Resume} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects" component={Projects} />
    </Switch>
  </Display>
)

export default withRouter(ContentDisplay);
