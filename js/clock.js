



let isim = prompt("isminizi giriniz:");
let myName = document.querySelector("#myName");
myName.innerHTML=`${isim}`

function showTime(){
    var today = new Date();
    var h = today.getHours(); // 0 - 23
    var m = today.getMinutes(); // 0 - 59
    var s = today.getSeconds(); // 0 - 59
    
    
    var day =today.getDate(); 
    var mount=(today.getMonth()+1);
    var year = today.getFullYear();
    
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    
    var time = h + ":" + m + ":" + s;
    var date = day + "/" + mount + "/" + year;
    var dateTime = time+"  "+date;
    
    document.getElementById("myClock").innerText = dateTime;
    document.getElementById("myClock").textContent = dateTime;
    
    setTimeout(showTime, 1000);
    
}

showTime();






