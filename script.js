

//インプットに書かれた内容の取得をして、発火させるようにする
document. querySelector("#KEISAN").addEventListener("click",(event)=>{
    event.preventDefault(); 
    const INPUT1 = parseFloat(document.querySelector("#number1").value);
    const INPUT2 = parseFloat(document.querySelector("#number2").value);
    if(!isNaN(INPUT1) && !isNaN(INPUT2)){
        document.querySelector("#result").textContent = INPUT1 / INPUT2;
    }else{
        document.querySelector("#result").textContent = "正確な数値を入力してください";
        document.querySelector("#result").style.color = "red";
    }
    
})



//使わなかったもの----------------------------------------------
//引数で持ってきた数値同士を足して返す関数（使わなかった）
// const XX = (number1,number2)=>{
//     return number1 + number2;
// }

// console.log(XX(2,4)); //（関数ちゃんと動いてるかの確認）

//実験---------------------------------------------------------
