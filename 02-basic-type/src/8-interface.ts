/*
 * @Author: Angelo
 * @Date: 2024-06-28 15:39:17
 * @version: 
 * @Descripttion: 
 */
//接口的使用interface
interface Human {
    sex: string,
    age: number
}
//接口的继承
interface Student extends Human {
    no: number,
    userName: string
}

const stu1: Student = {
    sex: "woman",
    age: 23,
    no: 1,
    userName: "lucy"
}
console.log(stu1)

type t1 = {
    sex: string
}
//type别名的扩展
type t2 = t1 & {
    age: number
}

const ttt: t2 = {
    sex: "man",
    age: 33
}
console.log(ttt)

//接口已经定义了，需要再次添加属性（直接定义相同的接口名称里面再定义其他字段就可以进行扩展）
interface i1 {
    sex: string
}
interface i1 {
    age: number
}

const data: i1 = {
    sex: "woman",
    age: 34
}

//type 就不能定义两个相同的变量

// type tp2 = {
//     sex:string
// }

// type tp2 = {
//     no:number
// }
