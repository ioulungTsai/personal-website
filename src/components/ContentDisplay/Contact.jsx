import React from 'react'
import data from '../../data/contact'
import styled from 'styled-components'

const ContactStyled = styled.div`
  h2 {
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(255,255,255,0.2);
  }
  p {
    color: #91CAF9;
    font-size: 1.125rem;
  }
  ul {
    color: #b3b3b3;
    margin-top: 2rem;
    margin-left: 2rem;
    li strong {
      margin-left: 0.5rem;
    }
    li {
      margin-bottom: 1rem;
    }
    a {
      color: #eeeeee;
      transition-duration: 0.5s;
    }
    a:hover {
      color: #91CAF9;
    }
  }
`;

const Contact = () => {
  return (
    <ContactStyled>
      <h2>Contact</h2>
      <p>Please feel free to get in touch with me</p>
      <ul>
        {data.map(s => (
              <li key={s.label}>
                <strong>{s.label}</strong>
                {': '}
                <a href={s.link}>{s.value}</a>
              </li>
            ))}
      </ul>
    </ContactStyled>
  )
}

export default Contact
