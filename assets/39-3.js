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
'[FEN "8/8/bp1rpkp1/5p2/5P2/P4KP1/5RP1/1R6 b - - 0 1"]' +
'[CurrentPosition "8/8/bp2pkp1/5p2/5P2/P5P1/3K1RP1/1r6 w - - 0 4"]' +
' ' +
'{ Объявляя шах } 1...Rd3+! { , &nbsp;чёрные заставляют белого короля отойти на одну диагональ со слоном а6, который затаился в засаде. Выбора у белых нет – } 2.Ke2 { , и тогда следует <i>вскрытое нападение</i> &nbsp;– } 2...Rb3+! { Слон атакует короля, а ладья – ладью. После } 3.Kd2 Rxb1 { чёрные остаются с лишней фигурой. }  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 39-3',
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