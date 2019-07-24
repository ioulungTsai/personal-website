import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import webdev from '../../images/favicon.ico'

const Nav = styled.div`
  top: 0;
  flex: 1;
  width: 100%;
  height: 60px;
  display: flex;
  z-index: 520999
  position: fixed;
  padding-left: 3rem;
  font-size: 0.75rem;
  align-items: center;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  background-color: #212121;
  box-shadow: 0 0 20px rgba(0,0,0,0.8);
  * {
    color: #eeeeee;
  }
`;

const Brand = styled.div`
  a {
    display: flex;
    align-items: center;
  }
  &:hover {
    span {
      color: #91CAF9;
    }
  }
`;

const Favicon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 1rem;
`;

const Text = styled.span`
  font-weight: 800;
`;

const LinkItems = styled.div`
  display: flex;
  height: inherit;
  margin-left: 6rem;
  padding-left: 6rem;
  align-items: center;

  ul {
    display: flex;
    list-style: none;

    li {
      margin-left: 1rem;
      padding-left: 1rem;

      a {
        height: 100%;
        text-align: center;
        font-weight: normal;
      }

      a:hover {
        color: #91CAF9;
      }
    }

    li:first-child {
      border-left: 0;
      margin-left: 0;
      padding-left: 0;
    }
  }
`;

const Navbar = () => (
  <Nav>
    <Brand>
      <Link to='/'>
        <Favicon src={webdev} alt="webdev" />
        <Text>Brandon Tsai</Text>
      </Link>
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
