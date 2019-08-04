import React from 'react';
import styled from 'styled-components';
import beebrain from '../../images/bee_brain.jpg';
import robofriends from '../../images/robofriends.jpg';
import personalwebsite from '../../images/personal-website.png';

const ProjectStyled = styled.div`
  h2 {
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
      width: 90%;
      display: block;
      margin-left: 1rem;
      margin-bottom: 1rem;
      transition-duration: 0.5s;
      box-shadow: 0 0 10px rgba(255,255,255,0.5);
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
      box-shadow: 0 0 10px rgba(255,99,99,0.5);
    }
  }
  span {
    color: #91CAF9;
    font-weight: 100;
    font-size: 1rem;
  }
`;

const Projects = () => {
  return (
    <ProjectStyled>
      <h2>Projects</h2>
      <a href='https://ioulungtsai.github.io/personal-website/'>
        <img src={personalwebsite} alt='personal-website'/>
        <p>Personal Website</p>
      </a>
      <span> - Last updated 7/30/2019</span>
      <ul>
        <li>
          A pure front-end web app to sell myself&nbsp;
          <span role="img" aria-label="NERD FACE">&#128526;</span>
        </li>
        <li>Hosted by GitHub Pages</li>
      </ul>
      <a href='https://github.com/ioulungTsai/bee-brain'>
        <img src={beebrain} alt='bee-brain'/>
        <p>BeeBrain</p>
      </a>
      <span> - Last updated 7/9/2019</span>
      <ul>
        <li>A full stack web app which detects faces in images and update detection counter to a database</li>
        <li>Layout and style created by React and Tachyons</li>
        <li>Built backend RESTful API with Node.js, Express and PostgreSQL</li>
        <li>Serving data with Clarifai API</li>
      </ul>
      <a href='https://github.com/ioulungTsai/robofriends'>
        <img src={robofriends} alt='robofriends'/>
        <p>Robofriends</p>
      </a>
      <span> - Last updated 5/16/2019</span>
      <ul>
        <li>
          An app find out your robo-friend in the fly&nbsp;
          <span role="img" aria-label="Rocket">&#128640;</span>
        </li>
      </ul>
      <h3>To Be continued ...</h3>
    </ProjectStyled>
  )
}

export default Projects
