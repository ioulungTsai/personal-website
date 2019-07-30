import React from 'react'
import styled from 'styled-components'

const HomeStyled = styled.div`
 letter-spacing: 0.125rem;
  h2 {
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(255,255,255,0.2);
  }
  p {
    color: #91CAF9;
    font-size: 1.125rem;
  }
  ul {
    color: #b3b3b3;
    margin-top: 1rem;
    line-height: 1.6;
    font-weight: bold;
    margin-left: 2rem;
    li span {
      margin-left: 0.5rem;
    }
  }
`;

const Home = () => {
  return (
    <HomeStyled>
      <h2>Welcome</h2>
      <p>This simple and clean website is built with ...</p>
      <ul>
        <li><span>JavaScript, CSS3, and HTML5</span></li>
        <li><span>React</span></li>
        <li><span>React Router DOM</span></li>
        <li><span>styled-components</span></li>
        <li><span>Babel7</span></li>
        <li><span>Webpack4</span></li>
      </ul>
    </HomeStyled>
  )
}

export default Home
