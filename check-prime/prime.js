document
.getElementById("myCheckbox")
.addEventListener("click", function (event) {
  event.preventDefault();
  var number = document.getElementById("fNumber").value;
  var str = document.getElementById("fNumber").value;
  if (isPrime(number)) {
    document.getElementById("result").value = "Number is prime";
  } else if (isEmpty(str)) {
    document.getElementById("result").value = "Enter a valid number.";

    //   console.log("Number is not a prime number");
  } else {
    document.getElementById("result").value = "Number is not prime";
  }

  // console.log(number);
  //   console.log("Number is prime");
});

function isPrime(num) {
for (var i = 2; i < num; i++) if (num % i === 0) return false;
return num > 1;
}
function isEmpty(str) {
return !str.trim().length;
}