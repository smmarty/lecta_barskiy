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
'[FEN "8/7k/5K2/6P1/8/8/8/8 w - - 0 1"]' +
'[CurrentPosition "7k/5K2/6P1/8/8/8/8/8 b - - 2 2"]' +
' ' +
'1.Kf7! ' +
  '(' +
    ' { Надо проявить осторожность, чтобы не угодить в ловушку. Поспешно } ' +
    '1.g6+? { ввиду } 1...Kh8! ' +
    ' { , и теперь как} 2.Kf7 {, }' +
    '(' +
      ' { так и } 2.g7+ Kg8 3.Kg6 { приводит к пату. ' +
      'Поэтому сначала надо вытеснить чёрного короля из укромного уголка:  } ' +
    ')' +
  ')' +
' 1...Kh8 2.Kg6 Kg8 3.Kh6 Kh8 4.g6! { (уже пора) } 4...Kg8 5.g7 Kf7 6.Kh7 { с победой. }  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 64-6',
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
  window.swapMoves([['m0', 'v1']]);
  document.querySelector('#chessBoard__move7 .moveNumber').remove();
})();