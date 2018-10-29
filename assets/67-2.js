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
'[FEN "8/3kP3/3P4/6p1/2p5/4K3/8/8 b - - 0 1"]' +
'[CurrentPosition "8/3kP3/3P4/8/2K5/8/6p1/8 w - - 0 4"]' +
' ' +
'{ Две разрозненные проходные порой оказываются сильнее двух связанных. Король d7 легко удерживает неприятельские пешки, а ' +
'белый монарх, который пока что находится в квадратах обеих пешек, вскоре начнёт разрываться } 1...g4 2.Kd4 g3 3.Kxc4 ( { Отчаянный бросок к своим пешкам тоже не помогает: } 3.Ke5 g2 4.Kf6 g1=Q 5.Kf7 Qf2+ { , и чёрные выигрывают. } ) 3...g2 { , и чёрные выигрывают. }  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 67-2',
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
          // node.textContent = ' ' + node.textContent;
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