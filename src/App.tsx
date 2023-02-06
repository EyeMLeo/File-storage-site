import * as React from 'react';
import styled from 'styled-components';
import './App.css';
import Aside from './Components/Aside/Aside';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import DialogAll from './Components/DialogAll/DialogAll';
import { Provider } from 'react-redux';
import { FullMetadata } from 'firebase/storage';
import { FireBaseContext } from './Components/FireBaseContext/FireBaseContext';
import { firebseDataNameHander } from './Firebase';

const StyledMain = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: auto 1fr;
`;

function App() {
  const [displayNames, setDisplayNames] = React.useState<FullMetadata[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    firebseDataNameHander().then((res) => {
      setDisplayNames(res);
    });
  }, []);

  return (
    <FireBaseContext.Provider
      value={{ displayNames, setDisplayNames, isLoading, setIsLoading }}
    >
      <StyledMain className="App">
        <Aside />
        <Main />
      </StyledMain>
    </FireBaseContext.Provider>
  );
}

export default App;
