Hello();

function Hello() {
    console.log("Czeœæ");
}
//nie zale¿nie od miejsca wywo³ania funkcja Hello() siê realizuje,kompilator po rozpoznaniu nazwy funkcji szuka jej w kodzie, kod jest czytelny "inteligentnie"
hello();

var hello = function () {
    console.log('Witaj');
}

// wyra¿enie funkcyjne jest mo¿liwe do wywo³ania dopiero po jej zadeklarowaniu, poniewa¿ system traktuje je jako zmienn¹,
//które s¹ ulokowane w pamiêci przy zdefiniowaniu, a nie jak funkcje przy wywo³ywaniu