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
'[FEN "8/5K2/1kp5/1p6/1P1P4/8/8/8 w - - 0 1"]' +
'[CurrentPosition "4K3/8/1kp5/1p6/1P1P4/8/8/8 b - - 1 1"]' +
' ' +
'{ К победе ведёт обход с тыла: } 1.Ke8! ( { На прямолинейное } 1.Ke6 { находится тонкая защита } 1...Ka6! 2.Kd7 Kb7! 3.Kd6 Kb6 4.d5 cxd5 5.Kxd5 Kb7 6.Kc5 Kc7 7.Kxb5 Kb7! { с ничьей. } ) 1...Ka7 ( { не выручают и } 1...Kc7 2.Ke7 ) ( { или } 1...Kb7 2.Kd7 ) 2.Ke7! ( { Ошибочно } 2.Kd7? Kb7 3.Kd6 Kb6 ) ( { или } 2.Kd8? Kb8 ) 2...Ka6 ( { Не помогает } 2...Ka8 3.Kd6! Kb7 4.Kd7 { и т. д. } ) 3.Kd8! Kb7 4.Kd7 Kb6 5.Kc8 { с победой. }  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 76-6',
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