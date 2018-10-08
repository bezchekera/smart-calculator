class SmartCalculator { 
    constructor(initialValue) { 
    this.value=0;
    this.num1=initialValue; 
    this.num2=initialValue; 
    this.p=0;
    this.step;
    this.ost;
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
      this.zna[0]=this.num2;
      this.p += 1;
      this.zna[this.p]=number;
      if  (this.p=1) {
    this.ost=Math.floor(this.num1/this.num2); 
    this.step=this.num2;
     }

     for (let i=this.p; i>=1; i--) 
        {
         this.zna[i-1] = Math.pow( this.zna[i-1], this.zna[i]);
        }   
     


    this.num1 = this.ost* this.zna[0];
  
    
    return this; 
    // your implementation 
    } 
    
    toString() {
        return this.value+this.num1;
    }
    } 
    
    module.exports = SmartCalculator;