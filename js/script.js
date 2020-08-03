var location;
var totalPrice=0;
var crust=0;
var toppings=0;
var size=0;
var delivery;

var Pizza=function(size,number,crust,delivery,location){
    this.size=size;
    this.number=number;
    this.crust=crust;
    this.delivery=delivery;
    this.location=location;
};

/*Prototyping a method for the pizza constructor*/
Pizza.prototype.makeOrder=function(){
    return (this.number+" "+this.size+" of crust type"+this.crust);
}
function checkSize(size,number){
    if(size=="small"){
        totalPrice+=300;
    }else if(size=="medium"){
        totalPrice+=900;
    }else{
        totalPrice+=1200;
    }
    alert(number);
    totalPrice=totalPrice*number;
    alert(number);
}

function checkDelivery(delivery){
    if(delivery=="yes"){
        totalPrice+=200;
    }else{
        totalPrice+=0;
    }
}
function checkOut(){
    return totalPrice;
}

/*Front-end logic*/
$(document).ready(function(){
    $("#Yes").click(function(){
        alert("You will be charged Ksh 200 for delivery");
        delivery=this.value;
        location=prompt("Please enter your location");
    });
    $("form#form1").submit(function(event){
        event.preventDefault();
        var size=$("#size").val();
        var crust=$("#crust").val();
        var number=parseInt($("#number").val());

        var Customer=new Pizza(size,number,crust,delivery,location);
        checkDelivery(delivery);
        checkSize(size,number);
        checkOut();
        $("#number").text(number)
        $("#display-text").text(totalPrice);
    });
});