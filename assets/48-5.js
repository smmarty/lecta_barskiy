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
        '[FEN "8/8/8/2k5/6R1/4K3/8/8 w - - 0 1"]' +
        '[CurrentPosition "k1R5/8/1K6/8/8/8/8/8 b - - 17 9"]' +
        ' ' +
        '{Разберём теперь, как король и ладья оттесняют неприятельского короля на край доски.' +
        ' Надо аккуратно, ход за ходом отнимать у него «землю» и следить,' +
        ' чтобы он не убежал в центр. <br/> }' +
        ' 1.Rd4! ' +
        '{ Теперь чёрному королю не вырваться из прямоугольника,' +
        ' ограниченного полями а5, с5, с8, а8. } 1...Kc6 2.Kd3 Kc5 3.Kc3' +
        ' { – белые улучшают позицию своего короля. } 3...Kb5' +
        ' 4.Rc4! { Белые продолжают отнимать «землю» у чёрного монарха.' +
        ' Его владения стали совсем крошечными,' +
        ' это прямоугольник с углами a5, b5, b8, a8, то есть всего 8 полей.' +
        'Обратите внимание: оттесняя чёрного короля,' +
        ' белые пока не объявили ни одного шаха. } 4...Kb6 5.Kb4' +
        ' { Ладья охраняет «границы», а король идёт в наступление. }' +
        ' 5...Kb7 6.Kb5 Ka7 {.}' +
        ' { У белых всё готово для успешного завершения атаки: }' +
        ' 7.Kc6! Kb8 ( { на } 7...Ka6 { сразу следует мат – } 8.Ra4# ) ' +
        '8.Kb6 Ka8 9.Rc8# ' +
        '{. Лишь на последнем ходу белые объявили шах,' +
        ' который одновременно оказался и матом. }  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 48-5',
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