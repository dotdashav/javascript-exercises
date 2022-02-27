function  repeatString (string, number) {
    let str = string
    let stradd = ''
    if (number < 0) {
        stradd = 'ERROR'
    } 
    else {
        for  (num = number ; num > 0 ; num-- ){
            stradd = stradd + str 
        }    
    }
    return stradd
};

// Do not edit below this line
module.exports = repeatString;
