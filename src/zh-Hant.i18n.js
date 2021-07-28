module.exports = {
  'menu.file': {
    'New Window': '新視窗',
    'File': '檔案',
    'New': '新對局',
    'Open…': '開啟...',
    'Save': '儲存',
    'Save As…': '另存為...',
    'Clipboard': '剪貼簿',
    'Load SGF': '從剪貼簿載入SGF',
    'Copy SGF': '拷貝SGF到剪貼簿',
    'Copy ASCII Diagram': '拷貝ASCII棋盤到剪貼簿',
    'Game Info': '對局資訊',
    'Manage Games…': '對局管理...',
    'Preferences…': '偏好設定...',
    'Quit': '離開'
  },
  'updater': {
    'Download Update': '下載更新',
    'View Changelog': '查看更新日誌',
    'Not Now': '現在不要',
    '${appName} v${version} is available now.': p =>
      `新版本 ${p.appName} v${p.version} 可更新。`,
    'OK': '好',
    'No updates available': '沒有新版本',
    '${appName} v${version} is the latest version.': p =>
      `${p.appName} v${p.version} 已是最新版本。`
  },
  'exception': {
    '${appName} v${version}': p => `${p.appName} v${p.version}`,
    'Something weird happened. ${appName} will shut itself down. If possible, please report this on ${appName}’s repository on GitHub.': p =>
      [
        `${p.appName} 遇到了一個問題需要關閉`,
        `您可以在 ${p.appName} 的 GitHub 主頁上回報此問題`
      ].join(' ')
  },
  'menu.play': {
    'Play': '對局',
    'Toggle Player': '切換玩家（黑/白）',
    'Select Point': '選擇座標',
    'Enter a coordinate to select a point': '輸入座標以選擇位置',
    'Pass': '虛手',
    'Resign': '認輸',
    'Estimate': '形勢判斷',
    'Score': '計算勝負'
  },
  'menu.edit': {
    'Edit': '編輯',
    'Undo': '復原',
    'Redo': '取消復原',
    'Toggle Edit Mode': '進入/離開編輯模式',
    'Select Tool': '選擇工具',
    'Stone Tool': '棋子',
    'Cross Tool': '叉',
    'Triangle Tool': '三角',
    'Square Tool': '方塊',
    'Circle Tool': '圓',
    'Line Tool': '線',
    'Arrow Tool': '箭頭',
    'Label Tool': '字母',
    'Number Tool': '數字',
    'Copy Variation': '複製變化',
    'Cut Variation': '剪下變化',
    'Paste Variation': '貼上變化',
    'Make Main Variation': '設為主要變化',
    'Shift Left': '左移',
    'Shift Right': '右移',
    'Flatten': '清空該節點前的所有變化',
    'Remove Node': '刪除節點',
    'Remove Other Variations': '刪除其他變化'
  },
  'menu.find': {
    'Find': '尋找',
    'Toggle Find Mode': '進入/離開尋找模式',
    'Find Next': '下一個',
    'Find Previous': '上一個',
    'Toggle Hotspot': '標記/取消焦點',
    'Jump to Next Hotspot': '跳轉到下一焦點',
    'Jump to Previous Hotspot': '跳轉到上一焦點'
  },
  'menu.navigation': {
    'Navigation': '導航',
    'Back': '向後',
    'Forward': '向前',
    'Go to Previous Fork': '上一分叉',
    'Go to Next Fork': '下一分叉',
    'Go to Previous Comment': '上一註釋',
    'Go to Next Comment': '下一註釋',
    'Go to Beginning': '開局',
    'Go to End': '終局',
    'Go to Main Variation': '主要變化',
    'Go to Previous Variation': '上一變化',
    'Go to Next Variation': '下一變化',
    'Go to Move Number': '前往第...手',
    'Enter a move number to go to': '請輸入手數',
    'Go to Next Game': '下一個對局',
    'Go to Previous Game': '上一個對局'
  },
  'menu.engines': {
    'Engines': '引擎',
    'Show Engines Sidebar': '顯示引擎側邊欄',
    'Toggle Analysis': '開始/停止分析',
    'None of the attached engines support analysis.':
      '載入的引擎不支援分析模式',
    'Start Engine vs. Engine Game': '開始引擎間的對戰',
    'Stop Engine vs. Engine Game': '停止引擎間的對戰',
    'Generate Move': '產生一手棋',
    'Please assign an engine to the player first.':
      '請先為當前玩家分配一個引擎',
    '(Unnamed Engine)': '(未命名的引擎)',
    'Manage Engines…': '管理引擎...',
    'Clear Console': '清空'
  },
  'menu.tools': {
    'Tools': '工具',
    'Toggle Autoplay Mode': '進入/離開自動播放模式',
    'Toggle Guess Mode': '進入/離開猜棋模式',
    'Clean Markup…': '刪除標記...',
    'Edit SGF Properties…': '編輯SGF屬性',
    'Rotate Anticlockwise': '逆時針旋轉',
    'Rotate Clockwise': '順時針旋轉',
    'Flip Horizontally': '水平翻轉',
    'Flip Vertically': '垂直翻轉',
    'Invert Colors': '對調黑白',
    'Reset': '重置'
  },
  'menu.view': {
    'View': '介面',
    'Toggle Menu Bar': '顯示/隱藏功能表列',
    'Toggle Full Screen': '進入/取消全螢幕',
    'Show Coordinates': '顯示座標',
    'Don’t Show': '不顯示',
    'A1 (Default)': 'A1 (預設)',
    '1-1': '1-1',
    'Relative': '相對',
    'Show Move Numbers': '顯示手數',
    'Show Move Colorization': '顏色標記評註',
    'Show Next Moves': '用圓點顯示下一手',
    'Show Sibling Variations': '用圓點顯示該手的其它變化',
    'Show Heatmap': '顯示熱圖',
    'Show Win Rate': '顯示勝率',
    'Show Score Lead': '顯示目數差',
    'Show Winrate Graph': '顯示勝率圖',
    'Show Game Tree': '顯示變化樹',
    'Show Comments': '顯示註釋',
    'Zoom': '縮放',
    'Increase': '放大',
    'Decrease': '縮小',
    'Reset': '重置',
    'Transform Board': '棋盤顯示'
  },
  'menu.help': {
    'Help': '幫助',
    '${appName} v${version}': p => `${p.appName} v${p.version}`,
    'Check for Updates': '檢查更新',
    'GitHub Repository': 'GitHub 主頁',
    'Report Issue': '回報問題'
  },
  'menu.developer': {
    'Developer': '開發者',
    'Open Settings Folder': '開啟設定檔案夾',
    'Toggle Developer Tools': '顯示/隱藏開發者工具',
    'Load Language File…': '載入語言包...',
    'A language file is basically a JavaScript file and can be used to execute arbitrary code on your computer.\n\nIt can be extremely dangerous, so it is recommended to only load language files from authors you trust.':
      '語言包基本上是一個JaveScript檔，可以在您的電腦上執行任何指令。所以請不要載入任何來源不可信的語言包檔案。',
    'I understand': '我瞭解',
    'JavaScript Files': 'JavaScript 檔案',
    'Unload Language File': '卸載語言包'
  },
  'menu.macos': {
    'Text': '文本'
  },
  'App': {
    'Press Esc to exit full screen mode': '按 ESC 鍵退出全螢幕模式',
    'Press Alt to show menu bar': '按 Alt 鍵顯示功能表'
  },
  'ContentDisplay': {
    'Jump to Move Number': '跳轉至手數'
  },
  'dialog': {
    'OK': 'OK'
  },
  'EngineSyncer': {
    'GTP engines don’t support invalid board positions.':
      'GTP引擎不支援非法的棋盤座標點',
    'GTP engines only support board sizes that don’t exceed ${length}.': p =>
      `GTP引擎僅支援不超過 ${p.length} 的棋盤尺寸`,
    'Current board arrangement can’t be recreated on the GTP engine.':
      'GTP引擎載入當前棋盤狀態失敗',
    'GTP engine can’t be synced to current state.':
      'GTP引擎與當前棋盤狀態同步失敗'
  },
  'gtplogger': {
    'You have an invalid log folder for GTP console logging in your settings.\n\nPlease make sure the log directory is valid and writable, or disable GTP console logging.':
      '當前GTP引擎日誌檔目錄設置錯誤，請確保設置的引擎日誌檔目錄存在且具有寫入許可權，否則請關閉引擎日誌記錄。'
  },
  'sabaki.window': {
    'Game ${gameNumber}': p => `對局 ${p.gameNumber}`
  },
  'sabaki.file': {
    'All Files': '全部檔案',
    'This file is unreadable.': '無法讀取該文件',
    'Your changes will be lost if you close this file without saving.':
      '如果您不儲存此檔案就關閉，您做的更改將遺失。',
    'Save': '儲存',
    'Don’t Save': '不儲存',
    'Cancel': '取消',
    'This file has been changed outside of ${appName}.\nDo you want to reload the file? Your changes will be lost.': p =>
      [
        `該文件已被外部程式修改。`,
        '是否重新載入該檔? 你當前所做的更改將會遺失。'
      ].join('\n'),
    'Reload': '重新載入',
    'Don’t Reload': '不重新載入'
  },
  'sabaki.play': {
    'Edit Label': '編輯字母/文字',
    'Enter label text': '請輸入標記字母/文字',
    'You are about to play a move which repeats a previous board position.\nThis is invalid in some rulesets.':
      '您輸入的這一手將導致棋盤狀態與之前某一手後狀態完全一致，在許多圍棋規則中這是不允許的。',
    'Play Anyway': '仍然下這一手',
    'Don’t Play': '取消',
    'You are about to play a suicide move.\nThis is invalid in some rulesets.':
      '您的這一手是自殺，在許多圍棋規則中這是不允許的。'
  },
  'sabaki.engine': {
    'Connection Failed': '連接失敗',
    '${engine} has failed to generate a move.': p =>
      `${p.engine} 引擎產生下一手棋失敗。`,
    '${engine} has resigned.': p => `${p.engine} 認輸了。`,
    'Please attach one or more engines first.': '請先載入一個或多個引擎。',
    'The selected engine does not support analysis.':
      '當前選擇的引擎不支援分析模式。'
  },
  'sabaki.node': {
    'Do you really want to remove this node?': '您確定要刪除該節點嗎？',
    'Remove Node': '刪除節點',
    'Cancel': '取消',
    'Do you really want to remove all other variations?':
      '您確定要刪除所有其它變化嗎？',
    'Remove Variations': '刪除變化'
  },
  'menu.comment': {
    'Clear Annotations': '清除評註',
    'Good for Black': '黑好',
    'Unclear Position': '形勢不明',
    'Even Position': '均勢',
    'Good for White': '白好',
    'Good Move': '好棋',
    'Interesting Move': '有趣的一手',
    'Doubtful Move': '問題手',
    'Bad Move': '臭棋',
    'Hotspot': '焦點'
  },
  'menu.variation': {
    'Add Variation': '新增變化',
    'The root node cannot have sibling nodes.': '根節點不能有旁系分支節點'
  },
  'menu.engineAction': {
    'Start': '開始',
    'Stop': '停止',
    'Detach': '卸載引擎',
    'Synchronize': '同步',
    'Generate Move': '產生下一手',
    'Set as Analyzer': '設為分析器',
    'Set as Black Player': '持黑',
    'Set as White Player': '持白',
    'Go to Engine': '轉到引擎控制台'
  },
  'AutoplayBar': {
    'sec per move': '秒/步'
  },
  'EditBar': {
    'Stone Tool': '棋子',
    'Cross Tool': '叉',
    'Triangle Tool': '三角',
    'Square Tool': '方塊',
    'Circle Tool': '圓',
    'Line Tool': '線',
    'Arrow Tool': '箭頭',
    'Label Tool': '字母',
    'Number Tool': '數字'
  },
  'FindBar': {
    'Find': '尋找',
    'Next': '下一個',
    'Previous': '上一個'
  },
  'GuessBar': {
    'Click on the board to guess the next move.': '點擊棋盤猜下一手。'
  },
  'PlayBar': {
    'Pass': '虛手',
    'Resign': '認輸',
    'Estimate': '形勢判斷',
    'Score': '計算勝負',
    'Edit': '編輯',
    'Find': '尋找',
    'Info': '對局資訊',
    'Hotspot': '焦點',
    'Engine': '引擎',
    'Black': '黑棋',
    'Change Player': '切換玩家（黑/白）',
    'White to play': '輪到白棋',
    'Black to play': '輪到黑棋',
    'White': '白棋'
  },
  'ScoringBar': {
    'Details': '查看詳細資訊',
    'Draw': '平局',
    'Please select dead stones.': '請點擊設置活棋/死棋',
    'Toggle group status.': '切換活棋/死棋狀態'
  },
  'AdvancedPropertiesDrawer': {
    'Remove': '移除',
    'Enter property name': '輸入屬性名稱',
    'This property has been blocked.': '該屬性已被阻止',
    'Add': '新增',
    'Close': '關閉'
  },
  'CleanMarkupDrawer': {
    'From Current Position': '僅刪除當前節點的標記',
    'From Entire Game': '刪除對局中所有的標記',
    'Clean Markup': '刪除標記',
    'Cross markers': '叉',
    'Triangle markers': '三角',
    'Square markers': '方塊',
    'Circle markers': '圓',
    'Line markers': '線',
    'Arrow markers': '箭頭',
    'Label markers': '字母',
    'Comments': '註釋',
    'Annotations': '評註',
    'Hotspots markers': '焦點',
    'Winrate data': '勝率',
    'Remove': '刪除',
    'Close': '關閉'
  },
  'GameChooserDrawer': {
    'Black': '黑棋',
    'White': '白棋',
    'Remove Game': '刪除對局',
    'Do you really want to remove this game permanently?':
      '您確定要永遠刪除這個對局嗎？',
    'Cancel': '取消',
    'Remove Other Games': '刪除除此之外的所有對局',
    'Do you really want to remove all other games permanently?':
      '您確定要刪除除此之外的所有對局嗎？',
    'Remove Games': '刪除對局',
    'Add New Game': '加入新對局',
    'Add Existing Files…': '加入現有檔案...',
    'All Files': '所有檔案',
    'Some files are unreadable.': '部分檔案無法讀取',
    'Black Player': '黑棋玩家名稱',
    'White Player': '白棋玩家名稱',
    'Black Rank': '黑棋段位',
    'White Rank': '白棋段位',
    'Game Name': '對局名稱',
    'Game Event': '賽事名稱',
    'Date': '日期',
    'Number of Moves': '總手數',
    'Reverse': '倒序',
    'Manage Games': '管理對局',
    'Filter': '過濾',
    'Add': '加入',
    'Sort By': '排序',
    'Close': '關閉'
  },
  'InfoDrawer': {
    'Manual': '手動',
    '(Unnamed Engine)': '(未命名的引擎)',
    'Attach Engine': '載入引擎',
    'Manage Engines…': '管理引擎...',
    'Previous Month': '上個月',
    'Next Month': '下個月',
    'Rank': '段位',
    'Black': '黑棋名稱',
    'Swap': '交換',
    'White': '白棋名稱',
    'Name': '對局名稱',
    '(Unnamed)': '(未命名)',
    'Event': '賽事名稱',
    'None': '無',
    'Date': '日期',
    'Comment': '註釋',
    'Result': '對局結果',
    'Show': '顯示',
    'Komi': '貼目',
    'Handicap': '讓子',
    'No stones': '無',
    '${stones} stones': p => `${p.stones} 子`,
    'Board Size': '棋盤尺寸',
    'OK': '確定',
    'Cancel': '取消'
  },
  'PreferencesDrawer': {
    'Please restart ${appName} to apply your language setting.': p =>
      `請重新啟動 ${p.appName} 以套用您的語言設定。`,
    'Enable hardware acceleration if possible': '硬體加速（若支援）',
    'Check for updates at startup': '啟動程式時檢查更新',
    'Enable sounds': '開啟聲音',
    'Jump to end after loading file': '開啟對局文件後跳轉至對局末尾',
    'Fuzzy stone placement': '棋子顯示位置不必嚴格地置於棋盤交叉線上',
    'Animate fuzzy placement': '落子時棋子顯示位置動態效果',
    'Variation Replay Mode:': '變化重播模式',
    'Disabled': '停用',
    'Move by Move': '逐手',
    'Instantly': '立即',
    'Language:': '語言:',
    'Game Tree Style:': '對局變化樹樣式',
    'Compact': '緊湊',
    'Spacious': '大間距',
    'Big': '大圖示',
    'Show automatic move titles': '顯示落子術語',
    'Show ko warning': '非法劫提示',
    'Show suicide warning': '自殺手提示',
    'Show remove node warning': '刪除節點時顯示警告',
    'Show remove other variations warning': '刪除其它變化時顯示警告',
    'Offer to reload file if changed externally':
      '檔案被外部程式修改後提示重新載入',
    'Click last played stone to remove': '點擊最後一手棋以刪除該手',
    'Invert winrate graph': '翻轉勝率圖',
    'Path': '路徑',
    'Browse…': '瀏覽...',
    'Directory not found': '未找到資料夾',
    'File not found': '未找到檔案',
    'Do you really want to uninstall this theme?': '您確定要解除安裝該主題嗎？',
    'Uninstall': '解除安裝',
    'Cancel': '取消',
    'Uninstallation failed.': '解除安裝失敗',
    'Sabaki Themes': 'Sabaki 主題',
    'Installation failed.': '安裝失敗',
    'Custom Images': '自訂圖片',
    'Black stone image:': '黑棋子圖片',
    'White stone image:': '白棋子圖片',
    'Board image:': '棋盤圖片',
    'Background image:': '背景圖片',
    'Current Theme': '當前主題',
    'Default': '預設',
    'Install Theme…': '安裝主題...',
    'Get more themes…': '取得更多主題...',
    'by ${author}': p => `作者：${p.author}`,
    'Homepage': '主頁',
    'All Files': '所有檔案',
    'Remove': '刪除',
    '(Unnamed Engine)': '(未命名的引擎)',
    'No arguments': '無運行參數',
    'Initial commands (;-separated)': '啟動參數(用;分隔)',
    'Enable GTP logging to directory:': 'GTP日誌儲存目錄：',
    'Add': '新增',
    'General': '一般',
    'Themes': '主題',
    'Engines': '引擎',
    'Close': '關閉',
    /* unused */ 'Instantly play out analysis variations on board':
      '分析模式下立即顯示完整變化'
  },
  'ScoreDrawer': {
    'Black': '黑棋',
    'White': '白棋',
    'Draw': '平局',
    'Score': '點目',
    'Area': '子數',
    'Territory': '目數',
    'Captures': '提子',
    'Komi': '貼目',
    'Handicap': '讓子',
    'Total': '總分數',
    'Result:': '對局結果',
    'Update Result': '更新對局結果',
    'Close': '關閉'
  },
  'CommentBox': {
    'Result: ${result}': p => `對局結果：${p.result}`,
    '${a}-${b} Point': p => `${p.a}-${p.b}`,
    'View article on Sensei’s Library': '在 Sensei’s Library 上查看文章',
    'Bad move': '臭棋',
    'Very bad move': '大臭棋',
    'Doubtful move': '問題手',
    'Very doubtful move': '嚴重的問題手',
    'Interesting move': '有趣的一手',
    'Very interesting move': '很有趣的一手',
    'Good move': '好棋',
    'Very good move': '妙手',
    'Good for White': '白好',
    'Very good for White': '白大好',
    'Even position': '均勢',
    'Very even position': '完全均勢',
    'Good for Black': '黑好',
    'Very good for Black': '黑大好',
    'Unclear position': '形勢不明',
    'Very unclear position': '形勢很不明朗',
    'Edit': '編輯',
    'Title': '註釋標題',
    'Comment': '註釋'
  },
  'PeerList': {
    'Running': '執行中',
    'Stopped': '執行完畢',
    'Analyzer': '分析器',
    'Plays as Black': '執黑',
    'Plays as White': '執白',
    'Attach Engine…': '載入引擎...',
    'Start Engine vs. Engine Game': '開始引擎之間的對局',
    'Stop Engine vs. Engine Game': '停止引擎之間的對局'
  },
  'WinrateGraph': {
    'Black': '黑棋',
    'White': '白棋',
    'Black Winrate:': '黑棋勝率',
    'White Winrate:': '白棋勝率'
  },
  'fileformats': {
    'Tygem GIB': '弈城GIB',
    'Game Records': null,
    'wBaduk NGF': null,
    'Smart Game Format': null,
    'PandaNET UGF': null
  },
  'boardmatcher': {
    'Low Chinese Opening': '低中國流',
    'High Chinese Opening': '高中國流',
    'Orthodox Opening': '星+無憂角',
    'Enclosure Opening': '守角',
    'Kobayashi Opening': '小林流',
    'Small Chinese Opening': '變相中國流',
    'Micro Chinese Opening': '迷你中國流',
    'Sanrensei Opening': '三連星',
    'Nirensei Opening': '二連星',
    'Shūsaku Opening': '秀策流',
    'Low Approach': '低掛',
    'High Approach': '高掛',
    'Low Enclosure': '低位守角',
    'High Enclosure': '高位守角',
    'Mouth Shape': '跳方',
    'Table Shape': '變形跳方',
    'Tippy Table': '斜飛',
    'Bamboo Joint': '雙',
    'Trapezium': '倒尖',
    'Diamond': '拔花型',
    'Tiger’s Mouth': '虎',
    'Empty Triangle': '空三角',
    'Turn': '拐',
    'Stretch': '長',
    'Diagonal': '尖',
    'Wedge': '挖',
    'Hane': '扳',
    'Cut': '斷',
    'Square': '正方方陣',
    'Throwing Star': '小飛方陣',
    'Parallelogram': '錯位方陣',
    'Dog’s Head': '猴臉',
    'Horse’s Head': '馬臉',
    'Attachment': '貼',
    'One-Point Jump': '跳',
    'Big Bulge': '小飛方陣少一子',
    'Small Knight': '飛',
    'Two-Point Jump': '大跳',
    'Large Knight': '大飛',
    '3-3 Point Invasion': '點三三',
    'Shoulder Hit': '尖沖',
    'Diagonal Jump': '象飛',
    '3-4 Point': '小目',
    '4-4 Point': '星位',
    '3-3 Point': '三三',
    '3-5 Point': '目外',
    '4-5 Point': '高目',
    '6-3 Point': '6-3 點',
    '6-4 Point': '6-4 點',
    '5-5 Point': '五五',
    'Pass': '虛手',
    'Take': '提子',
    'Atari': '打',
    'Suicide': '自殺',
    'Fill': '填',
    'Connect': '粘',
    'Tengen': '天元',
    'Hoshi': '星'
  }
}
