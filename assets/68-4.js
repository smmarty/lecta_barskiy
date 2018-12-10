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
'[FEN "7K/8/k1P5/7p/8/8/8/8 w - - 0 1"]' +
'[CurrentPosition "8/8/2k5/8/5K1p/8/8/8 b - - 1 4"]' +
' ' +
'{ Чёрный король находится в квадрате пешки с6, а белый, ' +
'казалось бы, безнадёжно отстал от пешки h5. ' +
'Но смотрите, что происходит на доске: } ' +
'1.Kg7 h4 2.Kf6 Kb6 ( {(после } 2...h3 3.Ke7! { белые тоже проводят ферзя: } 3...Kb6 4.Kd7 h2 5.c7 h1=Q 6.c8=Q {)}) 3.Ke5!! Kxc6 ( { И&nbsp;здесь после } 3...h3 4.Kd6 h2 5.c7 { обе стороны проводят ферзей. } ) 4.Kf4 { – король входит в квадрат проходной! }  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 68-4',
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