(function () {
  var pgn = '[Event "УЧЕБНАЯ ПАРТИЯ 1"]' +
'[Site "?"]' +
'[Date "????.??.??"]' +
'[Round "?"]' +
'[White "?"]' +
'[Black "?"]' +
'[Result "*"]' +
'[WhiteElo ""]' +
'[BlackElo ""]' +
'[ECO ""]' +
'[CurrentPosition "r1bqkb1r/pppp1Qpp/2n2n2/4p3/2B1P3/8/PPPP1PPP/RNB1K1NR b KQkq - 0 4"]' +
' ' +
'1.e4 e5 2.Qh5 ' +
'{. Белый ферзь нападает на пешку е5. <br/>}' +
' 2...Nc6 {. Чёрные защищают эту пешку. <br/>}' +
' 3.Bc4 { Белые создают новую, очень опасную угрозу. <br/>}' +
' 3...Nf6? { А чёрные её не замечают... <br/>} ' +
'4.Qxf7# ' +
'{ Вот он, знаменитый <i>детский мат</i>! ' +
'Ферзь напал на чёрного короля с помощью ' +
'слона с4, и королю бежать некуда. }  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 19-1',
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