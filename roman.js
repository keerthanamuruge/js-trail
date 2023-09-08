/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let roman = {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M'}
    let re = ''
    while(s>0){
        let result = s
        let output = ''
        let temp = Object.keys(roman)
        for (let i of temp){
            let r = s - i
            if (r < result && r>0){
                result = r
                output = roman[i]
            }
                
        }
        re = re + output
        s = result
    }
    return re
};
console.log(romanToInt(608))