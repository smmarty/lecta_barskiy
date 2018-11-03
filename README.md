# Диаграммы по учебнику Барского

Для переноса ходов используется метод window.swapMoves, в качестве аргументов передаётся массив с массивами из 2 элементов, пример использования:
```js
window.swapMoves([['v2', 'm7'], ['#chessBoard__move2 .chessBoard__moveComment:last-child', 'v4']]);
```

Элементы могут из себя представлять:
* Ход
* Вариация
* Произвольный css-селектор

Ход обозначается селектором вида m{N}, где N - номер хода. Вариация - v{N}, N - соответственно номер вариации. Для того, чтобы найти номер хода или вариации надо открыть инспектор элементов в браузере и найти div с классом chessBoard__moves. В нём будут вложены все элементы ходов и вариаций.

Ходы обозначаются через span с id chessBoard__move{N}, где N - номер хода. Вариации по аналогии идут через div с классом chessBoard_\_moveVariation{N}.

Таким образом, чтобы обменять местами ход с индексом 2 и вариацию с индексом 5 надо сделать вызов:
```js
window.swapMoves([['v5', 'm7']]);
```
что примерно означает: вставить элемент с вариацией 7 перед элементом с ходом 5.

Чтобы понять как работает swapMoves, ниже исходник:

```js
function getSelector (move) {
    if (move.startsWith('m')) {
      return '#chessBoard__move' + move.slice(1);
    } else if (move.startsWith('v')) {
      return '.chessBoard__moveVariation' + move.slice(1);
    }
    return move;
  }
  for (var i = 0;i < moves.length;i++) {
    let m1 = getSelector(moves[i][0]),
      m2 = getSelector(moves[i][1]);
    $(m1).before($(m2));
  }
```