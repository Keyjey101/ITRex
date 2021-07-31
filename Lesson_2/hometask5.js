function findKayakAmount(groupArray,maxLoad) {
    let amountOfKayks = 0;
    let arrWeight = groupArray.sort((a, b) => a - b);
    let i = 0;
    let j = arrWeight.length - 1;
    while (i <= j) {
        if (arrWeight[i] + arrWeight[j] <= maxLoad) {
            i++;
        }
        j--;
        amountOfKayks++;
    }
    return amountOfKayks;
}

console.log(findKayakAmount([50, 120, 74, 60, 100, 82], 135))
 