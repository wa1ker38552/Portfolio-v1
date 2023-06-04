window.onload = function() {
  var age = document.getElementById("age")
  var yrs = document.getElementById("years")

  age.innerHTML = new Date().getFullYear()-2007-1
  yrs.innerHTML = new Date().getFullYear()-2020
}
