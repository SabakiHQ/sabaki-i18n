module.exports = {
  'menu.file': {
    'New Window': '&W新窗口',
    'File': '&F文件',
    'New': '&N新對局',
    'Open…': '&O打開...',
    'Save': '&S保存',
    'Save As…': '&v另存為...',
    'Clipboard': '&C剪貼板',
    'Load SGF': '&L從剪貼板載入SGF',
    'Copy SGF': '&C拷貝SGF到剪貼板',
    'Copy ASCII Diagram': '&A拷貝ASCII棋盤到剪貼板',
    'Game Info': '&I對局信息',
    'Manage Games…': '&M對局管理...',
    'Preferences…': '&P首選項...'
  },
  'updater': {
    'Download Update': '下載更新',
    'View Changelog': '查看更新日誌',
    'Not Now': '現在不',
    '${appName} v${version} .': p =>
     `${p.appName} v${p.version} 可用`,
    'OK': 'OK',
    'No updates available': '沒有新版本',
    '${appName} v${version} is the latest version.': p =>
    `${p.appName} v${p.version} 為當前最新版本.`
  },
  'exception': {
    '${appName} v${version}': p => `${p.appName} v${p.version}`,
    'Something weird happened. ${appName} will shut itself down. If possible, please report this on ${appName}’s repository on GitHub.': p =>
      [
        `異常發生， ${p.appName} 自動關閉。`,
        `如果方便的話，請到 ${p.appName}的 GitHub 倉庫回饋。`
      ].join(' ')
  },
  'menu.play': {
    'Play': '&P對局',
    'Toggle Player': '&T切換黑/白）',
    'Select Point': '&l輸入座標',
    'Enter a coordinate to select a point':
      '輸入座標來選點',
    'Pass': '&P停一手',
    'Resign': '&n認輸',
    'Estimate': '&E形勢判斷',
    'Score': '&r數子'
  },
  'menu.edit': {
    'Edit': '&E編輯',
    'Undo': '&U撤銷',
    'Redo': '&d取消撤銷',
    'Toggle Edit Mode': '&E切換編輯模式',
    'Select Tool': '&S選擇工具',
    'Stone Tool': '&S棋子',
    'Cross Tool': '&C叉',
    'Triangle Tool': '&T三角',
    'Square Tool': '&q方',
    'Circle Tool': '&i圓',
    'Line Tool': '&L線',
    'Arrow Tool': '&A箭頭',
    'Label Tool': '&b字母',
    'Number Tool': '&N數字',
    'Copy Variation': '&C複製變化',
    'Cut Variation': '&t剪切變化',
    'Paste Variation': '&P粘貼變化',
    'Make Main Variation': '&V設為主要變化',
    'Shift Left': '&L左移',
    'Shift Right': '&g右移',
    'Flatten': '&F清空該節點前的所有變化',
    'Remove Node': '&R刪除節點',
    'Remove Other Variations': '&O刪除此外的所有變化'
  },
  'menu.find': {
    'Find': '&d查找',
    'Toggle Find Mode': '&F進入/離開查找模式',
    'Find Next': '&N下一個',
    'Find Previous': '&P上一個',
    'Toggle Hotspot': '&H標記/取消焦點',
    'Jump to Next Hotspot': '&x跳轉到下一焦點',
    'Jump to Previous Hotspot': '&v跳轉到上一焦點'
  },
  'menu.navigation': {
    'Navigation': '&N導航',
    'Back': '&B向後',
    'Forward': '&F向前',
    'Go to Previous Fork': '&P上一分支',
    'Go to Next Fork': '&N下一分支',
    'Go to Previous Comment': '&t上一注釋',
    'Go to Next Comment': '&C下一注釋',
    'Go to Beginning': '&g到開局',
    'Go to End': '&E到終局',
    'Go to Main Variation': '&M到主要變化',
    'Go to Previous Variation': '&V到上一變化',
    'Go to Next Variation': '&r到下一變化',
    'Go to Move Number': '&u到第...手',
    'Enter a move number to go to': '到指定手數',
    'Go to Next Game': '&x到下一局',
    'Go to Previous Game': '&s到上一局'
  },
  'menu.engines': {
    'Engines': '&i引擎',
    'Show Engines Sidebar': '&E顯示引擎側邊欄',
    'Toggle Analysis': '&A分析',
    'None of the attached engines support analysis.': 
      '載入的引擎不支援分析模式',
    'Start Engine vs. Engine Game': '&G開始引擎對戰',
    'Stop Engine vs. Engine Game': '&G停止引擎對戰',
    'Generate Move': '&M讓引擎走一手',
    'Please assign an engine to the player first.': 
      '請先為當前玩家分配一個引擎',
    'Manage Engines…': '&E管理引擎...',
    'Clear Console': '&C清空控制台'
  },
  'menu.tools': {
    'Tools': '&T工具',
    'Toggle Autoplay Mode': '&p進入/離開自動播放模式',
    'Toggle Guess Mode': '&G進入/離開猜棋模式',
    'Clean Markup…': '&M刪除標記',
    'Edit SGF Properties…': '&E編輯SGF屬性',
    'Rotate Anticlockwise': '&A逆時針旋轉',
    'Rotate Clockwise': '&C順時針旋轉',
    'Flip Horizontally': '&F水準翻轉',
    'Flip Vertically': '&V垂直翻轉',
    'Invert Colors': '&I對調黑白',
    'Reset': '&R重置'
  },
  'menu.view': {
    'View': '&V介面',
    'Toggle Menu Bar': '&B顯示/隱藏功能表列',
    'Toggle Full Screen': '&F進入/取消全屏',
    'Show Coordinates': '&C顯示座標',
    'Show Move Numbers': '&u顯示手數',
    'Show Move Colorization': '&z顯示移動著色',
    'Show Next Moves': '&N顯示下一手',
    'Show Sibling Variations': '&S顯示該手的其它變化',
    'Show Heatmap': '&W顯示熱圖',
    'Don’t Show': '&D不顯示',
    'Show Win Rate': 'W顯示勝率',
    'Show Score Lead': '&S顯示目數差',
    'Show Winrate Graph': '&W顯示勝率圖',
    'Show Game Tree': '&T顯示變化樹',
    'Show Comments': '&m顯示注釋',
    'Zoom': '&o縮放',
    'Increase': '&I放大',
    'Decrease': '&D縮小',
    'Reset': '&R重置',
    'Transform Board': '&r旋轉棋盤'
  },
  'menu.help': {
    'Help': '&H幫助',
    '${appName} v${version}':  p => `${p.appName} v${p.version}`,
    'Check for Updates': '&U檢查更新',
    'GitHub Repository': '&R  GitHub 倉庫',
    'Report Issue': '&I回饋問題'
  },
  'menu.developer': {
    'Developer': '&o開發者',
    'Open Settings Folder': '&F流覽設定檔夾',
    'Toggle Developer Tools': '&D開發者工具開關',
    'Load Language File…': '&L載入語言檔...',
    'A language file is basically a JavaScript file and can be used to execute arbitrary code on your computer.\n\nIt can be extremely dangerous, so it is recommended to only load language files from authors you trust.': 
      '語言包是一個JaveScript檔，可能在您的電腦上執行任何指令，所以請不要載入任何不可信來源的語言包檔。',
    'I understand': '我瞭解',
    'JavaScript Files': 'JavaScript 文件',
    'Unload Language File': '&U卸載語言包'
  },
  'menu.macos': {
    'Text': '文本'
  },
  'App': {
    'Press Esc to exit full screen mode': '按 ESC 鍵退出全屏',
    'Press Alt to show menu bar': '按 Alt 鍵顯示功能表列'
  },
  'ContentDisplay': {
    'Jump to Move Number': '跳轉至手數'
  },
  'dialog': {
    'OK': 'OK'
  },
  'EngineSyncer': {
    'GTP engines don’t support invalid board positions.': 'GTP對弈引擎不支援無效的棋盤尺定位。',
    'GTP engines only support board sizes that don’t exceed ${length}.': p =>
      `GTP引擎僅支援不超過 ${p.length} 的大小。`,
    'Current board arrangement can’t be recreated on the GTP engine.': 'GTP引擎載入無法當前棋盤安排。',
    'GTP engine can’t be synced to current state.': 'GTP引擎與當前棋盤狀態同步。'
  },
  'gtplogger': {
    'You have an invalid log folder for GTP console logging in your settings.\n\nPlease make sure the log directory is valid and writable, or disable GTP console logging.': 
      '當前GTP引擎日誌檔目錄設置錯誤，請確保設置的引擎日誌檔目錄存在且具有寫入許可權，否則請關閉引擎日誌記錄。'
  },
  'sabaki.window': {
    'Game ${gameNumber}':  p => `對局 ${p.gameNumber}`
  },
  'sabaki.file': {
    'All Files': '全部檔',
    'This file is unreadable.': '無法讀取該文件',
    'Your changes will be lost if you close this file without saving.': 
      '如果您不保存就關閉，您做的更改將丟失。',
    'Save': '保存',
    'Don’t Save': '不保存',
    'Cancel': '取消',
    'This file has been changed outside of ${appName}.\nDo you want to reload the file? Your changes will be lost.': p =>
    [
      `該文件被 ${p.appName}外部應用改變。`,
      '是否重新載入該檔? 你當前所做的改變會丟失。'
    ].join('\n'),
    'Reload': '重新載入',
    'Don’t Reload': '不重載'
  },
  'sabaki.play': {
    'Edit Label': '&E編輯標記',
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
      `${p.engine} 走子失敗。`,
    '${engine} has resigned.': p => `${p.engine} 認輸了。`,
    'Please attach one or more engines first.': 
      '請先載入一個或多個引擎。',
    'The selected engine does not support analysis.': 
      '當前選擇的引擎不支援分析模式。'
  },
  'sabaki.node': {
    'Do you really want to remove this node?': 
      '您確定要刪除該節點嗎？',
    'Remove Node': '刪除節點',
    'Cancel': '取消',
    'Do you really want to remove all other variations?': 
      '您確定要刪除所有其它變化嗎？',
    'Remove Variations': '刪除變化'
  },
  'menu.comment': {
    'Clear Annotations': '&C清除注釋',
    'Good for Black': '&B黑好',
    'Unclear Position': '&U形勢不明',
    'Even Position': '&E均勢',
    'Good for White': '&W白好',
    'Good Move': '&G好棋',
    'Interesting Move': '&I有趣的一手',
    'Doubtful Move': '&D問題手',
    'Bad Move': '&a臭棋',
    'Hotspot': '&H焦點'
  },
  'menu.variation': {
    'Add Variation': '&A新增變化',
    'The root node cannot have sibling nodes.': 
      '根節點不能有兄弟節點'
  },
  'menu.engineAction': {
    'Start': '&S開始',
    'Stop': '&S停止',
    'Detach': '&D卸載引擎',
    'Synchronize': '&y同步',
    'Generate Move': '&G走一手',
    'Set as Analyzer': '&A設為分析引擎',
    'Set as Black Player': '&B持黑',
    'Set as White Player': '&W持白',
    'Go to Engine': '&G轉到引擎控制台'
  },
  'AutoplayBar': {
    'sec per move': '每秒步數'
  },
  'EditBar': {
    'Stone Tool': '棋子',
    'Cross Tool': '叉',
    'Triangle Tool': '三角',
    'Square Tool': '方',
    'Circle Tool': '圓',
    'Line Tool': '線',
    'Arrow Tool': '箭頭',
    'Label Tool': '字母',
    'Number Tool': '數字'
  },
  'FindBar': {
    'Find': '查找',
    'Next': '下一個',
    'Previous': '上一個'
  },
  'GuessBar': {
    'Click on the board to guess the next move.': 
      '點擊棋盤猜下一手。'
  },
  'PlayBar': {
    'Pass': '&P停一手',
    'Resign': '&R認輸',
    'Estimate': '&t形勢判斷',
    'Score': '&S數子',
    'Edit': '&E編輯',
    'Find': '&F查找',
    'Info': '&I對局信息',
    'Hotspot': '焦點',
    'Engine': '引擎',
    'Black': '黑棋',
    'Change Player': '切換玩家（黑/白）',
    'White to play': '輪到白棋',
    'Black to play': '輪到黑棋',
    'White': '白棋'
  },
  'ScoringBar': {
    'Details': '細節',
    'Draw': '平局',
    'Please select dead stones.': '請點選死棋',
    'Toggle group status.': '點選'
  },
  'AdvancedPropertiesDrawer': {
    'Remove': '移除',
    'Enter property name': '輸入屬性名稱',
    'This property has been blocked.': '該屬性已被阻止',
    'Add': '增加',
    'Close': '關閉'
  },
  'CleanMarkupDrawer': {
    'From Current Position': '&P刪除從當前節點開始的標記',
    'From Entire Game': '&G刪除對局中所有的標記',
    'Clean Markup': '刪除標記',
    'Cross markers': '叉',
    'Triangle markers': '三角',
    'Square markers': '方',
    'Circle markers': '圓',
    'Line markers': '線',
    'Arrow markers': '箭頭',
    'Label markers': '字母',
    'Comments': '注釋',
    'Annotations': '評注',
    'Hotspots markers': '焦點',
    'Winrate data': '勝率',
    'Remove': '刪除',
    'Close': '關閉'
  },
  'GameChooserDrawer': {
    'Black': '黑棋',
    'White': '白旗',
    'Remove Game': '刪除對局',
    'Do you really want to remove this game permanently?': 
      '您確定要刪除這個對局嗎？',
    'Cancel': '取消',
    'Remove Other Games': '&O刪除除此之外的所有對局',
    'Do you really want to remove all other games permanently?': 
      '您確定要刪除除此之外的所有對局嗎？',
    'Remove Games': '刪除對局',
    'Add New Game': '&N增加新對局',
    'Add Existing Files…': '打開文件...',
    'All Files': '所有檔',
    'Some files are unreadable.': '部分檔無法讀取',
    'Black Player': '&B黑棋玩家名稱',
    'White Player': '&W白棋玩家名稱',
    'Black Rank': '&a黑棋段位',
    'White Rank': '&k白棋段位',
    'Game Name': '對局名稱',
    'Game Event': '賽事名稱',
    'Date': '日期',
    'Number of Moves': '&M總手數',
    'Reverse': '&R倒序',
    'Manage Games': '管理對局',
    'Filter': '過濾',
    'Add': '添加',
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
    'Comment': '注釋',
    'Result': '結果',
    'Show': '顯示',
    'Komi': '貼目',
    'Handicap': '讓子',
    'No stones': '無',
    '${stones} stones':  p => `${p.stones} 子`,
    'Board Size': '棋盤尺寸',
    'OK': '確定',
    'Cancel': '取消'
  },
  'PreferencesDrawer': {
    'Enable hardware acceleration if possible': '硬體加速（若支援）',
    'Check for updates at startup': '啟動程式時檢查更新',
    'Enable sounds': '打開聲音',
    'Jump to end after loading file': '打開對局文件後跳轉至對局末尾',
    'Fuzzy stone placement': '棋子顯示位置不必嚴格地位於棋盤交叉線上',
    'Animate fuzzy placement': '落子時棋子顯示位置動態效果',
    'Instantly play out analysis variations on board': '立即在棋盤上顯示分析變化',
    'Show automatic move titles': '顯示自動落子標題',
    'Show ko warning': '非法劫提示',
    'Show suicide warning': '自殺手提示',
    'Show remove node warning': '刪除節點時提示確認',
    'Show remove other variations warning': '刪除其它變化時提示確認',
    'Offer to reload file if changed externally': '檔被外部程式修改後提示重新載入',
    'Click last played stone to remove': '點擊最後一手棋可刪除該手',
    'Invert winrate graph': '翻轉勝率圖',
    'Game Tree Style:': '對局變化樹樣式',
    'Compact': '緊湊',
    'Spacious': '大間距',
    'Big': '大圖示',
    'Path': '路徑',
    'Browse…': '流覽...',
    'Directory not found': '未找到資料夾',
    'File not found': '未找到文件',
    'Do you really want to uninstall this theme?': 
      '您確定要卸載該主題嗎？',
    'Uninstall': '卸載',
    'Cancel': '取消',
    'Uninstallation failed.': '卸載失敗',
    'Sabaki Themes': 'Sabaki 主題',
    'Installation failed.': '安裝失敗',
    'Custom Images': '自訂圖片',
    'Black stone image:': '黑棋子圖片',
    'White stone image:': '白棋子圖片',
    'Board image:': '棋盤圖片',
    'Background image:': '背景圖片',
    'Default': '默認',
    'Install Theme…': '安裝主題...',
    'Get more themes…': '獲取主題...',
    'by ${author}':p => `by ${p.author}`,
    'Homepage': '主頁',
    'All Files': '所有檔',
    'Remove': '刪除',
    '(Unnamed Engine)': '未命名的引擎',
    'No arguments': '無運行參數',
    'Initial commands (;-separated)': '啟動參數(用;分隔)',
    'Enable GTP logging to directory:': 'GTP日誌保存目錄：',
    'Add': '新增',
    'General': '一般',
    'Themes': '主題',
    'Engines': '對弈引擎',
    'Close': '關閉'
  },
  'ScoreDrawer': {
    'Black': '黑棋',
    'White': '白旗',
    'Draw': '平局',
    'Area': '數子',
    'Territory': '數目',
    'Captures': '提子',
    'Komi': '貼目',
    'Handicap': '讓子',
    'Total': '總目數',
    'Result:': '對局結果',
    'Update Result': '更新對局結果',
    'Close': '關閉'
  },
  'CommentBox': {
    'Result: ${result}': '對局結果：${result}',
    '${a}-${b} Point': '${a}-${b} 目',
    'View article on Sensei’s Library': '在 Sensei’s Library 上查看文章',
    'Bad move': '臭棋',
    'Very bad move': '大臭棋',
    'Doubtful move': '問題手',
    'Very doubtful move': '嚴重的問題手',
    'Interesting move': '有意思的一手',
    'Very interesting move': '很有意思的一手',
    'Good move': '好棋',
    'Very good move': '妙手',
    'Good for White': '白形勢好',
    'Very good for White': '白形勢大好',
    'Even position': '形勢均衡',
    'Very even position': '形勢特別均衡',
    'Good for Black': '黑形勢好',
    'Very good for Black': '黑形勢大好',
    'Unclear position': '形勢不明朗',
    'Very unclear position': '形勢特別不明朗',
    'Edit': '編輯',
    'Title': '注釋標題',
    'Comment': '注釋'
  },
  'PeerList': {
    'Running': '運行中',
    'Stopped': '運行完畢',
    'Analyzer': '分析器',
    'Plays as Black': '執黑',
    'Plays as White': '執白',
    'Attach Engine…': '載入對弈引擎...',
    'Start Engine vs. Engine Game': '開始兩個對弈引擎之間的對局',
    'Stop Engine vs. Engine Game': '停止兩個對弈引擎之間的對局'
  },
  'WinrateGraph': {
    'Black': '黑棋',
    'White': '白旗',
    'Black Winrate:': '黑棋勝率',
    'White Winrate:': '白棋勝率'
  },
  'fileformats': {
    'Tygem GIB': '弈城GIB',
    'Game Records': 'Game Records',
    'wBaduk NGF': 'wBaduk NGF',
    'Smart Game Format': 'Smart Game Format'
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
    '3-3 Point': '三三',
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
    'Shoulder Hit': '尖沖',
    'Diagonal Jump': '象飛',
    '4-4 Point': '星位'
  }
}

