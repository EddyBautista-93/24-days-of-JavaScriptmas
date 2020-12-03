function depositProfit(deposit, rate, threshold) {

    // rate is %, so rate/100  * deposit + deposit per year
    var years = 0;
    var total = deposit;

    
    while (total < threshold){
        years++;
        total += total*rate/100;

        console.log(total)
    }
    
    return years;
}
const deposit = 100;
        const rate = 20;
        const threshold = 170;
        
        depositProfit(deposit, rate, threshold)