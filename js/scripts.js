var triangle = function(length1, length2, length3) {
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


$(document).ready(function() {
  $("form#triangle").submit(function(event) {

    var length1 = parseInt($("input#length1").val());
    var length2 = parseInt($("input#length2").val());
    var length3 = parseInt($("input#length3").val());
    
    var result = triangle(length1, length2, length3);

    $(".result").text(result);
    event.preventDefault();
  });
});
