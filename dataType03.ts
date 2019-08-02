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

var age: number = 18
var height:number = 170.5
console.log(age)
console.log(height)
console.log('===================enum')
enum season{spring, summer, autumn, winter}
console.log(season.summer)
enum data{a='香蕉', b='苹果', c='梨子'}
console.log(data.a)