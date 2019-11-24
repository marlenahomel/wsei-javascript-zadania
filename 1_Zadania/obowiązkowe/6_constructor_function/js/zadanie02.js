function Calculator() {
    this.history = [];


}

Calculator.prototype.add = function (num1, num2) {
    var result = num1 + num2;
    return result;
    this.history.push('added ${num1} to ${num2} got ${result}');
}

Calculator.prototype.multiply = function (num1, num2) {

    var result = num1 * num2;
    return result;
    this.history.push("multiplied" + num1 + "with" + num2 + "got" + result);

}

Calculator.prototype.subtract = function (num1, num2) {
    var result = num1 - num2;
    return result;
    this.history.push("subtracted" + num1 + "from" + num2 + "got" + result);
}

Calculator.prototype.divide = function (num1, num2) {
    var result = num1 / num2;
    return result;
    this.history.push("divided" + num1 + "by" + num2 + "got" + result);
}

Calculator.prototype.printOperations = function () {
    consoleTable(this.history);
}

Calculator.prototype.clearOperations = function () {

}
 
var Calculator1 = new Calculator();
Calculator1.add(1, 1);