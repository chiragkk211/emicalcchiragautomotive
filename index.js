
function calculateEMI(){

    var modelS = document.getElementById("model");
    var model = modelS.value;
    var DP = parseInt(document.getElementById("downpayment").value)
    var tenureM = parseInt(document.getElementById("tenure").value)
    var vehiclePrice=0

    if (model=="Magnus NEO"){
      vehiclePrice=99250
    }
    if(model=="Nexus EX"){
      vehiclePrice=125400
    }
    if(model=="Primus"){
        vehiclePrice=123200
      }

    if (model=="Nexus ST"){
        vehiclePrice=130400
      }  
    
    vehiclePrice=vehiclePrice
    
    LA=(vehiclePrice-DP+3500)/0.9882
    var intrt=(11.49/12)/100
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
