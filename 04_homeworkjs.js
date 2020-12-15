var letter = 'hOw are you';
// 将字符串转换为数组 使用splic()方法。
var arr = letter.split(' ');
// 使用循环将每一个单词首字母和其他字母切割，首字母转大写，其他转小写
for(var i = 0,total='';i<arr.length;i++){
    var toUpper =arr[i].substr(0,1).toUpperCase();
    var toLower = arr[i].substr(1).toLowerCase();
    var newW = toUpper+toLower; 
    // 拼接字符串
    arr[i]=toUpper+toLower;
}
console.log(arr.join(' '));


// 
var newArr = [];
var words = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q'];
for(var i = 0;i<4;i++){
    var n = Math.floor(Math.random()*words.length);
    newArr.push(words[n]);
    words.splice(n,1);
}
console.log(newArr);
