
function calculateEMI(){
    var bankS = document.getElementById("bank");
    var modelS = document.getElementById("model");
    var model = modelS.value;
    var bank = bankS.value;
    var DP = parseInt(document.getElementById("downpayment").value)
    var tenureM = parseInt(document.getElementById("tenure").value)
    var vehiclePrice=0

    

    if (model=="Magnus NEO"){
      vehiclePrice=97200
    }
    if(model=="Nexus EX"){
      vehiclePrice=130600
    }
    if(model=="Primus"){
        vehiclePrice=123200
      }

    if (model=="Nexus ST"){
        vehiclePrice=133150
      }  
    
    if (bank=="Bajaj"){
        LA=(vehiclePrice-DP+3500)/0.9882
        var intrt=(11.49/12)/100
        console.log(LA)
        console.log(vehiclePrice)  
        
      }

    if (bank=="Ecofy"){
        LA=(vehiclePrice-DP+2710)/0.9764
        var intrt=(7.99/12)/100
        console.log(LA)
        console.log(vehiclePrice)  
        
      }  

    if (bank=="LT"){
        LA=(vehiclePrice-DP+2200)/0.99
        var intrt=(8.35/12)/100
        console.log(LA)
        console.log(vehiclePrice)  
        
      }    

    if (bank=="Hero"){
        LA=(vehiclePrice-DP+3200)
        var intrt=(9.99/12)/100
        console.log(LA)
        console.log(vehiclePrice)  
        
      }   
    
    vehiclePrice=vehiclePrice
    
    
    
    intpm=LA*intrt
    installments=Math.round((LA+(intpm*tenureM))/tenureM)
    totVehPrice=(installments*tenureM)+DP
    totInterest=totVehPrice-vehiclePrice
  

    document.getElementById("vehprice").innerText= vehiclePrice
    document.getElementById("installments").innerText= installments
    document.getElementById("price").innerText= totVehPrice
    document.getElementById("interest").innerText= totInterest
  

}
