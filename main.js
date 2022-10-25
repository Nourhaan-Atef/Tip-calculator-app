let bill= document.getElementById("bill");
let btn1= document.getElementById("btn-1"); 
let btn2= document.getElementById("btn-2"); 
let btn3= document.getElementById("btn-3");
let btn4= document.getElementById("btn-4");
let btn5= document.getElementById("btn-5");
let btn6= document.getElementById("custom-inp");
let personsNums= document.getElementById("persons-nums"); 
let tipAmount= document.getElementById("tip-amount"); 
let total= document.getElementById("total"); 
let reset = document.getElementById("reset")

function result(btnNum){
    if(personsNums.value==0){
        personsNums.style.border="1px solid red";
        alert("Number Of Persons Can't Be Zero")
    }else{
      tipAmount.innerHTML = "$"+(((+bill.value*btnNum.value /100) / +personsNums.value).toFixed(2));
      total.innerHTML = "$"+((((+bill.value/ +personsNums.value) +  (+tipAmount.innerHTML.slice(1)))).toFixed(2));
      personsNums.style.border="";
    }
}

btn1.addEventListener("click",function(){
  result(btn1);
})

btn2.addEventListener("click",function(){
   result(btn2)
})

btn3.addEventListener("click",function(){
    result(btn3)
})

btn4.addEventListener("click",function(){
   result(btn4)
})

btn5.addEventListener("click",function(){
 result(btn5)
})

btn6.addEventListener("click",function(){
 result(btn6);
})


reset.addEventListener("click",function(e){
    bill.value="";
    personsNums.value="";
    tipAmount.innerHTML="$0.00";
    total.innerHTML="$0.00";
})