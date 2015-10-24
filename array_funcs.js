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

//*
//*returns a new array, reversing the order of the input array; non-mutating

function arrayReverse (array) {
    var arr_len = array.length, reversedArray = []; 
    
    var j = 0; 
    
    for (let i = arr_len-1; i > -1; i--) {
        reversedArray[j] = array[i];  
        j++; 
    }
    
    return reversedArray; 
                    
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

function arrayReduceRight (array, func, skipEmpty, initialVal) {
    var reversedArr = arrayReverse(array); 
    
    return arrayReduce(reversedArr, func, skipEmpty, initialVal); 
}


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
        

//TODO: refactor to allow for stop value 
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


//TODO: arrayDelete --should I delete by index or by value? 


//accepts 3 arguments; index is optional. If omitted, value will be concatenated to the end of source array, similar to Array.prototype.concat. Value can either be a single item, or in the form of an array. If an array is passed...

function arrayInsert (array, value, index) {
    var updatedArr = [], arr_len = array.length; 
    
    if (arguments.length < 3) {
        index = arr_len; 
        if (arguments.length < 2) {
            throw new Error('must specify a value to insert into array'); 
        }
    }
    
    if (index > array.length) {
        throw new Error('index value requested will create array with gaps'); 
    }
    
    var valueIsArray = Array.isArray(value) ? true : false; 
    
    if (index == 0) {
        updatedArr = valueIsArray ? [...value, ...array] : [value, ...array]; 
    } else if (index == arr_len) {
        updatedArr = valueIsArray ? [...array, ...value] : [...array, value]; 
    } else {        
        var slice1 = array.slice(0, index), slice2 = array.slice(index); 
        updatedArr = valueIsArray ? [...slice1, ...value, ...slice2] : [...slice1, value, ...slice2]; 
    } 
    
    return updatedArr; 
        
}


                        
