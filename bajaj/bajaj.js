function calculateEMI(){

  var modelS = document.getElementById("model");
  var model = modelS.value;
  var DP = parseInt(document.getElementById("downpayment").value)
  var tenureM = parseInt(document.getElementById("tenure").value)
  var vehiclePrice=0
  var ins=2900

  if (tenureM<=12){
    ins=910
  }
  if (tenureM>=18 & tenureM<=24){
    ins=1800
  }
  if (tenureM>24 & tenureM<=36){
    ins=2900
  }
  if (model=="Magnus EX"){
    vehiclePrice=118260
  }
  if(model=="Zeal EX"){
    vehiclePrice=108319
  }
  
  margin=DP-3500
  LA=(vehiclePrice-margin)+ins
  var intrt=(11.5/12)/100

  
  intpm=LA*intrt
  installments=Math.round((LA+(intpm*tenureM))/tenureM)
  totVehPrice=(installments*tenureM)+DP
  totInterest=totVehPrice-vehiclePrice


  document.getElementById("vehprice").innerText= vehiclePrice
  document.getElementById("installments").innerText= installments
  document.getElementById("price").innerText= totVehPrice
  document.getElementById("interest").innerText= totInterest


}
