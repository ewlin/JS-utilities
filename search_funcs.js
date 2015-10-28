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

//I hate naming functions argh
function arraySearchIntegerSum (arr, value) {
    var numArray = [], oddsArray = [], evensArray = [];
    
    if (typeof value !== 'number') {
        throw new Error('value must be a number!');
    }
    
    if (value%1 !== 0) {  
        throw new Error('value must be an integer!'); 
    }
    
    
    //?sort array first??
    arr.forEach(function(item) { 
        if (typeof item == 'number' && numArray.indexOf(item) == -1 && item%1 == 0) {
            numArray.push(item);
            item%2 == 0 ? evensArray.push(item) : oddsArray.push(item); 
        }
    });
    
    oddsArray.sort(function(a,b) { return a-b }); 
    evensArray.sort(function(a,b) { return a-b }); 
    
    console.log(oddsArray), console.log(evensArray);
    
    //odd number values
    if (value%2 == 1) {
        for (var i = 0; i < oddsArray.length; i++) {
            var testVal = oddsArray[i]; 
            if (evensArray.indexOf(value-testVal) !== -1) return testVal + '\+' + (value-testVal) + '=' + value;
            if (testVal > value) break; 
        }
        
        return false; 
    //even number values
    } else {
        for (var i = 0; i < oddsArray.length; i++) {
            var testVal = oddsArray[i]; 
            //should just break or return when 
            var testArray = oddsArray.filter(function(item, index) {
                return index !== i && item <= value-testVal; 
            }); 
            if (testArray.indexOf(value-testVal) !== -1) return testVal + '\+' + (value-testVal) + '=' + value; 
        }
        
        for (var i = 0; i < evensArray.length; i++) {
            var testVal = evensArray[i]; 
            var testArray = evensArray.filter(function(item, index) {
                return index !== i && item <= value-testVal;
            }); 
            if (testArray.indexOf(value-testVal) !== -1) return testVal + '\+' + (value-testVal) + '=' + value; 
        }
        return false; 
        
    }   
        
}
                              
                              