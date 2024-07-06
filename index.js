
function calculateEMI(){

    var modelS = document.getElementById("model");
    var model = modelS.value;
    var DP = parseInt(document.getElementById("downpayment").value)
    var tenureM = parseInt(document.getElementById("tenure").value)
    var vehiclePrice=0

    if (model=="Magnus EX"){
      vehiclePrice=101500
    }
    if(model=="Zeal EX"){
      vehiclePrice=99500
    }
    if(model=="Primus"){
        vehiclePrice=123200
      }
    if(model=="Kratos R"){
        vehiclePrice=167950
      }
    if (model=="Magnus LT"){
        vehiclePrice=88000
      }
    if (model=="Nexus ST"){
        vehiclePrice=139435
      }  
    
    vehiclePrice=vehiclePrice+1500
    margin=(DP-(0.02*vehiclePrice)-2000)/0.98
    LA=(vehiclePrice-margin)
    var intrt=(10.99/12)/100
    console.log(LA)
    console.log(margin)

    
    intpm=LA*intrt
    installments=Math.round((LA+(intpm*tenureM))/tenureM)
    totVehPrice=(installments*tenureM)+DP
    totInterest=totVehPrice-vehiclePrice
  

    document.getElementById("vehprice").innerText= vehiclePrice
    document.getElementById("installments").innerText= installments
    document.getElementById("price").innerText= totVehPrice
    document.getElementById("interest").innerText= totInterest
  

}
