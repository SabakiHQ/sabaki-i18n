module.exports = {
  'menu.file': {
    'New Window': 'Создать окно',
    'File': 'Файл',
    'New': 'Создать',
    'Open…': 'Открыть…',
    'Save': 'Сохранить',
    'Save As…': 'Сохранить как…',
    'Clipboard': 'Буфер обмена',
    'Load SGF': 'Загрузить SGF',
    'Copy SGF': 'Копировать SGF',
    'Copy ASCII Diagram': 'Копировать ASCII диаграмму',
    'Game Info': 'Информация об игре',
    'Manage Games…': 'Управление играми',
    'Preferences…': 'Настройки',
    'Quit': 'Выход'
  },
  'updater': {
    'Download Update': 'Скачать обновление',
    'View Changelog': 'Журнал изменений',
    'Not Now': 'Не сейчас',
    '${appName} v${version} is available now.': p =>
      `${p.appName} ${p.version} уже доступна.`,
    'OK': 'OK',
    'No updates available': 'Нет обновлений',
    '${appName} v${version} is the latest version.': p =>
      `${p.appName} ${p.version} это последняя версия.`
  },
  'exception': {
    '${appName} v${version}': p => `${p.appName} ${p.version}`,
    'Something weird happened. ${appName} will shut itself down. If possible, please report this on ${appName}’s repository on GitHub.': p =>
      [
        `Произошло что-то странное. ${p.appName} завершит работу.`,
        `Если можете, сообщите об этом в репозитории ${p.appName} на GitHub.`
      ].join(' ')
  },
  'menu.play': {
    'Play': 'Игра',
    'Toggle Player': 'Смена игрока',
    'Select Point': 'Выбранная точка',
    'Enter a coordinate to select a point':
      'Введите координаты для выбранной точки',
    'Pass': 'Пас',
    'Resign': 'Сдаться',
    'Estimate': 'Оценка счёта',
    'Score': 'Счёт'
  },
  'menu.edit': {
    'Edit': 'Правка',
    'Undo': 'Отменить',
    'Redo': 'Вернуть',
    'Toggle Edit Mode': 'Режим редактирования',
    'Select Tool': 'Выбрать инструмент',
    'Stone Tool': 'Камень',
    'Cross Tool': 'Крестик',
    'Triangle Tool': 'Треугольник',
    'Square Tool': 'Квадрат',
    'Circle Tool': 'Круг',
    'Line Tool': 'Линия',
    'Arrow Tool': 'Стрелка',
    'Label Tool': 'Буква',
    'Number Tool': 'Цифра',
    'Copy Variation': 'Копировать ветвь',
    'Cut Variation': 'Вырезать ветвь',
    'Paste Variation': 'Вставить ветвь',
    'Make Main Variation': 'Преобразовать в главную ветвь',
    'Shift Left': 'Сдвинуть ветвь влево',
    'Shift Right': 'Сдвинуть ветвь вправо',
    'Flatten': 'Преобразовать в начальную позицию',
    'Remove Node': 'Удалить',
    'Remove Other Variations': 'Удалить другие ветви'
  },
  'menu.find': {
    'Find': 'Найти',
    'Toggle Find Mode': 'Режим поиска',
    'Find Next': 'Найти далее',
    'Find Previous': 'Найти ранее',
    'Toggle Hotspot': 'Закладка',
    'Jump to Next Hotspot': 'Следующая закладка',
    'Jump to Previous Hotspot': 'Предыдущая закладка'
  },
  'menu.navigation': {
    'Navigation': 'Перемещение',
    'Back': 'Назад',
    'Forward': 'Вперёд',
    'Go to Previous Fork': 'Предыдущая развилка',
    'Go to Next Fork': 'Следующая развилка',
    'Go to Previous Comment': 'Предыдущий комментарий',
    'Go to Next Comment': 'Следующий комментарий',
    'Go to Beginning': 'Начальная позиция',
    'Go to End': 'Конечная позиция',
    'Go to Main Variation': 'Главная ветвь',
    'Go to Previous Variation': 'Предыдущая ветвь',
    'Go to Next Variation': 'Следующая ветвь',
    'Go to Move Number': 'Номер хода',
    'Enter a move number to go to': 'Введите номер хода',
    'Go to Next Game': 'Следующая игра',
    'Go to Previous Game': 'Предыдущая игра'
  },
  'menu.engines': {
    'Engines': 'Программы',
    'Show Engines Sidebar': 'Показать панель программ',
    'Toggle Analysis': 'Анализ',
    'None of the attached engines support analysis.':
      'Ни одна из программ не поддерживает анализ.',
    'Start Engine vs. Engine Game': 'Запустить игру программы с программой',
    'Stop Engine vs. Engine Game': 'Остановить игру программы с программой',
    'Generate Move': 'Сделать ход',
    'Please assign an engine to the player first.':
      'Сначала назначьте программу игроку.',
    '(Unnamed Engine)': '(Безымянная программа)',
    'Manage Engines…': 'Управление программами',
    'Clear Console': 'Очистить консоль'
  },
  'menu.tools': {
    'Tools': 'Инструменты',
    'Toggle Autoplay Mode': 'Режим воспроизведения игры',
    'Toggle Guess Mode': 'Режим угадывания хода',
    'Clean Markup…': 'Очистить',
    'Edit SGF Properties…': 'Правка свойств SGF',
    'Rotate Anticlockwise': 'Повернуть против часовой стрелки',
    'Rotate Clockwise': 'Повернуть по часовой стрелке',
    'Flip Horizontally': 'Отразить по горизонтали',
    'Flip Vertically': 'Отразить по вертикали',
    'Invert Colors': 'Инвертировать цвета',
    'Reset': 'Сбросить'
  },
  'menu.view': {
    'View': 'Вид',
    'Toggle Menu Bar': 'Показывать меню',
    'Toggle Full Screen': 'Полноэкранный режим',
    'Show Coordinates': 'Показывать координаты',
    'Don’t Show': 'Не показывать',
    'A1 (Default)': 'A-1',
    '1-1': '1-1',
    'Relative': 'Относительные',
    'Show Move Numbers': 'Показывать номера ходов',
    'Show Move Colorization': 'Показывать цвета ходов',
    'Show Next Moves': 'Показывать следующий ход',
    'Show Sibling Variations': 'Показывать ход в других ветвях',
    'Show Heatmap': 'Показывать предложение хода',
    'Show Win Rate': 'Показывать % выигрыша',
    'Show Score Lead': 'Показывать счёт',
    'Show Winrate Graph': 'Показывать график % выигрыша',
    'Show Game Tree': 'Показывать дерево игры',
    'Show Comments': 'Показывать комментарии',
    'Zoom': 'Масштабирование',
    'Increase': 'Увеличить',
    'Decrease': 'Уменьшить',
    'Reset': 'Сбросить',
    'Transform Board': 'Преобразование доски'
  },
  'menu.help': {
    'Help': 'Справка',
    '${appName} v${version}': p => `${p.appName} ${p.version}`,
    'Check for Updates': 'Проверить обновления',
    'GitHub Repository': 'GitHub репозиторий…',
    'Report Issue': 'Сообщить об ошибке…'
  },
  'menu.developer': {
    'Developer': 'Разработка',
    'Open Settings Folder': 'Открыть папку настроек…',
    'Toggle Developer Tools': 'Инструменты разработчика',
    'Load Language File…': 'Загрузить файл перевода…',
    'A language file is basically a JavaScript file and can be used to execute arbitrary code on your computer.\n\nIt can be extremely dangerous, so it is recommended to only load language files from authors you trust.':
      'Файл перевода является файлом JavaScript и может быть использован для выполнения произвольного кода на вашем компьютере.\nЭто может быть крайне опасно, поэтому рекомендуется загружать только файлы от авторов, которым вы доверяете.',
    'I understand': 'Я понимаю',
    'JavaScript Files': 'JavaScript файл',
    'Unload Language File': 'Выгрузить файл перевода'
  },
  'menu.macos': {
    'Text': 'Текст'
  },
  'App': {
    'Press Esc to exit full screen mode':
      'Нажмите Esc для выхода из полноэкранного режима',
    'Press Alt to show menu bar': 'Нажмите Alt для отображения меню'
  },
  'ContentDisplay': {
    'Jump to Move Number': 'Перейти к номеру хода'
  },
  'dialog': {
    'OK': 'OK'
  },
  'EngineSyncer': {
    'GTP engines don’t support invalid board positions.':
      'GTP программа не поддерживает неправильную позицию на доске',
    'GTP engines only support board sizes that don’t exceed ${length}.': p =>
      `GTP программа поддерживает только размеры доски, которые не превышают ${p.length}.`,
    'Current board arrangement can’t be recreated on the GTP engine.':
      'Текущая позиция на доске не может быть воссоздана на GTP программе',
    'GTP engine can’t be synced to current state.':
      'GTP программа не может быть синхронизирована с текущим состоянием.'
  },
  'gtplogger': {
    'You have an invalid log folder for GTP console logging in your settings.\n\nPlease make sure the log directory is valid and writable, or disable GTP console logging.':
      'У вас неправильный каталог для журнала консоли GTP в ваших настройках.\nУбедитесь, что каталог журнала правильный и доступен для записи, или отключите ведение журнала консоли GTP.'
  },
  'sabaki.window': {
    'Game ${gameNumber}': p => `Игра ${p.gameNumber}`
  },
  'sabaki.file': {
    'All Files': 'Все файлы',
    'This file is unreadable.': 'Этот файл не читается.',
    'Your changes will be lost if you close this file without saving.':
      'Вы хотите сохранить изменения в файле?',
    'Save': 'Сохранить',
    'Don’t Save': 'Не сохранять',
    'Cancel': 'Отмена',
    'This file has been changed outside of ${appName}.\nDo you want to reload the file? Your changes will be lost.': p =>
      [
        `Файл был изменен вне ${p.appName}.`,
        'Вы хотите перезагрузить файл? Ваши изменения будут потеряны.'
      ].join('\n'),
    'Reload': 'Перезагрузить',
    'Don’t Reload': 'Не перезагружать'
  },
  'sabaki.play': {
    'Edit Label': 'Редактировать метку',
    'Enter label text': 'Введите текст метки',
    'You are about to play a move which repeats a previous board position.\nThis is invalid in some rulesets.':
      'Вы собираетесь сделать ход, который повторяет предыдущую позицию на доске.\nЭто недопустимо в некоторых правилах.',
    'Play Anyway': 'Сделать ход',
    'Don’t Play': 'Не делать ход',
    'You are about to play a suicide move.\nThis is invalid in some rulesets.':
      'Вы собираетесь сделать самоубийственный ход.\nЭто недопустимо в некоторых правилах.'
  },
  'sabaki.engine': {
    'Connection Failed': 'Подключение не удалось',
    '${engine} has failed to generate a move.': p =>
      `${p.engine} не удалось сгенерировать ход.`,
    '${engine} has resigned.': p => `${p.engine} сдаётся.`,
    'Please attach one or more engines first.':
      'Сначала прикрепите одну или несколько программ.',
    'The selected engine does not support analysis.':
      'Выбранная программа не поддерживает анализ.'
  },
  'sabaki.node': {
    'Do you really want to remove this node?':
      'Вы действительно хотите удалить этот ход?',
    'Remove Node': 'Удалить',
    'Cancel': 'Отмена',
    'Do you really want to remove all other variations?':
      'Вы действительно хотите удалить все другие ветви?',
    'Remove Variations': 'Удалить'
  },
  'menu.comment': {
    'Clear Annotations': 'Очистить метки',
    'Good for Black': 'Хорошо для чёрных',
    'Unclear Position': 'Неясная позиция',
    'Even Position': 'Равная позиция',
    'Good for White': 'Хорошо для белых',
    'Good Move': 'Хороший ход',
    'Interesting Move': 'Интересный ход',
    'Doubtful Move': 'Сомнительный ход',
    'Bad Move': 'Плохой ход',
    'Hotspot': 'Закладка'
  },
  'menu.variation': {
    'Add Variation': 'Добавить ветвь',
    'The root node cannot have sibling nodes.':
      'Корневой узел не может иметь родственных узлов.'
  },
  'menu.engineAction': {
    'Start': 'Запустить',
    'Stop': 'Остановить',
    'Detach': 'Отключить',
    'Synchronize': 'Синхронизировать',
    'Generate Move': 'Сделать ход',
    'Set as Analyzer': 'Назначить для анализа',
    'Set as Black Player': 'Назначить для чёрных',
    'Set as White Player': 'Назначить для белых',
    'Go to Engine': 'К программе'
  },
  'AutoplayBar': {
    'sec per move': 'сек. на ход'
  },
  'EditBar': {
    'Stone Tool': 'Камень',
    'Cross Tool': 'Крестик',
    'Triangle Tool': 'Треугольник',
    'Square Tool': 'Квадрат',
    'Circle Tool': 'Круг',
    'Line Tool': 'Линия',
    'Arrow Tool': 'Стрелка',
    'Label Tool': 'Буква',
    'Number Tool': 'Цифра'
  },
  'FindBar': {
    'Find': 'Найти',
    'Next': 'Далее',
    'Previous': 'Ранее'
  },
  'GuessBar': {
    'Click on the board to guess the next move.':
      'Нажмите на доску, чтобы угадать следующий ход.'
  },
  'PlayBar': {
    'Pass': 'Пас',
    'Resign': 'Сдаться',
    'Estimate': 'Оценка счёта',
    'Score': 'Счёт',
    'Edit': 'Режим редактирования',
    'Find': 'Режим поиска',
    'Info': 'Информация об игре',
    'Hotspot': 'Закладка',
    'Engine': 'Программа',
    'Black': 'Чёрные',
    'Change Player': 'Смена игрока',
    'White to play': 'Ход белых',
    'Black to play': 'Ход чёрных',
    'White': 'Белые'
  },
  'ScoringBar': {
    'Details': 'Подробности',
    'Draw': 'Ничья',
    'Please select dead stones.': 'Отметьте мертвые камни.',
    'Toggle group status.': 'Отметьте статус групп.'
  },
  'AdvancedPropertiesDrawer': {
    'Remove': 'Удалить',
    'Enter property name': 'Введите имя свойства',
    'This property has been blocked.': 'Это свойство было заблокировано.',
    'Add': 'Добавить',
    'Close': 'Закрыть'
  },
  'CleanMarkupDrawer': {
    'From Current Position': 'Из текущей позиции',
    'From Entire Game': 'Из всей игры',
    'Clean Markup': 'Очистить',
    'Cross markers': 'Крестики',
    'Triangle markers': 'Треугольники',
    'Square markers': 'Квадраты',
    'Circle markers': 'Круги',
    'Line markers': 'Линии',
    'Arrow markers': 'Стрелки',
    'Label markers': 'Буквы',
    'Comments': 'Комментарии',
    'Annotations': 'Метки',
    'Hotspots markers': 'Закладки',
    'Winrate data': '% выигрыша',
    'Remove': 'Удалить',
    'Close': 'Закрыть'
  },
  'GameChooserDrawer': {
    'Black': 'Чёрные',
    'White': 'Белые',
    'Remove Game': 'Удалить игру',
    'Do you really want to remove this game permanently?':
      'Вы действительно хотите удалить эту игру?',
    'Cancel': 'Отмена',
    'Remove Other Games': 'Удалить другие игры',
    'Do you really want to remove all other games permanently?':
      'Вы действительно хотите удалить все остальные игры?',
    'Remove Games': 'Удалить',
    'Add New Game': 'Добавить новую игру',
    'Add Existing Files…': 'Добавить файл…',
    'All Files': 'Все файлы',
    'Some files are unreadable.': 'Некоторые файлы не читаются.',
    'Black Player': 'Игрок чёрными',
    'White Player': 'Игрок белыми',
    'Black Rank': 'Ранг чёрных',
    'White Rank': 'Ранг белых',
    'Game Name': 'Название игры',
    'Game Event': 'Название турнира',
    'Date': 'Дата',
    'Number of Moves': 'Количество ходов',
    'Reverse': 'Обратный порядок',
    'Manage Games': 'Управление играми',
    'Filter': 'Фильтр',
    'Add': 'Добавить',
    'Sort By': 'Сортировать по',
    'Close': 'Закрыть'
  },
  'InfoDrawer': {
    'Manual': 'Вручную',
    '(Unnamed Engine)': '(Безымянная программа)',
    'Attach Engine': 'Подключить программу',
    'Manage Engines…': 'Управление программами',
    'Previous Month': 'Предыдущий месяц',
    'Next Month': 'Следующий месяц',
    'Rank': 'Ранг',
    'Black': 'Игрок чёрными',
    'Swap': 'Поменять местами',
    'White': 'Игрок белыми',
    'Name': 'Название',
    '(Unnamed)': 'Без названия',
    'Event': 'Турнир',
    'None': 'Нет',
    'Date': 'Дата',
    'Comment': 'Комментарий',
    'Result': 'Результат',
    'Show': 'Показать',
    'Komi': 'Коми',
    'Handicap': 'Фора',
    'No stones': 'Нет',
    '${stones} stones': p => `${p.stones} камня`,
    'Board Size': 'Доска',
    'OK': 'OK',
    'Cancel': 'Отмена'
  },
  'PreferencesDrawer': {
    'Please restart ${appName} to apply your language setting.': p =>
      `Перезапустите ${p.appName} для изменения языка.`,
    'Enable hardware acceleration if possible':
      'Включить аппаратное ускорение, если возможно',
    'Check for updates at startup': 'Проверять наличие обновлений при запуске',
    'Enable sounds': 'Включить звуки',
    'Jump to end after loading file': 'Конечная позиция после загрузки файла',
    'Fuzzy stone placement': 'Неровная постановка камня',
    'Animate fuzzy placement': 'Анимация постановки камня',
    'Variation Replay Mode:': 'Показывать варианты анализа:',
    'Disabled': 'Не показывать',
    'Move by Move': 'Ход за ходом',
    'Instantly': 'Мгновенно',
    'Language:': 'Язык:',
    'Game Tree Style:': 'Вид дерева игры:',
    'Compact': 'Компактный',
    'Spacious': 'Просторный',
    'Big': 'Большой',
    'Show automatic move titles': 'Показывать названия ходов',
    'Show ko warning': 'Предупреждение при повторении позиции',
    'Show suicide warning': 'Предупреждение при самоубийственном ходе',
    'Show remove node warning': 'Предупреждение при удалении хода',
    'Show remove other variations warning':
      'Предупреждение при удалении других ветвей',
    'Offer to reload file if changed externally':
      'Предупреждение если файл был изменен извне',
    'Click last played stone to remove':
      'Удалять последний ход при нажатии на камень',
    'Invert winrate graph': 'Инвертировать график % выигрыша',
    'Path': 'Путь',
    'Browse…': 'Просмотр…',
    'Directory not found': 'Каталог не найден',
    'File not found': 'Файл не найден',
    'Do you really want to uninstall this theme?':
      'Вы действительно хотите удалить эту тему?',
    'Uninstall': 'Удалить',
    'Cancel': 'Отмена',
    'Uninstallation failed.': 'Удаление не удалось.',
    'Sabaki Themes': 'Sabaki тема',
    'Installation failed.': 'Установка не удалась.',
    'Custom Images': 'Настраиваемые изображения',
    'Black stone image:': 'Чёрный камень:',
    'White stone image:': 'Белый камень:',
    'Board image:': 'Доска:',
    'Background image:': 'Фон:',
    'Current Theme': 'Текущая тема',
    'Default': 'По умолчанию',
    'Install Theme…': 'Установить тему…',
    'Get more themes…': 'Получить больше тем…',
    'by ${author}': p => `Автор ${p.author}`,
    'Homepage': 'Домашняя страница…',
    'All Files': 'Все файлы',
    'Remove': 'Удалить',
    '(Unnamed Engine)': '(Безымянная программа)',
    'No arguments': 'Нет заданных параметров',
    'Initial commands (;-separated)': 'Начальные команды (;-разделитель)',
    'Enable GTP logging to directory:':
      'Включить ведение журнала GTP в каталог:',
    'Add': 'Добавить',
    'General': 'Основные',
    'Themes': 'Темы',
    'Engines': 'Программы',
    'Close': 'Закрыть'
  },
  'ScoreDrawer': {
    'Black': 'Чёрные',
    'White': 'Белые',
    'Draw': 'Ничья',
    'Score': 'Счёт',
    'Area': 'Площадь',
    'Territory': 'Территория',
    'Captures': 'Захвачено',
    'Komi': 'Коми',
    'Handicap': 'Фора',
    'Total': 'Всего',
    'Result:': 'Результат:',
    'Update Result': 'Обновить результат',
    'Close': 'Закрыть'
  },
  'CommentBox': {
    'Result: ${result}': p => `Результат: ${p.result}`,
    '${a}-${b} Point': p => `пункт ${p.a}-${p.b}`,
    'View article on Sensei’s Library': 'Посмотреть статью на Sensei’s Library',
    'Bad move': 'Плохой ход',
    'Very bad move': 'Очень плохой ход',
    'Doubtful move': 'Сомнительный ход',
    'Very doubtful move': 'Очень сомнительный ход',
    'Interesting move': 'Интересный ход',
    'Very interesting move': 'Очень интересный ход',
    'Good move': 'Хороший ход',
    'Very good move': 'Очень хороший ход',
    'Good for White': 'Хорошо для белых',
    'Very good for White': 'Очень хорошо для белых',
    'Even position': 'Равная позиция',
    'Very even position': 'Очень равная позиция',
    'Good for Black': 'Хорошо для чёрных',
    'Very good for Black': 'Очень хорошо для чёрных',
    'Unclear position': 'Неясная позиция',
    'Very unclear position': 'Очень неясная позиция',
    'Edit': 'Редактировать',
    'Title': 'Заголовок',
    'Comment': 'Комментарий'
  },
  'PeerList': {
    'Running': 'Запущено',
    'Stopped': 'Остановлено',
    'Analyzer': 'Анализатор',
    'Plays as Black': 'Играть за чёрных',
    'Plays as White': 'Играть за белых',
    'Attach Engine…': 'Подключить программу',
    'Start Engine vs. Engine Game': 'Запустить игру программы с программой',
    'Stop Engine vs. Engine Game': 'Остановить игру программы с программой'
  },
  'WinrateGraph': {
    'Black': 'Чёрные',
    'White': 'Белые',
    'Black Winrate:': 'Вероятность выигрыша чёрных',
    'White Winrate:': 'Вероятность выигрыша белых'
  },
  'fileformats': {
    'Tygem GIB': 'Tygem',
    'Game Records': 'Записи игр',
    'wBaduk NGF': 'WBaduk',
    'Smart Game Format': 'Smart Game Format',
    'PandaNET UGF': 'Pandanet'
  },
  'boardmatcher': {
    'Low Chinese Opening': 'Низкое китайское фусэки',
    'High Chinese Opening': 'Высокое китайское фусэки',
    'Orthodox Opening': 'Хоси-симари фусэки',
    'Enclosure Opening': 'Комоку-симари фусэки',
    'Kobayashi Opening': 'Кобаяси фусэки',
    'Small Chinese Opening': 'Мини китайское фусэки',
    'Micro Chinese Opening': 'Микро китайское фусэки',
    'Sanrensei Opening': 'Санрэнсэй фусэки',
    'Nirensei Opening': 'Нирэнсэй фусэки',
    'Shūsaku Opening': 'Сюсаку фусэки',
    'Low Approach': 'Низкое какари',
    'High Approach': 'Высокое какари',
    'Low Enclosure': 'Низкое симари',
    'High Enclosure': 'Высокое симари',
    'Mouth Shape': 'Рот',
    'Table Shape': 'Стол',
    'Tippy Table': 'Неустойчивый стол',
    'Bamboo Joint': 'Бамбук',
    'Trapezium': 'Трапеция',
    'Diamond': 'Алмаз',
    'Tiger’s Mouth': 'Тигриная пасть',
    'Empty Triangle': 'Пустой треугольник',
    'Turn': 'Изгиб',
    'Stretch': 'Удлинение',
    'Diagonal': 'Косуми',
    'Wedge': 'Вклинивание',
    'Hane': 'Ханэ',
    'Cut': 'Разрезание',
    'Square': 'Квадрат',
    'Throwing Star': 'Сюрикэн',
    'Parallelogram': 'Параллелограмм',
    'Dog’s Head': 'Голова собаки',
    'Horse’s Head': 'Голова лошади',
    'Attachment': 'Прилипание',
    'One-Point Jump': 'Иккэн-тоби',
    'Big Bulge': 'Большая выпуклость',
    'Small Knight': 'Кэйма',
    'Two-Point Jump': 'Никэн-тоби',
    'Large Knight': 'Огэйма',
    '3-3 Point Invasion': 'Вторжение в сан-сан',
    'Shoulder Hit': 'Удар в плечо',
    'Diagonal Jump': 'Хазама-тоби',
    '3-4 Point': 'Комоку',
    '4-4 Point': 'Хоси',
    '3-3 Point': 'Сан-сан',
    '3-5 Point': 'Мокухадзуси',
    '4-5 Point': 'Такамоку',
    '6-3 Point': 'Омокухадзуси',
    '6-4 Point': 'Отакамоку',
    '5-5 Point': 'Гоного',
    'Pass': 'Пас',
    'Take': 'Взятие',
    'Atari': 'Атари',
    'Suicide': 'Самоубийственный ход',
    'Fill': 'Заполнение',
    'Connect': 'Соединение',
    'Tengen': 'Тэнгэн',
    'Hoshi': 'Хоси'
  }
}
