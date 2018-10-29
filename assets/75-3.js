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
'[FEN "8/1kr5/1p6/1P2p3/4K3/8/2R5/8 w - - 0 1"]' +
'[CurrentPosition "1k6/1P6/K7/8/8/8/8/8 b - - 0 11"]' +
' ' +
'{ После } 1.Rxc7+ Kxc7 2.Kxe5 { белые выигрывают благодаря активности короля, атакующего пешку b6. Его коллега вынужден обороняться, но безуспешно: } 2...Kd7 3.Kd5 Kc7 4.Ke6 Kb7 5.Kd7 Ka8 6.Kc6 Ka7 7.Kc7 Ka8 8.Kxb6 Kb8 9.Ka6! { – обходя патовую ловушку. } ( 9.Kc6 Ka7 10.b6+? Ka8 11.Kc7 { с ничьей. } ( { или } 11.b7+ Kb8 12.Kb6 { – пат. } ) ) 9...Ka8 ( 9...Kc7 10.Ka7 ) 10.b6 Kb8 11.b7 {, и белые выигрывают. }  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 75-3',
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