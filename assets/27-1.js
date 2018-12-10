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
'[FEN "kr2q2r/p5pp/3R2n1/3Pp3/8/7P/Q3B1P1/1R5K w - - 0 1"]' +
'[CurrentPosition "1r2q2r/k5pp/R5n1/3Pp3/8/7P/4B1P1/1R5K b - - 1 2"]' +
' ' +
'{ Чёрного короля прикрывает всего одна пешка. ' +
'Но надо спешить, иначе ферзь е8 и ладья h8 придут на помощь своему монарху. <br />} ' +
'1.Qxa7+! { &nbsp;Белые жертвуют ферзя, чтобы взломать оборону чёрного короля. <br />} ' +
'1...Kxa7 2.Ra6# {.}  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 27-1',
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