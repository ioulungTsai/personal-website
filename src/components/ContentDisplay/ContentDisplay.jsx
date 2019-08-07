import React from 'react';
import styled from 'styled-components';
import {
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import Home from './Home'
import About from './About'
import Resume from './Resume'
import Contact from './Contact'
import Projects from './Projects'

const Display = styled.div`
  ${'' /* width: 60rem; */}
  ${'' /* height: auto; */}
  color: #eeeeee;
  min-width: 33rem;
  position: relative;
  background: #303030;
  padding: 2rem 2rem 4rem;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  .fade-enter {
  opacity: 0;
  }
  .fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in 150ms;
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transition: opacity 0ms linear;
  }
`;

const ContentDisplay = ({location}) => (
  <Display>
    <Route render={({location})=>(
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={450}
          classNames="fade"
        >
          <Switch location={location}>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/resume" component={Resume} />
            <Route path="/contact" component={Contact} />
            <Route path="/projects" component={Projects} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )} />
  </Display>
)

export default withRouter(ContentDisplay);
