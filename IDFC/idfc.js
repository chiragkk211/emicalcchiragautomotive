function calculateEMI(){
    var DP = parseInt(document.getElementById("downpayment").value)
    var vehiclePrice= parseInt(document.getElementById("vehiclePrice").value)
    var tenureM = parseInt(document.getElementById("tenure").value)
  
  
    
    var docuCharges = 4150
    var loanAmt = vehiclePrice+docuCharges-DP
    var extraPF = 0.02*loanAmt
    loanAmt = loanAmt+extraPF
    var realVehiclePrice = loanAmt+DP
    var noHPFund = 0.7*realVehiclePrice
    var interestRtPM = 0
  
    if(loanAmt>=noHPFund){
      interestRtPM = 0.00895833
    } else {
      interestRtPM = 0.006475
    
    }
  
    console.log(interestRtPM)
  
    interestPM = loanAmt*interestRtPM
  
    var loint = (interestPM*tenureM)+loanAmt
  
    var installments = Math.round(((interestPM*tenureM)+loanAmt)/tenureM)
  
    var totVehPrice = Math.round(loint+DP)
  
    var totInterest = Math.round(interestPM*tenureM)
  
    document.getElementById("installments").innerText= installments
    document.getElementById("price").innerText= totVehPrice
    document.getElementById("interest").innerText= totInterest
  

}
