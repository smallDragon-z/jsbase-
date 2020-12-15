// for(var i = 0,str = 'javascript',count = 0;i<str.length;i++){
//     if(str.charAt(i)=='a'){
//         count++;
//     }
// }
// console.log(count);

// var email = '744823391@qq.com';
//        if(email.indexOf('@')!=-1){
// console.log('t');
// }else{
//     console.log('f');
// }
var idCard = '110326199710263579';
var year = idCard.slice(6,10);
var month = idCard.slice(10,12);
var day = idCard.slice(12,14);
if(idCard.slice(-2,-1)%2==0){
    sex='女';
}else{
    sex='男';
}
console.log(year+'年'+month+'月'+day+'日'+' '+'性别'+sex);
 
