"use strict";
/*
 * @Author: Angelo
 * @Date: 2024-06-28 11:52:57
 * @version:
 * @Descripttion:
 */
function printFirst(data) {
    if (typeof (data) == "number") {
        console.log(`number is ${data}`);
    }
    else {
        console.log(`string is ${data}`);
    }
}
printFirst("lucy");
//string和数组都有这个slice方法，所以可以使用这个方法
function printSecond(data) {
    //slice(beginIndex, endIndex)，左闭右开[2,2),这种情况是取不出数据，因为包含下标为2的但是又不包含2
    return data.slice(1, 2);
}
console.log(printSecond(["a", "c", "e", "f", "i"]));
