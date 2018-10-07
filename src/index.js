class SmartCalculator {
  constructor(initialValue) {
  this.value=0;// your implementation
  this.num1=initialValue;
  this.num2=initialValue;

  }

  add(number) {
    this.value += this.num1;
    this.num1 = number;
    this.num2 = number;
    return this.value+this.num1;
   //return this;
    // your implementation
  }
  
  subtract(number) {
    this.value += this.num1;
    this.num1 = number*(-1);
    this.num2 = number;
    //return this.value+this.num1;
    return this;
    // your implementation
  }

  multiply(number) {
    this.num1 = this.num1*number;
    this.num2 = number;
    return this;
    //return this.value+this.num1;
    // your implementation
  }

  devide(number) {
    if (this.num1>0) {    this.num1 = Math.floor(this.num1/number);}
    if (this.num1>0) {    this.num1 = Math.ceil(this.num1/number);}
    this.num2 = number;
    return this;
  //return this.value+this.num1;
    // your implementation
  }

  pow(number) {
    this.num1 = Math.floor(this.num1/this.num2)*Math.pow( this.num2, number);
    //return this.value+this.num1;
    return this;
    // your implementation
  }
 
  
}

module.exports = SmartCalculator;
