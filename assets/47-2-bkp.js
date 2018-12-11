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
'[FEN "8/8/8/5K2/7k/R7/8/8 w - - 0 1"]' +
'[CurrentPosition "8/8/8/5K1k/8/7R/8/8 b - - 3 2"]' +
' ' +
'{ При своём ходе чёрные сразу получают мат:  ' +
 '1...♚h5 (другого хода просто нет). 2.♖h3#. }' +
'{ Значит, белые должны передать очередь хода сопернику,' +
' то есть сделать <i>выжидательный</i> ход.' +
' Их король расположен идеально, а выжидательный ход делает ладья,' +
' при этом сохраняя контроль над полем g3, чтобы король h4 не убежал в центр. Итак, } ' +
'1.Rb3! { (можно пойти также ладьёй на с3, d3, e3 или f3) } 1...Kh5 2.Rh3# {.} *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 47-2',
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