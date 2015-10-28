##function takes an array of objects as first argument, and a key + value, and returns an object with the key, value and count number of times the key/value pair appears 

#count(array, key, value); //{key: key, value: value, count: count}
#var g = [{title: 'john', age: 5}, {title: 'john', age: 7}, {title: 'bob', age: 5}, {title: 'mary', age: 5}]; 
#count(values, 'title', 'john') //{key: 'title', value: 'john', count: 2}


//break into two functions-- one to test is key/value exists in object 

function valueCount (arr, key, value) {
    var count = count || 0; 
    arr.forEach(function(item) {
        if (!!(item[key] === value)) { 
            count++; 
        }
    }); 
    return {key: key, value: value, count: count}; 
}
                
                
 
function collValueCount (coll, fn) {
    var keyList = keyList || [], countList = countList || []; 
    var keyCount = {}; 
    
    coll.forEach(function(item) {
        var key = fn(item); 
        if (!(typeof key === 'string')) {
            throw new Error('callback must return a string'); 
        }
        if (keyList.indexOf(key) == -1) {
            keyList.push(key); 
            countList.push(1); 
        } else {
            countList[keyList.indexOf(key)]++; 
        }            
    }); 
    
    keyList.forEach(function(name, index) {
        keyCount[name] = countList[index]; 
    }); 
    
    return keyCount; 
}
