import React from 'react'
import styled from 'styled-components'

const HomeStyled = styled.div`
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
    color: #eeeeee;
    margin-top: 2rem;
    margin-left: 2rem;
    li {
      margin-bottom: 1rem;
    }
    li span {
      margin-left: 0.5rem;
    }
  }
`;

const Home = () => {
  return (
    <HomeStyled>
      <h2>Welcome</h2>
      <p>This simple and clean website is built from scratch with ...</p>
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
