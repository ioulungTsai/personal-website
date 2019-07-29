import React from 'react'
import styled from 'styled-components'

const AboutStyled = styled.div`
  ${'' /* letter-spacing: 0.125rem; */}
  h2 {
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(255,255,255,0.2);
  }
  p {
    color: #bfbfbf;
    font-weight: 300;
    font-size: 1.125rem;
    margin-bottom: 1rem;
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
    </AboutStyled>
  )
}

export default About
