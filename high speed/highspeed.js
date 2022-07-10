function calculateEMI(){
  var DP = parseInt(document.getElementById("downpayment").value)
  var vehiclePrice= parseInt(document.getElementById("vehiclePrice").value)
  var tenureM = parseInt(document.getElementById("tenure").value)




  var ROI = 0.1075
  var ins = 2000
  var HP = 500
  var stampCharges = 2000
  var processingFee = 850
  var realVehiclePrice= vehiclePrice+stampCharges+processingFee+HP
  var loanAMT = realVehiclePrice-DP
  var extraPF = 0.0236*loanAMT
  loanAMT = loanAMT+extraPF+ins
  var tenureY = tenureM/12

  



  var installments = Math.round((loanAMT+(loanAMT*tenureY*ROI))/tenureM)
  var interestVehiclePrice = Math.round((installments*tenureM)+DP)
  


  document.getElementById("installments").innerText= installments
  document.getElementById("price").innerText= interestVehiclePrice



  console.log(DP)
  console.log(vehiclePrice)
  console.log(tenureM)
  console.log(ROI)
  console.log(HP)
  console.log(stampCharges)
  console.log(processingFee)
  console.log(realVehiclePrice)
  console.log(loanAMT)
  console.log(tenureY)
  console.log(installments)
  console.log(interestVehiclePrice)
}