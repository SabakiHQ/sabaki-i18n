module.exports = {
  'menu.file': {
    'New Window': '新規ウィンドウ',
    'File': 'ファイル',
    'New': '新規',
    'Open…': '開く…',
    'Save': '保存',
    'Save As…': '名前を付けて保存…',
    'Clipboard': 'クリップボード',
    'Load SGF': 'SGFを読み込む',
    'Copy SGF': 'SGFをコピー',
    'Copy ASCII Diagram': 'ASCIIダイアグラムをコピー',
    'Game Info': '棋譜情報',
    'Manage Games…': '棋譜を管理…',
    'Preferences…': '環境設定…',
    'Quit': '終了'
  },
  'updater': {
    'Download Update': 'アップデートをダウンロード',
    'View Changelog': '更新履歴を見る',
    'Not Now': '今はしない',
    '${appName} v${version} is available now.': p =>
      `${p.appName} v${p.version}が利用可能です。`,
    'OK': 'OK',
    'No updates available': 'アップデートはありません',
    '${appName} v${version} is the latest version.': p =>
      `${p.appName} v${p.version}は最新版です。`
  },
  'exception': {
    '${appName} v${version}': p => `${p.appName} v${p.version}`,
    'Something weird happened. ${appName} will shut itself down. If possible, please report this on ${appName}’s repository on GitHub.': p =>
      [
        `何かおかしなことが起こりました。${p.appName}はシャットダウンします。`,
        `可能なら、GitHub上の${p.appName}のレポジトリに報告してください。`
      ].join(' ')
  },
  'menu.play': {
    'Play': '対局',
    'Toggle Player': '手番を交代',
    'Select Point': '交点を選択',
    'Enter a coordinate to select a point':
      '交点を選択するため、座標を入力してください',
    'Pass': 'パス',
    'Resign': '投了',
    'Estimate': '目算',
    'Score': '整地'
  },
  'menu.edit': {
    'Edit': '編集',
    'Undo': '取り消す',
    'Redo': 'やり直す',
    'Toggle Edit Mode': '編集モードを切替',
    'Select Tool': 'ツールを選択',
    'Stone Tool': '着手ツール',
    'Cross Tool': '罰点ツール',
    'Triangle Tool': '三角ツール',
    'Square Tool': '四角ツール',
    'Circle Tool': '丸ツール',
    'Line Tool': '直線ツール',
    'Arrow Tool': '矢印ツール',
    'Label Tool': 'ラベルツール',
    'Number Tool': '数字ツール',
    'Copy Variation': '変化をコピー',
    'Cut Variation': '変化をカット',
    'Paste Variation': '変化をペースト',
    'Make Main Variation': '主変化図を作成',
    'Shift Left': '左にずらす',
    'Shift Right': '右にずらす',
    'Flatten': '平板化',
    'Remove Node': 'ノードを削除',
    'Remove Other Variations': '他の変化を削除'
  },
  'menu.find': {
    'Find': '探索',
    'Toggle Find Mode': '探索モードを切替',
    'Find Next': '次を探索',
    'Find Previous': '前を探索',
    'Toggle Hotspot': '付箋を切替',
    'Jump to Next Hotspot': '次の付箋に移動',
    'Jump to Previous Hotspot': '前の付箋に移動'
  },
  'menu.navigation': {
    'Navigation': 'ナビゲーション',
    'Back': '戻る',
    'Forward': '進む',
    'Go to Previous Fork': '前の分岐に移動',
    'Go to Next Fork': '次の分岐に移動',
    'Go to Previous Comment': '前のコメントに移動',
    'Go to Next Comment': '次のコメントに移動',
    'Go to Beginning': '最初に移動',
    'Go to End': '最後に移動',
    'Go to Main Variation': '主変化図に移動',
    'Go to Previous Variation': '前の変化に移動',
    'Go to Next Variation': '次の変化に移動',
    'Go to Move Number': '手数の局面に移動',
    'Enter a move number to go to': '移動する手数を入力してください',
    'Go to Next Game': '次の棋譜に移動',
    'Go to Previous Game': '前の棋譜に移動'
  },
  'menu.engines': {
    'Engines': 'エンジン',
    'Show Engines Sidebar': 'エンジンサイドバーを表示',
    'Toggle Analysis': '解析モードを切替',
    'None of the attached engines support analysis.':
      '接続したエンジンのどれも解析をサポートしていません。',
    'Start Engine vs. Engine Game': 'エンジン対エンジン対局を開始',
    'Stop Engine vs. Engine Game': 'エンジン対エンジン対局を停止',
    'Generate Move': '着手を生成',
    'Please assign an engine to the player first.':
      '最初にエンジンを対局者に割り当ててください。',
    '(Unnamed Engine)': '(無名のエンジン)',
    'Manage Engines…': 'エンジンを管理…',
    'Clear Console': 'コンソールをクリア'
  },
  'menu.tools': {
    'Tools': 'ツール',
    'Toggle Autoplay Mode': '自動再生モードを切替',
    'Toggle Guess Mode': '推測モードを切替',
    'Clean Markup…': 'マークアップを消去…',
    'Edit SGF Properties…': 'SGFプロパティを編集…',
    'Rotate Anticlockwise': '反時計回りに回転',
    'Rotate Clockwise': '時計回りに回転',
    'Flip Horizontally': '水平方向に反転',
    'Flip Vertically': '垂直方向の反転',
    'Invert Colors': '白黒反転',
    'Reset': 'リセット'
  },
  'menu.view': {
    'View': '表示',
    'Toggle Menu Bar': 'メニューバーを切替',
    'Toggle Full Screen': 'フルスクリーンを切替',
    'Show Coordinates': '座標を表示',
    'Don’t Show': '表示しない',
    'A1 (Default)': 'A1形式 (標準)',
    '1-1': '1-1形式',
    'Relative': '盤端からの相対位置',
    'Show Move Numbers': '手数を表示',
    'Show Move Colorization': '着手の色付け表示',
    'Show Next Moves': '次の着手を表示',
    'Show Sibling Variations': '関連変化を表示',
    'Show Heatmap': 'ヒートマップを表示',
    'Show Win Rate': '勝率を表示',
    'Show Score Lead': '地合を表示',
    'Show Winrate Graph': '勝率グラフを表示',
    'Show Game Tree': '棋譜ツリーを表示',
    'Show Comments': 'コメントを表示',
    'Zoom': 'ズーム',
    'Increase': '拡大',
    'Decrease': '縮小',
    'Reset': 'リセット',
    'Transform Board': '碁盤を変換'
  },
  'menu.help': {
    'Help': 'ヘルプ',
    '${appName} v${version}': p => `${p.appName} v${p.version}`,
    'Check for Updates': 'アップデートを確認',
    'GitHub Repository': 'GitHubレポジトリ',
    'Report Issue': '問題を報告'
  },
  'menu.developer': {
    'Developer': '開発者',
    'Open Settings Folder': '設定フォルダーを開く',
    'Toggle Developer Tools': '開発者ツールを切替',
    'Load Language File…': '言語ファイルをインストール…',
    'A language file is basically a JavaScript file and can be used to execute arbitrary code on your computer.\n\nIt can be extremely dangerous, so it is recommended to only load language files from authors you trust.':
      '言語ファイルは基本的にJavaScriptファイルで、任意のコードを実行できます。\n\nこれは非常に危険なので信用する作者による言語ファイルだけをインストールすることを推奨します。',
    'I understand': '理解しました',
    'JavaScript Files': 'JavaScriptファイル',
    'Unload Language File': '言語ファイルをアンインストール'
  },
  'menu.macos': {
    'Text': 'テキスト'
  },
  'App': {
    'Press Esc to exit full screen mode':
      'フルスクリーンモードを抜けるにはEscを押してください',
    'Press Alt to show menu bar':
      'メニューバーを表示するにはAltを押してください'
  },
  'ContentDisplay': {
    'Jump to Move Number': '手数の局面に移動'
  },
  'dialog': {
    'OK': 'OK'
  },
  'EngineSyncer': {
    'GTP engines don’t support invalid board positions.':
      'GTPエンジンは無効な局面をサポートしません。',
    'GTP engines only support board sizes that don’t exceed ${length}.': p =>
      `GTPエンジンは${p.length}を超えない碁盤サイズのみをサポートします。`,
    'Current board arrangement can’t be recreated on the GTP engine.':
      '現在の配置はGTPエンジン上で再生成できません。',
    'GTP engine can’t be synced to current state.':
      'GTPエンジンは現在の状態に同期できません。'
  },
  'gtplogger': {
    'You have an invalid log folder for GTP console logging in your settings.\n\nPlease make sure the log directory is valid and writable, or disable GTP console logging.':
      'GTPコンソールログのログフォルダーの設定が無効です。\n\nログフォルダーが有効で書き込み可能であることを確認してください。もしくはGTPコンソールログをオフにしてください。'
  },
  'sabaki.window': {
    'Game ${gameNumber}': p => `第${p.gameNumber}棋譜`
  },
  'sabaki.file': {
    'All Files': 'すべてのファイル',
    'This file is unreadable.': 'このファイルは読めません。',
    'Your changes will be lost if you close this file without saving.':
      '保存せずにこのファイルを閉じると変更は失われます。',
    'Save': '保存',
    'Don’t Save': '保存しない',
    'Cancel': 'キャンセル',
    'This file has been changed outside of ${appName}.\nDo you want to reload the file? Your changes will be lost.': p =>
      [
        `このファイルは${p.appName}以外で変更されました。`,
        'ファイルを再読み込みしますか？その場合アプリでされた変更は失われます。'
      ].join('\n'),
    'Reload': '再読み込み',
    'Don’t Reload': '再読み込みしない'
  },
  'sabaki.play': {
    'Edit Label': 'ラベルを編集',
    'Enter label text': 'ラベルテキストを入力してください',
    'You are about to play a move which repeats a previous board position.\nThis is invalid in some rulesets.':
      '以前の局面を繰り返す着手をしようとしています。\nこれはいくつかのルールでは無効です。',
    'Play Anyway': 'とにかく着手',
    'Don’t Play': '着手しない',
    'You are about to play a suicide move.\nThis is invalid in some rulesets.':
      '自殺手を着手しようとしています。\nこれはいくつかのルールでは無効です。'
  },
  'sabaki.engine': {
    'Connection Failed': '接続失敗',
    '${engine} has failed to generate a move.': p =>
      `${p.engine}は着手の生成に失敗しました。`,
    '${engine} has resigned.': p => `${p.engine}が投了しました。`,
    'Please attach one or more engines first.':
      '最初にエンジンを接続してください。',
    'The selected engine does not support analysis.':
      '接続したエンジンは解析をサポートしていません。'
  },
  'sabaki.node': {
    'Do you really want to remove this node?': 'このノードを削除しますか？',
    'Remove Node': 'ノードを削除',
    'Cancel': 'キャンセル',
    'Do you really want to remove all other variations?':
      '他の変化をすべて削除しますか？',
    'Remove Variations': '変化を削除'
  },
  'menu.comment': {
    'Clear Annotations': '注釈をクリア',
    'Good for Black': '黒良し',
    'Unclear Position': 'はっきりしない',
    'Even Position': '互角',
    'Good for White': '白良し',
    'Good Move': '好手',
    'Interesting Move': '面白い手',
    'Doubtful Move': '怪しい手',
    'Bad Move': '悪手',
    'Hotspot': '付箋'
  },
  'menu.variation': {
    'Add Variation': '変化を追加',
    'The root node cannot have sibling nodes.':
      'ルートノードは兄弟ノードを持てません。'
  },
  'menu.engineAction': {
    'Start': '開始',
    'Stop': '停止',
    'Detach': '接続解除',
    'Synchronize': '同期',
    'Generate Move': '着手を生成',
    'Set as Analyzer': '解析器に指定',
    'Set as Black Player': '黒番に指定',
    'Set as White Player': '白番に指定',
    'Go to Engine': 'エンジンに移動'
  },
  'AutoplayBar': {
    'sec per move': '秒/着手'
  },
  'EditBar': {
    'Stone Tool': '着手ツール',
    'Cross Tool': '罰点ツール',
    'Triangle Tool': '三角ツール',
    'Square Tool': '四角ツール',
    'Circle Tool': '丸ツール',
    'Line Tool': '直線ツール',
    'Arrow Tool': '矢印ツール',
    'Label Tool': 'ラベルツール',
    'Number Tool': '数字ツール'
  },
  'FindBar': {
    'Find': '検索',
    'Next': '次へ',
    'Previous': '前へ'
  },
  'GuessBar': {
    'Click on the board to guess the next move.':
      '次の手を予想するには碁盤をクリックしてください。'
  },
  'PlayBar': {
    'Pass': 'パス',
    'Resign': '投了',
    'Estimate': '目算',
    'Score': '整地',
    'Edit': '編集',
    'Find': '検索',
    'Info': '情報',
    'Hotspot': '付箋',
    'Engine': 'エンジン',
    'Black': '黒',
    'Change Player': '手番を交代',
    'White to play': '白で着手',
    'Black to play': '黒で着手',
    'White': '白'
  },
  'ScoringBar': {
    'Details': '詳細',
    'Draw': '表示',
    'Please select dead stones.': '死に石を選択してください。',
    'Toggle group status.': '石の状態を切替。'
  },
  'AdvancedPropertiesDrawer': {
    'Remove': '削除',
    'Enter property name': 'プロパティ名を入力してください',
    'This property has been blocked.': 'このプロパティはブロックされています。',
    'Add': '追加',
    'Close': '閉じる'
  },
  'CleanMarkupDrawer': {
    'From Current Position': '現局面から',
    'From Entire Game': '棋譜全体から',
    'Clean Markup': 'マークアップを消去',
    'Cross markers': '罰点マーカー',
    'Triangle markers': '三角マーカー',
    'Square markers': '四角マーカー',
    'Circle markers': '丸マーカー',
    'Line markers': '直線マーカー',
    'Arrow markers': '矢印マーカー',
    'Label markers': 'ラベルマーカー',
    'Comments': 'コメント',
    'Annotations': '注釈',
    'Hotspots markers': '付箋マーカー',
    'Winrate data': '勝率データ',
    'Remove': '削除',
    'Close': '閉じる'
  },
  'GameChooserDrawer': {
    'Black': '黒',
    'White': '白',
    'Remove Game': '棋譜を削除',
    'Do you really want to remove this game permanently?':
      'この棋譜を本当に削除しますか？',
    'Cancel': 'キャンセル',
    'Remove Other Games': '他の棋譜を削除',
    'Do you really want to remove all other games permanently?':
      '他の棋譜を本当に削除しますか？',
    'Remove Games': '棋譜を削除',
    'Add New Game': '新しい棋譜を追加',
    'Add Existing Files…': '存在するファイルを追加…',
    'All Files': 'すべてのファイル',
    'Some files are unreadable.': 'いくつかのファイルが読めません。',
    'Black Player': '黒番',
    'White Player': '白番',
    'Black Rank': '黒段級位',
    'White Rank': '白段級位',
    'Game Name': '棋譜名',
    'Game Event': '大会名',
    'Date': '日付',
    'Number of Moves': '手数',
    'Reverse': '反転',
    'Manage Games': '棋譜を管理',
    'Filter': 'フィルタ',
    'Add': '追加',
    'Sort By': '並び替え',
    'Close': '閉じる'
  },
  'InfoDrawer': {
    'Manual': 'マニュアル',
    '(Unnamed Engine)': '(無名のエンジン)',
    'Attach Engine': 'エンジンを接続',
    'Manage Engines…': 'エンジンを管理…',
    'Previous Month': '先月',
    'Next Month': '来月',
    'Rank': '段級位',
    'Black': '黒',
    'Swap': '交換',
    'White': '白',
    'Name': '名前',
    '(Unnamed)': '(無名)',
    'Event': '大会',
    'None': 'None',
    'Date': '日付',
    'Comment': 'コメント',
    'Result': '結果',
    'Show': '表示',
    'Komi': 'コミ',
    'Handicap': '置き碁',
    'No stones': '置き石なし',
    '${stones} stones': p => `${p.stones} 子`,
    'Board Size': '碁盤サイズ',
    'OK': 'OK',
    'Cancel': 'キャンセル'
  },
  'PreferencesDrawer': {
    'Please restart ${appName} to apply your language setting.': p => `言語設定を反映するために ${p.appName} を再起動してください。`,
    'Enable hardware acceleration if possible':
      '可能ならハードウェアアクセラレーションを有効にする',
    'Check for updates at startup': '起動時にアップデートを確認',
    'Enable sounds': '音声を有効にする',
    'Jump to end after loading file': 'ファイルを読み込んだ後最終局面に移動',
    'Fuzzy stone placement': 'ファジーな石の置き方',
    'Animate fuzzy placement': 'ファジーな置き方をアニメーションする',
    'Variation Replay Mode:': '解析した変化の表示方法',
    'Disabled': '表示しない',
    'Move by Move': '初手から並べて再生',
    'Instantly': '最後の手順まで一括で表示',
    'Language:': '言語:',
    'Game Tree Style:': '棋譜ツリースタイル:',
    'Compact': 'コンパクト',
    'Spacious': '広々',
    'Big': '大きく',
    'Show automatic move titles': '着手の呼び名を自動で表示',
    'Show ko warning': 'コウの警告を表示',
    'Show suicide warning': '自殺手の警告を表示',
    'Show remove node warning': 'ノード削除の警告を表示',
    'Show remove other variations warning': '他の変化削除の警告を表示',
    'Offer to reload file if changed externally':
      '外部で変更された場合、ファイルの再読み込みを促す',
    'Click last played stone to remove': '最後に着手した石をクリックすると削除',
    'Invert winrate graph': '勝率グラフを反転',
    'Path': 'パスを入力してください',
    'Browse…': 'ブラウズ…',
    'Directory not found': 'フォルダーが見つかりません',
    'File not found': 'ファイルが見つかりません',
    'Do you really want to uninstall this theme?':
      '本当にこのテーマをアンインストールしますか？',
    'Uninstall': 'アンインストール',
    'Cancel': 'キャンセル',
    'Uninstallation failed.': 'アンインストールが失敗しました。',
    'Sabaki Themes': 'Sabakiテーマ',
    'Installation failed.': 'インストールが失敗しました。',
    'Custom Images': 'カスタム画像',
    'Black stone image:': '黒石画像:',
    'White stone image:': '白石画像:',
    'Board image:': '碁盤画像:',
    'Background image:': '背景画像:',
    'Current Theme': '現在のテーマ',
    'Default': 'デフォルト',
    'Install Theme…': 'テーマをインストール…',
    'Get more themes…': 'さらにテーマを取得…',
    'by ${author}': p => `${p.author}作`,
    'Homepage': 'ホームページ',
    'All Files': 'すべてのファイル',
    'Remove': '削除',
    '(Unnamed Engine)': '(無名のエンジン)',
    'No arguments': '引数なし',
    'Initial commands (;-separated)': '初期化コマンド(;-separated)',
    'Enable GTP logging to directory:': 'フォルダーへのGTPログを有効にする:',
    'Add': '追加',
    'General': '一般',
    'Themes': 'テーマ',
    'Engines': 'エンジン',
    'Close': '閉じる',
    /* unused */ 'Instantly play out analysis variations on board':
      '碁盤上で解析変化を即プレイアウト'
  },
  'ScoreDrawer': {
    'Black': '黒',
    'White': '白',
    'Draw': '表示',
    'Score': 'スコア',
    'Area': '子',
    'Territory': '地',
    'Captures': 'アゲハマ',
    'Komi': 'コミ',
    'Handicap': '置き石',
    'Total': '計',
    'Result:': '結果:',
    'Update Result': '結果を更新',
    'Close': '閉じる'
  },
  'CommentBox': {
    'Result: ${result}': p => `結果: ${p.result}`,
    '${a}-${b} Point': p => `${p.a}-${p.b} 目`,
    'View article on Sensei’s Library': 'Sensei’s Libraryの記事を見る',
    'Bad move': '悪手',
    'Very bad move': '大悪手',
    'Doubtful move': '疑問手',
    'Very doubtful move': '大疑問手',
    'Interesting move': '面白い手',
    'Very interesting move': 'とても面白い手',
    'Good move': '好手',
    'Very good move': '妙手',
    'Good for White': '白良し',
    'Very good for White': '白優勢',
    'Even position': 'ほぼ互角',
    'Very even position': '互角',
    'Good for Black': '黒良し',
    'Very good for Black': '黒優勢',
    'Unclear position': 'はっきりしない',
    'Very unclear position': '全くはっきりしない',
    'Edit': '編集',
    'Title': '表題',
    'Comment': 'コメント'
  },
  'PeerList': {
    'Running': '動作中',
    'Stopped': '停止中',
    'Analyzer': '解析器',
    'Plays as Black': '黒を持つ',
    'Plays as White': '白を持つ',
    'Attach Engine…': 'エンジンを接続…',
    'Start Engine vs. Engine Game': 'エンジン対エンジン対局を開始',
    'Stop Engine vs. Engine Game': 'エンジン対エンジン対局を停止'
  },
  'WinrateGraph': {
    'Black': '黒',
    'White': '白',
    'Black Winrate:': '黒の勝率:',
    'White Winrate:': '白の勝率:'
  },
  'fileformats': {
    'Tygem GIB': '東洋囲碁GIB',
    'Game Records': 'Game Records',
    'wBaduk NGF': '幽玄の間 NGF',
    'Smart Game Format': 'SGFファイル (Smart Game Format)',
    'PandaNET UGF': 'パンダネット UGF'
  },
  'boardmatcher': {
    'Low Chinese Opening': '低い中国流',
    'High Chinese Opening': '高い中国流',
    'Orthodox Opening': 'オーソドックス布石',
    'Enclosure Opening': 'シマリ布石',
    'Kobayashi Opening': '小林流',
    'Small Chinese Opening': 'ミニ中国流',
    'Micro Chinese Opening': 'ミニスモール中国流',
    'Sanrensei Opening': '三連星',
    'Nirensei Opening': '二連星',
    'Shūsaku Opening': '秀策流',
    'Low Approach': '低いカカリ',
    'High Approach': '高ガカリ',
    'Low Enclosure': '低いシマリ',
    'High Enclosure': '高いシマリ',
    'Mouth Shape': '口',
    'Table Shape': 'テーブル形',
    'Tippy Table': 'ティッピーテーブル形',
    'Bamboo Joint': 'タケフ',
    'Trapezium': 'トラペジウム形',
    'Diamond': 'ポンヌキ',
    'Tiger’s Mouth': '虎の口',
    'Empty Triangle': 'アキ三角',
    'Turn': 'マガリ',
    'Stretch': 'ノビ',
    'Diagonal': 'コスミ',
    'Wedge': 'ワリコミ',
    'Hane': 'ハネ',
    'Cut': 'キリ',
    'Square': '正方形',
    'Throwing Star': '手裏剣',
    'Parallelogram': '平行四辺形',
    'Dog’s Head': '犬の面',
    'Horse’s Head': '馬の面',
    'Attachment': 'ツケ',
    'One-Point Jump': '一間トビ',
    'Big Bulge': 'Big Bulge',
    'Small Knight': '小ゲイマ',
    'Two-Point Jump': '二間トビ',
    'Large Knight': '大ゲイマ',
    '3-3 Point Invasion': 'ダイレクト三々',
    'Shoulder Hit': 'カタツキ',
    'Diagonal Jump': 'ハザマ',
    '3-4 Point': '小目',
    '4-4 Point': '隅の星',
    '3-3 Point': '三々',
    '3-5 Point': '目外し',
    '4-5 Point': '高目',
    '6-3 Point': '大目外し',
    '6-4 Point': '大高目',
    '5-5 Point': '五ノ五',
    'Pass': 'パス',
    'Take': 'トリ',
    'Atari': 'アタリ',
    'Suicide': '自殺手',
    'Fill': 'ツギ',
    'Connect': '連絡',
    'Tengen': '天元',
    'Hoshi': '星'
  }
}
