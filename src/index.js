// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var result = {};
    var halfDollars = 50;
    var quarters = 25;
    var dimes = 10;
    var nickels = 5;
    var pennies = 1;
    
    var halfDollarsCount = 0;
    var quartersCount = 0;
    var dimesCount = 0;
    var nickelsCount = 0;
    var penniesCount = 0;

    if (currency <= 0) {
        return result;
    }
    if (currency > 10000) {
        result.error = "You are rich, my friend! We don't have so much coins for exchange";
        return result;
    }
    while (currency >= halfDollars) {
        currency = currency - halfDollars;
        halfDollarsCount++;
        result["H"] = halfDollarsCount;
    }
    while (currency >= quarters) {
        currency = currency - quarters;
        quartersCount++;
        result["Q"] = quartersCount;
    }
    while (currency >= dimes) {
        currency = currency - dimes;
        dimesCount++;
        result["D"] = dimesCount;
    }
    while (currency >= nickels) {
        currency = currency - nickels;
        nickelsCount++;
        result["N"] = nickelsCount;
    }
    while (currency >= pennies) {
        currency = currency - pennies;
        penniesCount++;
        result["P"] = penniesCount;
    }
    return result;
}