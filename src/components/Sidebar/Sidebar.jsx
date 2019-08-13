import React from 'react'
import data from '../../data/contact'
import styled from 'styled-components';
import brandontsai from '../../images/me_resize.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Side = styled.div`
  height: 640px;
  color: #eeeeee;
  & > * {
    margin: 3rem 0 0 0;
    padding: 3rem 0 0 0;
    border-top: 1px solid rgba(255,255,255,0.2);
  }
  ul{
    display: flex;
    list-style: none;
    justify-content: space-evenly;
  }
  @media screen and (min-width: 700px) {
    flex: 40%;
    margin-right: 3rem;
  }
`;

const Intro = styled.section`
  margin: 0;
  padding: 0;
  border-top: none;
  img {
    width: 10em;
    display: block;
    border-radius: 50%;
    border: 3px double #d9d9d9;
  }
  h2 {
    font-size: 1.5rem;
    margin-top: 1.5rem;
  }
  p {
    font-weight: bold;
    font-size: 1.5rem;
    margin-top: 1.5rem;
    background: #363636 -webkit-gradient(
      linear, left top, right top,
      from(#363636), to(#363636),
      color-stop(0.5, #fff)
    ) 0 0 no-repeat;
    background-size: 100px;
    color: transparent;
    -webkit-background-clip: text;
    -webkit-animation-name: shine;
    -webkit-animation-duration: 5s;
    -webkit-animation-iteration-count: infinite;
    text-shadow: 0 0px 0px rgba(255,255,255,0.5);
  }
  @keyframes shine {
    0%   { background-position: -1000px; }
    20%  { background-position: -100px;  }
    80%  { background-position:  350px;  }
    100% { background-position: 1000px;  }
  }
`;

const About = styled.section`
  h2 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
  p {
    color: #b3b3b3;
    line-height: 1.6;
    letter-spacing: 0;
    ${'' /* text-align: justify; */}
    span {
      font-size: 1.25rem;
      line-height: inherit;
      display: inline-block;
      vertical-align: middle;
    }
  }
`;

const Footer = styled.section`
  a {
    color: inherit;
    transition-duration: 0.5s;
    }
  a:hover {
    color: #91CAF9;
  }
`;

const Sidebar = () => (
    <Side>
      <Intro>
        <img src={brandontsai} alt='brandontsai'/>
        <h2>Brandon Tsai</h2>
        <p>Full Stack Web Developer</p>
      </Intro>
      <About>
        <h2>Hi, I&apos;m Brandon</h2>
        <p>
          A full stack web developer focusing in modern JavaScript.
          I like build things in an accessible and intuitive way.
          Give me a place to Code, and I will move the World&nbsp;
          <span role="img" aria-label="grinning face with smiling eyes">&#128513;</span>
        </p>
      </About>
      <Footer>
        <ul className="icons">
          {data.map(s => (
            <li key={s.label}>
              <a href={s.link} target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={s.icon} size='lg'/></a>
            </li>
          ))}
        </ul>
      </Footer>
    </Side>
  )

export default Sidebar
