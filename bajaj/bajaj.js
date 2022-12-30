function calculateEMI(){
  var DP = parseInt(document.getElementById("downpayment").value)
  var vehiclePrice= parseInt(document.getElementById("vehiclePrice").value)
  var tenureM = parseInt(document.getElementById("tenure").value)


  
  var docuCharges = 4150
  var loanAmt = vehiclePrice+docuCharges-DP
  var interestRtPM = 0.008958333

 

  console.log(interestRtPM)

  interestPM = loanAmt*interestRtPM

  var loint = (interestPM*tenureM)+loanAmt

  var installments = Math.round(((interestPM*tenureM)+loanAmt)/tenureM)

  var totVehPrice = Math.round(loint+DP)

  var totInterest = Math.round(interestPM*tenureM)

  document.getElementById("installments").innerText= installments
  document.getElementById("price").innerText= totVehPrice
  document.getElementById("interest").innerText= totInterest

 console.log(DP)
 console.log(vehiclePrice)
 console.log(tenureM)
 console.log(docuCharges)
 console.log(loanAmt)
 console.log(loint)
 console.log(interestPM)
  

}