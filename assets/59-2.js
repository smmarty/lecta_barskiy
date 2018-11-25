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
'[FEN "8/8/2k5/8/5N1p/4n3/8/4K3 b - - 0 1"]' +
'[CurrentPosition "8/8/2k5/8/8/8/5KNp/8 w - - 0 4"]' +
' ' +
'{ Казалось бы, белым несложно добиться ничьей, ведь достаточно отдать коня за проходную. ' +
'Но у чёрных находится эффектная комбинация на тему <i>прорыва:</i> } ' +
'1...Ng2+! 2.Nxg2 { (иначе чёрные сами заберут коня) } 2...h3 3.Kf2 h2 {. Конь и король совсем рядом с проходной, но только провожают её ' +
'взглядом. Чёрные превращают пешку в ферзя и побеждают. }  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 59-2',
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