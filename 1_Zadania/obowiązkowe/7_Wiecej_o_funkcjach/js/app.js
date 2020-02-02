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

        //wywo³anie zdefiniowanej wczeœniej zmienna1 
        console.log(zmienna1);

        //zdefiniowanie zmienna2 wewn¹trz funkcji dwa()
        var zmienna2 = 3;
    }

    //wywo³anie funkcji dwa()
    dwa();

    //próba wywo³ania zmienna2 (funkcja jeden() nie ma dostêpu do zmiennej w funkcji zdefiniowanej wewn¹trz)
    console.log(zmienna2)
}

//wywo³anie funkcji jeden()
jeden()