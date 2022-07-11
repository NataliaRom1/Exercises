function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
      return [];
    
    var positive = 0;
    var negative = 0;
    
    for (var i=0; i<input.length; ++i)
    {
      if (input[i] > 0)
        ++positive;
      else
        negative += input[i];
    }
    
    return [positive, negative];
}

input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
// [10, -65]


// input =  [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
// [8, -50]
countPositivesSumNegatives(input)