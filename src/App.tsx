import * as React from 'react';
import styled from 'styled-components';
import './App.css';
import Aside from './Components/Aside/Aside';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';

const StyledMain = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: auto 1fr;
`;

function App() {
  return (
    <StyledMain className="App">
      <Aside />
      <Main />
    </StyledMain>
  );
}

export default App;
