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
    'Preferences…': 'Paramètres…'
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
        `Quelque chose d’innhabituel s’est produit. ${appName} va se fermer.`,
        `Si possible, veuillez signalerer ceci sur le dépôt GitHub de ${appName}.`
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
    'Score': 'Résultat'
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
    'Number Tool': 'Outil Numéro',
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
    'None of the attached engines support analysis.': 'Aucun des moteurs attachés ne supporte le mode analyse',
    'Start Engine vs. Engine Game': 'Commencer une Partie Moteur contre Moteur',
    'Stop Engine vs. Engine Game': 'Arrêter la Partie Moteur contre Moteur',
    'Generate Move': 'Générer un Coup',
    'Please assign an engine to the player first.': 'Veuillez d’abord assigner un moteur au joueur.',
    '(Unnamed Engine)': '(Moteur Sans Nom)',
    'Manage Engines…': 'Gérer les Moteurs…',
    'Clear Console': 'Effacer la Console'
  },
  'menu.tools': {
    'Tools': 'Outils',
    'Toggle Autoplay Mode': 'Basculer en Mode Lecture Automatique',
    'Toggle Guess Mode': 'Basculer en Mode Deviner',
    'Clean Markup…': 'Effacer les Annotations',
    'Edit SGF Properties…': 'Editer les Propriétés SGF',
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
    'A language file is basically a JavaScript file and can be used to execute arbitrary code on your computer.\n\nIt can be extremely dangerous, so it is recommended to only load language files from authors you trust.': 'Un fichier de langue est un fichier JavaScript et peut être utilisé pour exécuter du code arbitraire sur votre ordinateur.\n\nCela peut être extrêmement dangereux, il est donc recommandé de ne charger uniquement des fichiers de langue d’auteurs en qui vous avez confiance.',
    'I understand': 'J’ai compris',
    'JavaScript Files': 'Fichiers JavaScript',
    'Unload Language File': 'Décharger le Fichier de Langue'
  },
  'menu.macos': {
    'Text': 'Texte'
  },
  'App': {
    'Press Esc to exit full screen mode': 'Appuyez sur la touche Esc pour quitter le mode plein écran',
    'Press Alt to show menu bar': 'Appuyez sur la touche Alt pour afficher la barre de menus'
  },
  'ContentDisplay': {
    'Jump to Move Number': 'Aller au Coup Numéro'
  },
  'dialog': {
    'OK': 'OK'
  },
  'EngineSyncer': {
    'GTP engines don’t support invalid board positions.': 'Les moteurs GTP ne supportent pas les positions de goban non réglementaire.',
    'GTP engines only support board sizes that don’t exceed ${length}.': p =>
      `Les moteurs GTP supportent uniquement les goban qui n’excèdent pas ${length}.`,
    'Current board arrangement can’t be recreated on the GTP engine.': 'La position de goban actuelle ne peut pas être recréée sur le moteur GTP.',
    'GTP engine can’t be synced to current state.': 'Le moteur GTP ne peut pas être synchronisé avec l’état actuel.'
  },
  'gtplogger': {
    'You have an invalid log folder for GTP console logging in your settings.\n\nPlease make sure the log directory is valid and writable, or disable GTP console logging.': 'Le dossier du journal de console GTP est invalide dans vos réglages.\n\nVeuillez vous assurer que le dossier du journal GTP est valide et modifiable, ou bien désactivez le journal de console GTP.'
  },
  'sabaki.window': {
    'Game ${gameNumber}': p => `Partie ${p.gameNumber}`
  },
  'sabaki.file': {
    'All Files': 'Tous les Fichiers',
    'This file is unreadable.': 'Ce fichier n’est pas lisible.',
    'Your changes will be lost if you close this file without saving.': 'Vos modifications seront perdues si vous fermez ce fichier sans sauvegarder.',
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
    'Edit Label': null,
    'Enter label text': null,
    'You are about to play a move which repeats a previous board position.\nThis is invalid in some rulesets.': null,
    'Play Anyway': null,
    'Don’t Play': null,
    'You are about to play a suicide move.\nThis is invalid in some rulesets.': null
  },
  'sabaki.engine': {
    'Connection Failed': null,
    '${engine} has failed to generate a move.': null,
    '${engine} has resigned.': null,
    'Please attach one or more engines first.': null,
    'The selected engine does not support analysis.': null
  },
  'sabaki.node': {
    'Do you really want to remove this node?': null,
    'Remove Node': null,
    'Cancel': null,
    'Do you really want to remove all other variations?': null,
    'Remove Variations': null
  },
  'menu.comment': {
    'Clear Annotations': null,
    'Good for Black': null,
    'Unclear Position': null,
    'Even Position': null,
    'Good for White': null,
    'Good Move': null,
    'Interesting Move': null,
    'Doubtful Move': null,
    'Bad Move': null,
    'Hotspot': null
  },
  'menu.variation': {
    'Add Variation': null,
    'The root node cannot have sibling nodes.': null
  },
  'menu.engineAction': {
    'Start': null,
    'Stop': null,
    'Detach': null,
    'Synchronize': null,
    'Generate Move': null,
    'Set as Analyzer': null,
    'Set as Black Player': null,
    'Set as White Player': null,
    'Go to Engine': null
  },
  'AutoplayBar': {
    'sec per move': null
  },
  'EditBar': {
    'Stone Tool': null,
    'Cross Tool': null,
    'Triangle Tool': null,
    'Square Tool': null,
    'Circle Tool': null,
    'Line Tool': null,
    'Arrow Tool': null,
    'Label Tool': null,
    'Number Tool': null
  },
  'FindBar': {
    'Find': null,
    'Next': null,
    'Previous': null
  },
  'GuessBar': {
    'Click on the board to guess the next move.': null
  },
  'PlayBar': {
    'Pass': null,
    'Resign': null,
    'Estimate': null,
    'Score': null,
    'Edit': null,
    'Find': null,
    'Info': null,
    'Hotspot': null,
    'Engine': null,
    'Black': null,
    'Change Player': null,
    'White to play': null,
    'Black to play': null,
    'White': null
  },
  'ScoringBar': {
    'Details': null,
    'Draw': null,
    'Please select dead stones.': null,
    'Toggle group status.': null
  },
  'AdvancedPropertiesDrawer': {
    'Remove': null,
    'Enter property name': null,
    'This property has been blocked.': null,
    'Add': null,
    'Close': null
  },
  'CleanMarkupDrawer': {
    'From Current Position': null,
    'From Entire Game': null,
    'Clean Markup': null,
    'Cross markers': null,
    'Triangle markers': null,
    'Square markers': null,
    'Circle markers': null,
    'Line markers': null,
    'Arrow markers': null,
    'Label markers': null,
    'Comments': null,
    'Annotations': null,
    'Hotspots markers': null,
    'Winrate data': null,
    'Remove': null,
    'Close': null
  },
  'GameChooserDrawer': {
    'Black': null,
    'White': null,
    'Remove Game': null,
    'Do you really want to remove this game permanently?': null,
    'Cancel': null,
    'Remove Other Games': null,
    'Do you really want to remove all other games permanently?': null,
    'Remove Games': null,
    'Add New Game': null,
    'Add Existing Files…': null,
    'All Files': null,
    'Some files are unreadable.': null,
    'Black Player': null,
    'White Player': null,
    'Black Rank': null,
    'White Rank': null,
    'Game Name': null,
    'Game Event': null,
    'Date': null,
    'Number of Moves': null,
    'Reverse': null,
    'Manage Games': null,
    'Filter': null,
    'Add': null,
    'Sort By': null,
    'Close': null
  },
  'InfoDrawer': {
    'Manual': null,
    '(Unnamed Engine)': null,
    'Attach Engine': null,
    'Manage Engines…': null,
    'Previous Month': null,
    'Next Month': null,
    'Rank': null,
    'Black': null,
    'Swap': null,
    'White': null,
    'Name': null,
    '(Unnamed)': null,
    'Event': null,
    'None': null,
    'Date': null,
    'Comment': null,
    'Result': null,
    'Show': null,
    'Komi': null,
    'Handicap': null,
    'No stones': null,
    '${stones} stones': null,
    'Board Size': null,
    'OK': null,
    'Cancel': null
  },
  'PreferencesDrawer': {
    'Please restart ${appName} to apply your language setting.': null,
    'Enable hardware acceleration if possible': null,
    'Check for updates at startup': null,
    'Enable sounds': null,
    'Jump to end after loading file': null,
    'Fuzzy stone placement': null,
    'Animate fuzzy placement': null,
    'Variation Replay Mode:': null,
    'Disabled': null,
    'Move by Move': null,
    'Instantly': null,
    'Language:': null,
    'Game Tree Style:': null,
    'Compact': null,
    'Spacious': null,
    'Big': null,
    'Show automatic move titles': null,
    'Show ko warning': null,
    'Show suicide warning': null,
    'Show remove node warning': null,
    'Show remove other variations warning': null,
    'Offer to reload file if changed externally': null,
    'Click last played stone to remove': null,
    'Invert winrate graph': null,
    'Path': null,
    'Browse…': null,
    'Directory not found': null,
    'File not found': null,
    'Do you really want to uninstall this theme?': null,
    'Uninstall': null,
    'Cancel': null,
    'Uninstallation failed.': null,
    'Sabaki Themes': null,
    'Installation failed.': null,
    'Custom Images': null,
    'Black stone image:': null,
    'White stone image:': null,
    'Board image:': null,
    'Background image:': null,
    'Current Theme': null,
    'Default': null,
    'Install Theme…': null,
    'Get more themes…': null,
    'by ${author}': null,
    'Homepage': null,
    'All Files': null,
    'Remove': null,
    '(Unnamed Engine)': null,
    'No arguments': null,
    'Initial commands (;-separated)': null,
    'Enable GTP logging to directory:': null,
    'Add': null,
    'General': null,
    'Themes': null,
    'Engines': null,
    'Close': null
  },
  'ScoreDrawer': {
    'Black': null,
    'White': null,
    'Draw': null,
    'Score': null,
    'Area': null,
    'Territory': null,
    'Captures': null,
    'Komi': null,
    'Handicap': null,
    'Total': null,
    'Result:': null,
    'Update Result': null,
    'Close': null
  },
  'CommentBox': {
    'Result: ${result}': null,
    '${a}-${b} Point': null,
    'View article on Sensei’s Library': null,
    'Bad move': null,
    'Very bad move': null,
    'Doubtful move': null,
    'Very doubtful move': null,
    'Interesting move': null,
    'Very interesting move': null,
    'Good move': null,
    'Very good move': null,
    'Good for White': null,
    'Very good for White': null,
    'Even position': null,
    'Very even position': null,
    'Good for Black': null,
    'Very good for Black': null,
    'Unclear position': null,
    'Very unclear position': null,
    'Edit': null,
    'Title': null,
    'Comment': null
  },
  'PeerList': {
    'Running': null,
    'Stopped': null,
    'Analyzer': null,
    'Plays as Black': null,
    'Plays as White': null,
    'Attach Engine…': null,
    'Start Engine vs. Engine Game': null,
    'Stop Engine vs. Engine Game': null
  },
  'WinrateGraph': {
    'Black': null,
    'White': null,
    'Black Winrate:': null,
    'White Winrate:': null
  },
  'fileformats': {
    'Tygem GIB': null,
    'Game Records': null,
    'wBaduk NGF': null,
    'Smart Game Format': null
  },
  'boardmatcher': {
    'Low Chinese Opening': null,
    'High Chinese Opening': null,
    'Orthodox Opening': null,
    'Enclosure Opening': null,
    'Kobayashi Opening': null,
    'Small Chinese Opening': null,
    'Micro Chinese Opening': null,
    'Sanrensei Opening': null,
    'Nirensei Opening': null,
    'Shūsaku Opening': null,
    '3-3 Point': null,
    'Low Approach': null,
    'High Approach': null,
    'Low Enclosure': null,
    'High Enclosure': null,
    'Mouth Shape': null,
    'Table Shape': null,
    'Tippy Table': null,
    'Bamboo Joint': null,
    'Trapezium': null,
    'Diamond': null,
    'Tiger’s Mouth': null,
    'Empty Triangle': null,
    'Turn': null,
    'Stretch': null,
    'Diagonal': null,
    'Wedge': null,
    'Hane': null,
    'Cut': null,
    'Square': null,
    'Throwing Star': null,
    'Parallelogram': null,
    'Dog’s Head': null,
    'Horse’s Head': null,
    'Attachment': null,
    'One-Point Jump': null,
    'Big Bulge': null,
    'Small Knight': null,
    'Two-Point Jump': null,
    'Large Knight': null,
    'Shoulder Hit': null,
    'Diagonal Jump': null,
    '4-4 Point': null,
    'Pass': null,
    'Take': null,
    'Atari': null,
    'Suicide': null,
    'Fill': null,
    'Connect': null,
    'Tengen': null,
    'Hoshi': null
  }
}
