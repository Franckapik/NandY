import React from 'react';

function Header() {
  if (window.location.pathname === '/dvp') {
    return null
  } else {
    return (
      <ul className="header flex_r">
      <li><a href="/"><img width="40px" src="/logomin.png" alt="logo miniature" /></a></li>
      <li><a href="/agenda"><i className="fas fa-leaf"></i>Rendez-vous</a></li>
      <li><a href="/blog">Ouest Océan</a></li>
      <li><a href="/galleries">Gallerie  45G </a></li>
      <li><a href="/forum">Apero Rencontre</a></li>
      <li><a href="/dvp">Development</a></li>
      <li>contact@ń&y.fr</li>
    </ul>);
  }

}

export default Header;
