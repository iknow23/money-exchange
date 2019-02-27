// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var result = {};
    if (currency <= 0) {
        return result;
    }
    if (currency > 10000) {
        result.error = "You are rich, my friend! We don't have so much coins for exchange";
        return result;
    }
}