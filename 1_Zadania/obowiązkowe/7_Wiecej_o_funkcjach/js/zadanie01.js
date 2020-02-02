/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//zdefiniowanie funkcji sortArra()
function sortArray() {

    //zdefiniowanie tablicy points
    var points = [41, 3, 6, 1, 114, 54, 64];

    //metoda sortuj¹ca porównuje ze sob¹ dwa elementy tablicy - wybrany i nastêpny
    points.sort(function (a, b) {
        //komenda zwraca ró¿nicê miêdzy wybranym elementem i nastêpnym, wed³ug której algorytm decyduje, który element jest wiêkszy
        return a - b;
    });

    //funkcja zwraca posortowan¹ tablicê
    return points;
}

//wywo³anie funkcji sortuj¹cej
sortArray();