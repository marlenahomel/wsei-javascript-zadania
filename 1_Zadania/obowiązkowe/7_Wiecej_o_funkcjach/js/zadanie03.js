Hello();

function Hello() {
    console.log("Cze��");
}
//nie zale�nie od miejsca wywo�ania funkcja Hello() si� realizuje,kompilator po rozpoznaniu nazwy funkcji szuka jej w kodzie, kod jest czytelny "inteligentnie"
hello();

var hello = function () {
    console.log('Witaj');
}

// wyra�enie funkcyjne jest mo�liwe do wywo�ania dopiero po jej zadeklarowaniu, poniewa� system traktuje je jako zmienn�,
//kt�re s� ulokowane w pami�ci przy zdefiniowaniu, a nie jak funkcje przy wywo�ywaniu