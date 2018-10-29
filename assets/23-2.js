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
'[FEN "8/k7/p3p3/3p4/3N4/PR6/KP4r1/3n4 w - - 0 1"]' +
'[CurrentPosition "kR6/8/p1N1p3/3p4/8/P7/KP4r1/3n4 b - - 3 2"]' +
' ' +
'{ Отличный пример взаимодействия коня и ладьи: <br/>}' +
' 1.Nc6+ Ka8 2.Rb8# {. Ладья с помощью ' +
'коня поставила мат, загнав неприятельского ' +
'короля в угол доски. Это так называемый <i>арабский мат</i>, он известен ещё со времён шатранджа, то есть более тысячи лет. }  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 23-2',
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