/*
1 - Pojawia siê komunikat o problemie z wyœietleniem klasy "menu", poniewa¿ skrypt realizuje siê przed wygenerowaniem dokumentu html
*/
document.addEventListener("DOMContentLoaded", function () {
    var menu = document.querySelector("#menu");
    var paragraf = document.querySelector("p");

    menu.classList.add("menu");
    paragraf.innerHTML = "A to jest paragraf w zadaniu 1";
})
/*
2 - skrypt ponownie siê zrealizowa³ bez problemu
3 - brak zmian
Dzieje siê tak, poniewa¿ funcja DOMContentLoaded, zostje wywo³ana dopiero po za³adowaniu siê 
*/