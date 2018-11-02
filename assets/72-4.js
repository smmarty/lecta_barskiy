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
'[FEN "8/8/4k3/1pP5/1P4K1/8/8/8 w - - 0 1"]' +
'[CurrentPosition "8/2k5/2P5/1pK5/1P6/8/8/8 b - - 2 6"]' +
' ' +
'{ Пешка с5 – <i>защищённая</i> (пешкой b4) <i>проходная</i>. После } ' +
'1.Kf4 Kd5 { чёрный король может постоять рядом с проходной, но забрать её ' +
'не в состоянии. Белый король идёт на помощь своим пешкам: } ' +
'2.Kf5 Kc6 ( {. В случае } 2...Kc4 3.c6 Kxb4 4.c7 Ka3 5.c8=Q b4 { ферзь задерживает проходную: } 6.Qc2 b3 7.Qb1 { , а затем король приходит на c3 и пешка «b» теряется. } ) 3.Ke6 Kc7 4.Kd5 Kd7 5.c6+ Kc7 6.Kc5 { с победой. }  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 72-4',
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