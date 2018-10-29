(function () {
  var pgn = '[Event "УЧЕБНАЯ ПАРТИЯ 2"]' +
'[Site "?"]' +
'[Date "????.??.??"]' +
'[Round "?"]' +
'[White "?"]' +
'[Black "?"]' +
'[Result "*"]' +
'[WhiteElo ""]' +
'[BlackElo ""]' +
'[ECO ""]' +
'[CurrentPosition "rnb1kbnQ/pppp1p1p/6p1/8/4q3/8/PPPPNPPP/RNB1KB1R b KQq - 1 5"]' +
' ' +
'1.e4 e5 2.Qh5 g6? ' +
'{ Чёрные решили заранее защититься от <i>детского мата</i>, но совсем забыли о другой угрозе соперника. <br/>} ' +
'3.Qxe5+! { Двойной удар: белые бьют пешку с шахом и в то же время нападают на ладью h8. <br/>} ' +
'3...Qe7 4.Qxh8 Qxe4+ ' +
'{. А этот шах белым совсем не страшен. <br/>} ' +
'5.Ne2 {. В итоге белые остались с лишней ладьёй. }  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 19-2',
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