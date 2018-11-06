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
'[CurrentPosition "1n1Rkb1r/p4ppp/4q3/4p1B1/4P3/8/PPP2PPP/2K5 b k - 1 17"]' +
' ' +
      '1.e4 e5 2.Nf3 d6 3.d4 Bg4 {. Чёрные торопятся со связкой. } ' +
      '( { Надёжнее } 3...exd4 4.Nxd4 Nf6 {.} ) ' +
      '4.dxe5 Bxf3 ' +
      '( { приходится разменивать уже развитую фигуру, потому что после } ' +
      '4...dxe5 5.Qxd8+ Kxd8 6.Nxe5 { чёрные остаются без пешки. } ' +
      ') ' +
      '5.Qxf3 dxe5 6.Bc4 Nf6 7.Qb3! ' +
      '{ Двойной удар на пешки f7 и b7. } ' +
      '7...Qe7 8.Nc3 ' +
      '(' +
      '{. Большой перевес давало и } 8.Qxb7 ' +
      '{ , но после } 8...Qb4+ ' +
      '{ чёрные разменивали ферзей, и борьба могла затянуться. }' +
      ')' +
      '{<br/>}8...c6 9.Bg5 b5 {.<br/>} 10.Nxb5! ' +
      '{ Для атаки на застрявшего в центре неприятельского короля нужны открытые линии. } ' +
      '10...cxb5 11.Bxb5+ Nbd7 12.O-O-O! ' +
      '{ Белые прячут короля на фланге и подключают к наступлению ладью. } ' +
      '12...Rd8 13.Rxd7! ' +
      '{ Самое энергичное продолжение: жертвуя качество, белые тут же подключают ' +
      'к атаке свою последнюю фигуру – ладью h1. } ' +
      '13...Rxd7 14.Rd1 Qe6 15.Bxd7+ Nxd7 {. }' +
      '{<br/>Ладья h8 и слон f8 так и не успели войти в игру, ' +
      'они лишь наблюдали издалека за ходом сражения. ' +
      'Теперь белые проводят эффектную заключительную комбинацию. } ' +
      '16.Qb8+! { (отвлечение коня, который перекрывал линию «d»)} ' +
      '16...Nxb8 17.Rd8# ' +
      '{. В финальной позиции у белых остались только ладья и слон, ' +
      'а у чёрных – больше половины армии. Вот что такое перевес в развитии! }  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 87-2',
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