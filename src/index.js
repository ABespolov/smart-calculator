class SmartCalculator {
  constructor(initialValue) {
    this.str = initialValue;
    this.toString = function () {
     // console.log(this.str);
      return eval(this.str);
    }
  }

  add(number) {
    this.str += ' + ' + number;
    return this;
  }
  
  subtract(number) {
    this.str += ' - ' + number;
    return this;
  }

  multiply(number) {
    this.str += ' * ' + number;
    return this;
  }

  devide(number) {
    this.str += ' / ' + number;
    return this;
  }

  pow(number) {
    console.log(this.str);
    var result = eval(this.str);
    this.str = Math.pow(result, number);
    return this;
  }
}

module.exports = SmartCalculator;
