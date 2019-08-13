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
  height: 420px;
  color: #eeeeee;
  overflow: auto;
  position: relative;
  background: #303030;
  margin-bottom: 2rem;
  padding: 2rem 2rem 4rem;
  box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
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
  @media screen and (min-width: 700px) {
    flex: 60%;
    height: 640px;
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
