/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//zdefiniowanie funkcji sortArra()
function sortArray() {

    //zdefiniowanie tablicy points
    var points = [41, 3, 6, 1, 114, 54, 64];

    //metoda sortuj�ca por�wnuje ze sob� dwa elementy tablicy - wybrany i nast�pny
    points.sort(function (a, b) {
        //komenda zwraca r�nic� mi�dzy wybranym elementem i nast�pnym, wed�ug kt�rej algorytm decyduje, kt�ry element jest wi�kszy
        return a - b;
    });

    //funkcja zwraca posortowan� tablic�
    return points;
}

//wywo�anie funkcji sortuj�cej
sortArray();