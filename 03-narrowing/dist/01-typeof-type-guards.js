"use strict";
/*
 * @Author: Angelo
 * @Date: 2024-07-15 16:01:15
 * @version:
 * @Descripttion:
 */
//typeof：类型守卫（判断数据类型）也叫真值检查（实际是什么类型的值进行检查）
function getName(userName) {
    if (typeof userName === "object") { //判断是是数组
        console.log("string[]");
    }
    else if (typeof userName === "string") {
        console.log("string");
    }
    else {
        console.log("null");
    }
}
getName(["angelo", "luo"]);
