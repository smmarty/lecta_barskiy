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
'[FEN "1kr2n2/pp2q1pp/8/NQ6/1P6/2P5/1KP5/5R2 w - - 0 1"]' +
'[CurrentPosition "1k3r2/pp2q1pp/2N5/1Q6/1P6/2P5/1KP5/8 b - - 1 2"]' +
' ' +
'{ Казалось бы, конь f8 надёжно защищён дважды – ферзём и ладьёй.' +
' Однако на самом деле обе эти фигуры <i>перегружены</i> &nbsp;заботами,' +
' поэтому белые забирают коня: } ' +
'1.Rxf8! { <br/>И выясняется, что на } ' +
'1...Qxf8 { следует мат } ' +
  '(' +
    ' {, а после } 1...Rxf8 2.Nc6+ { белые выигрывают ферзя. } ' +
  ')' +
'2.Qxb7#  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 35-2',
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