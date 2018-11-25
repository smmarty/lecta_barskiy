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
'[FEN "8/pp6/4k3/8/4K3/8/PP5P/8 w - - 0 1"]' +
'[CurrentPosition "8/pp6/4k3/8/1P2K3/8/P6P/8 b - b3 0 1"]' +
' ' +
'{ Не будь на ферзевом фланге пешек, чёрным для ничьей достаточно было бы привести ' +
'короля на линию «h». А сейчас, пока чёрные обезвредят проходную h2, ' +
'белые заберут пешки a7 и b7. Например: } ' +
'1.b4 Kf6 2.Kd5 Kg5 ' +
  '(' +
    ' {. В случае } 2...Ke7 3.h4 ' +
    '{ чёрным всё-таки придётся отправить короля на борьбу с проходной. } ' +
    ')' +
' 3.Kd6 { , и белые выигрывают. }  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 71-1',
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