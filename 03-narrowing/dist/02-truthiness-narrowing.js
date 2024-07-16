"use strict";
/*
 * @Author: Angelo
 * @Date: 2024-07-15 16:16:04
 * @version:
 * @Descripttion:
 */
//真值缩小（对值的类型进行缩小范围）
//通过if(value){}进行操作
//如果value的值如下：0，NaN，""(空字符串)，null，undefined 这几个在值那么都是false
// !0 ==> 字符串"false" !!0 ==> boolean类型fasle (上面的值同理)
function getAllName(userName) {
    //使用如下方式对值的类型进行判断
    //当为null的时候通过typeof也会返回object所以需要加上一个boolean的判断
    //加上userName && 如果为上面的五种类型的话就返回false
    if (userName && typeof userName === 'object') {
        for (const item of userName) {
            console.log(item);
        }
    }
    else if (userName === "string") {
        console.log("string!");
    }
    else {
        console.log("null", userName);
    }
}
getAllName(null);
