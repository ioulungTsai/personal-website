import React from 'react';
import styled from 'styled-components';

const Display = styled.div`
  ${'' /* color: #d6d6d6; */}
  background: #bbbbbb;
  min-width: 22rem;
  width: 60rem;
  height: 60rem;
  padding: 1rem;
  ${'' /* position: absolute;
  top: 60px;
  left: 22rem; */}
  & > * {
    border-top: 1px solid #d6d6d6;
    margin: 3rem 0 0 0;
    padding: 3rem 0 0 0;
  }
`;

const ContentDisplay = () => (
    <Display>
      Contents will display here
    </Display>
)

export default ContentDisplay
