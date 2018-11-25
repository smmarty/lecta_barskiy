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
'[FEN "8/7p/4k3/1pP5/1P2K3/8/8/8 w - - 0 1"]' +
'[CurrentPosition "8/7p/4k3/1pP5/1P4K1/8/8/8 w - - 4 3"]' +
' ' +
'{ <i>Отдалённая проходная</i> &nbsp;h7 – это большая сила, однако ' +
'<i>защищённая проходная</i> &nbsp;с5 – ещё более грозное оружие, ведь её гораздо ' +
'сложнее уничтожить. Белый король спокойно направляется к пешке h7: } ' +
'1.Kf4 Kf6 2.Kg4 Ke6 ({&nbsp;(}2...Kg6 3.c6 {)}) 3.Kh5 Kd5 4.Kh6 Ke6 ( {. Безрадостно для чёрных и } 4...Kc4 5.c6 Kxb4 6.c7 Ka3 7.c8=Q b4 8.Qc2 b3 9.Qb1 {.} ) 5.Kxh7 Kf7 { – перед нами позиция, которую мы уже проанализировали. }  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 72-6',
      pawn_notation: 'short'
    }
  });

  document.querySelectorAll('.chessBoard__moves *').forEach(function (node) {
    if (!node.children.length && node.textContent) {
      if (node.className === 'moveNumber') {
        node.textContent = ' ' + node.textContent;
      } else if (node.className === 'chessBoard__moveComment') {
        var r = node.textContent.split('').reverse().join('');
        if (!node.textContent.startsWith(')') && !node.textContent.startsWith(',') && !node.textContent.startsWith('.') && !node.textContent.startsWith(';') && !node.textContent.startsWith(':') && !node.textContent.startsWith('!')) {
          // node.textContent = ' ' + node.textContent;
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