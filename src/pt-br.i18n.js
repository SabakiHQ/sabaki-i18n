module.exports = {
  'menu.file': {
    'New Window': 'Nova Janela',
    'File': '&Arquivo',
    'New': '&Novo',
    'Open…': '&Abrir…',
    'Save': '&Salvar',
    'Save As…': '&Salvar como…',
    'Clipboard': '&Copiar',
    'Load SGF': '&Carregar SGF',
    'Copy SGF': '&Carregar SGF',
    'Copy ASCII Diagram': 'Copiar Diagrama &ASCII',
    'Game Info': '&Informações do Jogo',
    'Manage Games…': '&Gerenciar Jogos…',
    'Preferences…': '&Preferências…',
    'Quit': null
  },
  'updater': {
    'Download Update': 'Baixar Atualização',
    'View Changelog': 'Ver Log de Mudanças',
    'Not Now': 'Agora Não',
    '${appName} v${version} is available now.': p =>
      `${p.appName} v${p.version} está disponível agora.`,
    'OK': 'OK',
    'No updates available': 'Sem atualizações disponíveis',
    '${appName} v${version} is the latest version.': p =>
      `${p.appName} v${p.version} está na última versão.`
  },
  'exception': {
    '${appName} v${version}': p => `${p.appName} v${p.version}`,
    'Something weird happened. ${appName} will shut itself down. If possible, please report this on ${appName}’s repository on GitHub.': p =>
      [
        `Algo aconteceu. ${p.appName} vai precisar fechar agora.`,
        `Se possível, reporte o erro no repositório do ${p.appName} no GitHub.`
      ].join(' ')
  },
  'menu.play': {
    'Play': '&Jogar',
    'Toggle Player': '&Alternar Jogador',
    'Select Point': '$Selecionar Ponto',
    'Enter a coordinate to select a point':
      'Insira uma coordenada para selecionar um ponto',
    'Pass': '&Passar',
    'Resign': '&Desistir',
    'Estimate': '&Estimar',
    'Score': '$Pontuação'
  },
  'menu.edit': {
    'Edit': '&Editar',
    'Undo': '&Voltar',
    'Redo': '&Refazer',
    'Toggle Edit Mode': 'Alternar Modo Edição',
    'Select Tool': '&Selecionar Ferramente',
    'Stone Tool': '&Ferramenta de Peça',
    'Cross Tool': '&Ferramenta Cruzada',
    'Triangle Tool': '&Ferramenta de Triângulo',
    'Square Tool': '&Ferramenta de Quadrado',
    'Circle Tool': '&Ferramenta de Círculo',
    'Line Tool': '&Ferramenta de Linha',
    'Arrow Tool': '&Ferramenta de Seta',
    'Label Tool': '&Ferramenta de Rótulo',
    'Number Tool': '&Ferramenta de Número',
    'Copy Variation': '&Copiar Variação',
    'Cut Variation': '&Cortar Variação',
    'Paste Variation': '&Colar Variação',
    'Make Main Variation': '&Tornar Variação em Principal',
    'Shift Left': '&Deslocar à Esquerda',
    'Shift Right': '&Deslocar à direita',
    'Flatten': '&Nivelar',
    'Remove Node': '&Remover Nó',
    'Remove Other Variations': '&Remover Outras Variações'
  },
  'menu.find': {
    'Find': '&Procurar',
    'Toggle Find Mode': '&Alternar Procurar Nó',
    'Find Next': '&Buscar Próximo',
    'Find Previous': '&Buscar Anterior',
    'Toggle Hotspot': '&Alternar Ponto de Acesso',
    'Jump to Next Hotspot': '&Pular Para o Próximo Ponto de Acesso',
    'Jump to Previous Hotspot': '&Pular Para o Ponto de Acesso Anterior'
  },
  'menu.navigation': {
    'Navigation': '&Navegação',
    'Back': '&Voltar',
    'Forward': '&Prosseguir',
    'Go to Previous Fork': '&Ir para bifurcação anterior',
    'Go to Next Fork': '&Ir para próxima bifurcação',
    'Go to Previous Comment': '&Ir para comentário anterior',
    'Go to Next Comment': '&Ir para o próximo comentário',
    'Go to Beginning': '&Ir para o início',
    'Go to End': '&Ir para o fim',
    'Go to Main Variation': '&Ir para variação principal',
    'Go to Previous Variation': '&Ir para variação anterior',
    'Go to Next Variation': '&Ir para próxima variação',
    'Go to Move Number': '&Ir para movimento de número',
    'Enter a move number to go to': '&Insira número de movimento para ir',
    'Go to Next Game': '&Ir para próximo jogo',
    'Go to Previous Game': '&Ir para jogo anterior'
  },
  'menu.engines': {
    'Engines': '&Mecanismos',
    'Show Engines Sidebar': '&Mostrar aba lateral dos mecanismos',
    'Toggle Analysis': '&Alternar mecanismos',
    'None of the attached engines support analysis.':
      'Nenhum dos mecanismos anexados é suportado.',
    'Start Engine vs. Engine Game': '&Iniciar Jogo Mecanismo vs. Mecanismo',
    'Stop Engine vs. Engine Game': '&Parar Jogo Mecanismo vs. Mecanismo',
    'Generate Move': '&Gerar movimento',
    'Please assign an engine to the player first.':
      'Indique um Mecanismo para ser o primeiro jogador',
    '(Unnamed Engine)': '(Mecanismo não nomeado)',
    'Manage Engines…': 'Gerenciar mecanismos…',
    'Clear Console': '&Limpar console'
  },
  'menu.tools': {
    'Tools': '&Ferramentas',
    'Toggle Autoplay Mode': '&Alternar modo de jogo automático',
    'Toggle Guess Mode': '&Alternar modo observador',
    'Clean Markup…': '&Limpar Marcação…',
    'Edit SGF Properties…': '&Editar propriedades do SGF',
    'Rotate Anticlockwise': '&Rodar sentido anti-horário',
    'Rotate Clockwise': '&Rodar sentido horário',
    'Flip Horizontally': '&Girar horizontalmente',
    'Flip Vertically': '&Girar verticalmente',
    'Invert Colors': '&Inverter cores',
    'Reset': '&Resetar'
  },
  'menu.view': {
    'View': '&Visualizar',
    'Toggle Menu Bar': '&Alternar barra de menu',
    'Toggle Full Screen': '&Alternar tela-cheia',
    'Show Coordinates': '&Mostrar coordenadas',
    'Don’t Show': '&Não Mostrar',
    'A1 (Default)': '&A1 (Padrão)',
    '1-1': '&1-1',
    'Relative': '&Relativo',
    'Show Move Numbers': '&Mostrar numero do movimento',
    'Show Move Colorization': '&Mostrar cor do movimento',
    'Show Next Moves': '&Mostrar próximo movimento',
    'Show Sibling Variations': '&Mostrar variação-prima',
    'Show Heatmap': '&Mostrar mapa de calor',
    'Show Win Rate': '&Mostrar taxa de vitória',
    'Show Score Lead': '&Mostrar etimativa de pontuação',
    'Show Winrate Graph': '&Mostrar gráfico de taxa de vitória',
    'Show Game Tree': '&Mostrar árvore do jogo',
    'Show Comments': '&Mostrar comentários',
    'Zoom': '&Ampliar',
    'Increase': '&Aumentar',
    'Decrease': '&Diminuir',
    'Reset': '&Resetar',
    'Transform Board': '&Transformar Tabuleiro'
  },
  'menu.help': {
    'Help': '&Ajuda',
    '${appName} v${version}': p => `${p.appName} v${p.version}`,
    'Check for Updates': '&Checar por Atualizações',
    'GitHub Repository': '&Repositório do Githuba',
    'Report Issue': '&Reportar problema'
  },
  'menu.developer': {
    'Developer': '&Desenvolvedor',
    'Open Settings Folder': '&Abrir Pasta de Configurações',
    'Toggle Developer Tools': '&Alternar Ferramentas de Desenvolvimento',
    'Load Language File…': '&Carregar arquivos de Linguagem...',
    'A language file is basically a JavaScript file and can be used to execute arbitrary code on your computer.\n\nIt can be extremely dangerous, so it is recommended to only load language files from authors you trust.':
      'Um arquivo de linguagem é fundamentalmente um arquivo JavaScript que pode rodar código de forma arbritária em seu computador.\nÉ recomendado que só carregue arquivos de autores confiáveis, pois do contrário pode ser muito perigoso.',
    'I understand': 'Eu entendo',
    'JavaScript Files': 'Arquivos JavaScript',
    'Unload Language File': '&Descarregar Arquivo JavaScript'
  },
  'menu.macos': {
    'Text': 'Texto'
  },
  'App': {
    'Press Esc to exit full screen mode':
      'Pressione Esc para sair do modo de tela-cheia',
    'Press Alt to show menu bar': 'Pressione Alt para mostrar barra de menu'
  },
  'ContentDisplay': {
    'Jump to Move Number': 'Mover para Movimento Numerado'
  },
  'dialog': {
    'OK': 'OK'
  },
  'EngineSyncer': {
    'GTP engines don’t support invalid board positions.':
      'Mecanismos GTP não suportam posições no tabuleiro invalidas.',
    'GTP engines only support board sizes that don’t exceed ${length}.': p =>
      `Mecanismos GTP suportam tamanhos de tabuleiro que não excedão ${p.length}.`,
    'Current board arrangement can’t be recreated on the GTP engine.':
      'Arranjo do tabuleiro atual não pode ser recrado pelos mecanismos GTP.',
    'GTP engine can’t be synced to current state.':
      'Mecanismos GTP não pode sincronizar o estado atual.'
  },
  'gtplogger': {
    'You have an invalid log folder for GTP console logging in your settings.\n\nPlease make sure the log directory is valid and writable, or disable GTP console logging.':
      'Você tem uma pasta de log inválida para o login do console GTP nas suas configurações.\n\nVerifique se o diretório de log é válido e gravável ou desative o log do console GTP.'
  },
  'sabaki.window': {
    'Game ${gameNumber}': p => `Jogo ${p.gameNumber}`
  },
  'sabaki.file': {
    'All Files': 'Todos Arquivos',
    'This file is unreadable.': 'Esse arquivo não permite escrita.',
    'Your changes will be lost if you close this file without saving.':
      'Suas alterações serão perdidas se você fechar este arquivo sem salvar.',
    'Save': 'Salvar',
    'Don’t Save': 'Não Salvar',
    'Cancel': 'Cancelar',
    'This file has been changed outside of ${appName}.\nDo you want to reload the file? Your changes will be lost.': p =>
      [
        `Esse arquivo foi modificado por fora do ${p.appName}.`,
        'Deseja recarregar o arquivo? Suas alterações serão perdidas.'
      ].join('\n'),
    'Reload': 'Recarregar',
    'Don’t Reload': 'Não Recarregar'
  },
  'sabaki.play': {
    'Edit Label': '&Editar Rótulo',
    'Enter label text': 'Editar rótulo do texto',
    'You are about to play a move which repeats a previous board position.\nThis is invalid in some rulesets.':
      'Você está prestes a jogar uma jogada que repete uma posição anterior no tabuleiro.\nIsso é inválido em alguns conjuntos de regras.',
    'Play Anyway': 'Jogar de Qualquer Forma',
    'Don’t Play': 'Não Jogar',
    'You are about to play a suicide move.\nThis is invalid in some rulesets.':
      'Você está prestes a fazer um movimento suicida.\nIsso é inválido em alguns conjuntos de regras.'
  },
  'sabaki.engine': {
    'Connection Failed': 'Falha na conexão',
    '${engine} has failed to generate a move.': p =>
      `${p.engine} falhou ao gerar uma jogada.`,
    '${engine} has resigned.': p => `${p.engine} desistiu.`,
    'Please attach one or more engines first.':
      'Por favor anexe um mecanismo primeiro.',
    'The selected engine does not support analysis.':
      'O mecanismo selecionado não suporta análise.'
  },
  'sabaki.node': {
    'Do you really want to remove this node?': 'Deseja mesmo remover este nó?',
    'Remove Node': 'Remover Nó',
    'Cancel': 'Cancelar',
    'Do you really want to remove all other variations?':
      'Deseja mesmo remover todas as outras variações?',
    'Remove Variations': 'Remover Variações'
  },
  'menu.comment': {
    'Clear Annotations': '&Limpar anotações',
    'Good for Black': '&Boa para as Pretras',
    'Unclear Position': null,
    'Even Position': '&Posição Justa para Ambos',
    'Good for White': '&Bom para as Brancas',
    'Good Move': '&Boa jogada',
    'Interesting Move': '&Movimento Interessante',
    'Doubtful Move': '&Movimento Duvidoso',
    'Bad Move': '&Mal Movimento',
    'Hotspot': '&Ponto de acesso',
    /* unused */ 'Unclear position': '&Posição Pouco Clara'
  },
  'menu.variation': {
    'Add Variation': '&Adicionar variação',
    'The root node cannot have sibling nodes.':
      'O nó raiz não pode ter nós primos.'
  },
  'menu.engineAction': {
    'Start': '&Começar',
    'Stop': '&Pare',
    'Detach': '&Desanexar',
    'Synchronize': '&Sincronizar',
    'Generate Move': '&Gerar Movimento',
    'Set as Analyzer': '&Definir como analisador',
    'Set as Black Player': '&Definir como jogador preto',
    'Set as White Player': '&Definir como jogador branco',
    'Go to Engine': '&Ir para o Mecanismo'
  },
  'AutoplayBar': {
    'sec per move': 'segundo por movimento'
  },
  'EditBar': {
    'Stone Tool': 'Ferramenta de Peça',
    'Cross Tool': 'Ferramenta Cruzada',
    'Triangle Tool': 'Ferramenta Triângulo',
    'Square Tool': 'Ferramenta de Quadrado',
    'Circle Tool': 'Ferramenta Círculo',
    'Line Tool': 'Ferramenta de Linha',
    'Arrow Tool': 'Ferramenta de Seta',
    'Label Tool': 'Ferramenta de Rótulo',
    'Number Tool': 'Ferramenta de Número'
  },
  'FindBar': {
    'Find': 'Buscar',
    'Next': 'Próximo',
    'Previous': 'Anterior'
  },
  'GuessBar': {
    'Click on the board to guess the next move.':
      'Clique no tabuleiro para adivinhar o próximo passo.'
  },
  'PlayBar': {
    'Pass': '&Passar',
    'Resign': '&Desistir',
    'Estimate': '&Estimativa',
    'Score': '&Pontuação',
    'Edit': '&Editar',
    'Find': '&Encontrar',
    'Info': '&Informação',
    'Hotspot': 'Ponto de Acesso',
    'Engine': 'Mecanismo',
    'Black': 'Pretas',
    'Change Player': 'Alterar jogador',
    'White to play': 'Brancas para jogar',
    'Black to play': 'Pretas para jogar',
    'White': 'Brancas'
  },
  'ScoringBar': {
    'Details': 'Detalhes',
    'Draw': 'Empate',
    'Please select dead stones.': 'Selecione as peças mortas.',
    'Toggle group status.': 'Alternar estado do grupo.'
  },
  'AdvancedPropertiesDrawer': {
    'Remove': 'Remover',
    'Enter property name': 'Inserir nome da propriedade',
    'This property has been blocked.': 'Essa propriedade foi bloqueada.',
    'Add': 'Adicionar',
    'Close': 'Fechar'
  },
  'CleanMarkupDrawer': {
    'From Current Position': '&Da Posição Atual',
    'From Entire Game': '&Do Jogo Inteiro',
    'Clean Markup': 'Limpar Marcação',
    'Cross markers': 'Marcadores Cruzados',
    'Triangle markers': 'Marcadores de Triângulos',
    'Square markers': 'Marcadores de Quadrados',
    'Circle markers': 'Marcadores de Círculos',
    'Line markers': 'Marcadores de Linhas',
    'Arrow markers': 'Marcadores de Setas',
    'Label markers': 'Marcadores de Rótulos',
    'Comments': 'Comentários',
    'Annotations': 'Anotações',
    'Hotspots markers': 'Marcadores de Pontos de Acesso',
    'Winrate data': 'Dados de Taxa de Vitória',
    'Remove': 'Remover',
    'Close': 'Fechar'
  },
  'GameChooserDrawer': {
    'Black': 'Pretas',
    'White': 'Brancas',
    'Remove Game': 'Remover Jogo',
    'Do you really want to remove this game permanently?':
      'Deseja mesmo remover este jogo permanentemente?',
    'Cancel': 'Cancelar',
    'Remove Other Games': '&Remover Outros Jogos',
    'Do you really want to remove all other games permanently?':
      'Deseja mesmo remover todos os outros jogos permanentemente?',
    'Remove Games': 'Remover jogos',
    'Add New Game': '&Adicionar Novo Jogo',
    'Add Existing Files…': '&Adicionar Arquivos Existentes…',
    'All Files': 'Todos Arquivos',
    'Some files are unreadable.': 'Alguns arquivos estão ilegíveis.',
    'Black Player': '&Jogador de Pretas',
    'White Player': '&Jogador de Brancas',
    'Black Rank': '&Classificação das Pretas',
    'White Rank': '&Classificação das Brancas',
    'Game Name': '&Nome do Jogo',
    'Game Event': '&Evento do Jogo',
    'Date': '&Data',
    'Number of Moves': '&Número de Movimentos',
    'Reverse': '&Reverter',
    'Manage Games': 'Gerenciar Jogos',
    'Filter': 'Filtro',
    'Add': 'Adicionar',
    'Sort By': 'Ordenar Por',
    'Close': 'Fechar'
  },
  'InfoDrawer': {
    'Manual': 'Manual',
    '(Unnamed Engine)': '(Mecanismo não nomeado)',
    'Attach Engine': 'Anexar Mecanismo',
    'Manage Engines…': 'Gerenciar Mecanismos…',
    'Previous Month': 'Mês anterior',
    'Next Month': 'Próximo mês',
    'Rank': 'Rank',
    'Black': 'Pretas',
    'Swap': 'Alternar',
    'White': 'Brancas',
    'Name': 'Nome',
    '(Unnamed)': '(Sem nome)',
    'Event': 'Evento',
    'None': 'Nenhum',
    'Date': 'Data',
    'Comment': 'Comentário',
    'Result': 'Resultado',
    'Show': 'Mostrar',
    'Komi': 'Komi',
    'Handicap': 'Vantagem',
    'No stones': 'Sem peças',
    '${stones} stones': p => `${p.stones} peças`,
    'Board Size': 'Tamanho do tabuleiro',
    'OK': 'OK',
    'Cancel': 'Cancelar'
  },
  'PreferencesDrawer': {
    'Please restart ${appName} to apply your language setting.': p =>
      `Por favor, reinicie ${p.appName} para aplicar sua configuração de idioma.`,
    'Enable hardware acceleration if possible':
      'Habilite a aceleração de hardware, se possível',
    'Check for updates at startup':
      'Verifique se há atualizações na inicialização',
    'Enable sounds': 'Habilitar sons',
    'Jump to end after loading file':
      'Ir para o final após o carregamento do arquivo',
    'Fuzzy stone placement': 'Colocação de pedra difusa',
    'Animate fuzzy placement': 'Animar posicionamento difuso',
    'Variation Replay Mode:': 'Modo de Repetição da Variação:',
    'Disabled': 'Desabilitado',
    'Move by Move': 'Movimento por Movimento',
    'Instantly': 'Imediatamente',
    'Language:': 'Linguagem:',
    'Game Tree Style:': 'Estilo de Árvore do Jogo:',
    'Compact': 'Compacto',
    'Spacious': 'Espaçoso',
    'Big': 'Grande',
    'Show automatic move titles':
      'Mostrar títulos de movimentos automaticamente',
    'Show ko warning': 'Mostrar aviso de KO',
    'Show suicide warning': 'Mostrar aviso de jogada suicida',
    'Show remove node warning': 'Mostrar aviso de remoção de nó',
    'Show remove other variations warning':
      'Mostrar aviso de remover outras variações',
    'Offer to reload file if changed externally':
      'Oferecer para recarregar o arquivo se alterado externamente',
    'Click last played stone to remove':
      'Clique na última peça jogada para remover',
    'Invert winrate graph': 'Inverter gráfico de taxa de vitória',
    'Path': 'Arquivo',
    'Browse…': 'Buscar…',
    'Directory not found': 'Pasta não encontrada',
    'File not found': 'Arquivo não encontrado',
    'Do you really want to uninstall this theme?':
      'Deseja desinstalar esse tema?',
    'Uninstall': 'Desinstalar',
    'Cancel': 'Cancelar',
    'Uninstallation failed.': 'Desinstação falhou.',
    'Sabaki Themes': 'Temas do Sabaki',
    'Installation failed.': 'Instação falhou.',
    'Custom Images': 'Imagens Customizadas',
    'Black stone image:': 'Imagem das peças Pretas:',
    'White stone image:': 'Imagem das peças Brancas:',
    'Board image:': 'Imagem do tabuleiro:',
    'Background image:': 'Imagem de fundo:',
    'Current Theme': 'Tema Atual',
    'Default': 'Padrão',
    'Install Theme…': 'Instalar Tema…',
    'Get more themes…': 'Buscar mais temas…',
    'by ${author}': p => `por ${p.author}`,
    'Homepage': 'Página Principal',
    'All Files': 'Todos os Arquivos',
    'Remove': 'Remover',
    '(Unnamed Engine)': '(Mecanismo não nomeado)',
    'No arguments': 'Sem argumentos',
    'Initial commands (;-separated)': 'Comandos iniciais (;-separando)',
    'Enable GTP logging to directory:': 'Habilitar o log do GTP no diretório:',
    'Add': 'Adicionar',
    'General': 'Geral',
    'Themes': 'Temas',
    'Engines': 'Mecanismos',
    'Close': 'Fechar'
  },
  'ScoreDrawer': {
    'Black': 'Pretas',
    'White': 'Brancas',
    'Draw': 'Empate',
    'Score': 'Pontuação',
    'Area': 'Area',
    'Territory': 'Território',
    'Captures': 'Capturas',
    'Komi': 'Komi',
    'Handicap': 'Vantagem',
    'Total': 'Total',
    'Result:': 'Resultado:',
    'Update Result': 'Atualizar Resultado',
    'Close': 'Fechar'
  },
  'CommentBox': {
    'Result: ${result}': p => `Resultado: ${p.result}`,
    '${a}-${b} Point': p => `Ponto ${p.a}-${p.b}`,
    'View article on Sensei’s Library': 'Ver artigo em Sensei’s Library',
    'Bad move': 'Mal Movimento',
    'Very bad move': 'Movimento Muito Ruim',
    'Doubtful move': 'Movimento Duvidoso',
    'Very doubtful move': 'Movimento Muito Duvidoso',
    'Interesting move': 'Movimento Interessante',
    'Very interesting move': 'Movimento Muito Interessante',
    'Good move': 'Boa jogada',
    'Very good move': 'Muito Boa jogada',
    'Good for White': 'Bom para as Brancas',
    'Very good for White': 'Muito Bom para as Brancas',
    'Even position': 'Posição Justa para Ambos',
    'Very even position': 'Posição Bem Justa para Ambos',
    'Good for Black': 'Bom para as Negras',
    'Very good for Black': 'Muito Bom para as Negras',
    'Unclear position': 'Posição Pouco Clara',
    'Very unclear position': 'Posição Muito Pouco Clara',
    'Edit': 'Editar',
    'Title': 'Título',
    'Comment': 'Comentário'
  },
  'PeerList': {
    'Running': 'Rodando',
    'Stopped': 'Interrompida',
    'Analyzer': 'Analisar',
    'Plays as Black': 'Jogar de Pretas',
    'Plays as White': 'Jogar de Brancas',
    'Attach Engine…': 'Anexar Mecanismo…',
    'Start Engine vs. Engine Game': 'Iniciar Jogo Mecanismo vs. Mecanismo',
    'Stop Engine vs. Engine Game': 'Parar Jogo Mecanismo vs. Mecanismo'
  },
  'WinrateGraph': {
    'Black': 'Pretas',
    'White': 'Brancas',
    'Black Winrate:': 'Taxa de Vitória das Negras:',
    'White Winrate:': 'Taxa de Vitória das Brancas:'
  },
  'fileformats': {
    'Tygem GIB': 'Tygem GIB',
    'Game Records': 'Registros de Jogos',
    'wBaduk NGF': 'wBaduk NGF',
    'Smart Game Format': 'Formato de Jogo Inteligente'
  },
  'boardmatcher': {
    'Low Chinese Opening': 'Abertura de Chinês Baixa',
    'High Chinese Opening': 'Abertura de Chinês Alta',
    'Orthodox Opening': 'Abertura Ortodoxa',
    'Enclosure Opening': 'Abertura Cerco',
    'Kobayashi Opening': 'Abertura Kobayashi',
    'Small Chinese Opening': 'Abertura de Chinês Pequena',
    'Micro Chinese Opening': 'Abertura de Chinês Micro',
    'Sanrensei Opening': 'Abertura Sanrensei',
    'Nirensei Opening': 'Abertura Nirensei',
    'Shūsaku Opening': 'Abertura Shūsaku',
    '3-3 Point': 'Ponto 3-3',
    'Low Approach': 'Aproximação Baixa',
    'High Approach': 'Aproximação Alta',
    'Low Enclosure': 'Baixo Cerco',
    'High Enclosure': 'Alto Cerco',
    'Mouth Shape': 'Tabela de Boca',
    'Table Shape': 'Tabela de formato',
    'Tippy Table': 'Tabela de Tippy',
    'Bamboo Joint': 'Junção de Bambu',
    'Trapezium': 'Trapézio',
    'Diamond': 'Diamante',
    'Tiger’s Mouth': 'Boca do Tigre',
    'Empty Triangle': 'Triângulo Vazio',
    'Turn': 'Turno',
    'Stretch': 'Estender',
    'Diagonal': 'Diagonal',
    'Wedge': 'Fatia',
    'Hane': 'Hane',
    'Cut': 'Corte',
    'Square': 'Quadrado',
    'Throwing Star': 'Jogando na Estrela',
    'Parallelogram': 'Paralelogramo',
    'Dog’s Head': 'Cabeça do Cachorro',
    'Horse’s Head': 'Cabeça do Cavalo',
    'Attachment': 'Anexar',
    'One-Point Jump': 'Salto de Um Ponto',
    'Big Bulge': 'Protuberância Grande',
    'Small Knight': 'Salto do Cavalo Custo',
    'Two-Point Jump': 'Salto de Dois Pontos',
    'Large Knight': 'Salto do Cavalo Longo',
    'Shoulder Hit': 'Atingir o Ombro',
    'Diagonal Jump': 'Salto Diagonal',
    '4-4 Point': 'Ponto 4-4',
    'Pass': 'Passar',
    'Take': 'Capturar',
    'Atari': 'Atari',
    'Suicide': 'Suicício',
    'Fill': 'Preencher',
    'Connect': 'Connectar',
    'Tengen': 'Tengen',
    'Hoshi': 'Hoshi'
  }
}
