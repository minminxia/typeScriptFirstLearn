"use strict";
// 坑 变量提升
var yangzic = '杨紫';
function zhengxing1() {
    console.log('我要整形成' + yangzic);
    var yangzic = '凤姐';
}
zhengxing1();
function zhengxing() {
    var yangzia = '李现';
    {
        var yangzib = '小沈阳';
        // let yangzib = '小沈阳';
        console.log('我要整形成' + yangzib);
    }
    console.log('我要整形成' + yangzia);
    console.log('我要整形成' + yangzib);
}
zhengxing();
