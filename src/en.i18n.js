module.exports = {
  'menu.file': {
    'New Window': 'New &Window',
    'File': '&File',
    'New': '&New',
    'Open…': '&Open…',
    'Save': '&Save',
    'Save As…': 'Sa&ve As…',
    'Clipboard': '&Clipboard',
    'Load SGF': '&Load SGF',
    'Copy SGF': '&Copy SGF',
    'Copy ASCII Diagram': 'Copy &ASCII Diagram',
    'Game Info': 'Game &Info',
    'Manage Games…': '&Manage Games…',
    'Preferences…': '&Preferences…'
  },
  'updater': {
    'Download Update': 'Download Update',
    'View Changelog': 'View Changelog',
    'Not Now': 'Not Now',
    '${appName} v${version} is available now.': p =>
      `${p.appName} v${p.version} is available now.`,
    'OK': 'OK',
    'No updates available': 'No updates available',
    '${appName} v${version} is the latest version.': p =>
      `${p.appName} v${p.version} is the latest version.`
  },
  'exception': {
    '${appName} v${version}': p => `${p.appName} v${p.version}`,
    'Something weird happened. ${appName} will shut itself down. If possible, please report this on ${appName}’s repository on GitHub.': p =>
      [
        `Something weird happened. ${p.appName} will shut itself down.`,
        `If possible, please report this on ${p.appName}’s repository on GitHub.`
      ].join(' ')
  },
  'menu.play': {
    'Play': '&Play',
    'Toggle Player': '&Toggle Player',
    'Select Point': 'Se&lect Point',
    'Enter a coordinate to select a point':
      'Enter a coordinate to select a point',
    'Pass': '&Pass',
    'Resign': 'Resig&n',
    'Estimate': '&Estimate',
    'Score': 'Sco&re'
  },
  'menu.edit': {
    'Edit': '&Edit',
    'Undo': '&Undo',
    'Redo': 'Re&do',
    'Toggle Edit Mode': 'Toggle &Edit Mode',
    'Select Tool': '&Select Tool',
    'Stone Tool': '&Stone Tool',
    'Cross Tool': '&Cross Tool',
    'Triangle Tool': '&Triangle Tool',
    'Square Tool': 'S&quare Tool',
    'Circle Tool': 'C&ircle Tool',
    'Line Tool': '&Line Tool',
    'Arrow Tool': '&Arrow Tool',
    'Label Tool': 'La&bel Tool',
    'Number Tool': '&Number Tool',
    'Copy Variation': '&Copy Variation',
    'Cut Variation': 'Cu&t Variation',
    'Paste Variation': '&Paste Variation',
    'Make Main Variation': 'Make Main &Variation',
    'Shift Left': 'Shift &Left',
    'Shift Right': 'Shift Ri&ght',
    'Flatten': '&Flatten',
    'Remove Node': '&Remove Node',
    'Remove Other Variations': 'Remove &Other Variations'
  },
  'menu.find': {
    'Find': 'Fin&d',
    'Toggle Find Mode': 'Toggle &Find Mode',
    'Find Next': 'Find &Next',
    'Find Previous': 'Find &Previous',
    'Toggle Hotspot': 'Toggle &Hotspot',
    'Jump to Next Hotspot': 'Jump to Ne&xt Hotspot',
    'Jump to Previous Hotspot': 'Jump to Pre&vious Hotspot'
  },
  'menu.navigation': {
    'Navigation': '&Navigation',
    'Back': '&Back',
    'Forward': '&Forward',
    'Go to Previous Fork': 'Go to &Previous Fork',
    'Go to Next Fork': 'Go to &Next Fork',
    'Go to Previous Comment': 'Go to Previous Commen&t',
    'Go to Next Comment': 'Go to Next &Comment',
    'Go to Beginning': 'Go to Be&ginning',
    'Go to End': 'Go to &End',
    'Go to Main Variation': 'Go to &Main Variation',
    'Go to Previous Variation': 'Go to Previous &Variation',
    'Go to Next Variation': 'Go to Next Va&riation',
    'Go to Move Number': 'Go to Move N&umber',
    'Enter a move number to go to': 'Enter a move number to go to',
    'Go to Next Game': 'Go to Ne&xt Game',
    'Go to Previous Game': 'Go to Previou&s Game'
  },
  'menu.engines': {
    'Engines': 'Eng&ines',
    'Show Engines Sidebar': 'Show &Engines Sidebar',
    'Toggle Analysis': 'Toggle &Analysis',
    'None of the attached engines support analysis.':
      'None of the attached engines support analysis.',
    'Start Engine vs. Engine Game': 'Start Engine vs. Engine &Game',
    'Stop Engine vs. Engine Game': 'Stop Engine vs. Engine &Game',
    'Generate Move': 'Generate &Move',
    'Please assign an engine to the player first.':
      'Please assign an engine to the player first.',
    'Manage Engines…': 'Manage &Engines…',
    'Clear Console': '&Clear Console'
  },
  'menu.tools': {
    'Tools': '&Tools',
    'Toggle Autoplay Mode': 'Toggle Auto&play Mode',
    'Toggle Guess Mode': 'Toggle &Guess Mode',
    'Clean Markup…': 'Clean &Markup…',
    'Edit SGF Properties…': '&Edit SGF Properties…',
    'Rotate Anticlockwise': 'Rotate &Anticlockwise',
    'Rotate Clockwise': 'Rotate &Clockwise',
    'Flip Horizontally': '&Flip Horizontally',
    'Flip Vertically': 'Flip &Vertically',
    'Invert Colors': '&Invert Colors',
    'Reset': '&Reset'
  },
  'menu.view': {
    'View': '&View',
    'Toggle Menu Bar': 'Toggle Menu &Bar',
    'Toggle Full Screen': 'Toggle &Full Screen',
    'Show Coordinates': 'Show &Coordinates',
    'Show Move Numbers': 'Show Move N&umbers',
    'Show Move Colorization': 'Show Move Colori&zation',
    'Show Next Moves': 'Show &Next Moves',
    'Show Sibling Variations': 'Show &Sibling Variations',
    'Show Winrate Graph': 'Show &Winrate Graph',
    'Show Game Tree': 'Show Game &Tree',
    'Show Comments': 'Show Co&mments',
    'Zoom': 'Z&oom',
    'Increase': '&Increase',
    'Decrease': '&Decrease',
    'Reset': '&Reset',
    'Transform Board': 'T&ransform Board'
  },
  'menu.help': {
    'Help': '&Help',
    '${appName} v${version}': p => `${p.appName} v${p.version}`,
    'Check for Updates': 'Check for &Updates',
    'GitHub Repository': 'GitHub &Repository',
    'Report Issue': 'Report &Issue'
  },
  'menu.developer': {
    'Developer': 'Devel&oper',
    'Open Settings Folder': 'Open Settings &Folder',
    'Toggle Developer Tools': 'Toggle &Developer Tools',
    'Load Language File…': 'Load &Language File…',
    'A language file is basically a JavaScript file and can be used to execute arbitrary code on your computer.\n\nIt can be extremely dangerous, so it is recommended to only load language files from authors you trust.':
      'A language file is basically a JavaScript file and can be used to execute arbitrary code on your computer.\n\nIt can be extremely dangerous, so it is recommended to only load language files from authors you trust.',
    'I understand': 'I understand',
    'JavaScript Files': 'JavaScript Files',
    'Unload Language File': '&Unload Language File'
  },
  'menu.macos': {
    'Text': 'Text'
  },
  'App': {
    'Press Esc to exit full screen mode': 'Press Esc to exit full screen mode',
    'Press Alt to show menu bar': 'Press Alt to show menu bar'
  },
  'ContentDisplay': {
    'Jump to Move Number': 'Jump to Move Number'
  },
  'dialog': {
    'OK': 'OK'
  },
  'EngineSyncer': {
    'GTP engines don’t support invalid board positions.':
      'GTP engines don’t support invalid board positions.',
    'GTP engines only support board sizes that don’t exceed ${length}.': p =>
      `GTP engines only support board sizes that don’t exceed ${p.length}.`,
    'Current board arrangement can’t be recreated on the GTP engine.':
      'Current board arrangement can’t be recreated on the GTP engine.',
    'GTP engine can’t be synced to current state.':
      'GTP engine can’t be synced to current state.'
  },
  'gtplogger': {
    'You have an invalid log folder for GTP console logging in your settings.\n\nPlease make sure the log directory is valid and writable, or disable GTP console logging.':
      'You have an invalid log folder for GTP console logging in your settings.\n\nPlease make sure the log directory is valid and writable, or disable GTP console logging.'
  },
  'sabaki.window': {
    'Game ${gameNumber}': p => `Game ${p.gameNumber}`
  },
  'sabaki.file': {
    'All Files': 'All Files',
    'This file is unreadable.': 'This file is unreadable.',
    'Your changes will be lost if you close this file without saving.':
      'Your changes will be lost if you close this file without saving.',
    'Save': 'Save',
    'Don’t Save': 'Don’t Save',
    'Cancel': 'Cancel',
    'This file has been changed outside of ${appName}.\nDo you want to reload the file? Your changes will be lost.': p =>
      [
        `This file has been changed outside of ${p.appName}.`,
        'Do you want to reload the file? Your changes will be lost.'
      ].join('\n'),
    'Reload': 'Reload',
    'Don’t Reload': 'Don’t Reload'
  },
  'sabaki.play': {
    'Edit Label': '&Edit Label',
    'Enter label text': 'Enter label text',
    'You are about to play a move which repeats a previous board position.\nThis is invalid in some rulesets.':
      'You are about to play a move which repeats a previous board position.\nThis is invalid in some rulesets.',
    'Play Anyway': 'Play Anyway',
    'Don’t Play': 'Don’t Play',
    'You are about to play a suicide move.\nThis is invalid in some rulesets.':
      'You are about to play a suicide move.\nThis is invalid in some rulesets.'
  },
  'sabaki.engine': {
    'Connection Failed': 'Connection Failed',
    '${engine} has failed to generate a move.': p =>
      `${p.engine} has failed to generate a move.`,
    '${engine} has resigned.': p => `${p.engine} has resigned.`,
    'Please attach one or more engines first.':
      'Please attach one or more engines first.',
    'The selected engine does not support analysis.':
      'The selected engine does not support analysis.'
  },
  'sabaki.node': {
    'Do you really want to remove this node?':
      'Do you really want to remove this node?',
    'Remove Node': 'Remove Node',
    'Cancel': 'Cancel',
    'Do you really want to remove all other variations?':
      'Do you really want to remove all other variations?',
    'Remove Variations': 'Remove Variations'
  },
  'menu.comment': {
    'Clear Annotations': '&Clear Annotations',
    'Good for Black': 'Good for &Black',
    'Unclear Position': '&Unclear Position',
    'Even Position': '&Even Position',
    'Good for White': 'Good for &White',
    'Good Move': '&Good Move',
    'Interesting Move': '&Interesting Move',
    'Doubtful Move': '&Doubtful Move',
    'Bad Move': 'B&ad Move',
    'Hotspot': '&Hotspot'
  },
  'menu.variation': {
    'Add Variation': '&Add Variation',
    'The root node cannot have sibling nodes.':
      'The root node cannot have sibling nodes.'
  },
  'menu.engineAction': {
    'Start': '&Start',
    'Stop': '&Stop',
    'Detach': '&Detach',
    'Synchronize': 'S&ynchronize',
    'Generate Move': '&Generate Move',
    'Set as Analyzer': 'Set as &Analyzer',
    'Set as Black Player': 'Set as &Black Player',
    'Set as White Player': 'Set as &White Player',
    'Go to Engine': '&Go to Engine'
  },
  'AutoplayBar': {
    'sec per move': 'sec per move'
  },
  'EditBar': {
    'Stone Tool': 'Stone Tool',
    'Cross Tool': 'Cross Tool',
    'Triangle Tool': 'Triangle Tool',
    'Square Tool': 'Square Tool',
    'Circle Tool': 'Circle Tool',
    'Line Tool': 'Line Tool',
    'Arrow Tool': 'Arrow Tool',
    'Label Tool': 'Label Tool',
    'Number Tool': 'Number Tool'
  },
  'FindBar': {
    'Find': 'Find',
    'Next': 'Next',
    'Previous': 'Previous'
  },
  'GuessBar': {
    'Click on the board to guess the next move.':
      'Click on the board to guess the next move.'
  },
  'PlayBar': {
    'Pass': '&Pass',
    'Resign': '&Resign',
    'Estimate': 'Es&timate',
    'Score': '&Score',
    'Edit': '&Edit',
    'Find': '&Find',
    'Info': '&Info',
    'Hotspot': 'Hotspot',
    'Engine': 'Engine',
    'Black': 'Black',
    'Change Player': 'Change Player',
    'White to play': 'White to play',
    'Black to play': 'Black to play',
    'White': 'White'
  },
  'ScoringBar': {
    'Details': 'Details',
    'Draw': 'Draw',
    'Please select dead stones.': 'Please select dead stones.',
    'Toggle group status.': 'Toggle group status.'
  },
  'AdvancedPropertiesDrawer': {
    'Remove': 'Remove',
    'Enter property name': 'Enter property name',
    'This property has been blocked.': 'This property has been blocked.',
    'Add': 'Add',
    'Close': 'Close'
  },
  'CleanMarkupDrawer': {
    'From Current Position': 'From Current &Position',
    'From Entire Game': 'From Entire &Game',
    'Clean Markup': 'Clean Markup',
    'Cross markers': 'Cross markers',
    'Triangle markers': 'Triangle markers',
    'Square markers': 'Square markers',
    'Circle markers': 'Circle markers',
    'Line markers': 'Line markers',
    'Arrow markers': 'Arrow markers',
    'Label markers': 'Label markers',
    'Comments': 'Comments',
    'Annotations': 'Annotations',
    'Hotspots markers': 'Hotspots markers',
    'Winrate data': 'Winrate data',
    'Remove': 'Remove',
    'Close': 'Close'
  },
  'GameChooserDrawer': {
    'Black': 'Black',
    'White': 'White',
    'Remove Game': 'Remove Game',
    'Do you really want to remove this game permanently?':
      'Do you really want to remove this game permanently?',
    'Cancel': 'Cancel',
    'Remove Other Games': 'Remove &Other Games',
    'Do you really want to remove all other games permanently?':
      'Do you really want to remove all other games permanently?',
    'Remove Games': 'Remove Games',
    'Add New Game': 'Add &New Game',
    'Add Existing Files…': 'Add &Existing Files…',
    'All Files': 'All Files',
    'Some files are unreadable.': 'Some files are unreadable.',
    'Black Player': '&Black Player',
    'White Player': '&White Player',
    'Black Rank': 'Black R&ank',
    'White Rank': 'White Ran&k',
    'Game Name': 'Game &Name',
    'Game Event': 'Game &Event',
    'Date': '&Date',
    'Number of Moves': 'Number of &Moves',
    'Reverse': '&Reverse',
    'Manage Games': 'Manage Games',
    'Filter': 'Filter',
    'Add': 'Add',
    'Sort By': 'Sort By',
    'Close': 'Close'
  },
  'InfoDrawer': {
    'Manual': 'Manual',
    '(Unnamed Engine)': '(Unnamed Engine)',
    'Attach Engine': 'Attach Engine',
    'Manage Engines…': 'Manage Engines…',
    'Previous Month': 'Previous Month',
    'Next Month': 'Next Month',
    'January': 'January',
    'February': 'February',
    'March': 'March',
    'April': 'April',
    'May': 'May',
    'June': 'June',
    'July': 'July',
    'August': 'August',
    'September': 'September',
    'October': 'October',
    'November': 'November',
    'December': 'December',
    'Sunday': 'Sunday',
    'Monday': 'Monday',
    'Tuesday': 'Tuesday',
    'Wednesday': 'Wednesday',
    'Thursday': 'Thursday',
    'Friday': 'Friday',
    'Saturday': 'Saturday',
    'Sun': 'Sun',
    'Mon': 'Mon',
    'Tue': 'Tue',
    'Wed': 'Wed',
    'Thu': 'Thu',
    'Fri': 'Fri',
    'Sat': 'Sat',
    'Rank': 'Rank',
    'Black': 'Black',
    'Swap': 'Swap',
    'White': 'White',
    'Name': 'Name',
    '(Unnamed)': '(Unnamed)',
    'Event': 'Event',
    'None': 'None',
    'Date': 'Date',
    'Comment': 'Comment',
    'Result': 'Result',
    'Show': 'Show',
    'Komi': 'Komi',
    'Handicap': 'Handicap',
    'No stones': 'No stones',
    '${stones} stones': p => `${p.stones} stones`,
    'Board Size': 'Board Size',
    'OK': 'OK',
    'Cancel': 'Cancel'
  },
  'PreferencesDrawer': {
    'Enable hardware acceleration if possible':
      'Enable hardware acceleration if possible',
    'Check for updates at startup': 'Check for updates at startup',
    'Enable sounds': 'Enable sounds',
    'Jump to end after loading file': 'Jump to end after loading file',
    'Fuzzy stone placement': 'Fuzzy stone placement',
    'Animate fuzzy placement': 'Animate fuzzy placement',
    'Instantly play out analysis variations on board':
      'Instantly play out analysis variations on board',
    'Show automatic move titles': 'Show automatic move titles',
    'Show ko warning': 'Show ko warning',
    'Show suicide warning': 'Show suicide warning',
    'Show remove node warning': 'Show remove node warning',
    'Show remove other variations warning':
      'Show remove other variations warning',
    'Offer to reload file if changed externally':
      'Offer to reload file if changed externally',
    'Click last played stone to remove': 'Click last played stone to remove',
    'Invert winrate graph': 'Invert winrate graph',
    'Game Tree Style:': 'Game Tree Style:',
    'Compact': 'Compact',
    'Spacious': 'Spacious',
    'Big': 'Big',
    'Path': 'Path',
    'Browse…': 'Browse…',
    'Directory not found': 'Directory not found',
    'File not found': 'File not found',
    'Do you really want to uninstall this theme?':
      'Do you really want to uninstall this theme?',
    'Uninstall': 'Uninstall',
    'Cancel': 'Cancel',
    'Uninstallation failed.': 'Uninstallation failed.',
    'Sabaki Themes': 'Sabaki Themes',
    'Installation failed.': 'Installation failed.',
    'Custom Images': 'Custom Images',
    'Black stone image:': 'Black stone image:',
    'White stone image:': 'White stone image:',
    'Board image:': 'Board image:',
    'Background image:': 'Background image:',
    'Default': 'Default',
    'Install Theme…': 'Install Theme…',
    'Get more themes…': 'Get more themes…',
    'by ${author}': p => `by ${p.author}`,
    'Homepage': 'Homepage',
    'All Files': 'All Files',
    'Remove': 'Remove',
    '(Unnamed Engine)': '(Unnamed Engine)',
    'No arguments': 'No arguments',
    'Initial commands (;-separated)': 'Initial commands (;-separated)',
    'Enable GTP logging to directory:': 'Enable GTP logging to directory:',
    'Add': 'Add',
    'General': 'General',
    'Themes': 'Themes',
    'Engines': 'Engines',
    'Close': 'Close'
  },
  'ScoreDrawer': {
    'Black': 'Black',
    'White': 'White',
    'Draw': 'Draw',
    'Area': 'Area',
    'Territory': 'Territory',
    'Captures': 'Captures',
    'Komi': 'Komi',
    'Handicap': 'Handicap',
    'Total': 'Total',
    'Result:': 'Result:',
    'Update Result': 'Update Result',
    'Close': 'Close'
  },
  'CommentBox': {
    'Result: ${result}': p => `Result: ${p.result}`,
    '${a}-${b} Point': p => `${p.a}-${p.b} Point`,
    'View article on Sensei’s Library': 'View article on Sensei’s Library',
    'Bad move': 'Bad move',
    'Very bad move': 'Very bad move',
    'Doubtful move': 'Doubtful move',
    'Very doubtful move': 'Very doubtful move',
    'Interesting move': 'Interesting move',
    'Very interesting move': 'Very interesting move',
    'Good move': 'Good move',
    'Very good move': 'Very good move',
    'Good for White': 'Good for White',
    'Very good for White': 'Very good for White',
    'Even position': 'Even position',
    'Very even position': 'Very even position',
    'Good for Black': 'Good for Black',
    'Very good for Black': 'Very good for Black',
    'Unclear position': 'Unclear position',
    'Very unclear position': 'Very unclear position',
    'Edit': 'Edit',
    'Title': 'Title',
    'Comment': 'Comment'
  },
  'PeerList': {
    'Running': 'Running',
    'Stopped': 'Stopped',
    'Analyzer': 'Analyzer',
    'Plays as Black': 'Plays as Black',
    'Plays as White': 'Plays as White',
    'Attach Engine…': 'Attach Engine…',
    'Start Engine vs. Engine Game': 'Start Engine vs. Engine Game',
    'Stop Engine vs. Engine Game': 'Stop Engine vs. Engine Game'
  },
  'WinrateGraph': {
    'Black': 'Black',
    'White': 'White',
    'Black Winrate:': 'Black Winrate:',
    'White Winrate:': 'White Winrate:'
  },
  'fileformats': {
    'Tygem GIB': 'Tygem GIB',
    'Game Records': 'Game Records',
    'wBaduk NGF': 'wBaduk NGF',
    'Smart Game Format': 'Smart Game Format'
  },
  'boardmatcher': {
    'Low Chinese Opening': 'Low Chinese Opening',
    'High Chinese Opening': 'High Chinese Opening',
    'Orthodox Opening': 'Orthodox Opening',
    'Enclosure Opening': 'Enclosure Opening',
    'Kobayashi Opening': 'Kobayashi Opening',
    'Small Chinese Opening': 'Small Chinese Opening',
    'Micro Chinese Opening': 'Micro Chinese Opening',
    'Sanrensei Opening': 'Sanrensei Opening',
    'Nirensei Opening': 'Nirensei Opening',
    'Shūsaku Opening': 'Shūsaku Opening',
    '3-3 Point': '3-3 Point',
    'Low Approach': 'Low Approach',
    'High Approach': 'High Approach',
    'Low Enclosure': 'Low Enclosure',
    'High Enclosure': 'High Enclosure',
    'Mouth Shape': 'Mouth Shape',
    'Table Shape': 'Table Shape',
    'Tippy Table': 'Tippy Table',
    'Bamboo Joint': 'Bamboo Joint',
    'Trapezium': 'Trapezium',
    'Diamond': 'Diamond',
    'Tiger’s Mouth': 'Tiger’s Mouth',
    'Empty Triangle': 'Empty Triangle',
    'Turn': 'Turn',
    'Stretch': 'Stretch',
    'Diagonal': 'Diagonal',
    'Wedge': 'Wedge',
    'Hane': 'Hane',
    'Cut': 'Cut',
    'Square': 'Square',
    'Throwing Star': 'Throwing Star',
    'Parallelogram': 'Parallelogram',
    'Dog’s Head': 'Dog’s Head',
    'Horse’s Head': 'Horse’s Head',
    'Attachment': 'Attachment',
    'One-Point Jump': 'One-Point Jump',
    'Big Bulge': 'Big Bulge',
    'Small Knight': 'Small Knight',
    'Two-Point Jump': 'Two-Point Jump',
    'Large Knight': 'Large Knight',
    'Shoulder Hit': 'Shoulder Hit',
    'Diagonal Jump': 'Diagonal Jump',
    '4-4 Point': '4-4 Point'
  }
}
