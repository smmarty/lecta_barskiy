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
'[FEN "1k5r/p1pq2p1/1p5p/5R2/6Q1/6P1/PP3PKP/8 w - - 0 1"]' +
'[CurrentPosition "1k3r2/p1pQ2p1/1p5p/8/8/6P1/PP3PKP/8 b - - 0 2"]' +
' ' +
'{ Ферзь g4 выступает в роли «охотника», а его коллега на d7 – это «дичь». Диагональ h3–c8, на которой находятся оба ферзя, перегораживает ладья f5. Но она может отскочить с шахом – } 1.Rf8+! { Ладья&nbsp; <i>напала</i> &nbsp;на короля, и одновременно <i>вскрылась</i> &nbsp;линия, по которой ферзь <i>напал</i> &nbsp;на ферзя. ' +
'После } 1...Rxf8 2.Qxd7 { белые выигрывают ' +
'ферзя за ладью. }  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 39-1',
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