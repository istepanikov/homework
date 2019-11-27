let a = 10;



nextPrime:
for (let b = 2; b <= a; b++) {

    for (let x = 2; x < b; x++) {
        if (i % x == 0) continue nextPrime;
    }

    alert(b);
}