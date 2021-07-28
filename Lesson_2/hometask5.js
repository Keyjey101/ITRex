function findKayakAmount(n =[50, 74, 60, 82],k = 135) {
    let amountOfKayks = 0;
    let arrWeight = n.sort((a, b) => a - b);
    let i = 0;
    let j = arrWeight.length - 1;
    while (i <= j) {
        if (arrWeight[i] + arrWeight[j] <= k) {
            i++;
        }
        j--;
        amountOfKayks++;
    }
    return amountOfKayks;
}
console.log(findKayakAmount())
console.log(findKayakAmount([50, 120, 74, 60, 100, 82], 135))
 