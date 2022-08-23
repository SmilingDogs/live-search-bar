import styled from 'styled-components';
import './App.css';
import SearchBar from './components/SearchBar';
import ReactSwitch from 'react-switch';
import { useContext } from 'react';
import { ThemeContext } from './context/themeContext';

const Appcontainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Ubuntu", sans-serif;
  width: 100vw;
  height: 100vh;
`;

const SwitchContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 10%;
  
`;
const Label = styled.label`
  
`

function App() {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Appcontainer id={theme}>
      <SearchBar />
      <SwitchContainer>
        <Label htmlFor="theme" className={theme === 'dark' ? 'dark' : 'light'}>{theme === 'dark' ? 'Dark Theme' : 'Light Theme'}</Label>
        <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} name="theme" />
      </SwitchContainer>
    </Appcontainer>
  );
}

export default App;
