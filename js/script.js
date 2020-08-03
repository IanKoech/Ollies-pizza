/*Js constructor for creating numerous instances*/
var Pizza=function(size){
    this.size=size;
};
/*Front-end logic*/
$(document).ready(function(){
    var deliveryCharge=0;
    var totalPrice=0;
    var number=parseInt(document.getElementById("number").value);
    $("#button").click(function(){
        var size=new Pizza(document.getElementById("size").value);
        alert(size);
        if(size=="small"){
            totalPrice+=300;
        }else if(size=="medium"){
            totalPrice+=900;
        }else{
            totalPrice+=1200;
        }
        totalPrice=totalPrice*number;
        alert(totalPrice);
        var delivery=document.getElementById("delivery").value;
        alert(delivery);
        var location;
        if(delivery=="Yes"){
            deliveryCharge+=200;
            location=prompt("Enter your delivery location:");
            alert(location);
        }else{
            deliveryCharge+=0;
        }
        alert(deliveryCharge);
        alert("Your delivery will be made to "+location+" at a cost of Ksh:"+deliveryCharge)
    });
    $("form").submit(function(){
        var pizzaCrust=document.getElementById("crust").value;
        var pizzaToppings=document.getElementById("toppings").value;
        totalPrice+=deliveryCharge;
        document.getElementById("display-text").innerHTML=totalPrice;
        document.getElementById("num").innerHTML=number;
        event.preventDefault();
    });
});