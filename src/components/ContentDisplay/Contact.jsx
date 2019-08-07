import React from 'react'
import data from '../../data/contact'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactStyled = styled.div`
  left: 2rem;
  right: 2rem;
  overflow: auto;
  position: absolute;
  h2 {
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(255,255,255,0.2);
  }
  p {
    color: #b3b3b3;
    font-size: 1rem;
    margin-left: 1rem;
  }
  ul{
    display: flex;
    list-style: none;
    margin-top: 3rem;
    justify-content: center;
  }
`;

const Footer = styled.section`
  a {
    color: inherit;
    margin: 0rem 2rem;
    transition-duration: 0.5s;
    }
  a:hover {
    color: #91CAF9;
  }
`;

const Contact = () => {
  return (
    <ContactStyled>
      <h2>Contact</h2>
      <p>Please feel free to get in touch with me</p>
      <Footer>
        <ul className="icons">
          {data.map(s => (
            <li key={s.label}>
              <a href={s.link} target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={s.icon} size='lg'/></a>
            </li>
          ))}
        </ul>
      </Footer>
    </ContactStyled>
  )
}

export default Contact
