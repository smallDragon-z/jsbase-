/*
var str='然哥正在玩dangang';
//console.log( str.length );//获取长度
//通过下标获取字符
console.log( str.charAt(0), str[0] );
//charCodeAt
console.log( str[0].charCodeAt() );

//练习：声明变量保存字符串javascript，遍历字符串得到每个字符，统计字符a出现的次数。
var str='javascript';
for(var i=0,count=0;i<str.length;i++){
  //console.log( str.charAt(i) );
  if(str.charAt(i)==='a'){
    count++;
  }
}
console.log(count);


var str='javascript';
console.log( str.indexOf('a') );//找第1个
console.log( str.lastIndexOf('a') );//找最后一个


//练习：打印1~100之间所有整数，如果遇到7的倍数或者含有7都跳过。
for(var i=1;i<=100;i++){
  //如果是7的倍数，或者数字中含有7
  //将数字转为字符串，调用indexOf
  if(i%7===0 || String(i).indexOf('7')>=0 ){
    continue;
  }
  console.log(i);
}


//英文字母大小写转换
var str='JavaScript';
console.log( str.toUpperCase() );
console.log( str.toLowerCase() );


//截取字符串
var str='javascript';
console.log( str.slice(4) );
console.log( str.slice(4,7) );
console.log( str.slice(-3,-1) );

//练习：声明变量保存邮箱，分别截取出邮箱的用户名和域名
var email='ran666@sohu.com';
//查找@的下标
var index=email.indexOf('@');
//console.log(index);
console.log( email.slice(0,index), email.slice(index+1) );


var str='javascript';
//按照长度截取
console.log( str.substr(4) );
console.log( str.substr(4,3) );
console.log( str.substr(-3,2) );


//练习：声明变量保存身份证号，分别截取出出生的年月日，性别(倒数第2位，奇数是男，偶数是女)；最后打印  ‘xxxx年xx月xx日 性别x’
var id='110378197705292790';
var year=id.substr(6,4);
var month=id.substr(10,2);
var date=id.substr(12,2);
var sex=id.substr(-2,1);
var s= sex%2 ? '男' : '女';
console.log(year+'年'+month+'月'+date+'日 性别'+s);



var arr=['a','b','c'];
var str=String(arr);//'a,b,c'
//console.log(str);
//切割为数组
var arr2=str.split(',');
console.log(arr2);
*/
//练习：将一个姓名中的最后一个名字截取出来。
var name='亚历山大.尼古拉斯.一然.山田';
var arr=name.split('.');
//最后一个元素下标：数组长度-1
console.log(arr[arr.length-1]);



