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
'[FEN "K7/8/1k6/8/5p2/5P2/4P1P1/8 b - - 0 1"]' +
'[CurrentPosition "K7/8/k7/8/5p2/5P2/4P1P1/8 w - - 1 2"]' +
' ' +
'{ У белых две лишние пешки, но они неподвижны: благодаря правилу взятия на проходе пешка f4 удерживает все три пешки. Задача чёрных – не пустить к ним на помощь неприятельского короля. Для этого приходится <i>«толкаться плечами»:</i> } 1...Ka6! 2.Kb8 Kb6 3.Kc8 Kc6 4.Kd8 Kd6 5.Ke8 Ke6 { и т. д.; белому королю не вырваться с восьмой горизонтали. }  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 68-6',
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