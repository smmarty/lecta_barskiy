(function () {
  var pgn = '[Event "УЧЕБНАЯ ПАРТИЯ 2"]' +
'[Site "?"]' +
'[Date "????.??.??"]' +
'[Round "?"]' +
'[White "?"]' +
'[Black "?"]' +
'[Result "*"]' +
'[WhiteElo ""]' +
'[BlackElo ""]' +
'[ECO ""]' +
'[CurrentPosition "rnbqk1nr/ppp2ppp/3b4/3p4/4pQ2/2N1P3/PPPP1PPP/R1B1KBNR w KQkq - 2 5"]' +
' ' +
'1.e3 e5 2.Nc3 d5 3.Qf3 {. Белые напрасно ' +
'уступили сопернику центр, а также слишком ' +
'рано ввели в игру ферзя. <br/>} ' +
'3...e4 4.Qf4 {.} ' +
      '(' +
        ' { Гораздо лучше } 4.Qg3 ' +
      ')' +
      '(' +
        '{ или } 4.Qd1 {.<br/>} ' +
      ')' +
'4...Bd6 {. Чёрные выигрывают ферзя. }  *';


  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 11-2',
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