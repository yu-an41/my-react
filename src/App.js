import { BrowserRouter, Routes, Route} from 'react-router-dom';
import AbList from './pages/ab-list';
import AbListAuth from './pages/ab-list-auth';
import Tmp from './pages/Tmp';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import MyContextProviders from './contexts/MyContextProviders';


function App() {

  return (
    <>
      <BrowserRouter>
        <MyContextProviders>
          <Navbar />
          <Routes>
            <Route path="/list-auth" element={ <AbListAuth /> } />
            <Route path="/list" element={ <AbList /> } />
            <Route path="/" element={ <AbList /> } />

            <Route path="/tmp/:sid" element={ <Tmp /> } />
            <Route path="/tmp" element={ <Tmp /> } />
            <Route path="/login" element={ <Login /> } />
            
          </Routes>
        </MyContextProviders>
      </BrowserRouter>
    </>

  );
}

export default App;
