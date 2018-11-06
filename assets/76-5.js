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
'[FEN "8/1kp5/1p6/1K1P4/1P6/8/8/8 b - - 0 1"]' +
'[CurrentPosition "8/2k5/1p2K3/1P6/8/8/8/8 b - - 1 7"]' +
' ' +
'1...c6+! ' +
  '(' +
    '{Если белый король проникнет на с6, то партию не спасти: }' +
    ' 1...Kb8? 2.Kc6 Kc8 3.b5! ( { (поспешно } 3.d6? cxd6 4.Kxd6 b5! {)} )' +
    ' 3...Kb8 4.d6 Kc8 { (остроумная ловушка!) }' +
    ' 5.Kd5! ( { (после } 5.dxc7 { получается пат) } ) ' +
    ' 5...Kd7 6.dxc7 Kxc7 7.Ke6 { с выигрышем. ' +
    '<br/>Чёрных выручает временная жертва пешки:} ' +
  ')' +
'2.dxc6+ Kc7 3.Ka6 Kxc6 4.Ka7 ' +
  '( {(}4.b5+? Kc5 { , и выигрывают чёрные)} ) ' +
'4...Kb5 5.Kb7 { с ничьей. }  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 76-5',
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
  window.swapMoves([['m0', 'v1']]);
})();