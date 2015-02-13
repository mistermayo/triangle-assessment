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

$(document).ready(function() {

  $("form#triangle").submit(function(event) {

    $("#triangle-result").text("");
    $("#result").hide();
    $("#error").hide();

    var numbers = parseInt($("input#numbers").val());
    var result = triangle(result)

    $("#triangle-result").text(triangle);

    if (isNaN(numbers) || numbers < 0 ) {
      $("#error").show();
    } else {
      $("#result").show();
    };

    event.preventDefault();
  });
});
