const order={
    items: ["item1","item2","item3","item4"],
    totalcost:90,
};

function startOrderProcess(order){

     console.log("Order received");
     if(order.items.length===0){
            console.log("Order is invalid!")
            return
     }else{
        setTimeout(function(){
        console.log("Order is packaged ")
         setTimeout(function(){
        console.log("Order valid!")
     },1000)
       
     },2000)

    


     setTimeout(function(){
        console.log("Order Packaged")
     },1000)
   }


}
startOrderProcess(order)