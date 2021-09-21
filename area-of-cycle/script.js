
document.getElementById("btn-button").addEventListener("click", function (event)
 {
  event.preventDefault();
  let number = document.getElementById("radius").value;

  if (isEmpty(number) > 0) {
    document.getElementById("result").value;

  } else if (document.getElementById("area").checked) {
    let calc = new circle(number);
    document.getElementById("result").value = calc.area();
  }else {
    let calc = new circle(number);

    document.getElementById("result").value = calc.circumference();
  }
  
  console.log(number);
});

function circle(radius) {
    this.radius = radius;
    // area method
    this.area = function () {
    area = Math.abs(Math.PI * this.radius * this.radius).toFixed(2);
    return `The area of a circle with radius ${this.radius} is:  ${area}`;
    };
    // circumference method
    this.circumference = function () {
    circumference = Math.abs(2 * Math.PI * this.radius).toFixed(2);
    return `The circumference of a circle with radius ${this.radius} is:  ${circumference}`;
    }
}
//Trim white spaces
function isEmpty(str) {
    return !str.trim().length;
}