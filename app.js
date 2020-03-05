'use strict';
function fib(n){
    if (n===0){
        return 0;
    }else if(n===1){
        return 1;
    }
    return fib(n-1) + fib(n-2); // 関数の中で関数を呼ぶのを再帰と呼ぶ
}
const num = 40;
for(let i = 1; i<=num; i++){
    console.log(fib(i));
}