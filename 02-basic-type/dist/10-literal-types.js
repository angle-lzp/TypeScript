"use strict";
//文字类型 let:可变的；cosnt:不可变的
//文字类型、数字类型等其他的类型：可以理解为就是给一个变量限定它的值
//let常量
let str1 = 'angelo';
str1 = 'luo';
const str2 = 'angelo';
// str2 = 'luo' 不可以进行赋值
//文字类型：如下str3的类型设置为了‘Get’文字类型那么它后面赋值只能是这个‘Get’值
let str3 = "Get";
//文字类型：str4的类型为'get' | 'post' | 'put',那么在赋值的时候只能是这三个值中的一个
let str4;
str4 = 'get';
// str4 = 'luo' 报错
const str5 = 'a';
// str5 = 'b' cosnt修饰的本身就是常量，无法被修改，一开始赋值了就是这个值了
function printData(prop) {
}
//下面需要将method转成常量，可以直接as const变成一个常量
let prop = {
    url: 'http://www.baidu.com',
    method: 'GET'
};
printData(prop);
function printDataAll(url, method) {
}
let currentProp = {
    url: 'https://www.baidu.com',
    method: 'GET'
};
printDataAll(currentProp.url, currentProp.method); //对currentProp as const转变成常量,这样就可以了
// printDataAll(currentProp.url, currentProp.method) currentProp.method：在这里是string类型的，但是metod不是这个类型而是'GET' | 'POST' | 'PUT' | 'DELETE'类型
// printDataAll(currentProp.url, currentProp.method as "GET") //可以将method转成'GET'类型，但是这样就写死了，可以对currentProp as const转变成常量
