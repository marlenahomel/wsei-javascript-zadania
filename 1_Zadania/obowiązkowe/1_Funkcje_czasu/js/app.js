fuction countHello(number){

    var number2 = 1
    if (number > number2) {
        setInterval(function () {
            console.log("Hello" + number);
            number--;
        }, 1000)
    }
    else
        clearInterval;



}
countHello(10);