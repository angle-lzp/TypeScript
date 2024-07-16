//null undifined

let v1 = null
let v2 = undefined

let v3: null = null
let v4: undefined = undefined
// let v5: string = undefined //这边有类型检查，一个string类型的变量不能赋值其他的类型（undefined）

function printNull(vlaue:string | null){
    if(vlaue === null){
        console.log("null value!")
    }else{
        console.log("{0}",vlaue.toUpperCase())
    }
}


printNull(null)