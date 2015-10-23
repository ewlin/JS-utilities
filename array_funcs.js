function arrayFilter (array, predicate) {
    var cb = predicate, arr_len = array.length, current_index = 0; 
    var filteredArray = []; 
    var current_item; 
    
    while (current_index < arr_len) {
        current_item = array[current_index]; 
        if (cb.call(array, current_item)) {
            filteredArray.push(current_item); 
        }
        current_index++; 
    }
    
    return filteredArray; 
}


function arrayReduce (array, func, skipEmpty, initialVal) {
    var cb = func, current_index = 0;  
    var current_item, current_value, arr_len; 
    
    if (skipEmpty) {
        array = arrayFilter(array, function(item) { return !(item == undefined) }); 
    }
    
    arr_len = array.length; 
    
    while (current_index < arr_len) {
        current_item = array[current_index]; 
        if (current_index == 0) {
            current_value = initialVal ? cb.apply(array, [initialVal, current_item]) : cb.apply(array, [current_item, array[++current_index]]); 
        } else {
            current_value = cb.apply(array, [current_value, current_item]); 
        }
        current_index++; 
    }
    
    return current_value; 
} 


//function arrayReduceRight (array, func, skipEmpty, initialVal) {
//    var reversedArr = array.reverse(); 
//    
//    return arrayReduce(reversedArr, func, skipEmpty, initialVal); 
//}


function arrayMap (array, iterFunc) {
    'use strict'; 
    var cb = iterFunc, arr_len = array.length, current_index = 0; 
    var mappedArray = []; 
    //var current_item; 
    while (current_index < arr_len) {
        let current_item = array[current_index]; 
        mappedArray[current_index] = cb.call(array, current_item); 
        current_index++; 
    }
    
    return mappedArray; 
}
        
                        
function arrayRange (length, startVal = 0, step = 1) {
    var rangeArray = []; 
    var currentVal = startVal; 
    
    if (!length) {
        throw new Error('range length cannot be omitted!');
    }
    
    for (let i=0; i < length; i++) {
        rangeArray.push(currentVal); 
        currentVal += step; 
    }
    
    return rangeArray; 
}
        

        
    
    
    
    
    
                        
