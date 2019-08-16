import React from 'react';
import styled from 'styled-components';
import beebrain from '../../images/bee_brain.jpg';
import robofriends from '../../images/robofriends.jpg';
import personalwebsite from '../../images/personal-website.png';

const ProjectStyled = styled.div`
  padding-bottom: 2rem;
  h2 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(255,255,255,0.2);
  }
  ul {
    color: #b3b3b3;
    margin-top: 1rem;
    margin-left: 2rem;
    margin-bottom: 4rem;
    li {
      margin-bottom: 0.25rem;
      span {
        font-size: 1.25rem;
        line-height: inherit;
        display: inline-block;
        vertical-align: middle;
      }
    }
  }
  h3 {
    font-size: 1rem;
    margin-top: 4rem;
    margin-left: 1rem;
  }
  a{
    img {
      width: 80%;
      display: block;
      margin: 0rem auto 1rem;
      ${'' /* margin-left: 1rem;
      margin-bottom: 1rem; */}
      transition-duration: 0.5s;
      box-shadow: 0 0 10px rgba(0,0,0,0.5);
    }
    p {
      color: #eeeeee;
      font-size: 1rem;
      margin-left: 1rem;
      display: inline-block;
      transition-duration: 0.5s;
      border-bottom: 1px dashed #ff9999;
    }
  }
  a:hover {
    p{
      color: #ff9999;
      border-bottom: 1px dashed transparent;
    }
    img {
      box-shadow: 0 0 10px rgba(145,202,249,0.5)
    }
  }
`;

const Projects = () => {
  return (
    <ProjectStyled>
      <h2>Personal Website</h2>
      <a href='https://ioulungtsai.github.io/personal-website/' target='_blank' rel="noopener noreferrer">
        <img src={personalwebsite} alt='personal-website'/>
      </a>
      <ul>
        <li>
          A pure front-end web application to sell myself&nbsp;
          <span role="img" aria-label="NERD FACE">&#128526;</span>
        </li>
        <li>Hosted by GitHub Pages</li>
      </ul>

      <h2>BeeBrain</h2>
      <a href='https://github.com/ioulungTsai/bee-brain' target='_blank' rel="noopener noreferrer">
        <img src={beebrain} alt='bee-brain'/>
      </a>
      <ul>
        <li>A full stack web app which detects faces in images and update detection counter to a database</li>
        <li>Layout and style created by React and Tachyons</li>
        <li>Built backend RESTful API with Node.js, Express and PostgreSQL</li>
        <li>Serving data with Clarifai API</li>
      </ul>

      <h2>Robofriends</h2>
      <a href='https://ioulungtsai.github.io/robofriends/' target='_blank' rel="noopener noreferrer">
        <img src={robofriends} alt='robofriends'/>
      </a>
      <ul>
        <li>
          An application find out your Robofriend in the fly&nbsp;
          <span role="img" aria-label="Rocket">&#128640;</span>
        </li>
      </ul>
      <h3>To Be continued ...</h3>
    </ProjectStyled>
  )
}

export default Projects
