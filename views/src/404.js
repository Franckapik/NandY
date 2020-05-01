import React, {Component} from 'react';


class NotFoundPage extends Component {
  render() {
    return (
      <div className='center'>
      <h1 >Erreur 404 - Page non trouvée</h1>
      <a href='/' style={{color:'black'}}><h4>Retourner à l'accueil</h4></a>
      </div>

    );
  }
}

export default NotFoundPage;
