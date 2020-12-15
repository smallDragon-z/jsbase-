/*
var arr=['山田一然', '王明明', '东哥', '洪培', '杨晓光', '吴华', '马鼎', '谢涵普', '黄俊'];
//删除数组元素
//console.log( arr.splice(1) );
//console.log( arr.splice(1,3) );
//console.log( arr.splice(-3,2) );
//console.log( arr.splice(-4,0,'小新','小新2') );
//console.log(arr);
//练习：创建数组包含a~h，每个字母是一个元素，删除cd，替换f为m，在下标为1的位置插入z。
var arr=['a','b','c','d','e','f','g','h'];
console.log( arr.splice(2,2) );
console.log( arr.splice(-3,1,'m') );
console.log( arr.splice(1,0,'z') );
console.log(arr);


var arr=['a','b','c','d'];
//翻转数组元素
console.log( arr.reverse() );
console.log( arr );


var arr=[23,9,78,6,45];
//默认按照首个字符的Unicode编码从小到大排序
//arr.sort();
arr.sort( function(a,b){
  //return a-b;//数字从小到手
  return b-a;
} );

console.log(arr);
*/


var arr=['a','b','c','b'];
//在末尾添加元素
// arr[arr.length]
//console.log( arr.push('d','e') );
//删除数组末尾的一个元素
//console.log( arr.pop() );
//开头添加
//console.log( arr.unshift('f') );
//删除开头的一个
//console.log( arr.shift() );
//console.log(arr);
//var arr=['a','b','c','b'];
//查找数组元素
//console.log( arr.indexOf('s') );


//练习：创建数组，包含'友善福', '敬业福'；如果含有敬业福，打印'该福字已经存在'；如果'爱国福'不存在，则把该福字添加到数组末尾。
var arr=['友善福','敬业福'];
//判断元素已经存在
if( arr.indexOf('敬业福')>=0 ){
  console.log('该福字已经存在');
}
//判断元素不存在
if( arr.indexOf('爱国福')===-1 ){
  arr.push('爱国福');
}
console.log(arr);






