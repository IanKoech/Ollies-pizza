var size;
var crust;
var totalPrice;
var toppings;
var delivery;
var location;
var number=parseInt(document.getElementById("#number"));
/*Js constructor for creating numerous instances*/
var Pizza=function(size,crust,delivery,number){
    this.size=size;
    this.crust=crust;
    this.delivery=delivery;
    this.number=number;
};
Pizza.prototype.makeOrder=function(){
    return(this.number+" "+this.size+" pizzas are ordered and will be delivered to "+this.deliveryLocation+" at a total cost of "+this.totalPrice);
}

function checkSize(size){
    if(size=="small"){
        totalPrice+=300;
    }else if(size=="medium"){
        totalPrice+=600;
    }else{
        totalPrice+=1200;
    }
    alert(totalPrice);
    return totalPrice;
}
function checkNumber(number){
    return totalPrice*number;
}
function checkDelivery(){
    if(delivery=="Yes"){
        totalPrice+=200;
        alert(totalPrice);
        location=prompt("Please enter the location to be delivered:");   
    }else{
        totalPrice+=0;
    }
}

function checkOut(){
    return totalPrice;
}
/*Front end logic */
$(document).ready(function(){
   $("#Yes").click(function(){
       delivery=document.getElementById("Yes").val();
   });
   $("#No").click(function(){
       delivery=document.getElementById("No").val();
   });
   $("#toppings").click(function(){
       toppings=document.getElementById("toppings").value;
   });
   $("form#form1").submit(function(event){
        event.preventDefault();
        checkSize(size);
        checkNumber(myNumber);
        checkDelivery();
        checkOut();
        var customer=new Pizza(size,crust,delivery,number);        
        makeOrder();
        document.getElementById("#num").innerHTML=number;
        document.getElementById("#display-text").innerHTML=totalPrice;
   });
});

