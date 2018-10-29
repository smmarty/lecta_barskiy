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
'[FEN "8/8/3k4/7K/8/7P/8/8 w - - 0 1"]' +
'[CurrentPosition "8/6K1/7P/6k1/8/8/8/8 b - - 0 5"]' +
' ' +
'{ Если чёрный король проникнет в угол, то крайнюю пешку, как мы знаем, провести не удастся. Однако белый король ставит ему заслон: } 1.Kg6 Ke7 2.Kg7! { Вот оно, <i>отталкивание плечом</i>! } ( { В случае } 2.h4? Kf8 3.Kh7 Kf7 4.h5 Kf8 5.h6 Kf7 6.Kh8 Kf8 7.h7 { игра заканчивается патом. } ) 2...Ke6 3.h4 Kf5 4.h5 Kg5 5.h6 { , и пешка проходит в ферзи. }  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 68-5',
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