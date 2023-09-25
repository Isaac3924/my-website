import React from 'react';
import { Link } from 'react-router-dom';

//This is a navigation component that will be used and re-used to allow easy navigation whenever needed to my pages as defined by the routes made in the app file. Additionally, thanks to the Link component provided by the 'react-router-dom' library, it doesn't actually load a
// a new web page, but rather, merely changes the URL displayed in the address bar and renders the corresponding component. This will save on time as we will not need to reload the entire page.
function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/code-challenge">Code Challenge</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;