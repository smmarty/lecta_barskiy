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
'[FEN "5rk1/4q1pp/1pR5/8/6P1/8/PPP5/1K5Q b - - 0 1"]' +
'[CurrentPosition "5rk1/6pp/1pq5/8/6P1/8/PPP5/1K4Q1 w - - 0 3"]' +
' ' +
'{ Белый ферзь охраняет первую горизонталь ' +
'от смертельного шаха ладьёй или ферзём. ' +
'<br/>Надо <i>нагрузить</i> белого ферзя дополнительной работой: } ' +
'1...Qe4!' +
'{ Со всеми заботами ферзь не справляется: } ' +
      '(' +
        ' { Простое отвлечение } 1...Qh4 { белым не страшно: }' +
        ' 2.Qd5+ Kh8 3.a3 { – форточка сделана, король в безопасности. } ' +
      ')' +
' 2.Qxe4 ( { или } 2.Qg1 Qxc6 ) 2...Rf1+ 3.Qe1 Rxe1# {.} *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 35-1',
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