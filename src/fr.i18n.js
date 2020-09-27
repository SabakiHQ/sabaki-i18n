module.exports = {
  'menu.file': {
    'New Window': 'Nouvelle Fenêtre',
    'File': 'Fichier',
    'New': 'Nouveau',
    'Open…': 'Ouvrir…',
    'Save': 'Enregistrer',
    'Save As…': 'Enregistrer Sous…',
    'Clipboard': 'Presse-Papiers',
    'Load SGF': 'Ouvrir SGF',
    'Copy SGF': 'Copier SGF',
    'Copy ASCII Diagram': 'Copier Diagrammme ASCII',
    'Game Info': 'Propriétés de la Partie',
    'Manage Games…': 'Gestionnaire de Parties…',
    'Preferences…': 'Paramètres…',
    'Quit': null
  },
  'updater': {
    'Download Update': 'Télécharger la Mise à Jour',
    'View Changelog': 'Voir les Modifications',
    'Not Now': 'Plus Tard',
    '${appName} v${version} is available now.': p =>
      `${p.appName} v${p.version} est disponible.`,
    'OK': 'OK',
    'No updates available': 'Pas de mise à jour disponible',
    '${appName} v${version} is the latest version.': p =>
      `${p.appName} v${p.version} est la dernière version.`
  },
  'exception': {
    '${appName} v${version}': p => `${p.appName} v${p.version}`,
    'Something weird happened. ${appName} will shut itself down. If possible, please report this on ${appName}’s repository on GitHub.': p =>
      [
        `Quelque chose d’innhabituel s’est produit. ${p.appName} va se fermer.`,
        `Si possible, veuillez signalerer ceci sur le dépôt GitHub de ${p.appName}.`
      ].join(' ')
  },
  'menu.play': {
    'Play': 'Jouer',
    'Toggle Player': 'Changer de Couleur',
    'Select Point': 'Jouer un Coup',
    'Enter a coordinate to select a point': 'Entrer les coordonnées du coup',
    'Pass': 'Passer',
    'Resign': 'Abandonner',
    'Estimate': 'Estimation',
    'Score': 'Score'
  },
  'menu.edit': {
    'Edit': 'Édition',
    'Undo': 'Annuler',
    'Redo': 'Rétablir',
    'Toggle Edit Mode': 'Basculer en Mode Edition',
    'Select Tool': 'Sélection d’Outils',
    'Stone Tool': 'Outil Pierre',
    'Cross Tool': 'Outil Croix',
    'Triangle Tool': 'Outil Triangle',
    'Square Tool': 'Outil Carré',
    'Circle Tool': 'Outil Cercle',
    'Line Tool': 'Outil Ligne',
    'Arrow Tool': 'Outil Flèche',
    'Label Tool': 'Outil Lettre',
    'Number Tool': 'Outil Chiffre',
    'Copy Variation': 'Copier la Variation',
    'Cut Variation': 'Couper la Variation',
    'Paste Variation': 'Coller la Variation',
    'Make Main Variation': 'Rendre la Variation Principale',
    'Shift Left': 'Déplacer vers la Gauche',
    'Shift Right': 'Déplacer vers la Droite',
    'Flatten': 'Applatir',
    'Remove Node': 'Supprimer le Noeud',
    'Remove Other Variations': 'Supprimer les Autres Variations'
  },
  'menu.find': {
    'Find': 'Recherche',
    'Toggle Find Mode': 'Basculer en Mode Recherche',
    'Find Next': 'Trouver le Suivant',
    'Find Previous': 'Trouver le Précédent',
    'Toggle Hotspot': 'Ajouter un Signet',
    'Jump to Next Hotspot': 'Aller au Signet Suivant',
    'Jump to Previous Hotspot': 'Aller au Signet Précédent'
  },
  'menu.navigation': {
    'Navigation': 'Navigation',
    'Back': 'Reculer',
    'Forward': 'Avancer',
    'Go to Previous Fork': 'Aller à la Branche Précédente',
    'Go to Next Fork': 'Aller à la Branche Suivante',
    'Go to Previous Comment': 'Aller au Commentaire Précédent',
    'Go to Next Comment': 'Aller au Commentaire Suivant',
    'Go to Beginning': 'Aller à la Position Initiale',
    'Go to End': 'Aller à la Position Finale',
    'Go to Main Variation': 'Aller à la Variation Principale',
    'Go to Previous Variation': 'Aller à la Variation Précédente',
    'Go to Next Variation': 'Aller à la Variation Suivante',
    'Go to Move Number': 'Aller au Coup Numéro',
    'Enter a move number to go to': 'Entrer un numéro de coup',
    'Go to Next Game': 'Aller à la Partie Suivante',
    'Go to Previous Game': 'Aller à la Partie Précédente'
  },
  'menu.engines': {
    'Engines': 'Moteurs de Jeu',
    'Show Engines Sidebar': 'Montrer la Fenêtre Moteurs',
    'Toggle Analysis': 'Basculer en Mode Analyse',
    'None of the attached engines support analysis.':
      'Aucun des moteurs attachés ne supporte le mode analyse',
    'Start Engine vs. Engine Game': 'Commencer une Partie Moteur contre Moteur',
    'Stop Engine vs. Engine Game': 'Arrêter la Partie Moteur contre Moteur',
    'Generate Move': 'Générer un Coup',
    'Please assign an engine to the player first.':
      'Veuillez d’abord assigner un moteur au joueur.',
    '(Unnamed Engine)': '(Moteur Sans Nom)',
    'Manage Engines…': 'Gérer les Moteurs…',
    'Clear Console': 'Effacer la Console'
  },
  'menu.tools': {
    'Tools': 'Outils',
    'Toggle Autoplay Mode': 'Basculer en Mode Lecture Automatique',
    'Toggle Guess Mode': 'Basculer en Mode Deviner',
    'Clean Markup…': 'Effacer les Annotations',
    'Edit SGF Properties…': 'Éditer les Propriétés SGF',
    'Rotate Anticlockwise': 'Rotation Antihoraire',
    'Rotate Clockwise': 'Rotation Horaire',
    'Flip Horizontally': 'Symétrie Axe Vertical',
    'Flip Vertically': 'Symétrie Axe Horizontal',
    'Invert Colors': 'Inversement des Couleurs',
    'Reset': 'Réinitialiser'
  },
  'menu.view': {
    'View': 'Affichage',
    'Toggle Menu Bar': 'Afficher la Barre de Menus',
    'Toggle Full Screen': 'Basculer en Mode Plein Écran',
    'Show Coordinates': 'Afficher les Coordonnées',
    'Don’t Show': 'Ne Pas Montrer',
    'A1 (Default)': 'A1 (Défaut)',
    '1-1': '1-1',
    'Relative': 'Relatif',
    'Show Move Numbers': 'Afficher les Numéros des Coups',
    'Show Move Colorization': 'Afficher la Couleur des Coups',
    'Show Next Moves': 'Afficher les Coups Suivants',
    'Show Sibling Variations': 'Afficher les Variations Alternatives',
    'Show Heatmap': 'Afficher les Points Chauds',
    'Show Win Rate': 'Afficher la Probabilité de Victoire',
    'Show Score Lead': 'Afficher le Nombre de Points d’Écart',
    'Show Winrate Graph': 'Afficher le Graphique de la Probabilité de Victoire',
    'Show Game Tree': 'Afficher l’Arbre de Jeu',
    'Show Comments': 'Afficher les Commentaires',
    'Zoom': 'Zoom',
    'Increase': 'Agrandir',
    'Decrease': 'Rétrécir',
    'Reset': 'Réinitialiser',
    'Transform Board': 'Transformer le Goban'
  },
  'menu.help': {
    'Help': 'Aide',
    '${appName} v${version}': p => `${p.appName} v${p.version}`,
    'Check for Updates': 'Vérifier les Mises à Jours',
    'GitHub Repository': 'Dépôt GitHub',
    'Report Issue': 'Signaler un Problème'
  },
  'menu.developer': {
    'Developer': 'Développeur',
    'Open Settings Folder': 'Ouvrir le Dossier de Configuration',
    'Toggle Developer Tools': 'Afficher les Outils de Développeur',
    'Load Language File…': 'Charger le Fichier de Langue…',
    'A language file is basically a JavaScript file and can be used to execute arbitrary code on your computer.\n\nIt can be extremely dangerous, so it is recommended to only load language files from authors you trust.':
      'Un fichier de langue est un fichier JavaScript et peut être utilisé pour exécuter du code arbitraire sur votre ordinateur.\n\nCela peut être extrêmement dangereux, il est donc recommandé de ne charger uniquement des fichiers de langue d’auteurs en qui vous avez confiance.',
    'I understand': 'J’ai compris',
    'JavaScript Files': 'Fichiers JavaScript',
    'Unload Language File': 'Décharger le Fichier de Langue'
  },
  'menu.macos': {
    'Text': 'Texte'
  },
  'App': {
    'Press Esc to exit full screen mode':
      'Appuyez sur la touche Esc pour quitter le mode plein écran',
    'Press Alt to show menu bar':
      'Appuyez sur la touche Alt pour afficher la barre de menus'
  },
  'ContentDisplay': {
    'Jump to Move Number': 'Aller au Coup Numéro'
  },
  'dialog': {
    'OK': 'OK'
  },
  'EngineSyncer': {
    'GTP engines don’t support invalid board positions.':
      'Les moteurs GTP ne supportent pas les positions de goban non réglementaire.',
    'GTP engines only support board sizes that don’t exceed ${length}.': p =>
      `Les moteurs GTP supportent uniquement les goban qui n’excèdent pas ${p.length}.`,
    'Current board arrangement can’t be recreated on the GTP engine.':
      'La position de goban actuelle ne peut pas être recréée sur le moteur GTP.',
    'GTP engine can’t be synced to current state.':
      'Le moteur GTP ne peut pas être synchronisé avec l’état actuel.'
  },
  'gtplogger': {
    'You have an invalid log folder for GTP console logging in your settings.\n\nPlease make sure the log directory is valid and writable, or disable GTP console logging.':
      'Le dossier du journal de console GTP est invalide dans vos réglages.\n\nVeuillez vous assurer que le dossier du journal GTP est valide et modifiable, ou bien désactivez le journal de console GTP.'
  },
  'sabaki.window': {
    'Game ${gameNumber}': p => `Partie ${p.gameNumber}`
  },
  'sabaki.file': {
    'All Files': 'Tous les Fichiers',
    'This file is unreadable.': 'Ce fichier n’est pas lisible.',
    'Your changes will be lost if you close this file without saving.':
      'Vos modifications seront perdues si vous fermez ce fichier sans sauvegarder.',
    'Save': 'Sauvegarder',
    'Don’t Save': 'Ne pas Sauvegarder',
    'Cancel': 'Annuler',
    'This file has been changed outside of ${appName}.\nDo you want to reload the file? Your changes will be lost.': p =>
      [
        `Ce fichier a été modifié en dehors de ${p.appName}.`,
        'Voulez-vous recharger ce fichier? Vos modifications seront perdues.'
      ].join('\n'),
    'Reload': 'Recharger',
    'Don’t Reload': 'Ne pas Recharger'
  },
  'sabaki.play': {
    'Edit Label': 'Éditer la Marque',
    'Enter label text': 'Entrer le texte de la marque',
    'You are about to play a move which repeats a previous board position.\nThis is invalid in some rulesets.':
      'Vous êtes sur le point de jouer un coup qui répète une position de goban antérieure. Ce n’est pas valide selon certaines règles.',
    'Play Anyway': 'Jouer Quand Même',
    'Don’t Play': 'Ne pas Jouer',
    'You are about to play a suicide move.\nThis is invalid in some rulesets.':
      'Vous êtes sur le point de jouer un coup suicide. Ce n’est pas valide selon certaines règles.'
  },
  'sabaki.engine': {
    'Connection Failed': 'La Connexion a Échoué',
    '${engine} has failed to generate a move.': p =>
      `${p.engine} a échoué a générer un coup.`,
    '${engine} has resigned.': p => `${p.engine} a résigné.`,
    'Please attach one or more engines first.':
      'Veuillez d’abord attacher un moteur.',
    'The selected engine does not support analysis.':
      'Le moteur choisi ne supporter pas l’analyse'
  },
  'sabaki.node': {
    'Do you really want to remove this node?':
      'Voulez-vous vraiment supprimer ce noeud?',
    'Remove Node': 'Supprimer le Noeud',
    'Cancel': 'Annuler',
    'Do you really want to remove all other variations?':
      'Voulez-vous vraiment supprimer toutes les autres variations?',
    'Remove Variations': 'Supprimer les Variations'
  },
  'menu.comment': {
    'Clear Annotations': 'Effacer les Annotations',
    'Good for Black': 'Bon pour Noir',
    'Unclear Position': 'Position Incertaine',
    'Even Position': 'Position Équitable',
    'Good for White': 'Bon pour Blanc',
    'Good Move': 'Bon Coup',
    'Interesting Move': 'Coup Intéressant',
    'Doubtful Move': 'Coup Douteux',
    'Bad Move': 'Mauvais Coup',
    'Hotspot': 'Point Chaud'
  },
  'menu.variation': {
    'Add Variation': 'Ajouter une Variation',
    'The root node cannot have sibling nodes.':
      'La racine ne peut pas avoir de noeud alternatif.'
  },
  'menu.engineAction': {
    'Start': 'Démarrer',
    'Stop': 'Arrêter',
    'Detach': 'Détacher',
    'Synchronize': 'Synchroniser',
    'Generate Move': 'Générer un Coup',
    'Set as Analyzer': 'Définir Comme Analyseur',
    'Set as Black Player': 'Définir Comme Joueur Noir',
    'Set as White Player': 'Définir Comme Joueur Blanc',
    'Go to Engine': 'Aller au moteur'
  },
  'AutoplayBar': {
    'sec per move': 'secondes par coup'
  },
  'EditBar': {
    'Stone Tool': 'Outil Pierre',
    'Cross Tool': 'Outil Croix',
    'Triangle Tool': 'Outil Triangle',
    'Square Tool': 'Outil Carré',
    'Circle Tool': 'Outil Cercle',
    'Line Tool': 'Outil Ligne',
    'Arrow Tool': 'Outil Flêche',
    'Label Tool': 'Outil Lettre',
    'Number Tool': 'Outil Chiffre'
  },
  'FindBar': {
    'Find': 'Rechercher',
    'Next': 'Suivant',
    'Previous': 'Précédent'
  },
  'GuessBar': {
    'Click on the board to guess the next move.':
      'Cliquer sur le goban pour deviner le coup suivant.'
  },
  'PlayBar': {
    'Pass': 'Passer',
    'Resign': 'Resigner',
    'Estimate': 'Estimation',
    'Score': 'Score',
    'Edit': 'Editer',
    'Find': 'Recherche',
    'Info': 'Infos',
    'Hotspot': 'Point Chaud',
    'Engine': 'Moteur',
    'Black': 'Noir',
    'Change Player': 'Changer de Joueur',
    'White to play': 'À Blanc de Jouer',
    'Black to play': 'À Noir de Jouer',
    'White': 'Blanc'
  },
  'ScoringBar': {
    'Details': 'Détails',
    'Draw': 'Partie Nulle',
    'Please select dead stones.': 'Veuillez sélectionner les pierres mortes.',
    'Toggle group status.': 'Changer l’état d’un groupe.'
  },
  'AdvancedPropertiesDrawer': {
    'Remove': 'Enlever',
    'Enter property name': 'Enter le nom de propriété',
    'This property has been blocked.': 'Cette propriété a été bloquée.',
    'Add': 'Ajouter',
    'Close': 'Fermer'
  },
  'CleanMarkupDrawer': {
    'From Current Position': 'Pour la Position Actuelle',
    'From Entire Game': 'Pour Toute la Partie',
    'Clean Markup': 'Effacer le Marquage',
    'Cross markers': 'Marques Croix',
    'Triangle markers': 'Marques Triangle',
    'Square markers': 'Marques Carré',
    'Circle markers': 'Marques Cercle',
    'Line markers': 'Marques Ligne',
    'Arrow markers': 'Marques Flèche',
    'Label markers': 'Marques Lettre',
    'Comments': 'Commentaires',
    'Annotations': 'Annotations',
    'Hotspots markers': 'Marques de Point Chaud',
    'Winrate data': 'Données de probabilité de victoire',
    'Remove': 'Enlever',
    'Close': 'Fermer'
  },
  'GameChooserDrawer': {
    'Black': 'Noir',
    'White': 'Blanc',
    'Remove Game': 'Supprimer la Partie',
    'Do you really want to remove this game permanently?':
      'Voulez-vous vraiment supprimer cette partie définitivement?',
    'Cancel': 'Annuler',
    'Remove Other Games': 'Supprimer les Autres Parties',
    'Do you really want to remove all other games permanently?':
      'Voulez-vous vraiment supprimer toutes les autres parties définitivement?',
    'Remove Games': 'Supprimer les Parties',
    'Add New Game': 'Ajouter une Nouvelle Partie',
    'Add Existing Files…': 'Ajouter un Fichier Existant…',
    'All Files': 'Tous les Fichiers',
    'Some files are unreadable.': 'Certains fichiers sont illisibles.',
    'Black Player': 'Joueur Noir',
    'White Player': 'Joueur Blanc',
    'Black Rank': 'Classement de Noir',
    'White Rank': 'Classement de Blanc',
    'Game Name': 'Nom de la Partie',
    'Game Event': 'Événement',
    'Date': 'Date',
    'Number of Moves': 'Nombres de Coups',
    'Reverse': 'Inverser',
    'Manage Games': 'Gérer les Parties',
    'Filter': 'Filtrer',
    'Add': 'Ajouter',
    'Sort By': 'Trier Par',
    'Close': 'Fermer'
  },
  'InfoDrawer': {
    'Manual': 'Manuel',
    '(Unnamed Engine)': '(Moteur Sans Nom)',
    'Attach Engine': 'Attacher un Moteur',
    'Manage Engines…': 'Gérer les Moteurs',
    'Previous Month': 'Mois Précédent',
    'Next Month': 'Mois Suivant',
    'Rank': 'Classement',
    'Black': 'Noir',
    'Swap': 'Échanger',
    'White': 'Blanc',
    'Name': 'Nom',
    '(Unnamed)': '(Sans Nom)',
    'Event': 'Événement',
    'None': 'Aucun',
    'Date': 'Date',
    'Comment': 'Commentaire',
    'Result': 'Résultat',
    'Show': 'Montrer',
    'Komi': 'Komi',
    'Handicap': 'Handicap',
    'No stones': 'Aucune Pierre',
    '${stones} stones': p => `${p.stones} Pierres`,
    'Board Size': 'Taille de Goban',
    'OK': 'OK',
    'Cancel': 'Annuler'
  },
  'PreferencesDrawer': {
    'Please restart ${appName} to apply your language setting.': p =>
      `Veuillez redémarrer ${p.appName} pour appliquer votre réglage de langue.`,
    'Enable hardware acceleration if possible':
      'Activer l’accélération matérielle si possible',
    'Check for updates at startup': 'Vérifier les mises à jour au démarrage',
    'Enable sounds': 'Activer les sons',
    'Jump to end after loading file':
      'Aller à la fin de partie après avoir chargé un fichier',
    'Fuzzy stone placement': 'Placement décentré des pierres',
    'Animate fuzzy placement': 'Animation du placement décentré',
    'Variation Replay Mode:': 'Mode Lecture de Variation',
    'Disabled': 'Désactivé',
    'Move by Move': 'Coup par Coup',
    'Instantly': 'Instantanément',
    'Language:': 'Langue',
    'Game Tree Style:': 'Style d’Arbre de Jeu',
    'Compact': 'Compact',
    'Spacious': 'Étendu',
    'Big': 'Grand',
    'Show automatic move titles': 'Montrer automatiquement le nom des coups',
    'Show ko warning': 'Montrer les avertissement de ko',
    'Show suicide warning': 'Montrer les avertissement de suicide',
    'Show remove node warning':
      'Montrer les avertissement de suppression de noeuds',
    'Show remove other variations warning':
      'Montrer les avertissement de suppression des autres variations',
    'Offer to reload file if changed externally':
      'Proposer de relancer le fichier en cas de modification externe',
    'Click last played stone to remove':
      'Cliquer sur la dernière pierre pour l’enlever',
    'Invert winrate graph': 'Inverser le graphique de probabilité de victoire',
    'Path': 'Chemin',
    'Browse…': 'Parcourir…',
    'Directory not found': 'Dossier non trouvé',
    'File not found': 'Fichier non trouvé',
    'Do you really want to uninstall this theme?':
      'Voulez-vous vraiment désinstaller ce thème?',
    'Uninstall': 'Désinstaller',
    'Cancel': 'Annuler',
    'Uninstallation failed.': 'Échec de la désinstalation',
    'Sabaki Themes': 'Thèmes de Sabaki',
    'Installation failed.': 'Échec de l’installation',
    'Custom Images': 'Images Personnalisées',
    'Black stone image:': 'Image de pierres noires',
    'White stone image:': 'Image de pierres blanches',
    'Board image:': 'Image de goban',
    'Background image:': 'Image de fond',
    'Current Theme': 'Thème Courant',
    'Default': 'Défaut',
    'Install Theme…': 'Installer le Thème…',
    'Get more themes…': 'Obtenir plus de thèmes',
    'by ${author}': p => `par ${p.author}`,
    'Homepage': 'Page d’accueil',
    'All Files': 'Tous les Fichiers',
    'Remove': 'Supprimer',
    '(Unnamed Engine)': '(Moteur Sans Nom)',
    'No arguments': 'Pas d’argument',
    'Initial commands (;-separated)':
      'Commandes initiales (séparées par des ;)',
    'Enable GTP logging to directory:':
      'Activer le journal de console GTP dans le dossier',
    'Add': 'Ajouter',
    'General': 'Général',
    'Themes': 'Thèmes',
    'Engines': 'Moteurs',
    'Close': 'Fermer'
  },
  'ScoreDrawer': {
    'Black': 'Noir',
    'White': 'Blanc',
    'Draw': 'Partie Nulle',
    'Score': 'Score',
    'Area': 'Surface',
    'Territory': 'Territoire',
    'Captures': 'Prisonniers',
    'Komi': 'Komi',
    'Handicap': 'Handicap',
    'Total': 'Total',
    'Result:': 'Résultat',
    'Update Result': 'Mettre à Jour le Résultat',
    'Close': 'Fermer'
  },
  'CommentBox': {
    'Result: ${result}': p => `Résultat: ${p.result}`,
    '${a}-${b} Point': p => `Point ${p.a}-${p.b}`,
    'View article on Sensei’s Library': 'Voir l’article sur Sensei’s Library',
    'Bad move': 'Mauvais oup',
    'Very bad move': 'Très mauvais coup',
    'Doubtful move': 'Coup douteux',
    'Very doubtful move': 'Coup très douteux',
    'Interesting move': 'Coup intéressant',
    'Very interesting move': 'Coup très intéressant',
    'Good move': 'Bon coup',
    'Very good move': 'Très bon coup',
    'Good for White': 'Bon pour Blanc',
    'Very good for White': 'Très bon pour Blanc',
    'Even position': 'Position équitable',
    'Very even position': 'Position très équitable',
    'Good for Black': 'Bon pour Noir',
    'Very good for Black': 'Très bon pour Noir',
    'Unclear position': 'Position incertaine',
    'Very unclear position': 'Position très incertaine',
    'Edit': 'Modifier',
    'Title': 'Titre',
    'Comment': 'Commentaire'
  },
  'PeerList': {
    'Running': 'En Marche',
    'Stopped': 'A l’Arrêt',
    'Analyzer': 'Outil Analytique',
    'Plays as Black': 'Joue pour Noir',
    'Plays as White': 'Joue pour Blanc',
    'Attach Engine…': 'Attacher le Moteur…',
    'Start Engine vs. Engine Game': 'Lancer une Partie Moteur Contre Moteur',
    'Stop Engine vs. Engine Game': 'Arrêter la Partie Moteur Contre Moteur'
  },
  'WinrateGraph': {
    'Black': 'Noir',
    'White': 'Blanc',
    'Black Winrate:': 'Probabilité de Victoire de Noir',
    'White Winrate:': 'Probabilité de Victoire de Blanc'
  },
  'fileformats': {
    'Tygem GIB': 'Tygem GIB',
    'Game Records': 'Game Records',
    'wBaduk NGF': 'wBaduk NGF',
    'Smart Game Format': 'Smart Game Format'
  },
  'boardmatcher': {
    'Low Chinese Opening': 'Fuseki Chinois Bas',
    'High Chinese Opening': 'Fuseki Chinois Haut',
    'Orthodox Opening': 'Fuseki Orthodoxe',
    'Enclosure Opening': 'Fuseki Verrou de Coin',
    'Kobayashi Opening': 'Fuseki Kobayashi',
    'Small Chinese Opening': 'Mini Fuseki Chinois',
    'Micro Chinese Opening': 'Micro Fuseki Chinois',
    'Sanrensei Opening': 'Fuseki Sanrensei',
    'Nirensei Opening': 'Fuseki Nirensei',
    'Shūsaku Opening': 'Fuseki Shūsaku',
    'Low Approach': 'Approche Basse',
    'High Approach': 'Approche Haute',
    'Low Enclosure': 'Verrou de Coin Bas',
    'High Enclosure': 'Verrou de Coin Haut',
    'Mouth Shape': 'Bouche',
    'Table Shape': 'Table',
    'Tippy Table': 'Table Inclinée',
    'Bamboo Joint': 'Noeud de Bambou',
    'Trapezium': 'Trapèze',
    'Diamond': 'Diamand',
    'Tiger’s Mouth': 'Gueule de Tigre',
    'Empty Triangle': 'Angle Vide',
    'Turn': 'Coude',
    'Stretch': 'Étirement',
    'Diagonal': 'Diagonale',
    'Wedge': 'Encastrement',
    'Hane': 'Hane',
    'Cut': 'Coupe',
    'Square': 'Carré',
    'Throwing Star': 'Étoile de Ninja',
    'Parallelogram': 'Parallélogramme',
    'Dog’s Head': 'Nez de Chien',
    'Horse’s Head': 'Nez de Cheval',
    'Attachment': 'Contact',
    'One-Point Jump': 'Saut d’une Intersection',
    'Big Bulge': 'Grand Renflement',
    'Small Knight': 'Saut de Cheval',
    'Two-Point Jump': 'Saut de Deux Intersections',
    'Large Knight': 'Grand Saut de Cheval',
    '3-3 Point Invasion': null,
    'Shoulder Hit': 'Coup à l’Épaule',
    'Diagonal Jump': 'Saut en Diagonale',
    '3-4 Point': null,
    '4-4 Point': 'Point 4-4',
    '3-3 Point': 'Point 3-3',
    '3-5 Point': null,
    '4-5 Point': null,
    '6-3 Point': null,
    '6-4 Point': null,
    '5-5 Point': null,
    'Pass': 'Passe',
    'Take': 'Capture',
    'Atari': 'Atari',
    'Suicide': 'Suicide',
    'Fill': 'Rempli',
    'Connect': 'Connecte',
    'Tengen': 'Tengen',
    'Hoshi': 'Point Étoile'
  }
}
