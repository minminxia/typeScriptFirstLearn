function searchXiaoJieJie(age:number):string{
    return '找到了' + age + '岁的小姐姐'
}
var age:number = 18
var result:string = searchXiaoJieJie(age)
console.log(result)

// function common(age,stature){
//     let yy:string = ''
//     yy = '找到了' + age + '岁'
//     if (stature != undefined){
//         yy = yy + stature
//     }
//     return yy + '的小姐姐'
// }
console.log('==========有可选参数的函数')
// 可选参数：就是我们定义行参的时候，可以定义一个可传可不传的参数
// 这种参数，在定义函数时通过？标注
function searchXiaoJieJie2(age:number, stature?:string):string{
    // common(age,stature)
    let yy:string = ''
    yy = '找到了' + age + '岁'
    if (stature != undefined){
        yy = yy + stature
    }
    return yy + '的小姐姐'
}
var result:string = searchXiaoJieJie2(21,'小短腿')
console.log(result)

console.log('==========有默认参数的函数')
function searchXiaoJieJie3(age:number=18,stature:string='大长腿'){
    let yy:string = ''
    yy = '找到了' + age + '岁'
    if (stature != undefined){
        yy = yy + stature
    }
    return yy + '的小姐姐'
}
var result:string = searchXiaoJieJie3()
console.log(result)

console.log('===========有剩余参数的函数')
function searchXiaoJieJie4(...xuqiu:string[]):string{
    let yy:string = '找到了'
    for (let i = 0;i<xuqiu.length;i++){
        yy = yy + xuqiu[i]
        if (i < xuqiu.length){
            yy = yy + '、'
        }
    }
    yy = yy + '的小姐姐'
    return yy
}

var result:string = searchXiaoJieJie4('22岁', '大长腿', '瓜子脸')
console.log(result)

// 三种函数的定义方式
// 1 使用函数名
function add(n1:number, n2:number):number{
    return n1+n2
}
// 2 函数表达式法
var add2 = function (n1:number, n2:number):number{
    return n1+n2
}
console.log(add2(1,2))
// 3 箭头函数
var add3 = (n1:number, n2:number):number=>{
    return n1+n2
}
console.log(add3(4,2))