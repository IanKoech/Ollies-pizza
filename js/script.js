var totalPrice=0;
var sizeCharge=0;
var crustCharge=0;
var deliveryCharge=0;
var toppingsTotal=0;
var tp1="";
var tp2="";
var tp3="";
var tp4="";
var tp5="";
var delivery;
var location;

//Pizza constructor
function Pizza(size,crust,number,delivery,location,tp1,tp2,tp3,tp4,tp5,){
    this.size=size;
    this.crust=crust;
    this.number=number;
    this.delivery=delivery;
    this.location=location;
    this.tp1=tp1;
    this.tp2=tp2;
    this.tp3=tp3;
    this.tp4=tp4;
    this.tp5=tp5;
}

//Making a prototype method
Pizza.prototype.makeOrder=function(){
    return(this.number+" "+this.size+" at a total cost of "+totalPrice);
}

function checkSize(size,number){
    if(size==="small"){
        sizeCharge+=300;
    }else if(size==="medium"){
        sizeCharge+=900;
    }else{
        sizeCharge+=1200;
    }
    sizeCharge=sizeCharge*number;
    
    return sizeCharge;
}

function checkCrust(crust,number){
    if(crust==="crusty"){
        crustCharge+=100;
    }else if(crust==="stuffed"){
        crustCharge+=150;
    }else{
        crustCharge+=180;
    }
    crustCharge=crustCharge*number;
    return crustCharge;
}

function toppingsCheckout(size,tp1,tp2,tp3,tp4,tp5,number){
    
    if (size==="small"){
        if(tp1==="BBQ Chicken"){
            toppingsTotal+=90;
        }if(tp2==="BBQ Beef"){
            toppingsTotal+=70;
        }if(tp3==="Vegetarian"){
            toppingsTotal+=50;
        }if(tp4==="Shrimp"){
            toppingsTotal+=100;
        }if(tp5==="mushroom"){
            toppingsTotal+=110;
        }
    }
    else if (size==="medium"){
        if(tp1==="BBQ Chicken"){
            toppingsTotal+=110;
        }
        if(tp2==="BBQ Beef"){
            toppingsTotal+=90;
        }
        if(tp3==="Vegetarian"){
            toppingsTotal+=70;
        }
        if(tp4==="Shrimp"){
            toppingsTotal+=120;
        }if(tp5==="mushroom"){
            toppingsTotal+=110;
        }
    }
    else if(size==="large"){
        if(tp1==="BBQ Chicken"){
            toppingsTotal+=130;
        }
        if(tp2==="BBQ Beef"){
            toppingsTotal+=110;
        }
        if(tp3==="Vegetarian"){
            toppingsTotal+=90;
        }
        if(tp4==="Shrimp"){
            toppingsTotal+=140;
        }if(tp5==="mushroom"){
            toppingsTotal+=110;
        }
    }else{
        break;
    }
 

    toppingsTotal=toppingsTotal*number
}

function checkDelivery(delivery){
    if(delivery==="Yes"){
        deliveryCharge+=200;
        alert("You will be charged Ksh"+deliveryCharge);
        location=prompt("Please enter the location of delivery:");
    }else{
        deliveryCharge=0;
    }
}

function getTotal(sizeCharge,crustCharge,toppingsTotal,deliveryCharge){
    totalPrice=sizeCharge+crustCharge+toppingsTotal+deliveryCharge;
    alert(totalPrice);
    return totalPrice;
}

//Front end logic
$(document).ready(function(){
    //Sets delivery to either yes / no
    $("#Yes").click(function(){
        alert("You will be charged Ksh200");
        prompt("Please enter your location of delivery:")=location;
        delivery=this.value;
        $(".hide-delivery").show();
    });
    $("No").click(function(){
        delivery=this.value;
        $(".hide-delivery").hide();
    });

    //Prompts user to enter their location to be delivered
    $("#locationbtn").click(function(){
        orderLocation=$("#location").val();
        if (delivery==="Yes"){
            alert(" Your order will be delivered to "+orderLocation+ " once you checkout"); 
        }
    });
    $("#tp1").click(function(){
        if($(this).prop("checked")==true){
            tp1=this.value;
             
        }
        else{
            tp1=""
        }
       
    });  
    
    $("#tp2").click(function(){
        if($(this).prop("checked")==true){
            tp2=this.value;
            
        }
        else{
            tp2="";
        }
        
    });
    $("#tp3").click(function(){
        if($(this).prop("checked")==true){
            tp3=this.value;
            
        }
        else{
            tp3="";
        }
        
    });  
    
    $("#tp4").click(function(){
        if($(this).prop("checked")==true){
            tp4=this.value;   
        }
        else{
            tp4="";
        }
        
    });
    $("#tp5").click(function(){
        if($(this).prop("checked")==true){
            tp5=this.value;
        }else{
            tp5="";
        }
    });
    $("#button").click(function(){
        $(".orderConfirmation").css("background-color","white");
    });
    $("form#form1").submit(function(event){
        event.preventDefault();
        var size=$("#size").val();
        var crust=$("#crust").val();

        var num=parseInt($("#number").val());
        var top1=$("#tp1").prop("checked");
        var top2=$("#tp2").prop("checked");
        var top3=$("#tp3").prop("checked");
        var top4=$("#tp4").prop("checked");
        var top5=$("#tp5").prop("checked");

        if(top1==false && top2==false && top3==false && top4==false &&  top5==false){
            alert("Plase add at least one topping");
        }
        var customer=new Pizza(size,crust,num,delivery,location,top1,top2,top3,top4,top5);
        checkSize(size,num);
        checkCrust(crust,num);
        toppingsCheckout(size,top1,top2,top3,top4,top5,num);
        checkDelivery(delivery);
        getTotal(sizeCharge,crustCharge,toppingsTotal,deliveryCharge);
        $(".order").text(customer.makeOrder());
        $("#num").text(num);
        $("#display-text").text(totalPrice);
        $("#form1").trigger("reset");
    });
    /*$("#orderbtn").click(function(){
        $(".hide-order").hide();
        $(".pizza-form").show();
        alert("Have a pizzaful day!");
        total=0;
        toppingsTotal=0;
        crustTotal=0;
        sizeTotal=0
        deliveryTotal=0;
        tp1="";
        tp2="";
        tp3="";
        tp4="";
    });*/
})
