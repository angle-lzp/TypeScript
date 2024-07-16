//enum 枚举

//如果在上一个设置了值，那么下一个就累加1，从0开始
enum Direction {
    UP,//0
    Down = 5,//5
    Right,//6
    Left//7
}

console.log(Direction.UP)
console.log(Direction.Down)
console.log(Direction.Left)