module.exports = {
  'menu.file': {
    'New Window': '새 창',
    'File': '파일',
    'New': '새 바둑판',
    'Open…': '열기',
    'Save': '저장',
    'Save As…': '다른 이름으로 저장',
    'Clipboard': '클립보드',
    'Load SGF': 'SGF 붙여넣기',
    'Copy SGF': 'SGF 복사',
    'Copy ASCII Diagram': 'SGF 다이어그램 복사',
    'Game Info': '대국 정보',
    'Manage Games…': '여러 판 관리',
    'Preferences…': '환경 설정'
  },
  'updater': {
    'Download Update': '업데이트 다운로드',
    'View Changelog': '변경 내역 보기',
    'Not Now': '나중에',
    '${appName} v${version} is available now.': p =>
      `${p.appName} v${p.version}을 내려받을 수 있습니다.`,
    'OK': '확인',
    'No updates available': '가능한 업데이트가 없습니다.',
    '${appName} v${version} is the latest version.': p =>
      `${p.appName} v${p.version}은 최신 버전입니다.`
  },
  'exception': {
    '${appName} v${version}': p => `${p.appName} v${p.version}`,
    'Something weird happened. ${appName} will shut itself down. If possible, please report this on ${appName}’s repository on GitHub.': p =>
      [
        `Something weird happened. ${p.appName}이 종료됩니다.`,
        `가능하다면, ${p.appName}의 GitHub 저장소에 보고해 주십시오.`
      ].join(' ')
  },
  'menu.play': {
    'Play': '두기',
    'Toggle Player': '흑/백 바꾸기',
    'Select Point': '지점 선택',
    'Enter a coordinate to select a point':
      '좌표를 입력하여 둘 지점을 선택하십시오.',
    'Pass': '착수 넘김',
    'Resign': '기권',
    'Estimate': '형세분석',
    'Score': '계가'
  },
  'menu.edit': {
    'Edit': '편집',
    'Undo': '실행 취소',
    'Redo': '다시 실행',
    'Toggle Edit Mode': '편집 모드 켜기/끄기',
    'Select Tool': '도구 선택',
    'Stone Tool': '돌 배치',
    'Cross Tool': '가위표 표시',
    'Triangle Tool': '세모 표시',
    'Square Tool': '네모 표시',
    'Circle Tool': '원 표시',
    'Line Tool': '선 표시',
    'Arrow Tool': '화살표 표시',
    'Label Tool': '문자 표시',
    'Number Tool': '숫자 표시',
    'Copy Variation': '변화도 복사',
    'Cut Variation': '변화도 잘라내기',
    'Paste Variation': '변화도 붙여넣기',
    'Make Main Variation': '주 변화도로 만들기',
    'Shift Left': '왼쪽으로 옮기기',
    'Shift Right': '오른쪽으로 옮기기',
    'Flatten': '병합',
    'Remove Node': '노드 제거',
    'Remove Other Variations': '다른 변화도 삭제'
  },
  'menu.find': {
    'Find': '찾기',
    'Toggle Find Mode': '찾기 모드 켜기/끄기',
    'Find Next': '다음 찾기',
    'Find Previous': '이전 찾기',
    'Toggle Hotspot': '책갈피 끼우기/빼기',
    'Jump to Next Hotspot': '다음 책갈피로 이동',
    'Jump to Previous Hotspot': '이전 책갈피로 이동'
  },
  'menu.navigation': {
    'Navigation': '탐색',
    'Back': '뒤로',
    'Forward': '앞으로',
    'Go to Previous Fork': '이전 분기점으로 이동',
    'Go to Next Fork': '다음 분기점으로 이동',
    'Go to Previous Comment': '이전 해설로 이동',
    'Go to Next Comment': '다음 해설로 이동',
    'Go to Beginning': '시작으로 이동',
    'Go to End': '끝으로 이동',
    'Go to Main Variation': '주 변화도로 이동',
    'Go to Previous Variation': '이전 변화도로 이동',
    'Go to Next Variation': '다음 변화도로 이동',
    'Go to Move Number': '수순으로 이동',
    'Enter a move number to go to': '몇 수째로 이동할지 입력하십시오',
    'Go to Next Game': '다음 판으로 이동',
    'Go to Previous Game': '이전 판으로 이동'
  },
  'menu.engines': {
    'Engines': '엔진',
    'Show Engines Sidebar': '엔진 사이드바 보기',
    'Toggle Analysis': '분석 켜기/끄기',
    'None of the attached engines support analysis.':
      '연결한 엔진 중 분석을 지원하는 것이 없습니다.',
    'Start Engine vs. Engine Game': '엔진 대 엔진 대국 시작',
    'Stop Engine vs. Engine Game': '엔진 대 엔진 대국 중단',
    'Generate Move': '다음 수 두기',
    'Please assign an engine to the player first.':
      '먼저 대국자로 엔진을 지정해 주십시오.',
    '(Unnamed Engine)': '(이름 없는 엔진)',
    'Manage Engines…': '엔진 관리',
    'Clear Console': '콘솔 내역 지우기'
  },
  'menu.tools': {
    'Tools': '도구',
    'Toggle Autoplay Mode': '자동 대국 모드 켜기/끄기',
    'Toggle Guess Mode': '다음 수 맞추기 모드 켜기/끄기',
    'Clean Markup…': '주석 및 표시 지우기',
    'Edit SGF Properties…': 'SGF 속성 편집',
    'Rotate Anticlockwise': '시계 반대 방향으로 회전',
    'Rotate Clockwise': '시계 방향으로 회전',
    'Flip Horizontally': '좌우로 뒤집기',
    'Flip Vertically': '위아래로 뒤집기',
    'Invert Colors': '흑백 바꾸기',
    'Reset': '기본값으로'
  },
  'menu.view': {
    'View': '보기',
    'Toggle Menu Bar': '메뉴 바 켜기/끄기',
    'Toggle Full Screen': '전체화면 켜기/끄기',
    'Show Coordinates': '좌표 보기',
    'Don’t Show': '보이지 않기',
    'A1 (Default)': 'A1 (기본값)',
    '1-1': '1-1',
    'Relative': '상대적',
    'Show Move Numbers': '수순 보기',
    'Show Move Colorization': '착점 색상 보기',
    'Show Next Moves': '다음 수 보기',
    'Show Sibling Variations': '다른 변화도 보기',
    'Show Heatmap': '히트맵 보기',
    'Show Win Rate': '승률 보기',
    'Show Score Lead': '집 차이 보기',
    'Show Winrate Graph': '승률 그래프 보기',
    'Show Game Tree': '게임 트리 보기',
    'Show Comments': '해설 보기',
    'Zoom': '확대/축소',
    'Increase': '확대',
    'Decrease': '축소',
    'Reset': '기본값으로',
    'Transform Board': '바둑판 변형'
  },
  'menu.help': {
    'Help': '도움말',
    '${appName} v${version}': p => `${p.appName} v${p.version}`,
    'Check for Updates': '업데이트 확인',
    'GitHub Repository': 'GitHub 저장소',
    'Report Issue': '문제 보고하기'
  },
  'menu.developer': {
    'Developer': '개발자',
    'Open Settings Folder': '설정 폴더 열기',
    'Toggle Developer Tools': '개발자 도구 켜기/끄기',
    'Load Language File…': '언어 파일 불러오기',
    'A language file is basically a JavaScript file and can be used to execute arbitrary code on your computer.\n\nIt can be extremely dangerous, so it is recommended to only load language files from authors you trust.':
      '언어 파일은 기본적으로 JavaScript 파일로, 임의의 코드를 실행하는 데 사용될 수 있습니다.\n\n매우 위험할 수 있으므로, 믿을 수 있는 제작자의 언어 파일만을 불러오기를 권장합니다.',
    'I understand': '이해했습니다',
    'JavaScript Files': 'JavaScript 파일',
    'Unload Language File': '불러온 언어 파일 해제'
  },
  'menu.macos': {
    'Text': '텍스트'
  },
  'App': {
    'Press Esc to exit full screen mode':
      '전체 화면 모드를 나가려면 Esc 키를 누르십시오.',
    'Press Alt to show menu bar': '메뉴 바를 보려면 Alt 키를 누르십시오'
  },
  'ContentDisplay': {
    'Jump to Move Number': '수순으로 이동'
  },
  'dialog': {
    'OK': '확인'
  },
  'EngineSyncer': {
    'GTP engines don’t support invalid board positions.':
      'GTP 엔진이 규칙에 어긋난 수를 지원하지 않습니다.',
    'GTP engines only support board sizes that don’t exceed ${length}.': p =>
      `GTP 엔진이 ${p.length}를 넘지 않는 크기의 바둑판 크기만 지원합니다.`,
    'Current board arrangement can’t be recreated on the GTP engine.':
      '현재 국면을 GTP 엔진에서 다시 만들 수 없습니다.',
    'GTP engine can’t be synced to current state.':
      'GTP 엔진을 현재 상태로 동기화할 수 없습니다.'
  },
  'gtplogger': {
    'You have an invalid log folder for GTP console logging in your settings.\n\nPlease make sure the log directory is valid and writable, or disable GTP console logging.':
      'GTP 콘솔 기록을 기록할 폴더가 잘못 설정되어 있습니다.\n\n기록할 디렉토리가 유효하고 쓰기 가능한지 확인하시거나, GTP 콘솔 기록을 비활성화하십시오.'
  },
  'sabaki.window': {
    'Game ${gameNumber}': p => `${p.gameNumber}번째 판`
  },
  'sabaki.file': {
    'All Files': '모든 파일',
    'This file is unreadable.': '읽을 수 없는 파일입니다.',
    'Your changes will be lost if you close this file without saving.':
      '저장하지 않고 닫으면 변경 사항이 모두 사라집니다.',
    'Save': '저장',
    'Don’t Save': '저장하지 않기',
    'Cancel': '취소',
    'This file has been changed outside of ${appName}.\nDo you want to reload the file? Your changes will be lost.': p =>
      [
        `이 파일은 ${p.appName}가 아닌 다른 곳에서 변경되었습니다.`,
        '파일을 다시 불러오시겠습니까? 변경 사항은 모두 사라집니다.'
      ].join('\n'),
    'Reload': '다시 불러오기',
    'Don’t Reload': '다시 불러오지 않기'
  },
  'sabaki.play': {
    'Edit Label': '문자 편집',
    'Enter label text': '문자를 입력해 주십시오',
    'You are about to play a move which repeats a previous board position.\nThis is invalid in some rulesets.':
      '이전 국면을 반복하는 수를 두려고 하십니다.\n일부 규칙에서는 착수금지입니다.',
    'Play Anyway': '무시하고 두기',
    'Don’t Play': '두지 않기',
    'You are about to play a suicide move.\nThis is invalid in some rulesets.':
      '자살수를 두려고 하십니다.\n일부 규칙에서는 착수금지입니다.'
  },
  'sabaki.engine': {
    'Connection Failed': '연결에 실패했습니다.',
    '${engine} has failed to generate a move.': p =>
      `${p.engine}이 다음 수를 두는 데 실패했습니다.`,
    '${engine} has resigned.': p => `${p.engine}이/가 기권했습니다.`,
    'Please attach one or more engines first.':
      '먼저 하나 이상의 엔진을 연결해 주십시오.',
    'The selected engine does not support analysis.':
      '선택한 엔진은 분석을 지원하지 않습니다.'
  },
  'sabaki.node': {
    'Do you really want to remove this node?':
      '정말 이 노드를 제거하시겠습니까?',
    'Remove Node': '노드 제거',
    'Cancel': '취소',
    'Do you really want to remove all other variations?':
      '정말 다른 모든 변화도를 삭제하시겠습니까?',
    'Remove Variations': '변화도 삭제'
  },
  'menu.comment': {
    'Clear Annotations': '주석 지우기',
    'Good for Black': '흑이 좋음',
    'Unclear Position': '불분명한 국면',
    'Even Position': '호각인 국면',
    'Good for White': '백이 좋음',
    'Good Move': '좋은 수',
    'Interesting Move': '재미있는 수',
    'Doubtful Move': '의문수',
    'Bad Move': '악수',
    'Hotspot': '책갈피'
  },
  'menu.variation': {
    'Add Variation': '변화도 추가',
    'The root node cannot have sibling nodes.':
      '뿌리 노드는 자매 노드를 가질 수 없습니다.'
  },
  'menu.engineAction': {
    'Start': '시작',
    'Stop': '정지',
    'Detach': '연결 해제',
    'Synchronize': '동기화',
    'Generate Move': '다음 수 두기',
    'Set as Analyzer': '분석 엔진으로 설정',
    'Set as Black Player': '흑으로 설정',
    'Set as White Player': '백으로 설정',
    'Go to Engine': '이 엔진으로 이동'
  },
  'AutoplayBar': {
    'sec per move': '한 수당 시간(초)'
  },
  'EditBar': {
    'Stone Tool': '돌 배치',
    'Cross Tool': '가위표 표시',
    'Triangle Tool': '세모 표시',
    'Square Tool': '네모 표시',
    'Circle Tool': '원 표시',
    'Line Tool': '선 표시',
    'Arrow Tool': '화살표 표시',
    'Label Tool': '문자 표시',
    'Number Tool': '숫자 표시'
  },
  'FindBar': {
    'Find': '찾기',
    'Next': '다음',
    'Previous': '이전'
  },
  'GuessBar': {
    'Click on the board to guess the next move.':
      '바둑판을 클릭해 다음 수를 맞추십시오.'
  },
  'PlayBar': {
    'Pass': '착수 넘김',
    'Resign': '기권',
    'Estimate': '형세판단',
    'Score': '계가',
    'Edit': '편집',
    'Find': '찾기',
    'Info': '정보',
    'Hotspot': '책갈피',
    'Engine': '엔진',
    'Black': '흑',
    'Change Player': '대국자 바꾸기',
    'White to play': '백 둘 차례',
    'Black to play': '흑 둘 차례',
    'White': '백'
  },
  'ScoringBar': {
    'Details': '자세히',
    'Draw': '무승부',
    'Please select dead stones.': '사석을 지정해 주십시오.',
    'Toggle group status.': '클릭하여 돌의 사활을 바꾸십시오.'
  },
  'AdvancedPropertiesDrawer': {
    'Remove': '제거',
    'Enter property name': '속성 이름을 입력하십시오',
    'This property has been blocked.': '이 속성은 입력할 수 없습니다.',
    'Add': '추가',
    'Close': '닫기'
  },
  'CleanMarkupDrawer': {
    'From Current Position': '이 국면으로부터',
    'From Entire Game': '판 전체로부터',
    'Clean Markup': '주석 및 표시 지우기',
    'Cross markers': '가위표 표시',
    'Triangle markers': '세모 표시',
    'Square markers': '네모 표시',
    'Circle markers': '원 표시',
    'Line markers': '선 표시',
    'Arrow markers': '화살표 표시',
    'Label markers': '문자 표시',
    'Comments': '해설',
    'Annotations': '주석',
    'Hotspots markers': '책갈피 표시',
    'Winrate data': '승률 데이터',
    'Remove': '제거',
    'Close': '닫기'
  },
  'GameChooserDrawer': {
    'Black': '흑',
    'White': '백',
    'Remove Game': '이 판 제거',
    'Do you really want to remove this game permanently?':
      '이 판을 영구히 제거하시겠습니까?',
    'Cancel': '취소',
    'Remove Other Games': '다른 판 제거',
    'Do you really want to remove all other games permanently?':
      '다른 판을 영구히 제거하시겠습니까?',
    'Remove Games': '대국 제거',
    'Add New Game': '새 대국 추가',
    'Add Existing Files…': '파일로부터 추가',
    'All Files': '모든 파일',
    'Some files are unreadable.': '읽을 수 없는 파일이 있습니다.',
    'Black Player': '흑 대국자',
    'White Player': '백 대국자',
    'Black Rank': '흑 단급',
    'White Rank': '백 단급',
    'Game Name': '대국명',
    'Game Event': '기전',
    'Date': '날짜',
    'Number of Moves': '수수',
    'Reverse': '역순으로',
    'Manage Games': '여러 판 관리',
    'Filter': '필터링',
    'Add': '추가',
    'Sort By': '정렬 기준',
    'Close': '닫기'
  },
  'InfoDrawer': {
    'Manual': '직접 두기',
    '(Unnamed Engine)': '(이름 없는 엔진)',
    'Attach Engine': '엔진 연결',
    'Manage Engines…': '엔진 관리',
    'Previous Month': '지난달',
    'Next Month': '다음달',
    'Rank': '단급',
    'Black': '흑',
    'Swap': '바꾸기',
    'White': '백',
    'Name': '이름',
    '(Unnamed)': '(이름 없음)',
    'Event': '기전',
    'None': '없음',
    'Date': '날짜',
    'Comment': '비고',
    'Result': '결과',
    'Show': '보기',
    'Komi': '덤',
    'Handicap': '치석',
    'No stones': '맞바둑',
    '${stones} stones': p => `${p.stones}점`,
    'Board Size': '판 크기',
    'OK': '확인',
    'Cancel': '취소'
  },
  'PreferencesDrawer': {
    'Please restart ${appName} to apply your language setting.': p =>
      '언어 설정을 적용하려면 ${p.appName}을 다시 시작해 주십시오.',
    'Enable hardware acceleration if possible': '가능하다면 하드웨어 가속 사용',
    'Check for updates at startup': '시작할 때 업데이트 확인',
    'Enable sounds': '소리 켜기',
    'Jump to end after loading file': '파일을 연 후 맨 끝으로 이동',
    'Fuzzy stone placement': '돌 비껴 놓기',
    'Animate fuzzy placement': '비껴 놓을 때 움직이기',
    'Variation Replay Mode:': null,
    'Disabled': null,
    'Move by Move': null,
    'Instantly': null,
    'Language:': '언어',
    'Game Tree Style:': '게임 트리 모양',
    'Compact': '작게',
    'Spacious': '넓게',
    'Big': '크게',
    'Show automatic move titles': '행마 이름 보기',
    'Show ko warning': '패 경고 보기',
    'Show suicide warning': '자살수 경고 보기',
    'Show remove node warning': '노드 제거 경고 보기',
    'Show remove other variations warning': '다른 변화도를 삭제할 때 경고 보기',
    'Offer to reload file if changed externally':
      '파일이 외부에서 변경된 경우 다시 불러오기',
    'Click last played stone to remove': '마지막으로 둔 수를 클릭해 제거',
    'Invert winrate graph': '승률 그래프 반전',
    'Path': '경로',
    'Browse…': '찾아보기',
    'Directory not found': '디렉토리를 찾을 수 없습니다',
    'File not found': '파일을 찾을 수 없습니다',
    'Do you really want to uninstall this theme?':
      '이 테마를 정말 제거하시겠습니까?',
    'Uninstall': '제거',
    'Cancel': '취소',
    'Uninstallation failed.': '제거에 실패했습니다.',
    'Sabaki Themes': 'Sabaki 테마',
    'Installation failed.': '설치에 실패했습니다.',
    'Custom Images': '사용자 지정 이미지',
    'Black stone image:': '흑돌 이미지',
    'White stone image:': '백돌 이미지',
    'Board image:': '바둑판 이미지',
    'Background image:': '배경 이미지',
    'Current Theme': '현재 테마',
    'Default': '기본값',
    'Install Theme…': '테마 설치',
    'Get more themes…': '더 많은 테마 얻기',
    'by ${author}': p => `${p.author} 제작`,
    'Homepage': '홈페이지',
    'All Files': '모든 파일',
    'Remove': '제거',
    '(Unnamed Engine)': '(이름 없는 엔진)',
    'No arguments': '전달 인자 없음',
    'Initial commands (;-separated)': '시작 시 명령어(;로 구분됨)',
    'Enable GTP logging to directory:': '디렉토리에 GTP 기록 쓰기',
    'Add': '추가',
    'General': '일반',
    'Themes': '테마',
    'Engines': '엔진',
    'Close': '닫기',
    /* unused */ 'Instantly play out analysis variations on board':
      '엔진 분석 변화도를 판에 한번에 보여주기'
  },
  'ScoreDrawer': {
    'Black': '흑',
    'White': '백',
    'Draw': '무승부',
    'Score': '점수',
    'Area': '집+돌',
    'Territory': '집',
    'Captures': '사석',
    'Komi': '덤',
    'Handicap': '치석',
    'Total': '총합',
    'Result:': '결과:',
    'Update Result': '결과 갱신',
    'Close': '닫기'
  },
  'CommentBox': {
    'Result: ${result}': p => `결과: ${p.result}`,
    '${a}-${b} Point': p => `${p.a}-${p.b}`,
    'View article on Sensei’s Library': 'Sensei’s Library에서 관련 글 보기',
    'Bad move': '악수',
    'Very bad move': '대악수',
    'Doubtful move': '의문수',
    'Very doubtful move': '상당한 의문수',
    'Interesting move': '재미있는 수',
    'Very interesting move': '매우 재미있는 수',
    'Good move': '좋은 수',
    'Very good move': '아주 좋은 수',
    'Good for White': '백이 좋음',
    'Very good for White': '백이 아주 좋음',
    'Even position': '호각인 국면',
    'Very even position': '매우 팽팽한 국면',
    'Good for Black': '흑이 좋음',
    'Very good for Black': '흑이 아주 좋음',
    'Unclear position': '불분명한 국면',
    'Very unclear position': '매우 불분명한 국면',
    'Edit': '편집',
    'Title': '제목',
    'Comment': '해설'
  },
  'PeerList': {
    'Running': '작동 중',
    'Stopped': '정지됨',
    'Analyzer': '분석 엔진',
    'Plays as Black': '흑으로 두는 중',
    'Plays as White': '백으로 두는 중',
    'Attach Engine…': '엔진 연결',
    'Start Engine vs. Engine Game': '엔진 대 엔진 대국 시작',
    'Stop Engine vs. Engine Game': '엔진 대 엔진 대국 중단'
  },
  'WinrateGraph': {
    'Black': '흑',
    'White': '백',
    'Black Winrate:': '흑 승률',
    'White Winrate:': '백 승률'
  },
  'fileformats': {
    'Tygem GIB': '타이젬 GIB',
    'Game Records': '기보',
    'wBaduk NGF': '사이버오로 NGF',
    'Smart Game Format': '스마트 게임 포맷(SGF)'
  },
  'boardmatcher': {
    'Low Chinese Opening': '낮은 중국식 포석',
    'High Chinese Opening': '높은 중국식 포석',
    'Orthodox Opening': null,
    'Enclosure Opening': null,
    'Kobayashi Opening': '고바야시류 포석',
    'Small Chinese Opening': '미니중국식 포석',
    'Micro Chinese Opening': '변형 미니중국식 포석',
    'Sanrensei Opening': '삼연성 포석',
    'Nirensei Opening': '이연성 포석',
    'Shūsaku Opening': '슈사쿠류 포석',
    '3-3 Point': '삼삼',
    'Low Approach': '낮은 걸침',
    'High Approach': '높은 걸침',
    'Low Enclosure': '낮은 굳힘',
    'High Enclosure': '높은 굳힘',
    'Mouth Shape': null,
    'Table Shape': null,
    'Tippy Table': null,
    'Bamboo Joint': '쌍립',
    'Trapezium': null,
    'Diamond': null,
    'Tiger’s Mouth': '호구',
    'Empty Triangle': '빈삼각',
    'Turn': '꼬부림',
    'Stretch': '뻗음',
    'Diagonal': '마늘모',
    'Wedge': '끼움',
    'Hane': '젖힘',
    'Cut': '끊음',
    'Square': null,
    'Throwing Star': null,
    'Parallelogram': null,
    'Dog’s Head': null,
    'Horse’s Head': null,
    'Attachment': '붙임',
    'One-Point Jump': '한칸뜀',
    'Big Bulge': '양날일자',
    'Small Knight': '날일자',
    'Two-Point Jump': '두칸뜀',
    'Large Knight': '눈목자',
    'Shoulder Hit': '어깨짚음',
    'Diagonal Jump': '밭전자',
    '4-4 Point': '4-4 화점',
    'Pass': '착수 넘김',
    'Take': '따냄',
    'Atari': '단수',
    'Suicide': '자살수',
    'Fill': '단수 이음',
    'Connect': '연결',
    'Tengen': '천원',
    'Hoshi': '화점'
  }
}
