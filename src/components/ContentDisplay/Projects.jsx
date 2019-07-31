import React from 'react'
import styled from 'styled-components'

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
    margin-bottom: 2rem;
    li {
      margin-bottom: 0.5rem;
      span {
        font-size: 1.25rem;
        line-height: inherit;
        display: inline-block;
        vertical-align: middle;
      }
    }
  }
  h3 {
    margin-top: 4rem;
  }
  h4{
    a {
      color: #eeeeee;
      margin-left: 1rem;
      font-size: 1.125rem;
      transition-duration: 0.5s;
      border-bottom: 1px dashed #ff9999;
    }
    a:hover {
      color: #ff9999;
      border-bottom: 1px dashed transparent;
    }
    span {
      color: #91CAF9;
      font-weight: 100;
      font-size: 0.875rem;
    }
  }
`;

const Projects = () => {
  return (
    <ProjectStyled>
      <h2>Projects</h2>
      <h4>
        <a href='https://ioulungtsai.github.io/personal-website/'>
          Personal Website
        </a>
        <span> - Last updated 7/30/2019</span>
      </h4>
      <ul>
        <li>
          A pure front-end web app to sell myself&nbsp;
          <span role="img" aria-label="NERD FACE">&#128526;</span>
        </li>
        <li>Hosted by GitHub Pages</li>
      </ul>
      <h4>
        <a href='https://github.com/ioulungTsai/bee-brain'>
          BeeBrain
        </a>
        <span> - Last updated 7/9/2019</span>
      </h4>
      <ul>
        <li>A full stack web app which detects faces in images and update detection counter to a database</li>
        <li>Layout and style created by React and Tachyons</li>
        <li>Built backend RESTful API with Node.js, Express and PostgreSQL</li>
        <li>Serving data with Clarifai API</li>
      </ul>
      <h4>
        <a href='https://github.com/ioulungTsai/robofriends'>
          Robofriends
        </a>
        <span> - Last updated 5/16/2019</span>
      </h4>
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
