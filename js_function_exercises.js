function arrayReduce (array, func, initialVal) {
    var cb = func, arr_len = array.length, current_index = 0; 
    var current_item, current_value; 
    
    while (current_index < arr_len) {
        current_item = array[current_index]; 
        if (current_index == 0) {
            current_value = initialVal ? cb.apply(array, [initialVal, current_item]) : cb.apply(array, [null, current_item])
        } else {
            current_value = cb.apply(array, [current_value, current_item]); 
        }
        current_index++; 
    }
    
    return current_value; 
} 

