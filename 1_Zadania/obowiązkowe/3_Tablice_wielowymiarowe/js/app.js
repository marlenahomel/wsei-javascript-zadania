
var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];


var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

// zad 0
// function checkArray(ddarray) {
   // var result = [];
    //for (int i = 0; i < ddarray.lengt; i++) {
//
 //       const isNotOdd = ddarray[i].filer(number => numer % 2 == 0);
  //      result.push(isOdd);
   // }


//};

//checkArray([
   // [11, 12],
   // [42, 2],
  //  [-4, -120],
  //  [0, 0],
  //  [1, 34],
////

//]);

// zadanie1
//console.log(task1Array[3][2]);
//console.log(task1Array[2].length);
//console.log(task1Array[4][2]);

// zad 2 
for (let i = 0; i < task2Array.length; i++) {
    console.log(task2Array[i]);
}
for (let i = 0; i < task2Array.length; i++) {
    console.log(task2Array[i].length);
}
for (let i = 0; i < task2Array.length; i++) {
    for (let j = 0; j < task2Array[i].length; j++) {
        console.log(task2Array[i][j]);
    }

}

// zad 3
function print2DArray(task2Array) {

    for (let i = 0; i < task2Array.length; i++) {
        for (let j = 0; j < task2Array[i].length; j++) {
            console.log(task2Array[i][j]);
        }

    }

}

print2DArray([[1,2],[3,4]]);


var task3Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

print2DArray(task3Array);

function create2DArray(row, columns) {
    var counter = 1;
    var array1 = [];

    for (let i = 0; i < rows; i++) {
        var array2 = [];
        for (let j = 0; j < columns; j++) {
            array2.push(counter);
            counter++;

        }
        array1.push(array2);
    }

    return array1;

}


create2DArray(4,4);