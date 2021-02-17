
   function orderCoffee(){
        let customer = document.getElementById("customerName").value;
        let drink = document.getElementById("type").value;
        let Size = document.getElementById("coffeeSize").value;
        let Drizzle = document.getElementsByName("Drizzle");
        let Whippedcream = document.getElementById("Whippedcreme").value;
        let Sweetener = document.getElementById("Sweetener").value;
        let ColdFoam = document.getElementsByName("coldFoam");
        let Dairy = document.getElementById("dairy").value;
       
        const orderDetails ={
            name: customer,
            selected_drink:drink,
            selected_size:Size,
            selected_Drizzle:Drizzle,
            selected_Whippedcream:Whippedcream,
            selected_Sweetener:Sweetener,
            selected_Cold_foam:ColdFoam,
            selected_Dairy:Dairy,

            displayOrder:function(){

                let result ="";
                if(Drizzle[0].checked == true){
                	result = Drizzle[0].value;
                } 
                if(Whippedcream == "yes"){
                    result += " Whippedcream "
                }
                if(Sweetener == "yes"){
                	result += " Sweetener "
                }
                if(ColdFoam[0].checked == true){
                	
                    result = ColdFoam[0].value;
                }
            


                alert('Thank You '+ orderDetails.name+ ' for Selecting '+ orderDetails.selected_drink +' The Size of Drink is '
                + orderDetails.selected_size +' and Modifiers are '+ result +' Dairy '+ orderDetails.selected_Dairy);
            }
        }
        orderDetails.displayOrder();
    }
