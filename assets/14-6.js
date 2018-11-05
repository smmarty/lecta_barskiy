(function () {
  var pgn = '[Event "УЧЕБНАЯ ПАРТИЯ 6"]' +
'[Site "?"]' +
'[Date "????.??.??"]' +
'[Round "?"]' +
'[White "?"]' +
'[Black "?"]' +
'[Result "*"]' +
'[WhiteElo ""]' +
'[BlackElo ""]' +
'[ECO ""]' +
'[CurrentPosition "rnbB1b1r/ppk2ppp/2p5/4q3/4n3/8/PPP2PPP/2KR1BNR b - - 3 11"]' +
' ' +
'1.e4 c6 2.d4 d5 3.Nc3 dxe4 4.Nxe4 Nf6 5.Qd3 e5 6.dxe5 Qa5+ 7.Bd2 Qxe5 8.O-O-O! ' +
'{ Ловушка! Белые предлагают сопернику «полакомиться» конём.<br/> } ' +
'8...Nxe4? ' +
  '(' +
    ' { В случае } 8...Qxe4 9.Re1 ' +
  '{ чёрные теряют ферзя, а после хода в партии вообще получают мат. } ' +
  ') ' +
  '(' +
    ' { Следовало продолжить развитие – } 8...Be7 ' +
  ') ' +
  '(' +
    '{ или } 8...Be6 {.<br/>} ' +
  ') ' +
'9.Qd8+!! Kxd8 10.Bg5+ Kc7 {.<br/>}' +
  '(' +
    '{ Если } 10...Ke8 { , то } 11.Rd8# {.}' +
  ')' +
' 11.Bd8# {.} *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 14-6',
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