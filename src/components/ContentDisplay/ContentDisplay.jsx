import React, { useRef, useEffect } from 'react';
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
  color: #eeeeee;
  overflow: auto;
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
    position: absolute;
    transition: opacity 0ms linear;
  }
  @media screen and (min-width: 700px) {
    flex: 60%;
    height: 640px;
    margin-bottom: 0rem;
  }
`;

const ScrollToTop = ({ children, location: { pathname } }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children || null;
};

const Scroll = withRouter(ScrollToTop);

const ContentDisplay = ({ location }) => {
  const contentDisplayRef = useRef();
  useEffect(() => {
    contentDisplayRef.current.scrollTop = 0;
  })
  return (
    <Display ref={contentDisplayRef}>
      <Route render={({location})=>(
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={450}
            classNames="fade"
          >
            <Scroll>
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/resume" component={Resume} />
                <Route path="/contact" component={Contact} />
                <Route path="/projects" component={Projects} />
              </Switch>
            </Scroll>
          </CSSTransition>
        </TransitionGroup>
      )} />
    </Display>
  )
}

export default withRouter(ContentDisplay);
