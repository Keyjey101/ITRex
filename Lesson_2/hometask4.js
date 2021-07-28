const generateMagicSquare = require("generate-magic-square")

function genMagicSquare(n){
    if (n == 2) return 'Impossible' 
    return generateMagicSquare(n)
}
console.log(genMagicSquare(3))