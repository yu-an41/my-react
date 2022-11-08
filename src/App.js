import { BrowserRouter, Routes, Route} from 'react-router-dom';
import AbList from './pages/ab-list';
import Tmp from './pages/Tmp';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import {ThemeContextProvider} from './contexts/ThemeContext'

function App() {

  return (
    <>
      <BrowserRouter>
      <ThemeContextProvider>
        <Navbar />
        <Routes>
          <Route path="/list" element={ <AbList /> } />
          <Route path="/" element={ <AbList /> } />

          <Route path="/tmp/:sid" element={ <Tmp /> } />
          <Route path="/tmp" element={ <Tmp /> } />
          <Route path="/login" element={ <Login /> } />
          
        </Routes>
        </ThemeContextProvider>
      </BrowserRouter>
    </>

  );
}

export default App;
