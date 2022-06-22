function calculateEMI(){
    var DP = parseInt(document.getElementById("downpayment").value)
    var vehiclePrice= parseInt(document.getElementById("vehiclePrice").value)
    var tenureM = parseInt(document.getElementById("tenure").value)
  //  var ROI = 0.0999
    var HP = 500
    var stampCharges = 1500
    var processingFee = 2200
    var insurance = 2700
    var realVehiclePrice= vehiclePrice+HP+stampCharges+processingFee+insurance
    var requiredForNoHP = realVehiclePrice*0.3


    if(DP>=requiredForNoHP && (tenureM==12 || tenureM==18 || tenureM==24)){
         ROI=0.0825
         HP=0
       // stampCharges = 00
        processingFee=4200
        insurance=1500
        realVehiclePrice= vehiclePrice+HP+stampCharges+processingFee
        var loanAMT = realVehiclePrice-DP
          
        var tenureY = tenureM/12
        var installments = Math.round((loanAMT+(loanAMT*tenureY*ROI))/tenureM)
        var interestVehiclePrice = Math.round((installments*tenureM)+DP)
   
        var interest = interestVehiclePrice-vehiclePrice

        document.getElementById("installments").innerText= installments
        document.getElementById("price").innerText= interestVehiclePrice
    
        document.getElementById("interest").innerText= interest
    }  else{
          ROI=0.0999
          HP=500
          processingFee=3700
          insurance=2700
          realVehiclePrice= vehiclePrice+HP+processingFee
        var loanAMT = realVehiclePrice-DP
          loanAMT=loanAMT+insurance
        var tenureY = tenureM/12
        var installments = Math.round((loanAMT+(loanAMT*tenureY*ROI))/tenureM)
        var interestVehiclePrice = Math.round((installments*tenureM)+DP)
   
        var interest = interestVehiclePrice-vehiclePrice

        document.getElementById("installments").innerText= installments
        document.getElementById("price").innerText= interestVehiclePrice
    
        document.getElementById("interest").innerText= interest
    }
    
    
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
    console.log(requiredForNoHP)
}