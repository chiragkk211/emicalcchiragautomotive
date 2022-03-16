function calculateEMI(){
    var DP = parseInt(document.getElementById("downpayment").value)
    var vehiclePrice= parseInt(document.getElementById("vehiclePrice").value)
    var tenureM = parseInt(document.getElementById("tenure").value)
    var ROI = 0.0999
    var HP = 500
    var stampCharges = 1500
    var processingFee = 1500
    var addOn = 0

    if(DP<27600){
        addOn=2000
    } else{
        addOn=0
    }
    var realVehiclePrice= vehiclePrice+HP+stampCharges+processingFee
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
