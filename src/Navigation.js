import React from 'react';
import { Link, useLocation } from 'react-router-dom';

//This is a navigation component that will be used and re-used to allow easy navigation whenever needed to my pages as defined by the routes made in the app file. Additionally, thanks to the Link component provided by the 'react-router-dom' library, it doesn't actually load a
// a new web page, but rather, merely changes the URL displayed in the address bar and renders the corresponding component. This will save on time as we will not need to reload the entire page.
function Navigation() {
  const location = useLocation();

  const routes = ['/', '/about', '/contact', '/projects', '/code-challenges'];

  return (
    <nav>
      <ul>
        {routes.map((route) => (
          location.pathname === route ? null : (
            <li key={route}>
              <Link to={route}>
                {route === '/' ? 'Home' : route.slice(1)}
              </Link>
            </li>
          )
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;