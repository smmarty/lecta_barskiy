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
'[FEN "8/8/3B4/1B6/8/6K1/8/7k w - - 0 1"]' +
'[CurrentPosition "8/8/2B5/8/3B4/6K1/8/7k b - - 5 3"]' +
' ' +
'{ Оттеснять одинокого короля в угол надо осторожно, чтобы не угодить в одну из патовых ловушек. В этой позиции белые должны сначала сделать выжидательный ход, например } 1.Be5 ( { после поспешного } 1.Bc5 { чёрный король оказывается в патовом положении } ) {. После единственного ответа } 1...Kg1 { мат ставится так же, как и в предыдущем примере: } 2.Bd4+ Kh1 3.Bc6# {.}  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 51-2',
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