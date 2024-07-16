// 给类型取别名

//给一个对象类型取了一个别名
type personInfo = {
    username: string,
    password: string
}

type mulitString = string[] | string //mulitString表示string[]或者string这两种类型

type alisesString = string

function printMulitString(data: mulitString): alisesString {
    return data.slice(0, 2).toString()
}

const str: alisesString = printMulitString(["angelo", "luo", "alise", "make"])
console.log(str)
