import React from 'react'
import styled from 'styled-components';
import brandontsai from '../../images/me_resize.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import data from '../../data/contact'

const Side = styled.div`
  width: 22rem;
  height: 50rem;
  color: #d6d6d6;
  min-width: 22rem;
  margin-right: 3rem;
  letter-spacing: 0.25em;
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
`;

const Intro = styled.section`
  margin: 0;
  padding: 0;
  border-top: none;
  text-transform: uppercase;

  img {
    width: 10em;
    display: block;
    border-radius: 50%;
  }

  h2 {
    margin-top: 1.5rem;
  }

  p {
    font-size: 0.8rem;
    font-weight: bold;
    margin-top: 1.5rem;
    background: #333 -webkit-gradient(linear, left top, right top, from(#222), to(#222), color-stop(0.5, #fff)) 0 0 no-repeat;
    background-size: 150px;
    color: transparent;
    -webkit-background-clip: text;
    -webkit-animation-name: shine;
    -webkit-animation-duration: 5s;
    -webkit-animation-iteration-count: infinite;
    text-shadow: 0 0px 0px rgba(255, 255, 255, 0.5);
    ${'' /* background-position: 300px; */}
  }

  @keyframes shine {
    0% {
      background-position: -1000px;
    }
    20% {
      background-position: -150px;
    }
    80% {
      background-position: 350px;
    }
    100% {
      background-position: 1000px;
    }
  }
`;

const About = styled.section`
  h2 {
    font-size: 0.8rem;
    text-transform: uppercase;
  }
  p {
    font-size: 0.9rem;
    line-height: 1.75;
    letter-spacing: 0;
    margin-top: 1.5rem;
    text-align: justify;
  }
  a {
    color: inherit;
  }
`;

const Footer = styled.section`
  a {
      color: inherit;
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
        <h2>About</h2>
        <p>
          Hi, I&apos;m Brandon. I like building things. Write something later Write something later Write something later
          Write something later Write something later Write something later Write something later Write something later
          Write something later Write something later
        </p>
      </About>
      <Footer>
        <ul className="icons">
          {data.map(s => (
            <li key={s.label}><a href={s.link}><FontAwesomeIcon icon={s.icon} size='lg'/></a></li>
          ))}
        </ul>
      </Footer>
    </Side>
  )

export default Sidebar
