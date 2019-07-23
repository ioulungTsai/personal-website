import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import webdev from '../../images/favicon.ico'

const Nav = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  width: 100%;
  height: 60px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  font-size: 0.75rem;
  padding-left: 3rem;
  background-color: #212121;
  ${'' /* border-bottom: solid 1px rgba(160, 160, 160, 0.3); */}
  position: fixed;
  top: 0;
  z-index: 520999
  * {
    color: #eeeeee;
  }
`;

const Brand = styled.div`
  a {
    display: flex;
    align-items: center;
  }
`;

const Favicon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 1rem;
`;

const Text = styled.span`
  ${'' /* color: #eeeeee; */}
  font-weight: 800;
`;

const LinkItems = styled.div`
  margin-left: 6rem;
  padding-left: 6rem;
  ${'' /* border-left: solid 1px rgba(160, 160, 160, 0.3); */}
  height: inherit;
  display: flex;
  align-items: center;

  ul {
    list-style: none;
    display: flex;

    li {
      ${'' /* border-left: solid 1px rgba(160, 160, 160, 0.3); */}
      margin-left: 1rem;
      padding-left: 1rem;

      a {
        ${'' /* color: #eeeeee; */}
        text-align: center;
        font-weight: normal;
        height: 100%;
      }
    }

    li:first-child {
      border-left: 0;
      margin-left: 0;
      padding-left: 0;
    }
  }
`;

/* the 'href' in Navbar need to be updated if change hosting service,
   it's for GitHub Pages right now. will use react-router-dom */
const Navbar = () => (
  <Nav>
    <Brand>
      <a href='https://ioulungtsai.github.io/personal-website/'>
        <Favicon src={webdev} alt="webdev" />
        <Text>Brandon Tsai</Text>
      </a>
    </Brand>
    <LinkItems>
      <ul>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/resume'>Resume</Link></li>
        <li><Link to='/projects'>Projects</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
    </LinkItems>
  </Nav>
)

export default Navbar
