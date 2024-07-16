// console.log("hello world")

function greet(key:String,value:Date){
    console.log(`key is ${key},value is ${value}`)

    console.log(typeof("hello"))
}

greet("name",new Date())

//1，安装typescript
//npm i typescript -g
//2，直接编译文件
//npx tsc hello.ts  (不需要npx的时候可以不使用，我这里用情况特殊)
//3，执行编译之后的js文件
//node hello.js

// npx不是必须的，只是因为我这里直接使用tsc没得用
// 1,生成配置文件，解决ts和js中函数名称相同抛出异常的问题：npx tsc --init
// 2,设置实时编译：npx tsc --watch
// 3,在实时编译的时候如果有错误不进行编译：npx tsc -noEmitOnError
// 连起来就是：npx tsc -noEmitOnError --watch



//tsconfig.json 中 strict 设置为 true 会进行类型强制检查；
//需要设置对应的数据类型
// function greet(key:String,value:Date){
//     console.log(`key is ${key},value is ${value}`)
// }


//类型检查
// "strict": true,    严格检查数据类型，需要加上数据类型；
//"strictNullChecks": true,      类型赋值为空或undefined的检查      这两个可以直接使用"strict": true就可以，功能等同
//"strictFunctionTypes": true,   函数类型检查                       这两个可以直接使用"strict": true就可以，功能等同

//1，typeof类型守卫：
// "object"
// "string"
// "number"
// "bigint"
// "boolean"
// "symbol"
// "undefined"
// "function"


//通过if(value){}进行操作
//如果value的值如下：0，NaN，""(空字符串)，null，undefined 这几个在值那么都是false
// !0 ==> 字符串"false" !!0 ==> boolean类型fasle (上面的值同理)