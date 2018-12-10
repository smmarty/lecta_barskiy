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
'[CurrentPosition "r1bq1b1r/p1pp1k1p/5np1/1pQ1p3/3nP3/8/PPPP1PPP/RNB1K1NR w KQ - 0 9"]' +
' ' +
'1.e4 e5 2.Qh5 Nc6 3.Bc4 g6! ' +
'{ Чёрные перекрыли ферзю путь к полю f7. }' +
'4.Qf3 { &nbsp;(вновь грозит <i>детский мат</i>) } ' +
'4...Nf6 5.Qb3 {. Белые продолжают атаковать ' +
'поле f7, но теперь они угрожают только шахом. Чёрные переходят в контратаку. <br/>} ' +
'5...Nd4! 6.Bxf7+ Ke7 7.Qc4 b5! 8.Qc5+ Kxf7 {. }' +
'{ Чёрные отразили все угрозы и&nbsp;выиграли фигуру. }  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 19-3',
      pawn_notation: 'short'
    }
  });

  document.querySelectorAll('.chessBoard__moves *').forEach(function (node) {
    if (!node.children.length && node.textContent) {
      if (node.className === 'moveNumber') {
        node.textContent = ' ' + node.textContent;
      } else if (node.className === 'chessBoard__moveComment') {
        var r = node.textContent.split('').reverse().join('');
        if (!node.textContent.startsWith(')') && !node.textContent.startsWith(',') && !node.textContent.startsWith('.') && !node.textContent.startsWith(';') && !node.textContent.startsWith(':') && !node.textContent.startsWith('!')) {
           node.textContent = ' ' + node.textContent;
        }
        if (!r.startsWith('.')) {
          node.textContent += ' ';
        }
      // } else if (node.className !== 'moveNotation') {
      //   node.textContent += ' '; косячок :)
      }
    }
  });
})();