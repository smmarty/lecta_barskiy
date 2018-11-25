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
'[FEN "8/8/8/1B2B3/8/5K2/8/7k w - - 0 1"]' +
'[CurrentPosition "8/8/2B5/8/3B4/6K1/8/7k b - - 5 3"]' +
' ' +
'{ Мат двумя слонами ставится примерно так же, как мат королём и ладьёй. Короля слабейшей стороны надо оттеснить на край доски, а своего подвести настолько близко, насколько возможно. После } 1.Kg3 Kg1 2.Bd4+ { чёрный король вынужден отступать в угол, поскольку поле f1 отнимает белопольный слон. } 2...Kh1 3.Bc6# {.}  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 51-1',
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