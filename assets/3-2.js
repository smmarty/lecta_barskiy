(function () {
  var pgn = '[Event "?"]' +
'[Site "?"]' +
'[Date "????.??.??"]' +
'[Round "?"]' +
'[White "?"]' +
'[Black "?"]' +
'[Result "*"]' +
'[WhiteElo ""]' +
'[BlackElo ""]' +
'[ECO ""]' +
'[FEN "6k1/6pp/1p1n4/3r4/8/1P6/B5PP/2R3K1 w - - 0 1"]' +
'[SetUp "1"]' +
'[CurrentPosition "6k1/6pp/1p6/3r4/1PB5/8/6PP/2R3K1 b - - 0 2"]' +
' ' +
'{ Играя } 1.b4 {, &nbsp;белые открывают для своего слона диагональ a2–g8 и <i>связывают</i> ладью d5. Теперь ладья не может никуда отойти, потому что за ней прячется король. Перекрытие опасной диагонали ходом } 1...Nc4 { не помогает чёрным: белые заберут коня } 2.Bxc4 { и снова <i>свяжут</i> ладью. Поэтому спасти <i>связанную</i> ладью чёрные никак не могут. }  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 3-2',
      pawn_notation: 'short'
    }
  });

  document.querySelectorAll('.chessBoard__moves *').forEach(function (node) {
    if (!node.children.length && node.textContent) {
      if (node.className === 'moveNumber') {
        node.textContent = ' ' + node.textContent;
      } else if (node.className === 'chessBoard__moveComment') {
        var r = node.textContent.split('').reverse().join('');
        if (!node.textContent.startsWith(',') && !node.textContent.startsWith('.') && !node.textContent.startsWith(';') && !node.textContent.startsWith(':') && !node.textContent.startsWith('!')) {
          node.textContent = ' ' + node.textContent;
        }
        if (!r.startsWith('.')) {
          node.textContent += ' ';
        }
      } else if (node.className !== 'moveNotation') {
        node.textContent += ' ';
      }
    }
  });
})();