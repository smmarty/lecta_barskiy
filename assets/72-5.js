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
'[FEN "8/5k1K/8/1pP5/1P6/8/8/8 w - - 0 1"]' +
'[CurrentPosition "8/5k2/7K/1pP5/1P6/8/8/8 b - - 1 1"]' +
' ' +
'{ Надо подвести короля к пешкам: } 1.Kh6 ( { немедленный рывок пешки в ферзи ничего не даёт: } 1.c6? Ke6 2.Kg6 Kd6 3.Kf6 Kxc6 4.Ke6 Kc7 5.Kd5 Kb7 6.Kc5 Kc7 7.Kxb5 Kb7! { с ничьей. } ) 1...Kf6 { – чёрный король ' +
'отталкивает оппонента плечом } 2.Kh5 Kf5 3.Kh4! Kf6 ({ дальше «толкаться» не получается: } 3...Kf4 4.c6 { , и пешка проходит } ) 4.Kg4 Ke6 { – эту позицию мы ранее разобрали. } ( 4...Kg6 5.c6 )  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 72-5',
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