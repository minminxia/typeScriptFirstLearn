"use strict";
// TypeScript的数据类型有：
// Undefined ：定义一个变量么有赋予任何值时
// Number： 数值类型（在ts中，所有的数字都是Number类型 不分整数还是小数） 特殊的number类型：NaN Infinity -Infinity
// String 字符串类型
// Boolean 布尔类型
// enum 枚举类型  变量的结果是固定的几个数据时使用
// any 任意类型，一个牛X的类型
// void 空类型
// Array 数组类型
// Tuple 元祖类型
// Null 空类型
// var age:number
// console.log(age) // undefined
var age = 18;
var height = 170.5;
console.log(age);
console.log(height);
console.log('===================enum');
var season;
(function (season) {
    season[season["spring"] = 0] = "spring";
    season[season["summer"] = 1] = "summer";
    season[season["autumn"] = 2] = "autumn";
    season[season["winter"] = 3] = "winter";
})(season || (season = {}));
console.log(season.summer);
var data;
(function (data) {
    data["a"] = "\u9999\u8549";
    data["b"] = "\u82F9\u679C";
    data["c"] = "\u68A8\u5B50";
})(data || (data = {}));
console.log(data.a);
