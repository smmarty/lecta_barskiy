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
'[CurrentPosition "r1b3Br/ppp1k1pp/3p4/8/3P4/1Q3N2/P4PPP/b5K1 b - - 1 16"]' +
' ' +
      '1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5 4.c3 Nf6 5.d4 exd4 6.cxd4 Bb4+ ' +
      '(' +
      '{. Обязательный шах. В случае пассивного отступления } ' +
      '6...Bb6? { белые с темпами захватывают центр: } ' +
      '7.e5! Ng8 ' + //TODO сюда перенести 8.d5!
      '(' +
      '{. Не помогает и} 7...d5 ' +
      '{ввиду} 8.exf6 dxc4 9.d5 Na5 10.fxg7 {.}' +
      ')' +
      '8.d5!' + //TODO перенести выше
      ')' +

      '{<br/>}7.Nc3 Nxe4 8.O-O ' +
      '{. Белые предлагают жертву двух пешек ради перевеса в развитии. } ' +
      '8...Nxc3 ( {. Осторожнее } 8...Bxc3 9.d5 Bf6 ) 9.bxc3 Bxc3 10.Qb3 ' +
      '( {. Ещё сильнее } 10.Ba3! ) ' +
      '{<br/>}10...Bxa1? {. Чёрные не смогли устоять перед соблазном и забирают ладью, ' +
      'но этот ход проигрывает. } ' +
      '( { Спасало партию } 10...d5! 11.Bxd5 O-O! ' +
      '{ , и если } 12.Qxc3 { , то } 12...Qxd5{.}) ' +
      '11.Bxf7+ Kf8 12.Bg5! { Неожиданно в беду попадает чёрный ферзь. } ' +
      '{<br/>}12...Ne7 ' +
      '(' +
      '{. Остроумный контрудар } 12...Nxd4 { с идеей } 13.Nxd4 Qxg5 ' +
      '{ не спасает из-за промежуточного шаха 13. ♕a3+, и чёрные теряют ферзя. } ' +
      ') ' +
      '13.Re1 {. Усиливая давление на связанного коня, белые выигрывают ферзя. }' +
      ' 13...d6 14.Bxe7+ Qxe7 15.Rxe7 Kxe7 ' +
      '{. У чёрных пока две ладьи и пешка за ферзя, ' +
      'но их фигуры неразвиты, разбросаны по всей доске. После } ' +
      '16.Bg8! { белые добиваются решающего материального перевеса. }  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 91-3',
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