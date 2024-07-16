"use strict";
//enum 枚举
//如果在上一个设置了值，那么下一个就累加1，从0开始
var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 0] = "UP";
    Direction[Direction["Down"] = 5] = "Down";
    Direction[Direction["Right"] = 6] = "Right";
    Direction[Direction["Left"] = 7] = "Left"; //7
})(Direction || (Direction = {}));
console.log(Direction.UP);
console.log(Direction.Down);
console.log(Direction.Left);
