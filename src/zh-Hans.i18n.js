module.exports = {
  'menu.file': {
    'New Window': '新窗口',
    'File': '文件',
    'New': '新对局',
    'Open…': '打开...',
    'Save': '保存',
    'Save As…': '另存为...',
    'Clipboard': '剪贴板',
    'Load SGF': '从剪贴板加载SGF',
    'Copy SGF': '拷贝SGF到剪贴板',
    'Copy ASCII Diagram': '拷贝ASCII棋盘到剪贴板',
    'Game Info': '对局信息',
    'Manage Games…': '对局管理...',
    'Preferences…': '首选项...',
    'Quit': '离开'
  },
  'updater': {
    'Download Update': '下载更新',
    'View Changelog': '查看更新日志',
    'Not Now': '现在不',
    '${appName} v${version} is available now.': p =>
      `新版本 ${p.appName} v${p.version} 可下载。`,
    'OK': '好',
    'No updates available': '没有新版本',
    '${appName} v${version} is the latest version.': p =>
      `${p.appName} v${p.version} 已是最新版本。`
  },
  'exception': {
    '${appName} v${version}': p => `${p.appName} v${p.version}`,
    'Something weird happened. ${appName} will shut itself down. If possible, please report this on ${appName}’s repository on GitHub.': p =>
      [
        `${p.appName} 遇到了一个问题需要关闭`,
        `您可以在 ${p.appName} 的 GitHub 主页上报告该问题`
      ].join(' ')
  },
  'menu.play': {
    'Play': '对局',
    'Toggle Player': '切换玩家（黑/白）',
    'Select Point': '输入坐标',
    'Enter a coordinate to select a point': '输入坐标来选点',
    'Pass': '停一手',
    'Resign': '认输',
    'Estimate': '形势判断',
    'Score': '计算胜负'
  },
  'menu.edit': {
    'Edit': '编辑',
    'Undo': '撤销',
    'Redo': '取消撤销',
    'Toggle Edit Mode': '进入/离开编辑模式',
    'Select Tool': '选择工具',
    'Stone Tool': '棋子',
    'Cross Tool': '叉',
    'Triangle Tool': '三角',
    'Square Tool': '方块',
    'Circle Tool': '圆',
    'Line Tool': '线',
    'Arrow Tool': '箭头',
    'Label Tool': '字母',
    'Number Tool': '数字',
    'Copy Variation': '复制变化',
    'Cut Variation': '剪切变化',
    'Paste Variation': '粘贴变化',
    'Make Main Variation': '设为主要变化',
    'Shift Left': '左移',
    'Shift Right': '右移',
    'Flatten': '清空该节点前的所有变化',
    'Remove Node': '删除节点',
    'Remove Other Variations': '删除此外的所有变化',
    'Annotate': '评注',
    'Toggle Show Comments': '切换显示注释'
  },
  'menu.find': {
    'Find': '查找',
    'Toggle Find Mode': '进入/离开查找模式',
    'Find Next': '下一个',
    'Find Previous': '上一个',
    'Toggle Hotspot': '标记/取消焦点',
    'Jump to Next Hotspot': '跳转到下一焦点',
    'Jump to Previous Hotspot': '跳转到上一焦点'
  },
  'menu.navigation': {
    'Navigation': '导航',
    'Back': '向后',
    'Forward': '向前',
    'Go to Previous Fork': '上一分叉',
    'Go to Next Fork': '下一分叉',
    'Go to Previous Comment': '上一注释',
    'Go to Next Comment': '下一注释',
    'Go to Beginning': '开局',
    'Go to End': '终局',
    'Go to Main Variation': '主要变化',
    'Go to Previous Variation': '上一变化',
    'Go to Next Variation': '下一变化',
    'Go to Move Number': '第...手',
    'Enter a move number to go to': '请输入手数',
    'Go to Next Game': '下一个对局',
    'Go to Previous Game': '上一个对局'
  },
  'menu.engines': {
    'Engines': '引擎',
    'Show Engines Sidebar': '显示引擎侧边栏',
    'Toggle Analysis': '开始/停止分析',
    'None of the attached engines support analysis.':
      '加载的引擎不支持分析模式',
    'Start Engine vs. Engine Game': '开始引擎间的对战',
    'Stop Engine vs. Engine Game': '停止引擎间的对战',
    'Generate Move': '生成一手棋',
    'Please assign an engine to the player first.':
      '请先为当前玩家分配一个引擎',
    '(Unnamed Engine)': '(未命名的引擎)',
    'Manage Engines…': '管理引擎...',
    'Clear Console': '清空'
  },
  'menu.tools': {
    'Tools': '工具',
    'Toggle Autoplay Mode': '进入/离开自动播放模式',
    'Toggle Guess Mode': '进入/离开猜棋模式',
    'Clean Markup…': '删除标记...',
    'Edit SGF Properties…': '编辑SGF属性',
    'Rotate Anticlockwise': '逆时针旋转',
    'Rotate Clockwise': '顺时针旋转',
    'Flip Horizontally': '水平翻转',
    'Flip Vertically': '垂直翻转',
    'Invert Colors': '对调黑白',
    'Reset': '重置'
  },
  'menu.view': {
    'View': '界面',
    'Toggle Menu Bar': '显示/隐藏菜单栏',
    'Toggle Full Screen': '进入/取消全屏',
    'Show Coordinates': '显示坐标',
    'Don’t Show': '不显示',
    'A1 (Default)': 'A1（默认）',
    '1-1': '1-1',
    'Relative': '相对',
    'Show Move Numbers': '显示手数',
    'Show Move Colorization': '颜色标记评注',
    'Show Next Moves': '用圆点显示下一手',
    'Show Sibling Variations': '用圆点显示该手的其它变化',
    'Show Heatmap': '显示热图',
    'Show Win Rate': '显示胜率',
    'Show Score Lead': '显示目数差',
    'Show Winrate Graph': '显示胜率图',
    'Show Game Tree': '显示变化树',
    'Show Comments': '显示注释',
    'Zoom': '缩放',
    'Increase': '放大',
    'Decrease': '缩小',
    'Reset': '重置',
    'Transform Board': '棋盘显示'
  },
  'menu.help': {
    'Help': '帮助',
    '${appName} v${version}': p => `${p.appName} v${p.version}`,
    'Check for Updates': '检查更新',
    'GitHub Repository': 'GitHub 主页',
    'Report Issue': '反馈问题'
  },
  'menu.developer': {
    'Developer': '开发者',
    'Open Settings Folder': '浏览配置文件夹',
    'Toggle Developer Tools': '显示/隐藏开发者工具',
    'Load Language File…': '载入语言包...',
    'A language file is basically a JavaScript file and can be used to execute arbitrary code on your computer.\n\nIt can be extremely dangerous, so it is recommended to only load language files from authors you trust.':
      '语言包是一个JaveScript文件，可能在您的计算机上执行任何指令，所以请不要载入任何不可信来源的语言包文件。',
    'I understand': '我了解',
    'JavaScript Files': 'JavaScript 文件',
    'Unload Language File': '卸载语言包'
  },
  'menu.macos': {
    'Text': '文本'
  },
  'App': {
    'Press Esc to exit full screen mode': '按 ESC 键退出全屏',
    'Press Alt to show menu bar': '按 Alt 键显示菜单栏'
  },
  'ContentDisplay': {
    'Jump to Move Number': '跳转至手数'
  },
  'dialog': {
    'OK': 'OK'
  },
  'EngineSyncer': {
    'GTP engines don’t support invalid board positions.':
      'GTP引擎不支持非法的棋盘坐标点',
    'GTP engines only support board sizes that don’t exceed ${length}.': p =>
      `GTP引擎仅支持不超过 ${p.length} 的棋盘尺寸`,
    'Current board arrangement can’t be recreated on the GTP engine.':
      'GTP引擎加载当前棋盘状态失败',
    'GTP engine can’t be synced to current state.':
      'GTP引擎与当前棋盘状态同步失败'
  },
  'gtplogger': {
    'You have an invalid log folder for GTP console logging in your settings.\n\nPlease make sure the log directory is valid and writable, or disable GTP console logging.':
      '当前GTP引擎日志文件目录设置错误，请确保设置的引擎日志文件目录存在且具有写入权限，否则请关闭引擎日志记录。'
  },
  'sabaki.window': {
    'Game ${gameNumber}': p => `对局 ${p.gameNumber}`
  },
  'sabaki.file': {
    'All Files': '全部文件',
    'This file is unreadable.': '无法读取该文件',
    'Your changes will be lost if you close this file without saving.':
      '如果您不保存就关闭，您做的更改将丢失。',
    'Save': '保存',
    'Don’t Save': '不保存',
    'Cancel': '取消',
    'This file has been changed outside of ${appName}.\nDo you want to reload the file? Your changes will be lost.': p =>
      [
        `该文件被外部应用修改。`,
        '是否重新打开该文件? 你当前所做的改变会丢失。'
      ].join('\n'),
    'Reload': '重新打开',
    'Don’t Reload': '不重新打开'
  },
  'sabaki.play': {
    'Edit Label': '编辑字母/文字',
    'Enter label text': '请输入标记字母/文字',
    'You are about to play a move which repeats a previous board position.\nThis is invalid in some rulesets.':
      '您输入的这一手将导致棋盘状态与之前某一手后状态完全一致，在许多围棋规则中这是不允许的。',
    'Play Anyway': '仍然下这一手',
    'Don’t Play': '取消',
    'You are about to play a suicide move.\nThis is invalid in some rulesets.':
      '您的这一手是自杀，在许多围棋规则中这是不允许的。'
  },
  'sabaki.engine': {
    'Connection Failed': '连接失败',
    '${engine} has failed to generate a move.': p =>
      `${p.engine} 引擎生成下一手棋失败。`,
    '${engine} has resigned.': p => `${p.engine} 认输了。`,
    'Please attach one or more engines first.': '请先载入一个或多个引擎。',
    'The selected engine does not support analysis.':
      '当前选择的引擎不支持分析模式。'
  },
  'sabaki.node': {
    'Do you really want to remove this node?': '您确定要删除该节点吗？',
    'Remove Node': '删除节点',
    'Cancel': '取消',
    'Do you really want to remove all other variations?':
      '您确定要删除所有其它变化吗？',
    'Remove Variations': '删除变化'
  },
  'menu.comment': {
    'Clear Annotations': '清除评注',
    'Good for Black': '黑好',
    'Unclear Position': '形势不明',
    'Even Position': '均势',
    'Good for White': '白好',
    'Good Move': '好棋',
    'Interesting Move': '有趣的一手',
    'Doubtful Move': '问题手',
    'Bad Move': '臭棋',
    'Hotspot': '焦点'
  },
  'menu.variation': {
    'Add Variation': '新增变化',
    'The root node cannot have sibling nodes.': '根节点不能有旁系分支节点'
  },
  'menu.engineAction': {
    'Start': '开始',
    'Stop': '停止',
    'Detach': '卸载引擎',
    'Synchronize': '同步',
    'Generate Move': '生成下一手',
    'Set as Analyzer': '设为分析器',
    'Set as Black Player': '持黑',
    'Set as White Player': '持白',
    'Go to Engine': '转到引擎控制台'
  },
  'AutoplayBar': {
    'sec per move': '秒每步'
  },
  'EditBar': {
    'Stone Tool': '棋子',
    'Cross Tool': '叉',
    'Triangle Tool': '三角',
    'Square Tool': '方块',
    'Circle Tool': '圆',
    'Line Tool': '线',
    'Arrow Tool': '箭头',
    'Label Tool': '字母',
    'Number Tool': '数字'
  },
  'FindBar': {
    'Find': '查找',
    'Next': '下一个',
    'Previous': '上一个'
  },
  'GuessBar': {
    'Click on the board to guess the next move.': '点击棋盘猜下一手。'
  },
  'PlayBar': {
    'Pass': '停一手',
    'Resign': '认输',
    'Estimate': '形势判断',
    'Score': '计算胜负',
    'Edit': '编辑',
    'Find': '查找',
    'Info': '对局信息',
    'Hotspot': '焦点',
    'Engine': '引擎',
    'Black': '黑棋',
    'Change Player': '切换玩家（黑/白）',
    'White to play': '轮到白棋',
    'Black to play': '轮到黑棋',
    'White': '白棋'
  },
  'ScoringBar': {
    'Details': '查看详细',
    'Draw': '平局',
    'Please select dead stones.': '请点击设置活棋/死棋',
    'Toggle group status.': '请点击设置活棋/死棋'
  },
  'AdvancedPropertiesDrawer': {
    'Remove': '移除',
    'Enter property name': '输入属性名称',
    'This property has been blocked.': '该属性已被阻止',
    'Add': '新增',
    'Close': '关闭'
  },
  'CleanMarkupDrawer': {
    'From Current Position': '仅删除当前节点的标记',
    'From Entire Game': '删除对局中所有的标记',
    'Clean Markup': '删除标记',
    'Cross markers': '叉',
    'Triangle markers': '三角',
    'Square markers': '方块',
    'Circle markers': '圆',
    'Line markers': '线',
    'Arrow markers': '箭头',
    'Label markers': '字母',
    'Comments': '注释',
    'Annotations': '评注',
    'Hotspots markers': '焦点',
    'Winrate data': '胜率',
    'Remove': '删除',
    'Close': '关闭'
  },
  'GameChooserDrawer': {
    'Black': '黑棋',
    'White': '白棋',
    'Remove Game': '删除对局',
    'Do you really want to remove this game permanently?':
      '您确定要删除这个对局吗？',
    'Cancel': '取消',
    'Remove Other Games': '删除除此之外的所有对局',
    'Do you really want to remove all other games permanently?':
      '您确定要删除除此之外的所有对局吗？',
    'Remove Games': '删除对局',
    'Add New Game': '增加新对局',
    'Add Existing Files…': '打开文件...',
    'All Files': '所有文件',
    'Some files are unreadable.': '部分文件无法读取',
    'Black Player': '黑棋玩家名称',
    'White Player': '白棋玩家名称',
    'Black Rank': '黑棋段位',
    'White Rank': '白棋段位',
    'Game Name': '对局名称',
    'Game Event': '赛事名称',
    'Date': '日期',
    'Number of Moves': '总手数',
    'Reverse': '倒序',
    'Manage Games': '管理对局',
    'Filter': '过滤',
    'Add': '添加',
    'Sort By': '排序',
    'Close': '关闭'
  },
  'InfoDrawer': {
    'Manual': '手动',
    '(Unnamed Engine)': '(未命名的引擎)',
    'Attach Engine': '加载引擎',
    'Manage Engines…': '管理引擎...',
    'Previous Month': '上个月',
    'Next Month': '下个月',
    'Rank': '段位',
    'Black': '黑棋名称',
    'Swap': '交换',
    'White': '白棋名称',
    'Name': '对局名称',
    '(Unnamed)': '(未命名)',
    'Event': '赛事名称',
    'None': '无',
    'Date': '日期',
    'Comment': '注释',
    'Result': '对局结果',
    'Show': '显示',
    'Komi': '贴目',
    'Handicap': '让子',
    'No stones': '无',
    '${stones} stones': p => `${p.stones} 子`,
    'Board Size': '棋盘尺寸',
    'OK': '确定',
    'Cancel': '取消'
  },
  'PreferencesDrawer': {
    'Please restart ${appName} to apply your language setting.': p => 
      `请重新启动 ${p.appName} 以应用您的语言设置。`,
    'Enable hardware acceleration if possible': '硬件加速（若支持）',
    'Check for updates at startup': '启动程序时检查更新',
    'Enable sounds': '打开声音',
    'Jump to end after loading file': '打开对局文件后跳转至对局末尾',
    'Fuzzy stone placement': '棋子显示位置不必严格地位于棋盘交叉线上',
    'Animate fuzzy placement': '落子时棋子显示位置动态效果',
    'Variation Replay Mode:': '变化的显示模式',
    'Disabled': '禁用',
    'Move by Move': '逐步显示变化',
    'Instantly': '立刻显示变化',
    'Language:': '语言:',
    'Game Tree Style:': '对局变化树样式',
    'Compact': '紧凑',
    'Spacious': '大间距',
    'Big': '大图标',
    'Show automatic move titles': '显示落子术语',
    'Show ko warning': '非法劫提示',
    'Show suicide warning': '自杀手提示',
    'Show remove node warning': '删除节点时提示确认',
    'Show remove other variations warning': '删除其它变化时提示确认',
    'Offer to reload file if changed externally':
      '文件被外部程序修改后提示重新载入',
    'Click last played stone to remove': '点击最后一手棋可删除该手',
    'Invert winrate graph': '翻转胜率图',
    'Path': '路径',
    'Browse…': '浏览...',
    'Directory not found': '未找到文件夹',
    'File not found': '未找到文件',
    'Do you really want to uninstall this theme?': '您确定要卸载该主题吗？',
    'Uninstall': '卸载',
    'Cancel': '取消',
    'Uninstallation failed.': '卸载失败',
    'Sabaki Themes': 'Sabaki 主题',
    'Installation failed.': '安装失败',
    'Custom Images': '自定义图片',
    'Black stone image:': '黑棋子图片',
    'White stone image:': '白棋子图片',
    'Board image:': '棋盘图片',
    'Background image:': '背景图片',
    'Current Theme': '当前主题',
    'Default': '默认',
    'Install Theme…': '安装主题...',
    'Get more themes…': '获取更多主题...',
    'by ${author}': p => `作者：${p.author}`,
    'Homepage': '主页',
    'All Files': '所有文件',
    'Remove': '删除',
    '(Unnamed Engine)': '(未命名的引擎)',
    'No arguments': '无运行参数',
    'Initial commands (;-separated)': '启动参数(用;分隔)',
    'Enable GTP logging to directory:': 'GTP日志保存目录：',
    'Add': '新增',
    'General': '一般',
    'Themes': '主题',
    'Engines': '引擎',
    'Close': '关闭',
    /* unused */ 'Instantly play out analysis variations on board':
      '分析模式下立即显示完整变化'
  },
  'ScoreDrawer': {
    'Black': '黑棋',
    'White': '白棋',
    'Draw': '平局',
    'Score': '点目',
    'Area': '子数',
    'Territory': '目数',
    'Captures': '提子',
    'Komi': '贴目',
    'Handicap': '让子',
    'Total': '总分数',
    'Result:': '对局结果',
    'Update Result': '更新对局结果',
    'Close': '关闭'
  },
  'CommentBox': {
    'Result: ${result}': p => `对局结果：${p.result}`,
    '${a}-${b} Point': p => `${p.a}-${p.b}`,
    'View article on Sensei’s Library': '在 Sensei’s Library 上查看文章',
    'Bad move': '臭棋',
    'Very bad move': '大臭棋',
    'Doubtful move': '问题手',
    'Very doubtful move': '严重的问题手',
    'Interesting move': '有趣的一手',
    'Very interesting move': '很有趣的一手',
    'Good move': '好棋',
    'Very good move': '妙手',
    'Good for White': '白好',
    'Very good for White': '白大好',
    'Even position': '均势',
    'Very even position': '完全均势',
    'Good for Black': '黑好',
    'Very good for Black': '黑大好',
    'Unclear position': '形势不明',
    'Very unclear position': '形势特别不明朗',
    'Edit': '编辑',
    'Title': '注释标题',
    'Comment': '注释'
  },
  'PeerList': {
    'Running': '运行中',
    'Stopped': '运行完毕',
    'Analyzer': '分析器',
    'Plays as Black': '执黑',
    'Plays as White': '执白',
    'Attach Engine…': '加载引擎...',
    'Start Engine vs. Engine Game': '开始引擎之间的对局',
    'Stop Engine vs. Engine Game': '停止引擎之间的对局'
  },
  'WinrateGraph': {
    'Black': '黑棋',
    'White': '白棋',
    'Black Winrate:': '黑棋胜率',
    'White Winrate:': '白棋胜率'
  },
  'fileformats': {
    'Tygem GIB': '弈城GIB',
    'Game Records': 'Game Records',
    'wBaduk NGF': 'wBaduk NGF',
    'Smart Game Format': 'Smart Game Format',
    'PandaNET UGF': 'PandaNet UGF'
  },
  'boardmatcher': {
    'Low Chinese Opening': '低中国流',
    'High Chinese Opening': '高中国流',
    'Orthodox Opening': '星+无忧角',
    'Enclosure Opening': '守角',
    'Kobayashi Opening': '小林流',
    'Small Chinese Opening': '变相中国流',
    'Micro Chinese Opening': '迷你中国流',
    'Sanrensei Opening': '三连星',
    'Nirensei Opening': '二连星',
    'Shūsaku Opening': '秀策流',
    'Low Approach': '低挂',
    'High Approach': '高挂',
    'Low Enclosure': '低位守角',
    'High Enclosure': '高位守角',
    'Mouth Shape': '跳方',
    'Table Shape': '变形跳方',
    'Tippy Table': '斜飞',
    'Bamboo Joint': '双',
    'Trapezium': '倒尖',
    'Diamond': '拔花型',
    'Tiger’s Mouth': '虎',
    'Empty Triangle': '空三角',
    'Turn': '拐',
    'Stretch': '长',
    'Diagonal': '尖',
    'Wedge': '挖',
    'Hane': '扳',
    'Cut': '断',
    'Square': '正方方阵',
    'Throwing Star': '小飞方阵',
    'Parallelogram': '错位方阵',
    'Dog’s Head': '猴脸',
    'Horse’s Head': '马脸',
    'Attachment': '贴',
    'One-Point Jump': '跳',
    'Big Bulge': '小飞方阵少一子',
    'Small Knight': '飞',
    'Two-Point Jump': '大跳',
    'Large Knight': '大飞',
    '3-3 Point Invasion': '点三三',
    'Shoulder Hit': '尖冲',
    'Diagonal Jump': '象飞',
    '3-4 Point': '小目',
    '4-4 Point': '星位',
    '3-3 Point': '三三',
    '3-5 Point': '目外',
    '4-5 Point': '高目',
    '6-3 Point': '6-3 点',
    '6-4 Point': '6-4 点',
    '5-5 Point': '五五',
    'Pass': '停一手',
    'Take': '提子',
    'Atari': '打',
    'Suicide': '自杀',
    'Fill': '填',
    'Connect': '粘',
    'Tengen': '天元',
    'Hoshi': '星'
  }
}
