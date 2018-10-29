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
'[FEN "1kr5/1pp2Ppp/p5b1/3q4/2N3Q1/1P5P/6P1/6RK w - - 0 1"]' +
'[CurrentPosition "2k2Q2/1pp3pp/p5b1/3q4/2N5/1P5P/6P1/6RK b - - 1 2"]' +
' ' +
'{ У шахматистов есть такая шутка: «Проходная на пороге превращения – это маленький ферзь!» Правда, пешка f7 кажется обречённой: на неё напали ферзь и слон ' +
'чёрных, а поле превращения охраняет ладья. Но этого охранника можно обезвредить: } 1.Qxc8+! Kxc8 2.f8=Q+ {. В результате комбинации с жертвой ферзя белые остались ' +
'с лишней ладьёй. }  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 55-1',
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