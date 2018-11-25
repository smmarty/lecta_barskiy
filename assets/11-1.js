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
'[CurrentPosition "r1bqkbnr/pppppp1p/6p1/3Pn3/4PP2/8/PPP3PP/RNBQKBNR b KQkq f3 0 4"]' +
' ' +
'1.e4 Nc6 2.d4 g6 {. Чёрные совсем не борются за центр. <br/> } ' +
'3.d5 Ne5 {.} ' +
      '(' +
        '{ Не лучше и } 3...Na5 4.b4 Bg7 5.c3 {.}' +
      ')' +
      '( ' +
        '{ Чтобы спасти коня, надо было вернуть ' +
        'его домой – } 3...Nb8 {.<br/>}' +
      ')' +
'4.f4 {. Конь попался в центре доски! ' +
'Чёрные остаются без фигуры. }  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 11-1',
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