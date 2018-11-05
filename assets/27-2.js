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
'[FEN "k7/bp3p1r/p1b3q1/8/5N2/1B4P1/PQ3P1P/5RK1 b - - 0 1"]' +
'[CurrentPosition "k7/bp3p1r/p1b5/8/8/1B6/PQ3PqP/5RK1 w - - 0 3"]' +
' ' +
'{ Все фигуры чёрных грозно нацелились ' +
'на крепость белого короля. Ладья h7 мечтает попасть на h1. Как ей помочь? <br/>} ' +
'1...Qxg3+! { Чёрные жертвуют ферзя, чтобы ' +
'расчистить линию «h». Пешка f2 связана ' +
'слоном а7, } ' +
'2.hxg3 ' +
  '(' +
    '{ на } 2.Ng2 { следует } 2...Qxg2# {. <br/>}' +
  ')' +
      ' 2...Rh1#! { Запомните эту конструкцию: ладья ставит мат при поддержке слона. }  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 27-2',
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

  window.swapMoves([['m1','v2']]);
})();