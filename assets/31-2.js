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
'[SetUp "1"]' +
'[FEN "3r2k1/1pp3pp/p4p2/4p2b/1nP1P3/1P5P/PB1R1PP1/4K2R b K - 0 1"]' +
'[CurrentPosition "6k1/1pp3pp/p4p2/4p2b/2P1P3/1P5P/PBnr1PP1/5K1R w - - 0 3"]' +
' ' +
'{ Если ладья чёрных проникнет на d1 при ' +
'поддержке слона h5, то белый король получит мат. Но как этого добиться? ' +
  'Надо <i>отвлечь</i> &nbsp;белую ладью с открытой линии «d». <br/> }' +
' 1...Nc2+! { &nbsp;<i>Отвлекающая жертва</i> &nbsp;коня! Если принять жертву – } ' +
'2.Rxc2 {, то белые получат мат: }' +
  '(' +
    '{ Безрадостно и } 2.Kf1 Rxd2 { – ' +
    'чёрные «бесплатно» съели ладью и продолжают атаку. } ' +
  ')' +
'2...Rd1# {.}  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 31-2',
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
  window.swapMoves([['v2', 'm4']]);
})();