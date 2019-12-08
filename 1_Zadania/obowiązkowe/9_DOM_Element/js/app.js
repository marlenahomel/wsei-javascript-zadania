document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;
    for (var i = 0; i < childElements.length; i++){
        console.log(childElements[i].tagName, childElements[i].classList);
    }
        function getClassInfo(element) {
            let arr = [];
            for (var i = 0; i < element.classList.length; i++) {
                arr.push(element.classList[i]);
            
            }
            console.log(arr);
            return arr;
        }
     getClassInfo(banner)

});

    /*
    Poniżej napisz kod rozwiązujący zadania
    
    function getDatasInfo(elements) {
        var newArray = [];

        for(int i = 0; i < elements.length; i++){
    newArray.push(elements[i].getAtribute('data-color'));
}
console.log(newArray);
return newArray;

    };

       function getTags(elements) {
            let arr1 = [];
            for (let i = 0; elements.length; i++) {
                arr1.push(elements[i].tagName);

            }
            return arr1;

        };

        getTags(childElements);
     */


