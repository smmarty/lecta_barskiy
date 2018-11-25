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
'[CurrentPosition "rnb2rk1/ppppqp1p/6p1/8/2BQ4/8/PB3PPP/R4RK1 b - - 1 13"]' +
' ' +
'1.e4 e5 2.d4 exd4 3.c3 dxc3 ' +
'{. Конечно, чёрные могут и не забирать гамбитные пешки.&nbsp;} ' +
  '(' +
    '{ К более спокойной игре ведёт, например, } 3...d5 ' +
  '{.}) ' +
'4.Bc4' +
    '(' +
      '{. Если белые сохраняют вторую пешку ходом } ' +
      '4.Nxc3 { , то возникает центральный гамбит. } ' +
    ') ' +
'4...cxb2 5.Bxb2 {. Начальная позиция <i>северного гамбита.</i> } ' +

'{<br/>}5...Bb4+ ' +
      '(' +
        '{. При желании чёрные могут, вернув обе лишние пешки, сразу перейти ' +
        'в эндшпиль: } ' +
        '5...d5 6.Bxd5 Nf6 ' +
        '{. Красивый удар } 7.Bxf7+! { позволяет белым забрать ферзя: } ' +
        '7...Kxf7 8.Qxd8 ' +
        '{. Но чёрные его тут же отыгрывают: } 8...Bb4+! 9.Qd2 ' +
        '(' +
          '{&nbsp;(после } 9.Nd2? Rxd8 { &nbsp;чёрные остаются с лишней фигурой) } ' +
        ')' +
        '9...Bxd2+ 10.Nxd2 Re8 {. Игра равна. }' +
      ') ' +
'6.Nc3 Nf6 7.Ne2 Nxe4 {. Чёрные жадничают}' +
  '(' +
    '{. После } 7...O-O 8.O-O' +
    '(' +
      ' {&nbsp;или } 8.e5 Ng4 {&nbsp;у них всё в порядке. }' +
    ') ' +
    '8...d6' +
  ') ' +
'{<br/>}8.O-O Nxc3 9.Nxc3 O-O 10.Nd5! {&nbsp;Белые нападают на слона b4 и открывают ' +
'диагональ слону b2. }' +
' 10...Be7 ' +
    '(' +
      '{. Обороняться можно было только после хитрого хода } 10...Qh4! ' +
    ') ' +
'11.Nxe7+ Qxe7 ' +
'{. У белых не хватает трёх пешек, но они очень сильно ' +
'опережают соперника в развитии. } ' +
'12.Qg4! ' +
    '( {&nbsp;Но не } 12.Qd4? Qg5! ) ' +
'12...g6 13.Qd4! {, и нет защиты от мата. }  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 94-1',
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
  window.swapMoves([['v31', 'm33']]);
  document.querySelector('#chessBoard__move33 .moveNumber').remove();
})();