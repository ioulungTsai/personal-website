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
  background-color: #303030;
  box-shadow:
    0px 2px 4px -1px rgba(0,0,0,0.2),
    0px 4px 5px 0px rgba(0,0,0,0.14),
    0px 1px 10px 0px rgba(0,0,0,0.12);
  > div {
    display: flex;
    height: inherit;
    max-width: 960px;
    margin: auto;
    padding: 0 2rem;
    align-items: center;
    @media screen and (min-width: 700px) {
      padding: 0 1rem;
    }
  }
  * {
    color: #eeeeee;
  }
`;

const Brand = styled.div`
  width: 22rem;
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
      color: #FF9999;
    }
  }
  @media screen and (min-width: 700px) {
    margin-right: 3rem;
  }
`;

const Favicon = styled.img`
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.5rem;
`;

const Text = styled.span`
  display: none;
  font-weight: 600;
  @media screen and (min-width: 470px) {
    display: block;
  }
`;

const LinkItems = styled.ul`
  display: flex;
  list-style: none;
  li {
    padding-left: 1rem;
    a {
      line-height: 60px;
      position: relative;
      text-align: center;
      font-weight: normal;
      display: inline-block;
      transition-duration: 0.3s;
      ${'' /* border-bottom: 1px solid transparent; */}
      span {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 2px;
        background: #FF9999;
        transform: scaleY(0);
        transform-origin: bottom;
        transition: transform 300ms cubic-bezier(.4,0,.2,1);
      }
    }
    a.active {
      ${'' /* border-bottom: 1px solid #FF9999; */}
      span {
        transform: scaleY(2);
      }
    }
    @media (hover: hover) {
      a:hover {
        color: #FF9999;
      }
    }
  }
  li:first-child {
    border-left: 0;
    margin-left: 0;
    padding-left: 0;
  }
  @media screen and (min-width: 380px) {
    padding-left: 2rem;
    li {
      margin-left: 1rem;
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
          <li>
            <NavLink to='/about'>
              About
              <span></span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/resume'>
              Resume
              <span></span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/projects'>
              Projects
              <span></span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact'>
              Contact
              <span></span>
            </NavLink>
          </li>
      </LinkItems>
    </div>
  </Nav>
)

export default Navbar
