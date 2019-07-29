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
    color: #eeeeee;
    margin-top: 1rem;
    list-style: none;
    line-height: 1.75;
    li::before {
      margin: 0 1rem;
      font-size: 1.5rem;
      content: '\\2022';
      vertical-align: middle;
    }
  }
`;

const Home = () => {
  return (
    <HomeStyled>
      <h2>Welcome</h2>
      <p>This site is powered by ...</p>
      <ul>
        <li>React</li>
        <li>React Router DOM</li>
        <li>styled-components</li>
      </ul>
    </HomeStyled>
  )
}

export default Home
