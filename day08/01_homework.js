/*
//使用遍历，翻转数组中的元素
var arr=['a','b','c','d'];
//准备一个空数组，用于保存翻转后的元素
var arr2=[];
//遍历数组
for(var i=0;i<arr.length;i++){
  //0  4  3
  //1  4  2
  //2  4  1
  //3  4  0
  //倒着找到每个元素的下标
  //对应的下标：数组的长度-i-1
  //console.log(arr.length-i-1, arr[ arr.length-i-1 ]);
  //把获取的元素放入到数组arr2
  arr2[i]=arr[arr.length-i-1];
}
console.log(arr2);
*/

//冒泡排序
var arr=[23,9,78,6,45];
//外层循环：控制循环的轮数，循环的轮数比元素个数少1个
for(var i=1;i<arr.length;i++){
  //1  5  4
  //2  5  3
  //3  5  2
  //4  5  1
  //内层循环：控制每一轮循环的次数
  //循环条件：数组长度-i
  for(var j=0;j<arr.length-i;j++){
    //每一次循环，用当前的元素arr[j]和下一个元素arr[j+1]比较，如果当前的元素大于下一个元素，则位置交换
	if(arr[j]>arr[j+1]){
	  var c=arr[j];
	  arr[j]=arr[j+1];
	  arr[j+1]=c;
	}
  }
}
console.log(arr);








