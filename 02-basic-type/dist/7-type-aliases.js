"use strict";
// 给类型取别名
function printMulitString(data) {
    return data.slice(0, 2).toString();
}
const str = printMulitString(["angelo", "luo", "alise", "make"]);
console.log(str);
