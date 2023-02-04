import * as React from 'react';
import styled from 'styled-components';
import './App.css';
import Aside from './Components/Aside/Aside';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import DialogAll from './Components/DialogAll/DialogAll';
import { Provider } from 'react-redux';

const StyledMain = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: auto 1fr;
`;

function App() {
  return (
    <StyledMain className="App">
      <DialogAll />
      <Aside />
      <Main />
    </StyledMain>
  );
}

export default App;
