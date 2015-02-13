var triangle = function(numbers) {
  var length1 = numbers[0];
  var length2 = numbers[1];
  var length3 = numbers[2];
  var triangle = [];

    if (length1 === length2 && length2 === length3) {

          triangle = "equilateral"

    } else if ((length1 === length2 && length2 !== length3) ||
      (length1 === length3 && length2 !== length3) || (length3 === length2 && length2 !== length1)) {

          triangle = "isosceles"

    } else if ((length1 != length2 && length2 !== length3 && length1 != length3)) {

          triangle = "scalene"
    };
    return triangle;
};
