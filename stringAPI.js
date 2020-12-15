var i = 0;
var words = 'abcd';
while(true){
    var word = prompt('请输入不猜测的字母') ;
    if(word.toLowerCase()===words.toLowerCase()){
        console.log('我草，这都能猜对');
        break;
    }else{
        alert('不对不对！！！');
    }
}