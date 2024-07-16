function greet(name: string) {

}

// 一般不用指定函数返回的类型，会根据return的数据自动推断
function getData(): number {
    return 20;
}

// 匿名函数
const num: number[] = [1, 2, 3]

num.forEach(function (item) {
    console.log(item)
})

num.forEach(item => {
    console.log(item)
})
