import React from 'react';
import styled from 'styled-components';
import { Switch, Route, withRouter } from "react-router-dom";

import Home from './Home'
import About from './About'
import Resume from './Resume'
import Contact from './Contact'
import Projects from './Projects'

const Display = styled.div`
  ${'' /* width: 60rem; */}
  ${'' /* height: auto; */}
  padding: 2rem;
  color: #eeeeee;
  min-width: 33rem;
  background: #303030;
  box-shadow: 0 0 10px rgba(145,202,249,0.8);
`;

const ContentDisplay = ({location}) => (
  <Display>
    <Switch location={location}>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/resume" component={Resume} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects" component={Projects} />
    </Switch>
  </Display>
)

export default withRouter(ContentDisplay);
