(function () {
  var pgn = '[Event "УЧЕБНАЯ ПАРТИЯ 4"]' +
'[Site "?"]' +
'[Date "????.??.??"]' +
'[Round "?"]' +
'[White "?"]' +
'[Black "?"]' +
'[Result "*"]' +
'[WhiteElo ""]' +
'[BlackElo ""]' +
'[ECO ""]' +
'[CurrentPosition "rnbq2nr/ppppbQkp/8/6P1/2BPP3/8/PPP2PP1/RNB1K2R b KQ - 2 11"]' +
' ' +
'1.e4 e5 2.Nf3 f6? { Этот ход серьёзно ослабляет позицию короля. <br/>} ' +
'3.Nxe5! fxe5 4.Qh5+ Ke7 {.} ' +
  '(' +
    '{ В случае } 4...g6 5.Qxe5+ { чёрные теряют ладью h8. <br/>} ' +
  ')' +
'5.Qxe5+ Kf7 6.Bc4+ Kg6 7.Qf5+ Kh6 8.d4+ g5 9.h4 Kg7 {.} ' +
  '(' +
    '{ Не спасает и } 9...Be7 10.hxg5+ Kg7 11.Qf7# {. <br/>}' +
  ')' +
'10.Qf7+ Kh6 11.hxg5# {.}  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 14-4',
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