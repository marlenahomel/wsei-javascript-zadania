/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


//zdefiniowanie funkcji jeden()
function jeden() {

    //zdefiniowanie zmienna1 wewnatrz funkcji jeden().
    var zmienna1 = 1;

    //zdefiniowanie funkcji dwa()
    function dwa() {

        //wywo�anie zdefiniowanej wcze�niej zmienna1 
        console.log(zmienna1);

        //zdefiniowanie zmienna2 wewn�trz funkcji dwa()
        var zmienna2 = 3;
    }

    //wywo�anie funkcji dwa()
    dwa();

    //pr�ba wywo�ania zmienna2 (funkcja jeden() nie ma dost�pu do zmiennej w funkcji zdefiniowanej wewn�trz)
    console.log(zmienna2)
}

//wywo�anie funkcji jeden()
jeden()