import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
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
    display: flex;
    color: inherit;
    align-items: center;
  }
  span {
    padding: 0.25rem 0;
    transition-duration: 0.5s;
    border-bottom: 1px solid transparent;
  }
  &:hover {
    span {
      color: #91CAF9;
    }
  }
  & > a.active {
    span {
      border-bottom: 1px solid #FF9999;
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
  padding-left: 2rem;
  align-items: center;
  ul {
    display: flex;
    list-style: none;
    li {
      margin-left: 1rem;
      padding-left: 1rem;
      a {
        padding: 0.25rem 0;
        text-align: center;
        font-weight: normal;
        transition-duration: 0.5s;
        border-bottom: 1px solid transparent;
      }
      a:hover {
        color: #91CAF9;
      }
      a.active {
        border-bottom: 1px solid #FF9999;
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
        <NavLink exact to='/'>
          <Favicon src={webdev} alt="webdev" />
          <Text>Brandon Tsai</Text>
        </NavLink>
      </Brand>
      <LinkItems>
        <ul>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/resume'>Resume</NavLink></li>
          <li><NavLink to='/projects'>Projects</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
        </ul>
      </LinkItems>
    </div>
  </Nav>
)

export default Navbar
