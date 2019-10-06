function distFromAvarage() {
    let sum = 0;

    for (i = 0; i < tab.length; i++) {
        sum = sum + tab[i];
    }

    sum = sum / tab.length;

    let newTab = [];

    tab.forEach(el => {
        newTab.push(el = el - sum);

    })
    return (newTab);
    
}

let tab = [1, 2, 3, 4, 5, 6, 7]
distFromAvarage(tab);