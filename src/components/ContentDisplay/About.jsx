import React from 'react'
import styled from 'styled-components'

const AboutStyled = styled.div`
  left: 2rem;
  right: 2rem;
  overflow: auto;
  position: absolute;
  h2 {
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(255,255,255,0.2);
  }
  p {
    color: #b3b3b3;
    line-height: 1.6;
    margin-left: 1rem;
  }
  ul {
    color: #b3b3b3;
    line-height: 1.6;
    margin-left: 2rem;
    li span {
      margin-left: 0.5rem;
    }
  }
`;

const Section = styled.section`
  margin-top: 4rem;
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
      <Section>
        <h2>My skills</h2>
        <ul>
          <li><span>Read and write JavaScript, CSS3, and HTML5</span></li>
          <li><span>Understand documentation of any library and use it</span></li>
          <li><span>Put all technologies together without any issue</span></li>
          <li><span>Solve problems from knowledge or the Web</span></li>
        </ul>
      </Section>
    </AboutStyled>
  )
}

export default About
