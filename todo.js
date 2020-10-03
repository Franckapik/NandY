const { default: store } = require("./views/src/store/store")

Changelog
v1.0.1
Socket.io mis en place (interaction ok)
Mis en place d'un store avec zustand
Controls au clavier
Mise en place d'un DAT
Mise en place de Stats fps
Connection des joueurs au serveur
Tableau des joueurs partagés sur chaque client
Positionnement d'un objet en fonction de la logique r3f de position/velocity/rotation
Positionnement d'un objet en fonction de la physique : force et impulse.
Collision testées.
Mise en place de routes
Style général appliqué
Premier jeu : collision, score, pas encore de synchronisation entre joueurs.

v1.0.1
Test des contraintes pivots
Identifier toutes les variables à mettre sur le DAT
Utilisation fine de applyImpulse

v1.0.2
Changement de store vers zustand
Sauvegarde du serveur ?
Animation from blender : https://spectrum.chat/react-three-fiber/general/need-to-import-camera-animation-from-blender-control-its-timeline-from-react~5c247a65-9c92-44cf-ad2c-ccf55e248958
Router onclick : https://spectrum.chat/react-three-fiber/general/clicking-meshes-to-load-other-pages-react-router~3d87ef88-b55f-4a95-b3ca-733480bac833

Travail à faire :
-Personnage en plus.
-Problème actuel réside dans la lenteur fps observée dans firefox/chrome. Est-ce lié aux states de position velocité ? 
-mettre une rue pavé
-Information de jouabilité du jeu. Fleches et mouvements. Pourquoi pas sur le panneau information.
-Parcours pour aider le joueur au sol ? Commencer au tram.  
-batiments en fonds
-sauvegarde du jeu
-faire appariatre des touffes d'herbe
-evolution du paysage au fur et à mesure du parcours. défoncé -> jardin.
