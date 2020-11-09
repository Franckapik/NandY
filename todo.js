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
Personnage ajouté avec animation.
Mettre une rue pavé - instanciée. Il semblerait que l'instanciation d'un import gltf semble difficile sur r3f ? Pour l'instant, une texture image simple est mise. Fonctionne avec un fichier blob.
Passage d'une vue isometrique à une vue fps pour plus de jouabilité. Fov réglable.
FogExp2 utilisé et ajout d'un sky qui peut être réglé davantage.
FollowPath avec la librarie Yuka + hook useYuka.
Batiments en fond.
Position définie dans useBox et pas ds r3f pour tous les objets
Separation actif/passiv dans cannon et blender
Pouvoir appliquer de la physics à des meshs disposant de plusieurs materials.
Creation de useYukaSeek vers targetCreation de useYukaWander dans une région donnée.
Creation de useYukaFollowRegion (mais sans la function getRandomRegion qui ne semble pas fonctionner)

v1.0.3
Attention aux updates de react-hotkeys-hooks et r3f




Travail à faire :
changer de version jusqu'à la v5!!

Comment avoir un use-cannon avec les bonding box, le master et le raycast vehicle ?
Forker un use-cannon pour l'utiliser spécifiquement pour le jeu? Difficile de connaitre les pratiques de git pour les diffs de fichiers à gerer.
Essayer d'ajouter le raycast vehicle sur la v5.



-Choisir le bon comportement des budies.
Est-ce qu'il court après une cible changeante (empty) ou bien ils se déplacent sur un navmesh de manière aléatoire.
Aparemment, il faut accorder un comportement à l'entité puis ensuite ajouter dans le update(delta) des logiques de collisions selon le navmesh.
Fabriquer une WanderEntity à partir du MovingEntity. Mais cela est probablement trop compliqué par rapport aux fonctions existantes comme le followPath depuis une target amovible.

-IA : avoir une target dans le store zustand à partir de differents elements. 
Differents comportements disponibles qui permetent le mouvement de cubes sur un navmesh.
-Information de jouabilité du jeu. Fleches et mouvements. Pourquoi pas sur le panneau information.
-Identifier des zones via des panneaux, des couleurs, des cadrages idéaux.
-Parcours pour aider le joueur au sol ? Commencer au tram.  
-sauvegarde du jeu
-faire appariatre des touffes d'herbe
-Répartition aléatoire d'éléments ordinaires.
-evolution du paysage au fur et à mesure du parcours. défoncé -> jardin.
-commencer a concevoir le joueur

shift alt o pour retirer les imports non used