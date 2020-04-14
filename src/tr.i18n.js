module.exports = {
  'menu.file': {
    'New Window': 'Yeni &Pencere',
    'File': '&Dosya',
    'New': '&Yeni',
    'Open…': '&Aç…',
    'Save': '&Kaydet',
    'Save As…': '&Farklı Kaydet…',
    'Clipboard': '&Pano',
    'Load SGF': 'SGF &Yükle',
    'Copy SGF': 'SGF K&opyala',
    'Copy ASCII Diagram': '&ASCII Diyagramı Kopyala',
    'Game Info': 'Oyun &Bilgisi',
    'Manage Games…': 'Oyun&ları Yönet…',
    'Preferences…': '&Tercihler…'
  },
  'updater': {
    'Download Update': 'Güncellemeyi İndir',
    'View Changelog': 'Değişiklikleri Görüntüle',
    'Not Now': 'Şimdi Değil',
    '${appName} v${version} is available now.': p =>
      `${p.appName} v${p.version} zaten yüklü`,
    'OK': 'Tamam',
    'No updates available': 'Güncelleme mevcut değil',
    '${appName} v${version} is the latest version.': p =>
      `${p.appName} v${p.version} en son sürüm.`
  },
  'exception': {
    '${appName} v${version}': p => `${p.appName} v${p.version}`,
    'Something weird happened. ${appName} will shut itself down. If possible, please report this on ${appName}’s repository on GitHub.': p =>
      [
        `Garip bir şey oldu. ${p.appName} kendini kapatacak.`,
        `Eğer mümkünse, lütfen bunu GitHub’da ${p.appName} deposunda bildirin.`
      ].join(' ')
  },
  'menu.play': {
    'Play': 'Oyna',
    'Toggle Player': 'Oyuncu Değiştir',
    'Select Point': 'Nokta Seçin',
    'Enter a coordinate to select a point':
      'Nokta seçmek için koordinat girin',
    'Pass': 'Pas',
    'Resign': 'Terk',
    'Estimate': 'Tahmin',
    'Score': 'Skor'
  },
  'menu.edit': {
    'Edit': 'Düzenle',
    'Undo': 'Geri Al',
    'Redo': 'İleri Git',
    'Toggle Edit Mode': 'Düzenleme Modu Geçişi',
    'Select Tool': 'Araç Seç',
    'Stone Tool': 'Taş Aracı',
    'Cross Tool': 'Çarpı Aracı',
    'Triangle Tool': 'Üçgen Aracı',
    'Square Tool': 'Kare Aracı',
    'Circle Tool': 'Daire Aracı',
    'Line Tool': 'Çizgi Aracı',
    'Arrow Tool': 'Ok Aracı',
    'Label Tool': 'Harf Aracı',
    'Number Tool': 'Sayı Aracı',
    'Copy Variation': 'Varyasyonu Kopyala',
    'Cut Variation': 'Varyasyonu Kes',
    'Paste Variation': 'Varyasyonu Yapıştır',
    'Make Main Variation': 'Ana varyasyon Yap',
    'Shift Left': 'Sola Kaydır',
    'Shift Right': 'Sağa Kaydır',
    'Flatten': 'Düzleştir',
    'Remove Node': 'Düğümü Kaldır',
    'Remove Other Variations': 'Diğer Varyasyonları Sil'
  },
  'menu.find': {
    'Find': 'Bul',
    'Toggle Find Mode': 'Bulma Modu Geçişi',
    'Find Next': 'Sonrakini Bul',
    'Find Previous': 'Öncekini Bul',
    'Toggle Hotspot': 'Önemli Nokta Geçişi',
    'Jump to Next Hotspot': 'Sonraki Önemli Noktaya Atla',
    'Jump to Previous Hotspot': 'Önceki Önemli Noktaya Atla'
  },
  'menu.navigation': {
    'Navigation': 'Navigasyon',
    'Back': 'Geri',
    'Forward': 'İleri',
    'Go to Previous Fork': 'Önceki Çatala Git',
    'Go to Next Fork': 'Sonraki Çatala Git',
    'Go to Previous Comment': 'Önceki Yoruma Git',
    'Go to Next Comment': 'Sonraki Yoruma Git',
    'Go to Beginning': 'Başlangıca Git',
    'Go to End': 'Sona Git',
    'Go to Main Variation': 'Ana Varyasyona Git',
    'Go to Previous Variation': 'Önceki Varyasyona Git',
    'Go to Next Variation': 'Sonraki Varyasyona Git',
    'Go to Move Number': 'Hamle Numarasına Git',
    'Enter a move number to go to': 'Gitmek için bir hamle numarası girin',
    'Go to Next Game': 'Sonraki Oyuna Git',
    'Go to Previous Game': 'Önceki Oyuna Git'
  },
  'menu.engines': {
    'Engines': 'Motorlar',
    'Show Engines Sidebar': 'Motor Kenar Çubuğunu Göster',
    'Toggle Analysis': 'Analiz Geçişi',
    'None of the attached engines support analysis.':
      'İlişkilendirilmiş motorlardan hiç biri analizi desteklemiyor.',
    'Start Engine vs. Engine Game': 'Motor vs. Motor Oyunu Başlat',
    'Stop Engine vs. Engine Game': 'Motor vs. Motor Oyununu Durdur',
    'Generate Move': 'Hamle Yap',
    'Please assign an engine to the player first.':
      'Lütfen önce oyuncuyla bir motoru ilişkilendirin.',
    '(Unnamed Engine)': '(İsimsiz Motor)',
    'Manage Engines…': 'Motorları Yönet…',
    'Clear Console': 'Komut Satırını Temizle'
  },
  'menu.tools': {
    'Tools': 'Araçlar',
    'Toggle Autoplay Mode': 'Otomatik Oynama Modu Geçişi',
    'Toggle Guess Mode': 'Tahmin Modu Geçişi',
    'Clean Markup…': 'İşaretleri Temizle…',
    'Edit SGF Properties…': 'SGF Özelliklerini Düzenle',
    'Rotate Anticlockwise': 'Saat Yönünün Tersine Çevir',
    'Rotate Clockwise': 'Saat Yönünde Çevir',
    'Flip Horizontally': 'Yatay Olarak Çevir',
    'Flip Vertically': 'Dikey Olarak Çevir',
    'Invert Colors': 'Renkleri Değiştir',
    'Reset': 'Sıfırla'
  },
  'menu.view': {
    'View': 'Görüntüle',
    'Toggle Menu Bar': 'Menü Çubuğu Geçişi',
    'Toggle Full Screen': 'Tam Ekran Modu Geçişi',
    'Show Coordinates': 'Koordinatları Göster',
    'Don’t Show': 'Gösterme',
    'A1 (Default)': 'A1 (Varsayılan)',
    '1-1': '1-1',
    'Relative': 'Göreceli',
    'Show Move Numbers': 'Hamle Numaralarını Göster',
    'Show Move Colorization': 'Hamle Renklendirmesini Göster',
    'Show Next Moves': 'Sonraki Hamleleri Göster',
    'Show Sibling Variations': 'Kardeş Varyasyonları Göster',
    'Show Heatmap': 'Isı Haritasını Göster',
    'Show Win Rate': 'Kazanma Oranını Göster',
    'Show Score Lead': 'Skor Göster',
    'Show Winrate Graph': 'Kazanma Oranı Grafiğini Göster',
    'Show Game Tree': 'Oyun Ağacını Göster',
    'Show Comments': 'Yorumları Göster',
    'Zoom': 'Yakınlaştır',
    'Increase': 'Arttır',
    'Decrease': 'Düşür',
    'Reset': 'Sıfırla',
    'Transform Board': 'Tahtayı Dönüştür'
  },
  'menu.help': {
    'Help': 'Yardım',
    '${appName} v${version}': p => `${p.appName} v${p.version}`,
    'Check for Updates': 'Güncellemeleri Kontrol Et',
    'GitHub Repository': 'GitHub Deposu',
    'Report Issue': 'Sorun Bildir'
  },
  'menu.developer': {
    'Developer': 'Geliştirici',
    'Open Settings Folder': 'Ayarlar Klasörünü Aç',
    'Toggle Developer Tools': 'Geliştirici Araçları Geçişi',
    'Load Language File…': 'Dil Dosyasını Yükle…',
    'A language file is basically a JavaScript file and can be used to execute arbitrary code on your computer.\n\nIt can be extremely dangerous, so it is recommended to only load language files from authors you trust.':
      'Dil dosyası basitçe bir JavaScript dosyasıdır ve bilgisayarınızda keyfi kodlar çalıştırmak için kullanılabilir.\n\nÇok tehlikeli olabilir, bu yüzden yalnızca güvendiğiniz kaynaklardan aldığınız dil dosyalarını yüklemeniz önerilir.',
    'I understand': 'Anladım',
    'JavaScript Files': 'JavaScript Dosyaları',
    'Unload Language File': 'Yüklenen Dil Dosyasını Kaldır'
  },
  'menu.macos': {
    'Text': 'Metin'
  },
  'App': {
    'Press Esc to exit full screen mode': 'Tam Ekran modundan çıkmak için Esc tuşuna basın',
    'Press Alt to show menu bar': 'Menü barını göstermek için Alt tuşuna basın'
  },
  'ContentDisplay': {
    'Jump to Move Number': 'Hamle Numarasına Atla'
  },
  'dialog': {
    'OK': 'Tamam'
  },
  'EngineSyncer': {
    'GTP engines don’t support invalid board positions.':
      'GTP motorları geçersiz tahta pozisyonlarını desteklemez',
    'GTP engines only support board sizes that don’t exceed ${length}.': p =>
      `GTP motorları yalnızca ${p.length} boyutlarını aşmayan tahta ölçülerini destekler.`,
    'Current board arrangement can’t be recreated on the GTP engine.':
      'Mevcut tahta düzenlemesi GTP motorunda yeniden oluşturulamaz.',
    'GTP engine can’t be synced to current state.':
      'GTP motoru mevcut durumla senkronize edilemez.'
  },
  'gtplogger': {
    'You have an invalid log folder for GTP console logging in your settings.\n\nPlease make sure the log directory is valid and writable, or disable GTP console logging.':
      'GTP komut loglaması için ayarlarınızda geçersiz bir dizin mevcut.\n\nLütfen loglama dizininin geçerli ve yazılabilir olduğundan emin olun, ya da GTP konsol loglamasını devre dışı bırakın.'
  },
  'sabaki.window': {
    'Game ${gameNumber}': p => `Oyun ${p.gameNumber}`
  },
  'sabaki.file': {
    'All Files': 'Tüm Dosyalar',
    'This file is unreadable.': 'Bu dosya okunamıyor',
    'Your changes will be lost if you close this file without saving.':
      'Bu dosyayı kaydetmeden kapatırsanız değişiklikleriniz kaybolacaktır.',
    'Save': 'Kaydet',
    'Don’t Save': 'Kaydetme',
    'Cancel': 'İptal',
    'This file has been changed outside of ${appName}.\nDo you want to reload the file? Your changes will be lost.': p =>
      [
        `Bu dosya ${p.appName} dışında değiştirildi.`,
        'Dosyayı tekrar yüklemek ister misiniz? Değişiklikleriniz kaybolacaktır.'
      ].join('\n'),
    'Reload': 'Tekrar Yükle',
    'Don’t Reload': 'Tekrar Yükleme'
  },
  'sabaki.play': {
    'Edit Label': 'Başlığı Düzenle',
    'Enter label text': 'Başlık metni gir',
    'You are about to play a move which repeats a previous board position.\nThis is invalid in some rulesets.':
      'Tahtayı bir önceki pozisyonuna getiren bir hamle oynuyorsunuz.\nBu bazı kural setlerinde geçersizdir.',
    'Play Anyway': 'Yine de oyna',
    'Don’t Play': 'Oynama',
    'You are about to play a suicide move.\nThis is invalid in some rulesets.':
      'Bir intihar hamlesi oynamaktasınız.\nBu bazı kural setlerinde geçersizdir.',
  },
  'sabaki.engine': {
    'Connection Failed': 'Bağlantı Başarısız Oldu',
    '${engine} has failed to generate a move.': p =>
      `${p.engine} hamle yapmakta başarısız oldu.`,
    '${engine} has resigned.': p => `${p.engine}  terk etti.`,
    'Please attach one or more engines first.':
      'Lütfen bir ya da daha fazla motor ilişkilendirin.',
    'The selected engine does not support analysis.':
      'Seçilen motor analizi desteklemiyor'
  },
  'sabaki.node': {
    'Do you really want to remove this node?':
      'Gerçekten bu düğümü silmek istiyor musunuz?',
    'Remove Node': 'Düğümü Sil',
    'Cancel': 'İptal',
    'Do you really want to remove all other variations?':
      'Gerçekten diğer tüm varyasyonları silmek istiyor musunuz?',
    'Remove Variations': 'Varyasyonları Sil'
  },
  'menu.comment': {
    'Clear Annotations': 'Notları Sil',
    'Good for Black': 'Siyah için İyi',
    'Unclear Position': 'Pozisyon Net Değil',
    'Even Position': 'Pozisyon Eşit',
    'Good for White': 'Beyaz için İyi',
    'Good Move': 'İyi Hamle',
    'Interesting Move': 'İlginç Hamle',
    'Doubtful Move': 'Şüpheli Hamle',
    'Bad Move': 'Kötü Hamle',
    'Hotspot': 'Önemli Nokta'
  },
  'menu.variation': {
    'Add Variation': 'Varyasyon Ekle',
    'The root node cannot have sibling nodes.':
      'Kök düğümün kardeş düğümleri olamaz'
  },
  'menu.engineAction': {
    'Start': 'Başlat',
    'Stop': 'Durdur',
    'Detach': 'Çıkart',
    'Synchronize': 'Senkronize',
    'Generate Move': 'Hamle Yap',
    'Set as Analyzer': 'Analizci Olarak Ayarla',
    'Set as Black Player': 'Siyah Oyuncu Olarak Ayarla',
    'Set as White Player': 'Beyaz Oyuncu Olarak Ayarla',
    'Go to Engine': 'Motora Git'
  },
  'AutoplayBar': {
    'sec per move': 'hamle başına saniye'
  },
  'EditBar': {
    'Stone Tool': 'Taş Aracı',
    'Cross Tool': 'Çarpı Aracı',
    'Triangle Tool': 'Üçgen Aracı',
    'Square Tool': 'Kare Aracı',
    'Circle Tool': 'Daire Aracı',
    'Line Tool': 'Çizgi Aracı',
    'Arrow Tool': 'Ok Aracı',
    'Label Tool': 'Harf Aracı',
    'Number Tool': 'Sayı Aracı'
  },
  'FindBar': {
    'Find': 'Bul',
    'Next': 'Sonraki',
    'Previous': 'Önceki'
  },
  'GuessBar': {
    'Click on the board to guess the next move.':
      'Sonraki hamleyi tahmin etmek için tahta üzerine tıklayın'
  },
  'PlayBar': {
    'Pass': 'Pas',
    'Resign': 'Terk',
    'Estimate': 'Tahmin',
    'Score': 'Skor',
    'Edit': 'Düzenle',
    'Find': 'Bul',
    'Info': 'Bilgi',
    'Hotspot': 'Önemli Nokta',
    'Engine': 'Motor',
    'Black': 'Siyah',
    'Change Player': 'Oyuncuyu Değiştir',
    'White to play': 'Beyaz Oynar',
    'Black to play': 'Siyah Oynar',
    'White': 'Beyaz'
  },
  'ScoringBar': {
    'Details': 'Detay',
    'Draw': 'Berabere',
    'Please select dead stones.': 'Lütfen ölü taşları seçin.',
    'Toggle group status.': 'Grup statüsü geçişi.'
  },
  'AdvancedPropertiesDrawer': {
    'Remove': 'Sil',
    'Enter property name': 'Özellik ismi gir',
    'This property has been blocked.': 'Bu özellik devre dışı',
    'Add': 'Ekle',
    'Close': 'Kapat'
  },
  'CleanMarkupDrawer': {
    'From Current Position': 'Mevcut Pozisyondan',
    'From Entire Game': 'Tüm Oyundan',
    'Clean Markup': 'İşaretleri Sil',
    'Cross markers': 'Çarpı işaretçileri',
    'Triangle markers': 'Üçgen işaretçileri',
    'Square markers': 'Kare işaretçileri',
    'Circle markers': 'Daire işaretçileri',
    'Line markers': 'Çizgi işaretçileri',
    'Arrow markers': 'Ok işaretçileri',
    'Label markers': 'Harf işaretçileri',
    'Comments': 'Yorumlar',
    'Annotations': 'Notlar',
    'Hotspots markers': 'Önemli Nokta işaretçileri',
    'Winrate data': 'Kazanma Oranı verisi',
    'Remove': 'Sil',
    'Close': 'Kapat'
  },
  'GameChooserDrawer': {
    'Black': 'Siyah',
    'White': 'Beyaz',
    'Remove Game': 'Oyunu Sil',
    'Do you really want to remove this game permanently?':
      'Gerçekten bu oyunu kalıcı olarak silmek istiyor musunuz?',
    'Cancel': 'İptal',
    'Remove Other Games': 'Diğer Oyunlari Sil',
    'Do you really want to remove all other games permanently?':
      'Gerçekte diğer oyunları kalıcı olarak silmek istiyor musunuz?',
    'Remove Games': 'Oyunları Sil',
    'Add New Game': 'Yeni Oyun Ekle',
    'Add Existing Files…': 'Mevcut Dosyaları Ekle…',
    'All Files': 'Tüm Dosyalar',
    'Some files are unreadable.': 'Bazı dosyalar okunamıyor',
    'Black Player': 'Siyah Oyuncu',
    'White Player': 'Beyaz Oyuncu',
    'Black Rank': 'Siyah Seviye',
    'White Rank': 'Beyaz Seviye',
    'Game Name': 'Oyun Adı',
    'Game Event': 'Oyun Etkinliği',
    'Date': 'Tarih',
    'Number of Moves': 'Hamle Numaraları',
    'Reverse': 'Yer Değiştir',
    'Manage Games': 'Oyunları Yönet',
    'Filter': 'Filtre',
    'Add': 'Ekle',
    'Sort By': 'Sırala',
    'Close': 'Kapat'
  },
  'InfoDrawer': {
    'Manual': 'Manuel',
    '(Unnamed Engine)': '(İsimsiz Motor)',
    'Attach Engine': 'Motoru İlişkilendir',
    'Manage Engines…': 'Motorları Yönet…',
    'Previous Month': 'Önceki Ay',
    'Next Month': 'Sonraki Ay',
    'Rank': 'Seviye',
    'Black': 'Siyah',
    'Swap': 'Yer Değiştir',
    'White': 'Beyaz',
    'Name': 'İsim',
    '(Unnamed)': '(İsimsiz)',
    'Event': 'Etkinlik',
    'None': 'Hiçbiri',
    'Date': 'Tarih',
    'Comment': 'Yorum',
    'Result': 'Sonuç',
    'Show': 'Göster',
    'Komi': 'Komi',
    'Handicap': 'Handikap',
    'No stones': 'Yok',
    '${stones} stones': p => `${p.stones} taş`,
    'Board Size': 'Tahta Boyutu',
    'OK': 'Tamam',
    'Cancel': 'İptal'
  },
  'PreferencesDrawer': {
    'Please restart ${appName} to apply your language setting.': p =>
      `Dil ayarlarının etkin olması için ${p.appName} yeniden başlatılmalı.`,
    'Enable hardware acceleration if possible':
      'Kullanılabiliyorsa donanım ivmelendirmesini etkinleştir',
    'Check for updates at startup': 'Başlangıçta güncellemeleri denetle',
    'Enable sounds': 'Sesleri etkinleştir',
    'Jump to end after loading file': 'Dosya yüklendikten sonra sona atla',
    'Fuzzy stone placement': 'Belirsiz taş yerleştirme',
    'Animate fuzzy placement': 'Belirsiz yerleştirmeyi hareketlendir',
    'Variation Replay Mode:': 'Varyasyon Yeniden Oynatma Modu:',
    'Disabled': 'Devredışı',
    'Move by Move': 'Hamle Hamle',
    'Instantly': 'Anında',
    'Language:': 'Dil:',
    'Game Tree Style:': 'Oyun Ağacı Stili:',
    'Compact': 'Sıkışık',
    'Spacious': 'Geniş',
    'Big': 'Büyük',
    'Show automatic move titles': 'Otomatik hamle isimlerini göster',
    'Show ko warning': 'Ko uyarısı göster',
    'Show suicide warning': 'İntihar uyarısı göster',
    'Show remove node warning': 'Düğüm silme uyarısı göster',
    'Show remove other variations warning':
      'Diğer varyasyon silme uyarısı göster',
    'Offer to reload file if changed externally':
      'Dosya dış kaynak tarafından değiştirilmişse tekrar yüklemeyi öner',
    'Click last played stone to remove': 'Silmek için son oynanan taşa tıkla',
    'Invert winrate graph': 'Kazanma oranı grafiğini ters çevir',
    'Path': 'Yol',
    'Browse…': 'Gözat…',
    'Directory not found': 'Dizin bulunamadı',
    'File not found': 'Dosya bulunamadı',
    'Do you really want to uninstall this theme?':
      'Gerçekten bu temayı silmek istiyor musunuz?',
    'Uninstall': 'Sil',
    'Cancel': 'İptal',
    'Uninstallation failed.': 'Silme başarısız oldu',
    'Sabaki Themes': 'Sabaki Temaları',
    'Installation failed.': 'Kurulum başarısız oldu',
    'Custom Images': 'Özel Görseller',
    'Black stone image:': 'Siyah taş görseli:',
    'White stone image:': 'Beyaz taş görseli:',
    'Board image:': 'Tahta görseli:',
    'Background image:': 'Arkaplan görseli:',
    'Current Theme': 'Mevcut Tema',
    'Default': 'Varsayılan',
    'Install Theme…': 'Tema Yükle…',
    'Get more themes…': 'Daha fazla tema…',
    'by ${author}': p => `by ${p.author}`,
    'Homepage': 'Ana sayfa',
    'All Files': 'Tüm Dosyalar',
    'Remove': 'Sil',
    '(Unnamed Engine)': '(İsimsiz Motor)',
    'No arguments': 'Argüman yok',
    'Initial commands (;-separated)': 'İlk komutlar (;-ayrılmış)',
    'Enable GTP logging to directory:': 'Dizine GTP loglamayı etkinleştir:',
    'Add': 'Ekle',
    'General': 'Genel',
    'Themes': 'Temalar',
    'Engines': 'Motorlar',
    'Close': 'Kapat'
  },
  'ScoreDrawer': {
    'Black': 'Siyah',
    'White': 'Beyaz',
    'Draw': 'Berabere',
    'Score': 'Skor',
    'Area': 'Alan',
    'Territory': 'Bölge',
    'Captures': 'Esirler',
    'Komi': 'Komi',
    'Handicap': 'Handikap',
    'Total': 'Toplam',
    'Result:': 'Sonuç:',
    'Update Result': 'Sonucu Güncelle',
    'Close': 'Kapat'
  },
  'CommentBox': {
    'Result: ${result}': p => `Sonuç: ${p.result}`,
    '${a}-${b} Point': p => `${p.a}-${p.b} Nokta`,
    'View article on Sensei’s Library': 'Sensei’s Library’de makaleyi görüntüle',
    'Bad move': 'Kötü hamle',
    'Very bad move': 'Çok kötü hamle',
    'Doubtful move': 'Şüpheli hamle',
    'Very doubtful move': 'Çok şüpheli hamle',
    'Interesting move': 'İlginç hamle',
    'Very interesting move': 'Çok ilginç hamle',
    'Good move': 'İyi hamle',
    'Very good move': 'Çok iyi hamle',
    'Good for White': 'Beyaz için iyi',
    'Very good for White': 'Beyaz için çok iyi',
    'Even position': 'Eşik pozisyon',
    'Very even position': 'Çok eşit pozisyon',
    'Good for Black': 'Siyah için iyi',
    'Very good for Black': 'Siyah için çok iyi',
    'Unclear position': 'Belirsiz pozisyon',
    'Very unclear position': 'Çok belirsiz pozisyon',
    'Edit': 'Düzenle',
    'Title': 'Başlık',
    'Comment': 'Yorum'
  },
  'PeerList': {
    'Running': 'Çalışıyor',
    'Stopped': 'Durdu',
    'Analyzer': 'Analizci',
    'Plays as Black': 'Siyah olarak Oyna',
    'Plays as White': 'Beyaz olarak Oyna',
    'Attach Engine…': 'Motoru İlişkilendir…',
    'Start Engine vs. Engine Game': 'Motor vs. Motor Oyunu Başlat',
    'Stop Engine vs. Engine Game': 'Motor vs. Motor Oyunu Durdur'
  },
  'WinrateGraph': {
    'Black': 'Siyah',
    'White': 'Beyaz',
    'Black Winrate:': 'Siyah Kazanma Oranı:',
    'White Winrate:': 'Beyaz Kazanma Oranı:'
  },
  'fileformats': {
    'Tygem GIB': 'Tygem GIB',
    'Game Records': 'Oyun Kayıtları',
    'wBaduk NGF': 'wBaduk NGF',
    'Smart Game Format': 'SGF'
  },
  'boardmatcher': {
    'Low Chinese Opening': 'Alçak Çin Açılışı',
    'High Chinese Opening': 'Yüksek Çin Açılışı',
    'Orthodox Opening': 'Orthodox Açılışı',
    'Enclosure Opening': 'Kuşatma Açılışı',
    'Kobayashi Opening': 'Kobayashi Açılışı',
    'Small Chinese Opening': 'Küçük Çin Açılışı',
    'Micro Chinese Opening': 'Mikro Çin Açılışı',
    'Sanrensei Opening': 'Sanrensei Açılışı',
    'Nirensei Opening': 'Nirensei Açılışı',
    'Shūsaku Opening': 'Shūsaku Açılışı',
    '3-3 Point': '3-3 Noktası',
    'Low Approach': 'Alçak Yaklaşma',
    'High Approach': 'Yüksek Yaklaşma',
    'Low Enclosure': 'Alçak Kuşatma',
    'High Enclosure': 'Yüksek Kuşatma',
    'Mouth Shape': 'Ağız Şekli',
    'Table Shape': 'Masa Şekli',
    'Tippy Table': 'Bozuk Masa',
    'Bamboo Joint': 'Bambu Bağı',
    'Trapezium': 'Yamuk',
    'Diamond': 'Elmas',
    'Tiger’s Mouth': 'Kaplan Ağzı',
    'Empty Triangle': 'Boş Üçgen',
    'Turn': 'Dönüş',
    'Stretch': 'Uzama',
    'Diagonal': 'Çapraz',
    'Wedge': 'Kama',
    'Hane': 'Hane',
    'Cut': 'Kes',
    'Square': 'Kare',
    'Throwing Star': 'Ninja Yıldızı',
    'Parallelogram': 'Paralelkenar',
    'Dog’s Head': 'Köpek Başı',
    'Horse’s Head': 'At Başı',
    'Attachment': 'Dokunma',
    'One-Point Jump': 'Bir Zıplama',
    'Big Bulge': 'Büyük Tepe',
    'Small Knight': 'Küçük At',
    'Two-Point Jump': 'İki Zıplama',
    'Large Knight': 'Geniş At',
    'Shoulder Hit': 'Omuz Hamlesi',
    'Diagonal Jump': 'Çapraz Atlama',
    '4-4 Point': '4-4 Noktası',
    'Pass': 'Pas',
    'Take': 'Al',
    'Atari': 'Atari',
    'Suicide': 'İntihar',
    'Fill': 'Doldur',
    'Connect': 'Bağlan',
    'Tengen': 'Tengen',
    'Hoshi': 'Hoshi'
  }
}
