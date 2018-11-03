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
'[FEN "6k1/5q2/8/p7/P7/1Q2p3/KP2P3/8 b - - 0 1"]' +
'[CurrentPosition "7k/5q2/8/p7/P7/1Q2p3/KP2P3/8 w - - 1 2"]' +
' ' +
'{ Казалось бы, размен ферзей неизбежен, после чего белые легко выигрывают ' +
'в пешечном окончании, однако чёрных спасает <i>игра на пат:</i> } ' +
'1...Kh8! {<br/>}' +
  '(' +
    '{ В других вариантах чёрные проигрывают, например: }' +
      '1...Kg7 2.Qxf7+ Kxf7 3.b4! {<br/>}' +
    ') ' +
'2.Ka3 {.<br/>}' +
    '(' +
      '{ В случае } 2.Qxf7 ' +
      '{ чёрные запатованы: шаха нет, а фигуры и пешки не имеют ходов. } ' +
    ')' +
'{<br/>}2...Qe7+ 3.Ka2 Qf7! { белые никак не ' +
'могут усилить свою позицию. Ничья. }  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 79-1',
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