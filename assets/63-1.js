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
'[FEN "4k3/4P3/3K4/8/8/8/8/8 b - - 0 1"]' +
'[CurrentPosition "8/4Pk2/3K4/8/8/8/8/8 w - - 1 2"]' +
' ' +
'{ Выигрыш или ничья? Зависит от того, чей ход. Если белых, то они либо ставят пат (<b>1.♔e6</b>), либо отдают пешку е7. Если же ' +
'должны ходить чёрные, то они проигрывают: } 1...Kf7 2.Kd7 { , и пешка проходит. Ситуация, в которой любой ход ведёт к ухудшению ' +
'собственной позиции, называется <i>цугцвангом.</i> &nbsp;А здесь на доске <i>взаимный цугцванг:</i> ни белым, ни чёрным ходить не выгодно. }  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 63-1',
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