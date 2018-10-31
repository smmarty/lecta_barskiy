(function () {
  var pgn = '[Event "УЧЕБНАЯ ПАРТИЯ 3"]' +
'[Site "?"]' +
'[Date "????.??.??"]' +
'[Round "?"]' +
'[White "?"]' +
'[Black "?"]' +
'[Result "*"]' +
'[WhiteElo ""]' +
'[BlackElo ""]' +
'[ECO ""]' +
'[CurrentPosition "r1bq2nr/ppp1bQpp/1n1k4/4N3/2B1P3/2N5/PPP2PPP/R1B1K2R b KQ - 2 9"]' +
' ' +
'1.e4 e5 2.Nf3 d6 3.d4 Nd7 4.Bc4 Be7 ' +
'{. Чёрные почти не борются за центр, их фигуры малоактивны. } ' +
'{<br/>}5.dxe5 dxe5 6.Qd5 {.<br/>}' +
'{Грозит мат на f7. Если теперь } 6...Nh6' +
  '(' +
    '{Если же} 6...Nb6 { , то } 7.Qxf7+ Kd7 8.Nxe5+ Kd6 9.Nc3 { с матовой атакой}' +
  ')' +
'{ , то } 7.Bxh6 O-O 8.Be3 { и у белых – лишняя фигура. }  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 11-3',
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

  // window.swapMoves([['v12', 'm20']]);
})();