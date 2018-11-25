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
'[FEN "8/1kp5/1p1r4/7p/P7/K5RP/1P3Pp1/8 b - - 0 1"]' +
'[CurrentPosition "8/1kp5/1p6/7p/P7/K2R3P/1P3P2/6q1 w - - 1 3"]' +
' ' +
'{ Может показаться, что пешка g2 обречена, однако это не так. <br/> } ' +
'1...Rd3+!' +
'{ &nbsp;С помощью этой красивой жертвы чёрные <i>отвлекают</i> &nbsp;неприятельскую ладью' +
' с линии «g». <br/> }' +
'2.Rxd3 g1=Q ' +
'{. &nbsp;Чёрные добились большого материального перевеса:' +
' у них теперь ферзь против ладьи. }  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 31-3',
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