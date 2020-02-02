/*
1 - Pojawia si� komunikat o problemie z wy�ietleniem klasy "menu", poniewa� skrypt realizuje si� przed wygenerowaniem dokumentu html
*/
document.addEventListener("DOMContentLoaded", function () {
    var menu = document.querySelector("#menu");
    var paragraf = document.querySelector("p");

    menu.classList.add("menu");
    paragraf.innerHTML = "A to jest paragraf w zadaniu 1";
})
/*
2 - skrypt ponownie si� zrealizowa� bez problemu
3 - brak zmian
Dzieje si� tak, poniewa� funcja DOMContentLoaded, zostje wywo�ana dopiero po za�adowaniu si� 
*/