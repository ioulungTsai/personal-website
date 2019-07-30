import React from 'react'
import styled from 'styled-components'

const AboutStyled = styled.div`
  h2 {
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    letter-spacing: 0.125rem;
    border-bottom: 1px solid rgba(255,255,255,0.2);
  }
  p {
    color: #bfbfbf;
    line-height: 1.6;
    font-size: 1.125rem;
    margin-bottom: 4rem;
  }
  ul {
    color: #b3b3b3;
    line-height: 1.6;
    font-size: 1.125rem;
    margin-left: 2rem;
    li span {
      margin-left: 0.5rem;
    }
  }
`;

const About = () => {
  return (
    <AboutStyled>
      <h2>Me</h2>
      <p>
        A self-taught full stack web developer, energetic problem solver,
        and electrical engineer with over five years of experience creating
        solutions and driving products successfully produce in AmTran Technology,
        the TV manufacturer of VIZIO.
      </p>
      <h2>My skills</h2>
      <ul>
        <li><span>Read and write JavaScript, CSS3, and HTML5</span></li>
        <li><span>Understand documentation of any library and use it</span></li>
        <li><span>Put all technologies together without any issue</span></li>
        <li><span>Solve problems from knowledge or the Web</span></li>
      </ul>
    </AboutStyled>
  )
}

export default About
