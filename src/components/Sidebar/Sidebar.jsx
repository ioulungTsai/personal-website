import React from 'react'
import styled from 'styled-components';
import me from '../../images/me_resize.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import data from '../../data/contact'

const Side = styled.div`
  color: #d6d6d6;
  letter-spacing: 0.25em;
  ${'' /* background: #bbbbbb; */}
  margin-right: 3rem;
  min-width: 22rem;
  width: 22rem;
  height: 50rem;
  & > * {
    border-top: 1px solid #d6d6d6;
    margin: 3rem 0 0 0;
    padding: 3rem 0 0 0;
  }
  ul{
    list-style: none;
    display: flex;
    justify-content: space-evenly;
  }
`;

const Intro = styled.section`
  border-top: none;
  margin: 0;
  padding: 0;
`;

const Photo = styled.img`
  width: 10em;
  border-radius: 50%;
  display: block;
`;

const Header = styled.h2`
  margin-top: 1.5rem;
  font-size: 1.5rem;
  text-transform: uppercase;
`;

const About = styled.section`
  h2 {
    font-size: 0.8rem;
    text-transform: uppercase;
  }
  p {
    letter-spacing: 0;
    font-size: 0.9rem;
    line-height: 1.75;
    text-align: justify;
    margin-top: 1.5rem;
  }
  a {
    color: inherit;
  }
  ${'' /* border-top: 1px solid #eeeeee;
  margin: 3rem 0 0 0;
  padding: 3rem 0 0 0; */}
`;

const Footer = styled.section`
  a {
      color: inherit;
    }
  ${'' /* border-top: 1px solid #eeeeee;
  margin: 3rem 0 0 0;
  padding: 3rem 0 0 0; */}
`;

const Sidebar = () => (
    <Side>
      <Intro>
        <Photo src={me} alt='me'/>
        <Header>Brandon Tsai</Header>
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
