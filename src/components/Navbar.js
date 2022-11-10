import {useContext} from 'react';
import {Link, useLocation} from 'react-router-dom';
import ToggleButton from './ToggleButton';
import ThemeContext, {themes} from '../contexts/ThemeContext' ;
import AuthContext from '../contexts/AuthContext';

export default function Navbar() {
  const location = useLocation();
  const {name: themeName, setTheme} = useContext(ThemeContext);
  const { myAuth, logout } = useContext(AuthContext);
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
                <Link className="nav-link" style={actives['list-auth']} to="/list-auth">
                  AB-list-auth
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={actives.tmp} to="/tmp">
                  tmp
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={actives.canvas1} to="/canvas1">
                  Canvas1
                </Link>
              </li>
          </ul>
          <ul className="navbar-nav mb-2 mb-lg-0">
            {myAuth.authorised? (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    {myAuth.account}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="btn nav-link" href="/#"
                  onClick={(e)=> {
                    e.preventDefault();
                    logout();
                  }}>
                    Logout
                  </a>
                </li>
              </>
          ) : (
            <Link className="nav-link" style={actives.login} to="/login">
              Login
            </Link>
          )}
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
