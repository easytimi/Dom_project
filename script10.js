let num1=141250;
let num2=750000;
let num3=485000;
let num4=1;
let num5=1;
let num6=1;
let totalitem=num4+num5+num6;
let machineprice= num1;
let phoneprice= num2;
let laptoprice= num3; 
let totalprice=machineprice+phoneprice+laptoprice;
let quantity=num4;
let quantity1=num5;
let quantity2=num6;
let numel= document.getElementById("num-el");
let num1el= document.getElementById("num1-el");
let num2el= document.getElementById("num2-el");
function add(){
        num4=num4+1;
        quantity=num4;
        totalitem=num4+num5+num6;
        numel.textContent=quantity;
        let newprice= num3*quantity;
        laptoprice=newprice;
        totalprice=machineprice+phoneprice+laptoprice;
        let numbel=document.getElementById("numb");
        let lapel=document.getElementById("lap-el");
        let totalel=document.getElementById("total-el");
       lapel.textContent="₦"+" "+newprice;
       numbel.textContent=totalitem+" "+"items";
       totalel.textContent=" "+"total:  ₦ "+totalprice;
       
   }
function minus(){
    if(num4>1){
        num4=num4-1;
        quantity=num4;
        totalitem=num4+num5+num6;
        numel.textContent=quantity;
        let newprice=num3*quantity;
        laptoprice=newprice;
        totalprice=machineprice+phoneprice+laptoprice;
        let numbel=document.getElementById("numb");
        let lapel=document.getElementById("lap-el");
        let totalel=document.getElementById("total-el");
        lapel.textContent="₦"+ " "+newprice; 
        numbel.textContent=totalitem+" "+"items";
        totalel.textContent=" "+"total:  ₦ "+totalprice;
    }
}
function add1(){
    num5=num5+1;
    quantity1=num5;
    totalitem=num4+num5+num6;
    num1el.textContent=quantity1;
    newprice=num1*quantity1;
    machineprice=newprice;
    totalprice=machineprice+phoneprice+laptoprice;
    let numbel=document.getElementById("numb");
    let washel= document.getElementById("wash-el");
    let totalel=document.getElementById("total-el");
    washel.textContent="₦"+" "+newprice;
    numbel.textContent=totalitem+" "+"items";
    totalel.textContent=" "+"total:  ₦ "+totalprice;
}
function minus1(){
if(num5>1){
    num5=num5-1;
    quantity1=num5;
    totalitem=num4+num5+num6;
    num1el.textContent=quantity1;
    newprice=num1*quantity1;
    machineprice=newprice;
    totalprice=machineprice+phoneprice+laptoprice;
    let numbel=document.getElementById("numb");
    let washel=document.getElementById("wash-el")
    let totalel=document.getElementById("total-el");
    washel.textContent="₦"+" "+newprice;
    numbel.textContent=totalitem+" "+"items";
    totalel.textContent=" "+"total:  ₦ "+totalprice;
   }
}
function add2(){
    num6=num6+1;
    quantity2=num6;
    totalitem=num4+num5+num6;
    num2el.textContent=quantity2;
    newprice=num2*quantity2;
    phoneprice=newprice;
    totalprice=machineprice+phoneprice+laptoprice;
    let numbel=document.getElementById("numb");
    let phonel=document.getElementById("phone-el");
    let totalel=document.getElementById("total-el");
    phonel.textContent="₦"+" " +newprice;
    numbel.textContent=totalitem+" "+"items";
    totalel.textContent=" "+"total:  ₦ "+totalprice;
}
function minus2(){
if(num6>1){
    num6=num6-1;
    quantity2=num6;
    totalitem=num4+num5+num6;
    num2el.textContent=quantity2;
    let newprice=num2*quantity2;
    let phoneprice=newprice;
    totalprice=machineprice+phoneprice+laptoprice;
    let numbel=document.getElementById("numb");
    let phonel=document.getElementById("phone-el");
    let totalel=document.getElementById("total-el");
    phonel.textContent="₦"+" "+newprice
    numbel.textContent=totalitem+" "+"items";
    totalel.textContent=" "+"total:  ₦ "+totalprice;
     }
  }   
function removelap(){
    const element1=document.getElementById("descript");
    const element2=document.getElementById("num-el");
    const element3=document.getElementById("lap-el")
    totalel=document.getElementById("total-el");
    let numbel=document.getElementById("numb");
    totalitem=+num5+num6;
    totalprice=machineprice+phoneprice;
    element1.remove();
    element2.remove();
    element3.remove();
    totalel.textContent=" "+"total:  ₦ "+totalprice;
    numbel.textContent=totalitem+" "+"items";
}
function  removephone(){
    const element1=document.getElementById("descript2");
    const element2=document.getElementById("num2-el");
    const element3=document.getElementById("phone-el")
    totalel=document.getElementById("total-el");
    let numbel=document.getElementById("numb");
    totalitem=num5+num4;
    totalprice=machineprice+laptoprice;
    element1.remove();
    element2.remove();
    element3.remove();
    totalel.textContent=" "+"total:  ₦ "+totalprice;
    numbel.textContent=totalitem+" "+"items";

}
function removemachine(){
    const element1=document.getElementById("descript1");
    const element2=document.getElementById("num1-el");
    const element3=document.getElementById("wash-el")
    totalel=document.getElementById("total-el");
    let numbel=document.getElementById("numb");
    totalitem=num4+num6;
    totalprice=laptoprice+phoneprice;
    element1.remove();
    element2.remove();
    element3.remove();
    totalel.textContent=" "+"total:  ₦ "+totalprice;
    numbel.textContent=totalitem+" "+"items";

}