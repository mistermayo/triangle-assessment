var triangle = function(numbers) {
  var length1 = numbers[0];
  var length2 = numbers[1];
  var length3 = numbers[2];

  var triangle = [];
  // var equilateral = {
  //   length1: numbers[0], length2: numbers[0], length3: numbers[0]
  // }
  // var isosceles = {
  //   length1: [0], length2: [0], length3: [0]
  // }
  // var scalene = {
  //   length1: [0], length2: [0], length3: [0]
  // }

  if (length1 === length2 && length2 === length3) {
        //  triangle.push[("equilateral").toString();
        // //  return triangle.[("equilateral")];
          triangle = "equilateral"
debugger;
    } else if ((length1 === length2 && length2 !== length) ||
      (length1 === length3 && length2 !== length3) || (length3 === length2 && length2 !== length1)) {
        //  triangle.push("isosceles").toString();
          // return triangle.[("isosceles")];
          triangle = "isosceles"
    };
      return triangle;
};
