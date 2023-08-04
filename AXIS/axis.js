function calculateEMI(){

  var modelS = document.getElementById("model");
  var model = modelS.value;
  var DP = parseInt(document.getElementById("downpayment").value)
  var tenureM = parseInt(document.getElementById("tenure").value)
  var vehiclePrice=0

  if (model=="Magnus EX"){
    vehiclePrice=118260
  }
  if(model=="Zeal EX"){
    vehiclePrice=108319
  }
  
  margin=DP-3000
  LA=(vehiclePrice-margin)+2600
  var intrt=(10.02/12)/100

  
  intpm=LA*intrt
  installments=Math.round((LA+(intpm*tenureM))/tenureM)
  totVehPrice=(installments*tenureM)+DP
  totInterest=totVehPrice-vehiclePrice


  document.getElementById("vehprice").innerText= vehiclePrice
  document.getElementById("installments").innerText= installments
  document.getElementById("price").innerText= totVehPrice
  document.getElementById("interest").innerText= totInterest


}