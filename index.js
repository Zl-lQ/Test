    let dd = document.getElementById("doc");
    console.log(dd)
    dd.innerHTML = 'as u wish';
    function reduce() {
    let value = document.getElementsByClassName("ww")[0].value;
    let value2 = document.getElementsByClassName("ww")[0];
    // let value2 = document.getElementsByClassName("ww")[0].min;
    if (value == 2) {
        value.style.color = 'red'; 
    }
    console.log(value);
    }


    document.onkeydown = function() {
        let kc=event.keyCode;    //把按键转换成unicode值
        console.log(kc);
        if (kc === 65) {
            alert('111');
        }
    }


// let res = 0;
// while (res !==100) {
//     let res;
//     let num = Math.random()* 100+ 1;
//     res = Math.floor(num);
    
// }
// console.log(res);