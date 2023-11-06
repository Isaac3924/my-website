import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMenu } from './MenuContext';
import './Navigation.css';

//Array of objects that hold the paths and text attributes for the comparison of route paths and displaying texts as links.
const routes = [{path: "/", text: "Home"}, {path: "/about", text: "About"}, {path: "/contact", text: "Contact"}, {path: "/projects", text: "Projects"}, {path: "/code-challenges", text: "Code Challenges"}];

//This is a navigation component that will be used and re-used to allow easy navigation whenever needed to my pages as defined by the routes made in the app file. Additionally, thanks to the Link component provided by the 'react-router-dom' library, it doesn't actually load a
// a new web page, but rather, merely changes the URL displayed in the address bar and renders the corresponding component. This will save on time as we will not need to reload the entire page.
function Navigation() {
  const location = useLocation();
  const { menuVisible, toggleMenu } = useMenu();

  const isLeftMenu = location.pathname !== '/'

  return (
    <nav className={`navigation ${isLeftMenu ? 'left-menu' : 'bottom-menu'} ${menuVisible ? 'active' : ''}`}>
      <button className="toggle-menu-button" onClick={toggleMenu}>
        Menu
      </button>
      <ul>
        {routes.map((route) => (
          location.pathname === route.path ? null : (
            <li key={route.path}>
              <Link to={route.path}>{route.text}</Link>
            </li>
          )
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;