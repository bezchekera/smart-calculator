class SmartCalculator { 
    constructor(initialValue) { 
    this.value=0;
    this.num1=initialValue; 
    this.num2=initialValue; 
    this.p=0;
    this.step;
    this.osnov;
    this.zna=[];
    } 
    
    add(number) { 
    this.value += this.num1; 
    this.num1 = number; 
    this.num2 = number; 
    this.p=0;
    //console.log(this.value+this.num1);
    //return this.value+this.num1; 
    return this; 
    
    } 
    
    subtract(number) { 
    this.value += this.num1; 
    this.num1 = number*(-1); 
    this.num2 = number; 
    this.p=0;
    //return this.value+this.num1; 
    //console.log(this.value+this.num1);
    return this; 
    
    } 
    
    multiply(number) { 
    this.num1 = this.num1*number; 
    this.num2 = number; 
    this.p=0;
    //console.log(this.value+this.num1);
    return this; 
     //return this.value+this.num1; 
  
    } 
    
    devide(number) { 
   this.num1 = Math.floor(this.num1/number);
    //if (this.num1>0) { this.num1 = Math.ceil(this.num1/number);} 
    this.num2 = number; 
    this.p=0;
    //console.log(this.value+this.num1);
    return this; 
    
     //return this.value+this.num1; 
   
    } 
    
    pow(number) { 
   //     if  (this.p=0) {
    this.num1 = Math.floor(this.num1/this.num2)*Math.pow( this.num2, number);
    //this.step=this.num2; 
    //this.osnov=Math.floor(this.num1/this.num2)}
   
   // this.p= this.p+1;
    
    return this; 
    // your implementation 
    } 
    
    toString() {
        return this.value+this.num1;
    }
    } 
    
    module.exports = SmartCalculator;