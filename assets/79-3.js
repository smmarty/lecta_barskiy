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
'[FEN "k7/1pBP4/1Pp5/P1P5/8/7r/1K6/8 b - - 0 1"]' +
'[CurrentPosition "k7/1pBP4/1Pp5/P1P5/8/1r6/1K6/8 w - - 1 2"]' +
' ' +
'{ На первый взгляд, дела чёрных плохи: за проходную d7 придётся отдать ладью. Однако их король запатован, пешки тоже не имеют ходов. } 1...Rb3+! 2.Kc2 Rc3+! { Белые отказываются принимать «дар», а чёрные ' +
'настаивают. } 3.Kd2 Rd3+ 4.Ke2 Re3+ 5.Kf2 Rf3+ 6.Kg2 Rg3+ { На поле g3 ладью может забрать не только король, но и слон, однако пат при этом сохранится. Этот приём называется <i>бешеная ладья</i>. }  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 79-3',
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