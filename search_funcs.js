//assumes value is an integer 
//function arraySearchValueSum (arr, value) {
//    #filter out duplicates and non-number values 
//    #sort into either [odds] or [evens] -> sort both arrays ascending 
//    #(value%2 == 0) 
//    #if false value is odd
//         #loop through odds array 
//         # value - oddVal = onEvens? if true return true else false 
//    #if true value is even 
//        #loop through odds array until element > 1/2(value) -- (value - oddVal)== onOdds? if true return true, else false  
//        #loop through evens array until element > 1/2(value) -- (value - oddVal)== onOdds? if true return true, else false  
//[1,3,5,91] [70,90,100]


//TODO: memoize sums and store in ledger?
//for use in closured versions. 
//I hate naming functions argh
function arraySearchIntegerSum (arr, value) {
    var numArray = [], oddsArray = [], evensArray = []; //cache array lengths
    var oLen, eLen; 
    
    if (typeof value !== 'number') {
        throw new Error('value must be a number!');
    }
    
    if (value%1 !== 0) {  
        throw new Error('value must be an integer!'); 
    }
    
    
    //?sort array first??
    arr.forEach(function(item) { 
        if (numArray.indexOf(item) == -1 && item <= value && item%1 == 0) {
            numArray.push(item);
            item%2 == 0 ? evensArray.push(item) : oddsArray.push(item); 
        }
    });
    
    oddsArray.sort(ascending); 
    evensArray.sort(ascending); 
    oLen = oddsArray.length; 
    eLen = evensArray.length; 
    
    console.log(oddsArray), console.log(evensArray);
    

    //refactor--write a general function 
    //odd number values
    if (value%2 == 1) {
        if (value > (oddsArray[oLen-1]+evensArray[eLen-1]) || value < (oddsArray[0]+evensArray[0])) {
            //console.log(value, oddsArray[length-1]+evensArray[length-1], oddsArray[0]+evensArray[0]); 
            return 'value greater or less than max possible sum';  
        }
        for (var i = 0; i < oddsArray.length; i++) {
            var testVal = oddsArray[i]; 
            if (evensArray.indexOf(value-testVal) !== -1) return testVal + '\+' + (value-testVal) + '=' + value;
        }
        
        return 'no two values found that add up to ' + value; 
    //even number values
    } else {
        if (value > (oddsArray[oLen-1]+oddsArray[oLen-2]) && value > (evensArray[eLen-1]+evensArray[eLen-2]) 
         || value < (oddsArray[0]+oddsArray[1]) && value < (evensArray[0]+evensArray[1])) {
            return 'value greater or less than max possible sum';  
        }
        for (var i = 0; i < oddsArray.length; i++) {
            var testVal = oddsArray[i]; 
            //should just break or return when 
            var testArray = oddsArray.filter(function(item, index) {
                return index !== i; 
            }); 
            if (testArray.indexOf(value-testVal) !== -1) return testVal + '\+' + (value-testVal) + '=' + value; 
        }
        
        for (var i = 0; i < evensArray.length; i++) {
            var testVal = evensArray[i]; 
            var testArray = evensArray.filter(function(item, index) {
                return index !== i;
            }); 
            if (testArray.indexOf(value-testVal) !== -1) return testVal + '\+' + (value-testVal) + '=' + value; 
        }
        return 'no two values found that add up to ' + value; 

    }   
    
    function ascending (a, b) { 
        return a-b; 
    } 

    
        
}
                  

//try to implmenet a binary search here for second part of algo 
//if (value%2 == 1) {
//    for (var i = 0; i < oddsArray.length; i++) {
//        var testVal = oddsArray[i]; 
//        if (testVal > value) {
//            break;
//        }
//        if (evensArray.indexOf(value-testVal) !== -1) return testVal + '\+' + (value-testVal) + '=' + value;
//    }
//        
//    return 'no two values found that add up to ' + value; 
//    //even number values
//}
                              