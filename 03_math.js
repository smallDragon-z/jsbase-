// var names = ['张三','李四','王五','赵六','钱七','孙八'];
// var index = Math.floor(Math.random()*names.length);
// console.log(names[index]);

var words = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
for(var i = 0,index     , newArr = [];i<4;i++){
    index = Math.floor(Math.random()*words.length);
    newArr.push(words[index]);
}
console.log(newArr);