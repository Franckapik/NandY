import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhotoVideo, faHouseUser, faMailBulk, faCalendarAlt, faNewspaper, faLeaf, faIgloo } from '@fortawesome/free-solid-svg-icons'

function Header() {
  if (window.location.pathname === '/dvp') {
    return null
  } else {
    return (
      <div>
      <ul className="header flex_r">
      <li><a href="/"><FontAwesomeIcon icon={faLeaf} /> Nature and You</a></li>
      <li><a href="/agenda"><FontAwesomeIcon icon={faCalendarAlt} />Actualité</a></li>
      <li><a href="/blog"><FontAwesomeIcon icon={faNewspaper} />Journal</a></li>
      <li><a href="/galleries"><FontAwesomeIcon icon={faPhotoVideo} />Gallerie  45G </a></li>
      <li><a href="/forum"><FontAwesomeIcon icon={faIgloo} />Apero Rencontre</a></li>
      <li><a href="/forum"><FontAwesomeIcon icon={faMailBulk} />Boîte à mots</a></li>
    </ul>
    </div>);
  }

}

export default Header;
