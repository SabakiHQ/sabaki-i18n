module.exports = {
  'menu.file': {
    'New Window': 'Nueva &Ventana',
    'File': '&Archivo',
    'New': '&Nuevo',
    'Open…': '&Abrir…',
    'Save': '&Guardar',
    'Save As…': 'Guardar &Como…',
    'Clipboard': 'P&ortapapeles',
    'Load SGF': 'Cargar SGF',
    'Copy SGF': 'Copiar SGF',
    'Copy ASCII Diagram': 'Copiar Diagrama ASCII',
    'Game Info': '&Información de la Partida',
    'Manage Games…': 'A&dministrar Partidas…',
    'Preferences…': '&Preferencias…',
    'Quit': null
  },
  'updater': {
    'Download Update': 'Descargar Actualización',
    'View Changelog': 'Ver Registro de Cambios',
    'Not Now': 'Ahora No',
    '${appName} v${version} is available now.': p =>
      `${p.appName} v${p.version} está ahora disponible.`,
    'OK': 'OK',
    'No updates available': 'No hay actualizaciones disponibles',
    '${appName} v${version} is the latest version.': p =>
      `${p.appName} v${p.version} es la última versión.`
  },
  'exception': {
    '${appName} v${version}': p => `${p.appName} v${p.version}`,
    'Something weird happened. ${appName} will shut itself down. If possible, please report this on ${appName}’s repository on GitHub.': p =>
      `Ha ocurrido algo extraño. ${p.appName} se cerrará ahora. Si es posible, por favor reporte este problema en el repositorio de GitHub de ${p.appName}.`
  },
  'menu.play': {
    'Play': '&Jugar',
    'Toggle Player': 'Conmutar &Jugador',
    'Select Point': '&Seleccionar Punto',
    'Enter a coordinate to select a point':
      'Ingrese una coordenada para seleccionar un punto',
    'Pass': '&Pasar',
    'Resign': '&Abandonar',
    'Estimate': '&Estimar',
    'Score': '&Conteo'
  },
  'menu.edit': {
    'Edit': 'Editar',
    'Undo': 'Deshacer',
    'Redo': 'Rehacer',
    'Toggle Edit Mode': 'Conmutar Modo de Edición',
    'Select Tool': 'Seleccionar Herramienta',
    'Stone Tool': 'Herramienta de Colocación de Piedras',
    'Cross Tool': 'Herramienta de Cruz',
    'Triangle Tool': 'Herramienta de Triángulo',
    'Square Tool': 'Herramienta de Cuadrado',
    'Circle Tool': 'Herramienta de Círculo',
    'Line Tool': 'Herramienta de Línea',
    'Arrow Tool': 'Herramienta de Flecha',
    'Label Tool': 'Herramienta de Letra',
    'Number Tool': 'Herramienta de Número',
    'Copy Variation': 'Copiar Variante',
    'Cut Variation': 'Cortar Variante',
    'Paste Variation': 'Pegar Variante',
    'Make Main Variation': 'Transformar en Variante Principal',
    'Shift Left': 'Mover Variante hacia la Izquierda',
    'Shift Right': 'Mover Variante hacia la Derecha',
    'Flatten': 'Aplanar',
    'Remove Node': 'Eliminar Nodo',
    'Remove Other Variations': 'Eliminar las Demás Variantes',
    'Annotate': 'Anotar',
    'Toggle Show Comments': 'Conmutar Mostrar Comentarios'
  },
  'menu.find': {
    'Find': '&Buscar',
    'Toggle Find Mode': 'Conmutar Modo de Búsqueda',
    'Find Next': 'Buscar Siguiente',
    'Find Previous': 'Buscar Anterior',
    'Toggle Hotspot': 'Conmutar Punto Clave',
    'Jump to Next Hotspot': 'Saltar al Punto Clave Siguiente',
    'Jump to Previous Hotspot': 'Saltar al Punto Clave Anterior'
  },
  'menu.navigation': {
    'Navigation': '&Navegación',
    'Back': 'Atrás',
    'Forward': 'Adelante',
    'Go to Previous Fork': 'Ir a la Bifurcación Anterior',
    'Go to Next Fork': 'Ir a la Bifurcación Siguiente',
    'Go to Previous Comment': 'Ir al Comentario Anterior',
    'Go to Next Comment': 'Ir al Comentario Siguiente',
    'Go to Beginning': 'Ir al Comienzo',
    'Go to End': 'Ir al Final',
    'Go to Main Variation': 'Ir a la Variante Principal',
    'Go to Previous Variation': 'Ir a la Variante Anterior',
    'Go to Next Variation': 'Ir a la Variante Siguiente',
    'Go to Move Number': 'Ir a un número de Jugada',
    'Enter a move number to go to':
      'Ingrese el número de jugada al que desea ir',
    'Go to Next Game': 'Ir a la Partida Siguiente',
    'Go to Previous Game': 'Ir a la Partida Anterior'
  },
  'menu.engines': {
    'Engines': '&Motores',
    'Show Engines Sidebar': 'Mostrar Barra Lateral de Motores',
    'Toggle Analysis': 'Conmutar &Análisis',
    'None of the attached engines support analysis.':
      'No hay motores conectados que soporten análisis.',
    'Start Engine vs. Engine Game': 'Comenzar Partida de Motor vs. Motor',
    'Stop Engine vs. Engine Game': 'Finalizar Partida de Motor vs. Motor',
    'Generate Move': 'Generar Jugada',
    'Please assign an engine to the player first.':
      'Por favor asigne un motor al jugador primero.',
    '(Unnamed Engine)': '(Motor Sin Nombre)',
    'Manage Engines…': 'Administrar Motores…',
    'Clear Console': 'Limpiar Consola'
  },
  'menu.tools': {
    'Tools': '&Herramientas',
    'Toggle Autoplay Mode': 'Conmutar Modo de Reproducción',
    'Toggle Guess Mode': 'Conmutar Modo de Adivinanza',
    'Clean Markup…': 'Limpiar Marcas…',
    'Edit SGF Properties…': 'Editar Propiedades del SGF…',
    'Rotate Anticlockwise': 'Rotar en Sentido Antihorario',
    'Rotate Clockwise': 'Rotar en Sentido Horario',
    'Flip Horizontally': 'Espejar Horizontalmente',
    'Flip Vertically': 'Espejar Verticalmente',
    'Invert Colors': 'Invertir Colores',
    'Reset': 'Restablecer'
  },
  'menu.view': {
    'View': '&Ver',
    'Toggle Menu Bar': 'Conmutar Barra de Menú',
    'Toggle Full Screen': 'Conmutar Pantalla Completa',
    'Show Coordinates': 'Mostrar Coordenadas',
    'Don’t Show': 'No Mostrar',
    'A1 (Default)': 'A1 (Por Defecto)',
    '1-1': '1-1',
    'Relative': 'Relativas',
    'Show Move Numbers': 'Mostrar Números de Jugadas',
    'Show Move Colorization': 'Mostrar Colorización de Jugadas',
    'Show Next Moves': 'Mostrar Jugadas Siguientes',
    'Show Sibling Variations': 'Mostrar Variantes',
    'Show Heatmap': 'Mostrar Mapa de Calor',
    'Show Win Rate': 'Mostrar Porcentaje de Victoria',
    'Show Score Lead': 'Mostrar Ventaja de Territorio',
    'Show Winrate Graph': 'Mostrar Gráfico de Porcentajes de Victoria',
    'Show Game Tree': 'Mostrar Árbol de la Partida',
    'Show Comments': 'Mostrar Comentarios',
    'Zoom': 'Escala',
    'Increase': 'Aumentar',
    'Decrease': 'Reducir',
    'Reset': 'Restablecer',
    'Transform Board': 'Transformar Tablero'
  },
  'menu.help': {
    'Help': 'A&yuda',
    '${appName} v${version}': p => `${p.appName} v${p.version}`,
    'Check for Updates': 'Buscar Actualizaciones',
    'GitHub Repository': 'Repositorio GitHub',
    'Report Issue': 'Reportar Problema'
  },
  'menu.developer': {
    'Developer': '&Desarrollador',
    'Open Settings Folder': 'Abrir Directorio de Configuración',
    'Toggle Developer Tools': 'Conmutar Herramientas de Desarrollador',
    'Load Language File…': 'Cargar Archivo de Idioma…',
    'A language file is basically a JavaScript file and can be used to execute arbitrary code on your computer.\n\nIt can be extremely dangerous, so it is recommended to only load language files from authors you trust.':
      'Un archivo de Idioma es básicamente un archivo de JavaScript que puede ser usado para ejecutar código arbitrario en su computadora.\n\nEsto puede ser extremadamente peligroso, por lo tanto es recomendable cargar únicamente archivos de idioma de autores en quienes usted confía.',
    'I understand': 'Entiendo',
    'JavaScript Files': 'Archivos JavaScript',
    'Unload Language File': 'Quitar Archivo de Idioma'
  },
  'menu.macos': {
    'Text': 'Texto'
  },
  'App': {
    'Press Esc to exit full screen mode':
      'Presione Esc para salir del modo de pantalla completa',
    'Press Alt to show menu bar': 'Presione Alt para mostrar la barra de menú'
  },
  'ContentDisplay': {
    'Jump to Move Number': 'Saltar a Número de Jugada'
  },
  'dialog': {
    'OK': 'OK'
  },
  'EngineSyncer': {
    'GTP engines don’t support invalid board positions.':
      'Los motores GTP no soportan posiciones inválidas.',
    'GTP engines only support board sizes that don’t exceed ${length}.': p =>
      `Los motores GTP únicamente soportan tamaños de tablero que no superen ${p.length}.`,
    'Current board arrangement can’t be recreated on the GTP engine.':
      'El estado actual del tablero no puede ser recreado en el motor GTP.',
    'GTP engine can’t be synced to current state.':
      'El motor GTP no es capaz de sincronizarse con el estado actual.'
  },
  'gtplogger': {
    'You have an invalid log folder for GTP console logging in your settings.\n\nPlease make sure the log directory is valid and writable, or disable GTP console logging.':
      'Usted posee un directorio de registro de consola GTP inválido en sus preferencias.\n\nPor favor asegúrese que el directorio de registro sea válido y que usted tiene permisos de escritura en el mismo, o desactive el registro de consola GTP.'
  },
  'sabaki.window': {
    'Game ${gameNumber}': p => `Partida ${p.gameNumber}`
  },
  'sabaki.file': {
    'All Files': 'Todos los Archivos',
    'This file is unreadable.': 'Este archivo no puede ser leído.',
    'Your changes will be lost if you close this file without saving.':
      'Sus cambios se perderán si usted cierra este archivo sin guardarlo.',
    'Save': 'Guardar',
    'Don’t Save': 'No Guardar',
    'Cancel': 'Cancelar',
    'This file has been changed outside of ${appName}.\nDo you want to reload the file? Your changes will be lost.': p =>
      `Este archivo fue modificado fuera de ${p.appName}.\n¿Desea recargar el archivo? Los cambios realizados aquí serán perdidos.`,
    'Reload': 'Recargar',
    'Don’t Reload': 'No recargar'
  },
  'sabaki.play': {
    'Edit Label': 'Editar Etiqueta',
    'Enter label text': 'Ingresar Texto de la Etiqueta',
    'You are about to play a move which repeats a previous board position.\nThis is invalid in some rulesets.':
      'Usted hará una jugada que repite una posición pasada del tablero.\nEsto es inválido en ciertos reglamentos.',
    'Play Anyway': 'Jugar de todas maneras',
    'Don’t Play': 'No jugar',
    'You are about to play a suicide move.\nThis is invalid in some rulesets.':
      'Usted hará una jugada suicida.\nEsto es inválido en ciertos reglamentos.'
  },
  'sabaki.engine': {
    'Connection Failed': 'Conexión Fallida',
    '${engine} has failed to generate a move.': p =>
      `${p.engine} ha fallado en generar una jugada.`,
    '${engine} has resigned.': p => `${p.engine} abandona.`,
    'Please attach one or more engines first.':
      'Por favor conecte uno o más motores primero.',
    'The selected engine does not support analysis.':
      'El motor seleccionado no soporta análisis.'
  },
  'sabaki.node': {
    'Do you really want to remove this node?':
      '¿Realmente desea eliminar este nodo?',
    'Remove Node': 'Eliminar Nodo',
    'Cancel': 'Cancelar',
    'Do you really want to remove all other variations?':
      '¿Realmente desea eliminar todas las demás variantes?',
    'Remove Variations': 'Eliminar Variantes'
  },
  'menu.comment': {
    'Clear Annotations': 'Borrar Anotaciones',
    'Good for Black': 'Bueno para Negro',
    'Unclear Position': 'Posición poco clara',
    'Even Position': 'Posición igualada',
    'Good for White': 'Bueno para Blanco',
    'Good Move': 'Buena Jugada',
    'Interesting Move': 'Jugada Interesante',
    'Doubtful Move': 'Jugada Dudosa',
    'Bad Move': 'Mala Jugada',
    'Hotspot': 'Punto Clave'
  },
  'menu.variation': {
    'Add Variation': 'Añadir Variante',
    'The root node cannot have sibling nodes.':
      'El nodo raíz no puede tener nodos hermanos.'
  },
  'menu.engineAction': {
    'Start': 'Iniciar',
    'Stop': 'Detener',
    'Detach': 'Desconectar',
    'Synchronize': 'Sincronizar',
    'Generate Move': 'Generar Jugada',
    'Set as Analyzer': 'Establecer como Analizador',
    'Set as Black Player': 'Establecer como Jugador Negro',
    'Set as White Player': 'Establecer como Jugador Blanco',
    'Go to Engine': 'Ir al Motor'
  },
  'AutoplayBar': {
    'sec per move': 'segundos por jugada'
  },
  'EditBar': {
    'Stone Tool': 'Herramienta de Colocación de Piedras',
    'Cross Tool': 'Herramienta de Cruz',
    'Triangle Tool': 'Herramienta de Triángulo',
    'Square Tool': 'Herramienta de Cuadrado',
    'Circle Tool': 'Herramienta de Círculo',
    'Line Tool': 'Herramienta de Línea',
    'Arrow Tool': 'Herramienta de Flecha',
    'Label Tool': 'Herramienta de Letra',
    'Number Tool': 'Herramienta de Número'
  },
  'FindBar': {
    'Find': 'Buscar',
    'Next': 'Siguiente',
    'Previous': 'Anterior'
  },
  'GuessBar': {
    'Click on the board to guess the next move.':
      'haga clic en el tablero para adivinar la jugada siguiente.'
  },
  'PlayBar': {
    'Pass': 'Pasar',
    'Resign': 'Abandonar',
    'Estimate': 'Estimar',
    'Score': 'Conteo',
    'Edit': 'Editar',
    'Find': 'Buscar',
    'Info': 'Información',
    'Hotspot': 'Punto Clave',
    'Engine': 'Motor',
    'Black': 'Negro',
    'Change Player': 'Cambiar Jugador',
    'White to play': 'Juega Blanco',
    'Black to play': 'Juega Negro',
    'White': 'Blanco'
  },
  'ScoringBar': {
    'Details': 'Detalles',
    'Draw': 'Empate',
    'Please select dead stones.': 'Por favor seleccione las piedras muertas.',
    'Toggle group status.': 'Conmutar el estado del grupo.'
  },
  'AdvancedPropertiesDrawer': {
    'Remove': 'Eliminar',
    'Enter property name': 'Ingresar el nombre de la propiedad',
    'This property has been blocked.': 'Esta propiedad ha sido bloqueada.',
    'Add': 'Añadir',
    'Close': 'Cerrar'
  },
  'CleanMarkupDrawer': {
    'From Current Position': 'Desde la Posición Actual',
    'From Entire Game': 'Toda la Partida',
    'Clean Markup': 'Limpiar Anotaciones',
    'Cross markers': 'Marcas de Cruz',
    'Triangle markers': 'Marcas de Triángulo',
    'Square markers': 'Marcas de Cuadrado',
    'Circle markers': 'Marcas de Círculo',
    'Line markers': 'Marcas de Línea',
    'Arrow markers': 'Marcas de Flecha',
    'Label markers': 'Marcas de Texto',
    'Comments': 'Comentarios',
    'Annotations': 'Anotaciones',
    'Hotspots markers': 'Marcas de Puntos Clave',
    'Winrate data': 'Datos de Porcentajes de Victoria',
    'Remove': 'Eliminar',
    'Close': 'Cerrar'
  },
  'GameChooserDrawer': {
    'Black': 'Negro',
    'White': 'Blanco',
    'Remove Game': 'Eliminar Partida',
    'Do you really want to remove this game permanently?':
      '¿Realmente desea eliminar esta partida permanentemente?',
    'Cancel': 'Cancelar',
    'Remove Other Games': 'Eliminar todas las demás partidas',
    'Do you really want to remove all other games permanently?':
      '¿Realmente desea eliminar todas las demás partidas permanentemente?',
    'Remove Games': 'Eliminar Partidas',
    'Add New Game': 'Añadir Nueva Partida',
    'Add Existing Files…': 'Añadir Archivos Existentes…',
    'All Files': 'Todos los Archivos',
    'Some files are unreadable.': 'Algunos archivos no son legibles.',
    'Black Player': 'Jugador Negro',
    'White Player': 'Jugador Blanco',
    'Black Rank': 'Grado del Jugador Negro',
    'White Rank': 'Grado del Jugador Blanco',
    'Game Name': 'Nombre de la Partida',
    'Game Event': 'Evento',
    'Date': 'Fecha',
    'Number of Moves': 'Cantidad de Jugadas',
    'Reverse': 'Invertido',
    'Manage Games': 'Administrar Partidas',
    'Filter': 'Filtrar',
    'Add': 'Añadir',
    'Sort By': 'Ordenar Por',
    'Close': 'Cerrar'
  },
  'InfoDrawer': {
    'Manual': 'Manual',
    '(Unnamed Engine)': '(Motor Sin Nombre)',
    'Attach Engine': 'Conectar Motor',
    'Manage Engines…': 'Administrar Motores…',
    'Previous Month': 'Mes Anterior',
    'Next Month': 'Mes Siguiente',
    'Rank': 'Grado',
    'Black': 'Negro',
    'Swap': 'Intercambiar',
    'White': 'Blanco',
    'Name': 'Nombre',
    '(Unnamed)': '(Sin Nombre)',
    'Event': 'Evento',
    'None': 'Ninguno',
    'Date': 'Fecha',
    'Comment': 'Comentario',
    'Result': 'Resultado',
    'Show': 'Mostrar',
    'Komi': 'Komi',
    'Handicap': 'Ventaja',
    'No stones': 'Sin piedras',
    '${stones} stones': p => `${p.stones} piedras`,
    'Board Size': 'Tamaño',
    'OK': 'OK',
    'Cancel': 'Cancelar'
  },
  'PreferencesDrawer': {
    'Please restart ${appName} to apply your language setting.': p =>
      `Por favor reinicie ${p.appName} para aplicar su preferencia de idioma.`,
    'Enable hardware acceleration if possible':
      'Activar aceleración de hardware si es posible',
    'Check for updates at startup': 'Buscar actualizaciones al inicio',
    'Enable sounds': 'Activar sonidos',
    'Jump to end after loading file':
      'Saltar al final de la partida al cargar un archivo',
    'Fuzzy stone placement': 'Colocación de piedras difusa',
    'Animate fuzzy placement': 'Animar colocación difusa',
    'Variation Replay Mode:': 'Modo de Reproducción de Variantes',
    'Disabled': 'Desactivado',
    'Move by Move': 'Jugada por Jugada',
    'Instantly': 'Instantáneo',
    'Language:': 'Idioma',
    'Game Tree Style:': 'Estilo del Árbol de la Partida',
    'Compact': 'Compacto',
    'Spacious': 'Espacioso',
    'Big': 'Grande',
    'Show automatic move titles': 'Mostrar títulos automáticos de jugadas',
    'Show ko warning': 'Mostrar advertencia de ko',
    'Show suicide warning': 'Mostrar advertencia de suicidio',
    'Show remove node warning': 'Mostrar advertencia al eliminar nodo',
    'Show remove other variations warning':
      'Mostrar advertencia al eliminar las demás variantes',
    'Offer to reload file if changed externally':
      'Ofrecer recargar un archivo si cambia externamente',
    'Click last played stone to remove':
      'Hacer clic en la última jugada para eliminarla',
    'Invert winrate graph': 'Invertir gráfico de porcentajes de victoria',
    'Path': 'Ruta',
    'Browse…': 'Mostrar…',
    'Directory not found': 'Directorio no encontrado',
    'File not found': 'Archivo no encontrado',
    'Do you really want to uninstall this theme?':
      '¿Realmente desea desinstalar este tema?',
    'Uninstall': 'Desinstalar',
    'Cancel': 'Cancelar',
    'Uninstallation failed.': 'Desinstalación fallida.',
    'Sabaki Themes': 'Temas de Sabaki',
    'Installation failed.': 'Instalación fallida.',
    'Custom Images': 'Imágenes Personalizadas',
    'Black stone image:': 'Piedras negras:',
    'White stone image:': 'Piedras blancas:',
    'Board image:': 'Imagen del tablero:',
    'Background image:': 'Imagen de fondo',
    'Current Theme': 'Tema Actual',
    'Default': 'Por Defecto',
    'Install Theme…': 'Instalar Tema…',
    'Get more themes…': 'Obtener más temas…',
    'by ${author}': p => `por ${p.author}`,
    'Homepage': 'Sitio Web',
    'All Files': 'Todos los Archivos',
    'Remove': 'Eliminar',
    '(Unnamed Engine)': '(Motor Sin Nombre)',
    'No arguments': 'Sin argumentos',
    'Initial commands (;-separated)': 'Comandos iniciales (separados por ;)',
    'Enable GTP logging to directory:':
      'Activar registro de GTP en directorio:',
    'Add': 'Añadir',
    'General': 'General',
    'Themes': 'Temas',
    'Engines': 'Motores',
    'Close': 'Cerrar'
  },
  'ScoreDrawer': {
    'Black': 'Negro',
    'White': 'Blanco',
    'Draw': 'Empate',
    'Score': 'Conteo',
    'Area': 'Área',
    'Territory': 'Territorio',
    'Captures': 'Capturas',
    'Komi': 'Komi',
    'Handicap': 'Ventaja',
    'Total': 'Total',
    'Result:': 'Resultado',
    'Update Result': 'Actualizar Resultado',
    'Close': 'Cerrar'
  },
  'CommentBox': {
    'Result: ${result}': p => `Resultado: ${p.result}`,
    '${a}-${b} Point': p => `Punto ${p.a}-${p.b}`,
    'View article on Sensei’s Library': 'Ver artículo en Sensei’s Library',
    'Bad move': 'Mala jugada',
    'Very bad move': 'Muy mala jugada',
    'Doubtful move': 'Jugada dudosa',
    'Very doubtful move': 'Jugada muy dudosa',
    'Interesting move': 'Jugada interesante',
    'Very interesting move': 'Jugada muy interesante',
    'Good move': 'Buena jugada',
    'Very good move': 'Muy buena jugada',
    'Good for White': 'Bueno para Blanco',
    'Very good for White': 'Muy bueno para Blanco',
    'Even position': 'Posición igualada',
    'Very even position': 'Posición muy igualada',
    'Good for Black': 'Bueno para Negro',
    'Very good for Black': 'Muy bueno para Negro',
    'Unclear position': 'Posición poco clara',
    'Very unclear position': 'Posición muy poco clara',
    'Edit': 'Editar',
    'Title': 'Título',
    'Comment': 'Comentario'
  },
  'PeerList': {
    'Running': 'Ejecutándose',
    'Stopped': 'Detenido',
    'Analyzer': 'Analizador',
    'Plays as Black': 'Juega como Negro',
    'Plays as White': 'Juega como Blanco',
    'Attach Engine…': 'Conectar Motor…',
    'Start Engine vs. Engine Game': 'Iniciar Partida de Motor vs. Motor',
    'Stop Engine vs. Engine Game': 'Detener Partida de Motor vs. Motor'
  },
  'WinrateGraph': {
    'Black': 'Negro',
    'White': 'Blanco',
    'Black Winrate:': 'Porcentaje de Victoria para Negro',
    'White Winrate:': 'Porcentaje de Victoria para Blanco'
  },
  'fileformats': {
    'Tygem GIB': 'GIB de Tygem',
    'Game Records': 'Registros de Partidas',
    'wBaduk NGF': 'NGF de wBaduk',
    'Smart Game Format': 'Smart Game Format (SGF)',
    'PandaNET UGF': null
  },
  'boardmatcher': {
    'Low Chinese Opening': 'Apertura China Baja',
    'High Chinese Opening': 'Apertura China Alta',
    'Orthodox Opening': 'Apertura Ortodoxa',
    'Enclosure Opening': 'Apertura con Shimari',
    'Kobayashi Opening': 'Apertura Kobayashi',
    'Small Chinese Opening': 'Apertura China Mini',
    'Micro Chinese Opening': 'Apertura China Micro',
    'Sanrensei Opening': 'Apertura Sanrensei',
    'Nirensei Opening': 'Apertura Nirensei',
    'Shūsaku Opening': 'Apertura Shūsaku',
    'Low Approach': 'Acercamiento Bajo',
    'High Approach': 'Acercamiento Alto',
    'Low Enclosure': 'Shimari Bajo',
    'High Enclosure': 'Shimari Alto',
    'Mouth Shape': 'Forma de Boca',
    'Table Shape': 'Forma de Mesa',
    'Tippy Table': 'Mesa Tippy',
    'Bamboo Joint': 'Unión de Bambú',
    'Trapezium': 'Trapecio',
    'Diamond': 'Diamante',
    'Tiger’s Mouth': 'Boca de Tigre',
    'Empty Triangle': 'Triángulo Vacío',
    'Turn': 'Giro',
    'Stretch': 'Retraso',
    'Diagonal': 'Diagonal',
    'Wedge': 'Cuña',
    'Hane': 'Hane',
    'Cut': 'Corte',
    'Square': 'Cuadrado',
    'Throwing Star': 'Shuriken',
    'Parallelogram': 'Paralelogramo',
    'Dog’s Head': 'Cabeza de Perro',
    'Horse’s Head': 'Cabeza de Caballo',
    'Attachment': 'Contacto',
    'One-Point Jump': 'Salto de Un Punto',
    'Big Bulge': 'Masa Grande',
    'Small Knight': 'Caballo Corto',
    'Two-Point Jump': 'Salto de Dos Puntos',
    'Large Knight': 'Caballo Largo',
    '3-3 Point Invasion': null,
    'Shoulder Hit': 'Golpe al Hombro',
    'Diagonal Jump': 'Salto en Diagonal',
    '3-4 Point': null,
    '4-4 Point': 'Punto 4-4',
    '3-3 Point': 'Punto 3-3',
    '3-5 Point': null,
    '4-5 Point': null,
    '6-3 Point': null,
    '6-4 Point': null,
    '5-5 Point': null,
    'Pass': 'Paso',
    'Take': 'Captura',
    'Atari': 'Atari',
    'Suicide': 'Suicidio',
    'Fill': 'Relleno',
    'Connect': 'Conexión',
    'Tengen': 'Tengen',
    'Hoshi': 'Hoshi'
  }
}
