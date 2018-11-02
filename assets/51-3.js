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
'[FEN "8/p2k1p2/1b1p2p1/8/P3P2p/1N3P2/2P4P/R1B2b1K b - - 0 1"]' +
'[CurrentPosition "8/p2k1p2/3p2p1/8/P3P3/4bP1p/2P3bP/R5K1 w - - 0 5"]' +
' ' +
'{ Два слона очень сильны в атаке, особенно при поддержке других фигур и пешек. <br/>' +
'После } ' +
'1...h3! { у белых, несмотря на лишнюю ладью, нет защиты от мата. ' +
'Возможно лишь затянуть сопротивление: } 2.Nc5+ Bxc5 3.Be3 Bg2+! ' +
  '( { (грубой ошибкой стало бы } 3...Bxe3 { из-за } 4.Rxf1 ' +
    '{; белые забирают одного из грозных слонов и должны победить) } ' +
  ')' +
'4.Kg1 Bxe3# {.}  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 51-3',
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