/*

    Reverse digits of an integer.

    Example1: x = 123, return 321
    Example2: x = -123, return -321

*/
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var sign = (x < 0) ? -1: 1;
    var reverse = 0;
    x = Math.abs(x);
    while (x > 0) {
        var num = x % 10;
        
        reverse = reverse * 10;
        reverse = reverse + num;
        x = x - num;
        x = x / 10;
    }
    // check overflow
    if(reverse>2147483647||reverse<-2147483648) return 0;
    
    return reverse * sign;
};
