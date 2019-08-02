// 坑 变量提升
var yangzic:string = '杨紫'
function zhengxing1():void{
    // var yangzic:string
    console.log('我要整形成' + yangzic) // undefined
    var yangzic:string = '凤姐'
    console.log('我要整形成' + yangzic) // 凤姐

}
zhengxing1()

function zhengxing():void{
    var yangzia:string = '李现'
    {
        let yangzib:string = '小沈阳'
        console.log('我要整形成' + yangzib) // 小沈阳
    }
    console.log('我要整形成' + yangzia) // 李现
    console.log('我要整形成' + yangzib) // 小沈阳 本来不应该输出 因自动转化为了es5语法
}
zhengxing()
