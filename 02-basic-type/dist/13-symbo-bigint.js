"use strict";
// bigint symbol原语
//bigint：表示int更大的数据
const big01 = BigInt(200);
const big02 = 100n; //这种方式需要
//symbol：全局唯一性引用
const firstName = Symbol("name");
const secondName = Symbol("name");
//不相同
if (firstName === secondName) {
    console.log("true");
}
else {
    console.log("false");
}
