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
'[FEN "6k1/6p1/1p2p3/4P3/P2P3P/1PQ3P1/rr6/4R1K1 b - - 0 1"]' +
'[CurrentPosition "6k1/6p1/1p2p3/4P3/P2P3P/1PQ3P1/r5r1/4R1K1 w - - 1 2"]' +
' ' +
'{ На стороне белых огромный материальный перевес (ферзь и три пешки против ладьи). Однако две ладьи чёрных, проникшие на вторую горизонталь, организуют вечное нападение на короля соперника: } 1...Rg2+ 2.Kh1 ( { От белых требуется осторожность: в случае } 2.Kf1 Raf2# { они получают мат. } ) 2...Rh2+ 3.Kg1 Rag2+ 4.Kf1 Rf2+ { и т. д. Игра заканчивается вничью. }  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 83-2',
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