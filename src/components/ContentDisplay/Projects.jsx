import React from 'react'
import styled from 'styled-components'

const ProjectStyled = styled.div`
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
    list-style: none;
    line-height: 1.6;
    li::before {
      margin: 0 1rem;
      font-size: 1.5rem;
      content: '\\2022';
      vertical-align: middle;
    }
    a {
      color: #eeeeee;
      font-weight: bold;
      transition-duration: 0.5s;
    }
    a:hover {
      color: #91CAF9;
    }
  }
`;

const Projects = () => {
  return (
    <ProjectStyled>
      <h2>Projects</h2>
    </ProjectStyled>
  )
}

export default Projects
