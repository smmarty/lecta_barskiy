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
'[FEN "8/kp4q1/p1p5/8/6P1/2P5/KP6/3Q4 w - - 0 1"]' +
'[CurrentPosition "8/kp6/p1p1q3/8/6P1/2P2Q2/1P6/1K6 w - - 4 3"]' +
' ' +
'{ К победе ведёт переход в пешечное окончание: } 1.Qd4+! ( { В ферзевом окончании отдалённая проходная – не такое уж большое преимущество. В случае, например, } 1.Qf3 Qg8+ 2.Kb1 Qe6 { чёрные активизируют ферзя, ' +
'надвигают пешку а6 и создают контригру против белого короля. } ) 1...Qxd4 2.cxd4 Kb6 3.g5 { , и пешка беспрепятственно проходит в ферзи. }  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 75-1',
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