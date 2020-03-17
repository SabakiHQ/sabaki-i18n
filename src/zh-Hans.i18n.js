module.exports = {
  'menu.file': {
    'New Window': '&W新窗口',
    'File': '&F文件',
    'New': '&N新对局',
    'Open…': '&O打开...',
    'Save': '&S保存',
    'Save As…': '&v另存为...',
    'Clipboard': '&C剪贴板',
    'Load SGF': '&L从剪贴板加载SGF',
    'Copy SGF': '&C拷贝SGF到剪贴板',
    'Copy ASCII Diagram': '&A拷贝ASCII棋盘到剪贴板',
    'Game Info': '&I对局信息',
    'Manage Games…': '&M对局管理...',
    'Preferences…': '&P首选项...'
  },
  'updater': {
    'Download Update': '下载更新',
    'View Changelog': '查看更新日志',
    'Not Now': '现在不',
    '${appName} v${version} is available now.': p => `新版本 ${p.appName} v${p.version} 可下载。`,
    'OK': '好',
    'No updates available': '没有新版本',
    '${appName} v${version} is the latest version.': p => `${p.appName} v${p.version} 已是最新版本。`
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
    'Play': '&P对局',
    'Toggle Player': '&T切换黑/白）',
    'Select Point': '&l输入坐标',
    'Enter a coordinate to select a point':
      '输入坐标来选点',
    'Pass': '&P停一手',
    'Resign': '&n认输',
    'Estimate': '&E形势判断',
    'Score': '&r计算胜负'
  },
  'menu.edit': {
    'Edit': '&E编辑',
    'Undo': '&U撤销',
    'Redo': '&d取消撤销',
    'Toggle Edit Mode': '&E进入/离开编辑模式',
    'Select Tool': '&S选择工具',
    'Stone Tool': '&S棋子',
    'Cross Tool': '&C叉',
    'Triangle Tool': '&T三角',
    'Square Tool': '&q方块',
    'Circle Tool': '&i圆',
    'Line Tool': '&L线',
    'Arrow Tool': '&A箭头',
    'Label Tool': '&b字母',
    'Number Tool': '&N数字',
    'Copy Variation': '&C复制变化',
    'Cut Variation': '&t剪切变化',
    'Paste Variation': '&P粘贴变化',
    'Make Main Variation': '&V设为主要变化',
    'Shift Left': '&L左移',
    'Shift Right': '&g右移',
    'Flatten': '&F清空该节点前的所有变化',
    'Remove Node': '&R删除节点',
    'Remove Other Variations': '&O删除此外的所有变化'
  },
  'menu.find': {
    'Find': '&d查找',
    'Toggle Find Mode': '&F进入/离开查找模式',
    'Find Next': '&N下一个',
    'Find Previous': '&P上一个',
    'Toggle Hotspot': '&H标记/取消焦点',
    'Jump to Next Hotspot': '&x跳转到下一焦点',
    'Jump to Previous Hotspot': '&v跳转到上一焦点'
  },
  'menu.navigation': {
    'Navigation': '&N导航',
    'Back': '&B向后',
    'Forward': '&F向前',
    'Go to Previous Fork': '&P上一分叉',
    'Go to Next Fork': '&N下一分叉',
    'Go to Previous Comment': '&t上一注释',
    'Go to Next Comment': '&C下一注释',
    'Go to Beginning': '&g开局',
    'Go to End': '&E终局',
    'Go to Main Variation': '&M主要变化',
    'Go to Previous Variation': '&V上一变化',
    'Go to Next Variation': '&r下一变化',
    'Go to Move Number': '&u第...手',
    'Enter a move number to go to': '请输入手数',
    'Go to Next Game': '&x下一个对局',
    'Go to Previous Game': '&s上一个对局'
  },
  'menu.engines': {
    'Engines': '&i引擎',
    'Show Engines Sidebar': '&E显示引擎侧边栏',
    'Toggle Analysis': '&A开始/停止分析',
    'None of the attached engines support analysis.': 
      '加载的引擎不支持分析模式',
    'Start Engine vs. Engine Game': '&G开始引擎间的对战',
    'Stop Engine vs. Engine Game': '&G停止引擎间的对战',
    'Generate Move': '&M生成一手棋',
    'Please assign an engine to the player first.': 
      '请先为当前玩家分配一个引擎',
    'Manage Engines…': '&E管理引擎...',
    'Clear Console': '&C清空'
  },
  'menu.tools': {
    'Tools': '&T工具',
    'Toggle Autoplay Mode': '&p进入/离开自动播放模式',
    'Toggle Guess Mode': '&G进入/离开猜棋模式',
    'Clean Markup…': '&M删除标记...',
    'Edit SGF Properties…': '&E编辑SGF属性',
    'Rotate Anticlockwise': '&A逆时针旋转',
    'Rotate Clockwise': '&C顺时针旋转',
    'Flip Horizontally': '&F水平翻转',
    'Flip Vertically': '&V垂直翻转',
    'Invert Colors': '&I对调黑白',
    'Reset': '&R重置'
  },
  'menu.view': {
    'View': '&V界面',
    'Toggle Menu Bar': '&B显示/隐藏菜单栏',
    'Toggle Full Screen': '&F进入/取消全屏',
    'Show Coordinates': '&C显示坐标',
    'Show Move Numbers': '&u显示手数',
    'Show Move Colorization': '&z颜色标记评注',
    'Show Next Moves': '&N用圆点显示下一手',
    'Show Sibling Variations': '&S用圆点显示该手的其它变化',
    'Show Heatmap': '&W显示热图',
    'Don’t Show': '&D不显示',
    'Show Win Rate': 'W显示胜率',
    'Show Score Lead': '&S显示目数差',
    'Show Winrate Graph': '&W显示胜率图',
    'Show Game Tree': '&T显示变化树',
    'Show Comments': '&m显示注释',
    'Zoom': '&o缩放',
    'Increase': '&I放大',
    'Decrease': '&D缩小',
    'Reset': '&R重置',
    'Transform Board': '&r棋盘显示'
  },
  'menu.help': {
    'Help': '&H帮助',
    '${appName} v${version}':  p => `${p.appName} v${p.version}`,
    'Check for Updates': '&U检查更新',
    'GitHub Repository': '&R  GitHub 仓库',
    'Report Issue': '&I反馈问题'
  },
  'menu.developer': {
    'Developer': '&o开发者',
    'Open Settings Folder': '&F浏览配置文件夹',
    'Toggle Developer Tools': '&D显示/隐藏开发者工具',
    'Load Language File…': '&L载入语言包...',
    'A language file is basically a JavaScript file and can be used to execute arbitrary code on your computer.\n\nIt can be extremely dangerous, so it is recommended to only load language files from authors you trust.': 
      '语言包是一个JaveScript文件，可能在您的计算机上执行任何指令，所以请不要载入任何不可信来源的语言包文件。',
    'I understand': '我了解',
    'JavaScript Files': 'JavaScript 文件',
    'Unload Language File': '&U卸载语言包'
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
    'GTP engines don’t support invalid board positions.': 'GTP引擎不支持非法的棋盘坐标点',
    'GTP engines only support board sizes that don’t exceed ${length}.': p => `GTP引擎仅支持不超过 ${p.length} 的棋盘尺寸`,
    'Current board arrangement can’t be recreated on the GTP engine.': 'GTP引擎加载当前棋盘状态失败',
    'GTP engine can’t be synced to current state.': 'GTP引擎与当前棋盘状态同步失败'
  },
  'gtplogger': {
    'You have an invalid log folder for GTP console logging in your settings.\n\nPlease make sure the log directory is valid and writable, or disable GTP console logging.': 
      '当前GTP引擎日志文件目录设置错误，请确保设置的引擎日志文件目录存在且具有写入权限，否则请关闭引擎日志记录。'
  },
  'sabaki.window': {
    'Game ${gameNumber}':  p => `对局 ${p.gameNumber}`
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
    'Edit Label': '&E编辑字母/文字',
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
    'Please attach one or more engines first.': 
      '请先载入一个或多个引擎。',
    'The selected engine does not support analysis.': 
      '当前选择的引擎不支持分析模式。'
  },
  'sabaki.node': {
    'Do you really want to remove this node?': 
      '您确定要删除该节点吗？',
    'Remove Node': '删除节点',
    'Cancel': '取消',
    'Do you really want to remove all other variations?': 
      '您确定要删除所有其它变化吗？',
    'Remove Variations': '删除变化'
  },
  'menu.comment': {
    'Clear Annotations': '&C清除评注',
    'Good for Black': '&B黑好',
    'Unclear Position': '&U形势不明',
    'Even Position': '&E均势',
    'Good for White': '&W白好',
    'Good Move': '&G好棋',
    'Interesting Move': '&I有趣的一手',
    'Doubtful Move': '&D问题手',
    'Bad Move': '&a臭棋',
    'Hotspot': '&H焦点'
  },
  'menu.variation': {
    'Add Variation': '&A新增变化',
    'The root node cannot have sibling nodes.': 
      '根节点不能有旁系分支节点'
  },
  'menu.engineAction': {
    'Start': '&S开始',
    'Stop': '&S停止',
    'Detach': '&D卸载引擎',
    'Synchronize': '&y同步',
    'Generate Move': '&G生成下一手',
    'Set as Analyzer': '&A设为分析器',
    'Set as Black Player': '&B持黑',
    'Set as White Player': '&W持白',
    'Go to Engine': '&G转到引擎控制台'
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
    'Click on the board to guess the next move.': 
      '点击棋盘猜下一手。'
  },
  'PlayBar': {
    'Pass': '&P停一手',
    'Resign': '&R认输',
    'Estimate': '&t形势判断',
    'Score': '&S计算胜负',
    'Edit': '&E编辑',
    'Find': '&F查找',
    'Info': '&I对局信息',
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
    'Please select dead stones.': '请点选死棋',
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
    'From Current Position': '&P仅删除当前节点的标记',
    'From Entire Game': '&G删除对局中所有的标记',
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
    'Remove Other Games': '&O删除除此之外的所有对局',
    'Do you really want to remove all other games permanently?': 
      '您确定要删除除此之外的所有对局吗？',
    'Remove Games': '删除对局',
    'Add New Game': '&N增加新对局',
    'Add Existing Files…': '打开文件...',
    'All Files': '所有文件',
    'Some files are unreadable.': '部分文件无法读取',
    'Black Player': '&B黑棋玩家名称',
    'White Player': '&W白棋玩家名称',
    'Black Rank': '&a黑棋段位',
    'White Rank': '&k白棋段位',
    'Game Name': '对局名称',
    'Game Event': '赛事名称',
    'Date': '日期',
    'Number of Moves': '&M总手数',
    'Reverse': '&R倒序',
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
    '${stones} stones':  p => `${p.stones} 子`,
    'Board Size': '棋盘尺寸',
    'OK': '确定',
    'Cancel': '取消'
  },
  'PreferencesDrawer': {
    'Enable hardware acceleration if possible': '硬件加速（若支持）',
    'Check for updates at startup': '启动程序时检查更新',
    'Enable sounds': '打开声音',
    'Jump to end after loading file': '打开对局文件后跳转至对局末尾',
    'Fuzzy stone placement': '棋子显示位置不必严格地位于棋盘交叉线上',
    'Animate fuzzy placement': '落子时棋子显示位置动态效果',
    'Instantly play out analysis variations on board': '分析模式下立即显示完整变化',
    'Show automatic move titles': '显示落子术语',
    'Show ko warning': '非法劫提示',
    'Show suicide warning': '自杀手提示',
    'Show remove node warning': '删除节点时提示确认',
    'Show remove other variations warning': '删除其它变化时提示确认',
    'Offer to reload file if changed externally': '文件被外部程序修改后提示重新载入',
    'Click last played stone to remove': '点击最后一手棋可删除该手',
    'Invert winrate graph': '翻转胜率图',
    'Game Tree Style:': '对局变化树样式',
    'Compact': '紧凑',
    'Spacious': '大间距',
    'Big': '大图标',
    'Path': '路径',
    'Browse…': '浏览...',
    'Directory not found': '未找到文件夹',
    'File not found': '未找到文件',
    'Do you really want to uninstall this theme?': 
      '您确定要卸载该主题吗？',
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
    'Default': '默认',
    'Install Theme…': '安装主题...',
    'Get more themes…': '获取更多主题...',
    'by ${author}': p => `作者：${p.author}`,
    'Homepage': '主页',
    'All Files': '所有文件',
    'Remove': '删除',
    '(Unnamed Engine)': '（未命名的引擎）',
    'No arguments': '无运行参数',
    'Initial commands (;-separated)': '启动参数(用;分隔)',
    'Enable GTP logging to directory:': 'GTP日志保存目录：',
    'Add': '新增',
    'General': '一般',
    'Themes': '主题',
    'Engines': '对弈引擎',
    'Close': '关闭'
  },
  'ScoreDrawer': {
    'Black': '黑棋',
    'White': '白棋',
    'Draw': '平局',
    'Area': '子数',
    'Territory': '目数',
    'Captures': '提子',
    'Komi': '贴目',
    'Handicap': '让子',
    'Total': '总目数',
    'Result:': '对局结果',
    'Update Result': '更新对局结果',
    'Close': '关闭'
  },
  'CommentBox': {
    'Result: ${result}': p => `对局结果：${p.result}`,
    '${a}-${b} Point':  p => `${p.a}-${p.b}`,
    'View article on Sensei’s Library': '在 Sensei’s Library 上查看文章',
    'Bad move': '臭棋',
    'Very bad move': '大臭棋',
    'Doubtful move': '问题手',
    'Very doubtful move': '严重的问题手',
    'Interesting move': '有意思的一手',
    'Very interesting move': '很有意思的一手',
    'Good move': '好棋',
    'Very good move': '妙手',
    'Good for White': '白形势好',
    'Very good for White': '白形势大好',
    'Even position': '形势均衡',
    'Very even position': '形势特别均衡',
    'Good for Black': '黑形势好',
    'Very good for Black': '黑形势大好',
    'Unclear position': '形势不明朗',
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
    'Attach Engine…': '加载对弈引擎...',
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
    'Smart Game Format': 'Smart Game Format'
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
    '3-3 Point': '三三',
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
    'Shoulder Hit': '尖冲',
    'Diagonal Jump': '象飞',
    '4-4 Point': '星位'
  }
}
