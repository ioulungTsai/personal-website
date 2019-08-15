import React from 'react';
import styled from 'styled-components';

const ResumeStyled = styled.div`
  padding-bottom: 2rem;
  h2 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(255,255,255,0.2);
  }
  h4 {
    margin-left: 1rem;
    font-size: 1rem;
    br {
      line-height: 1.6;
    }
    @media screen and (min-width: 450px) {
      br {
        display: none;
      }
    }
  }
  p {
    margin-left: 1rem;
    margin-top: 0.5rem;
    font-size: 1rem;
  }
  ul {
    color: #b3b3b3;
    margin-top: 1rem;
    margin-left: 2rem;
    margin-bottom: 2rem;
    li {
      margin-bottom: 0.5rem;
      span {
        display: table-cell;
        padding-left: 0.5rem;
      }
      a {
        color: #b3b3b3;
        transition-duration: 0.5s;
        border-bottom: 1px dashed #ff9999;
      }
      a:hover {
        color: #ff9999;
        border-bottom: 1px dashed transparent;
      }
    }
  }
`;

const Section = styled.section`
  margin-top: 4rem;
`;

const Resume = () => {
  return (
      <ResumeStyled>
        <h2>Experience</h2>
        <h4>Full Stack Web Developer <br /> ( Self-Taught )</h4>
        <p>Aug 2018 – Present</p>
        <ul>
          <li><span>Built a full stack web app from scratch</span></li>
          <li><span>Managed software packages with NPM and the project through Github</span></li>
          <li><span>Deploying app on Heroku</span></li>
        </ul>
        <h4>QC/QA Team Leader&nbsp;<br />@&nbsp;AmTran&nbsp;[ Chino, CA ]</h4>
        <p>Mar 2018 – May 2019</p>
        <ul>
          <li><span>Attained TV and Sound Bar refurbish permission by passing quality audit from VIZIO</span></li>
          <li><span>Reduced 50% of Work-in-Progress (WIP) storage</span></li>
        </ul>
        <h4>Electrical Engineer&nbsp;<br />@&nbsp;AmTran&nbsp;[ Taipei, Taiwan ]</h4>
        <p>Oct 2009 – Oct 2013</p>
        <ul>
          <li><span>Developed, created and maintained mainboard system schematic and PCB layout for TVs</span></li>
          <li><span>Resolved products problems and issues from design to production</span></li>
        </ul>
        <Section>
          <h2>Education</h2>
          <h4>Udemy Courses</h4>
          <ul>
            <li>
              <a href='https://www.udemy.com/understand-javascript/' target='_blank' rel="noopener noreferrer">
                JavaScript: Understanding the Weird Parts
              </a>
            </li>
            <li>
              <a href='https://www.udemy.com/the-complete-web-developer-zero-to-mastery/' target='_blank' rel="noopener noreferrer">
                The Complete Web Developer in 2019: Zero to Mastery
              </a>
            </li>
            <li>
              <a href='https://www.udemy.com/advanced-javascript-concepts/' target='_blank' rel="noopener noreferrer">
                Advanced JavaScript Concepts
              </a>
            </li>
          </ul>
          <h4>MS Degree in EE @ National Taipei University</h4>
          <p>Sep 2014 – Sep 2017</p>
          <ul>
            <li><span>Design and tape-out a PWM Class D Audio Amplifier IC</span></li>
            <li><span>GPA: 4.0 / 4.0</span></li>
          </ul>
          <h4>BS Degree in EE @ Tamkang University</h4>
          <p>June 2004 – June 2008</p>
        </Section>
      </ResumeStyled>
  )
}

export default Resume
