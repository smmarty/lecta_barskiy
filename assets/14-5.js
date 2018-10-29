(function () {
  var pgn = '[Event "УЧЕБНАЯ ПАРТИЯ 5"]' +
'[Site "?"]' +
'[Date "????.??.??"]' +
'[Round "?"]' +
'[White "?"]' +
'[Black "?"]' +
'[Result "*"]' +
'[WhiteElo ""]' +
'[BlackElo ""]' +
'[ECO ""]' +
'[CurrentPosition "r1bq1bnr/pppnp2p/3p2p1/8/3PP2k/7Q/PPP2PPP/RNB1K2R b KQ - 2 8"]' +
' ' +
'1.e4 d6 2.Nf3 Nd7 3.Bc4 g6? ' +
'{ Как ни удивительно, это уже решающая ошибка. } ' +
'4.Bxf7+! { Пункт f7 – самый уязвимый в лагере чёрных, он защищён только королём. } ' +
'4...Kxf7 5.Ng5+ Kf6 {.} ' +
  '( ' +
    '{ Чёрные теряют ферзя в случае } 5...Ke8 6.Ne6 ' +
  ') ' +
  '(' +
    ' { или } 5...Kg7 6.Ne6+ {.}' +
  ') ' +
'6.Qf3+ Kxg5 7.d4+ Kh4 8.Qh3# {.}  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 14-5',
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