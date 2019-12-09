const elt = document.createElement("div");
document.body.appendChild(elt);

var i = 0;
var j = 0;
// var count = 0;               //これは実行されない
// var countup = function(){
//     var msg = count + "秒が経過";
//     elt.innerText = msg;
// }
// while(true){
//     if (i++ == 10000000) {
//         j++;
//         setInterval(countup, 1000);
//         i = 0;
//     }
// }

while(true){
    if (i++ == 10000000) {
        elt.innerText = j++;
        i = 0;
    }
}