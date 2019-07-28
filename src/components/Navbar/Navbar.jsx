import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import webdev from '../../images/favicon.ico'

const Nav = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  display: block;
  z-index: 520999
  position: fixed;
  letter-spacing: 0.125rem;
  background-color: #303030;
  box-shadow: 0 0 20px rgba(0,0,0,0.8);
  > div {
    display:flex;
    height: inherit;
    max-width: 960px;
    margin: auto;
    padding-left: 1rem;
    align-items: center;
  }
  * {
    color: #eeeeee;
  }
`;

const Brand = styled.div`
  width: 22rem;
  margin-right: 3rem;
  a {
    color: inherit;
    display: flex;
    align-items: center;
  }
  span {
    transition-duration: 0.5s;
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
  font-weight: 600;
`;

const LinkItems = styled.div`
  display: flex;
  height: inherit;
  padding-left: 1rem;
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
        transition-duration: 0.5s;
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
    <div>
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
    </div>
  </Nav>
)

export default Navbar
