function calculateEMI(){
    var DP = parseInt(document.getElementById("downpayment").value)
    var vehiclePrice= 67990
    var tenureM = parseInt(document.getElementById("tenure").value)
  

 

    var ROI = 0.13
   
    var processingFee = 1180
    var interest = 600
    var realVehiclePrice= vehiclePrice+processingFee+interest
    var loanAMT = realVehiclePrice-DP
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