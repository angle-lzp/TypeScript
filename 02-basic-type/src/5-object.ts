//对象直接的属性用 , 或 : 都可以
function printAll(props: { x: number, y: number }) {
    console.log(`x is ${props.x},y is ${props.y}`)
}

//传入对象
printAll({
    x: 23,
    y: 35
})


//可空的情况（可传可不传）:last? 加了?表示可为null
function printName(props: { name: string, last?: string }) {
    console.log(`name is ${props.name}`)
    if (props.last != null) {
        console.log(`有值 ${props.last}`)
    } else {
        console.log("没有值！")
    }

    //如果没有值直接返回props.last，有值那么执行后面的toUpperCase()方法，起一个保护作用吧
    console.log(props.last?.toUpperCase())
}

printName({
    name: "angelo",
    last: "luo"
})