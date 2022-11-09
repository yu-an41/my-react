import {useContext} from 'react';
import {Link, useLocation} from 'react-router-dom';
import ToggleButton from './ToggleButton';
import ThemeContext, {themes} from '../contexts/ThemeContext' ;

export default function Navbar() {
  const location = useLocation();
  const {name: themeName, setTheme} = useContext(ThemeContext);
  console.log({themeName});
  
  const seg1 = location.pathname.split('/')[1];

  const actives = {  }

  actives[seg1] = {
    backgroundColor: "lightblue",
    borderRadius: "10px",
  };

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/#">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" style={actives.list} to="/list">
                  AB-list
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={actives.tmp} to="/tmp">
                  tmp
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={actives.login} to="/login">
                  login
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <ToggleButton 
                texts={['深色','淺色']}
                statusIndex={themeName === 'dark'? 0: 1}
                handler={(i) => {
                  setTheme(i === 0? themes.dark: themes.light);
                }}
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
