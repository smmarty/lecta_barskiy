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
'[FEN "7k/4q1pp/7r/KP6/5R2/2P3Q1/6BP/2n5 b - - 0 1"]' +
'[CurrentPosition "7k/6pp/7r/KP6/R7/qnP3Q1/6BP/8 w - - 3 3"]' +
' ' +
'{Белый король убежал далеко-далеко от своих фигур. А чужие тут как тут. <br/>}' +
'1...Qa3+! ' +
  '(' +
    '{ Атаковать надо именно с этого поля. В случае } ' +
    '1...Qa7+ 2.Kb4 Qe7+ 3.Ka4 { &nbsp;худшее для белых позади. <br/> } ' +
  ')' +
'2.Ra4 Nb3# {.}  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 23-1',
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