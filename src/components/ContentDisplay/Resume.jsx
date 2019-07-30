import React from 'react'
import styled from 'styled-components'

const ResumeStyled = styled.div`
  h2 {
    margin-bottom: 2rem;
  letter-spacing: 0.125rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(255,255,255,0.2);
  }
  p {
    color: #91CAF9;
    margin-top: 0.5rem;
    font-size: 1.125rem;
  }
  ul {
    color: #b3b3b3;
    margin-top: 1rem;
    margin-bottom: 2rem
    line-height: 1.6;
    margin-left: 2rem;
    li span {
      display: table-cell;
      padding-left: 0.5rem;
    }
  }
`;

const Resume = () => {
  return (
    <ResumeStyled>
      <h2>Experience</h2>
      <h3>Full Stack Web Developer ( Self-Taught )</h3>
      <p>Aug 2018 – Present</p>
      <ul>
        <li><span>Built a full stack web app from scratch</span></li>
        <li><span>Managed software packages with NPM and the project through Github</span></li>
        <li><span>Deploying app on Heroku</span></li>
      </ul>
      <h3>QC/QA Team Leader&nbsp;&nbsp;@&nbsp;&nbsp;AmTran&nbsp;&nbsp;[ Chino, CA ]</h3>
      <p>Mar 2018 – May 2019</p>
      <ul>
        <li><span>Attained TV and Sound Bar refurbish permission by passing quality audit from VIZIO</span></li>
        <li><span>Reduced 50% of Work-in-Progress (WIP) storage</span></li>
      </ul>
      <h3>Electrical Engineer&nbsp;&nbsp;@&nbsp;&nbsp;AmTran&nbsp;&nbsp;[ Taipei, Taiwan ]</h3>
      <p>Oct 2009 – Oct 2013</p>
      <ul>
        <li><span>Developed, created and maintained mainboard system schematic and PCB layout for TVs</span></li>
        <li><span>Resolved products problems and issues from design to production</span></li>
      </ul>
    </ResumeStyled>
  )
}

export default Resume
