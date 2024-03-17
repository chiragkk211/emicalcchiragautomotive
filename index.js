
function calculateEMI(){

    var modelS = document.getElementById("model");
    var model = modelS.value;
    var DP = parseInt(document.getElementById("downpayment").value)
    var tenureM = parseInt(document.getElementById("tenure").value)
    var vehiclePrice=0

    if (model=="Magnus EX"){
      vehiclePrice=109260
    }
    if(model=="Zeal EX"){
      vehiclePrice=99500
    }
    if(model=="Primus"){
        vehiclePrice=128335
      }
    if(model=="Kratos R"){
        vehiclePrice=167950
      }
    if (model=="Magnus LT"){
        vehiclePrice=101282
      }
    
    
    margin=DP-2450
    LA=(vehiclePrice+1500-margin)
    var intrt=(8.99/12)/100
   
    
    intpm=LA*intrt
    installments=Math.round((LA+(intpm*tenureM))/tenureM)
    totVehPrice=(installments*tenureM)+DP
    totInterest=totVehPrice-vehiclePrice
  

    document.getElementById("vehprice").innerText= vehiclePrice
    document.getElementById("installments").innerText= installments
    document.getElementById("price").innerText= totVehPrice
    document.getElementById("interest").innerText= totInterest
  

}
