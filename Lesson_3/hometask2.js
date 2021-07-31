class Calculator {
    constructor(input1, input2) {
      this.input1 = input1;
      this.input2 = input2;
    }
    add() {
      return this.input1 + this.input2;
    }
    subtract() {
      return this.input1 - this.input2;
    }
    multiply() {
      return this.input1 * this.input2;
    }
    divide() {
      return this.input1 / this.input2;
    }
  }
  
  class Converter {
    constructor(number) {
      this.number = number;      
      this.romanKeys = [
        '',
        'C',
        'CC',
        'CCC',
        'CD',
        'D',
        'DC',
        'DCC',
        'DCCC',
        'CM',
        '',
        'X',
        'XX',
        'XXX',
        'XL',
        'L',
        'LX',
        'LXX',
        'LXXX',
        'XC',
        '',
        'I',
        'II',
        'III',
        'IV',
        'V',
        'VI',
        'VII',
        'VIII',
        'IX',
      ];
      this.morseKeys = [
        '-----',
        '.----',
        '..---',
        '...--',
        '....-',
        '.....',
        '-....',
        '--...',
        '---..',
        '----.',
      ];
    }
  
    convertToRomanNumbers() {
      if (isNaN(this.number)) return NaN;
      if (this.number === 0 || this.number < 0) {
        return 'There are no negative Roman Numerals, nor is there a Roman Numeral for zero.';
      }
      if (this.number > 3999) {
        return 'The biggest number that can be formed in Roman Numerals is 3,999';
      }
  
      let digits = String(+this.number).split('');
      let roman = '';
      let i = 3;
  
      while (i--) roman = (this.romanKeys[+digits.pop() + i * 10] || '') + roman;
      return Array(+digits.join('') + 1).join('M') + roman;
    }

    convertToMorseCode() {
      if (isNaN(this.number)) return NaN;
      let result = this.number.toString();
      if (this.number < 0) {
        result = '_...._' + result.substring(1);
      }
      return result.replace(/\d/g, (symbol) => this.morseKeys[symbol]);
    }
  }
  
  let operation = new Calculator(26, 134);
  
  let result = operation.multiply();
  
  let converter = new Converter(result);

  console.log(converter.convertToRomanNumbers());
  console.log(converter.convertToMorseCode());