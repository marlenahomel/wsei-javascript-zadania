document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania
     */
    var ex5 = document.querySelectorAll(".ex5 li");
    for (var i = 0; i < ex5.length; i++) {
        if (i === 0 || i % 2 === 0) {
            ex5[i].style.backgroundColor = "green";

        }
        if (i % 5 === 0) {
            ex5[i].classList.add("big")
        }

        if (i % 3 === 0) {
            ex5[i].style.textDecoration = "underline";

        }

    }

    var myName = document.getElementById("name");
  var  fav_color = document.getElementById("fav_color");
  var fav_meal = document.getElementById("fav_meal");

    myName.innerHTML = "Marlena";
    fav_color.innerHTML = "green";
    fav_meal.innerHTML = "pizza";
});