/*Front end logic */
var Pizza=function(size){
    this.size=size;
};
/*Front-end logic */

$(document).ready(function(){
    var deliveryCharge=0;
    var pizzaSize;
    var totalPrice=0;
    var toppings=[];
    var number=parseInt(document.getElementById("number").value());
    var crust=document.getElementById("crust").value();
    $("#sizeSelected").click(function(){
        pizzaSize=new Pizza(document.getElementsByClassName("sizeSelected").value());
        if(pizzaSize=="small"){
            totalPrice+=300;
        }else if(pizzaSize=="medium"){
            totalPrice+=900;
        }else{
            totalPrice+=1200;
        }
        totalPrice*=number;
    });
    $(".deliveryD").click(function(){
        var deliveryDecision=document.getElementById("delivery").value();
        if(deliveryDecision=="Yes"){
            prompt("Enter the location of delivery:");
            prompt("Total delivery charge will be "+"Ksh 250");
            deliveryCharge=+250;
        }else{
            deliveryCharge+=0;
            break;
        }
    });
    $(".toppings").click(function(){
        toppings.push(document.getElementsByName("toppings").value());
    });
    $("#button").submit(function(){
        event.preventDefault();
        $("#text").append("You have ordered "+number+" "+pizzaSize+" of crust type "+crust+ "at Ksh"+totalPrice);
    });
});

    