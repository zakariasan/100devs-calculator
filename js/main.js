function Calculator(a, b) { 
    this.a = a;
    this.b = b;

    this.clear =function ()  {

        this.curr = '';
        this.prev = '';
        this.op = undefined;
    };
    this.calc = () => {
        let res;
        
        if(!this.prev || !this.curr) return;
        const Avalue = parseFloat(this.prev);
        const Bvalue = parseFloat(this.curr);
        let obj = {
            a :Avalue,
            b : Bvalue,
            open :{
                "+" : ()=> a+b,
                "-" : ()=> a-b,
                "*" : ()=> a*b,
                "/" : ()=> a/b
            }
        }
       switch(this.op) {

           case '+' : res = Avalue + Bvalue;
               break;
           case '' : res = Avalue - Bvalue;
               break;
           case '*' : res = Avalue * Bvalue;
               break;
           case '/' : res = Avalue / Bvalue;
               break;
           default :return
       }
        this.curr = res;
        this.op = undefined;
        this.prev = ''
    }
    this.clear();
    this.appendNbr = (nbr) => {
        if(nbr === '.' && this.curr.includes('.')) return ;
        this.curr =this.curr.toString() +   nbr.toString();

    };
this.operator = (op) => {

        if(op ==='') return ;
        if(this.prev !== '') this.calc();
        this.op = op;
        this.prev = this.curr;
        this.curr = ''
    };
    this.updateDisplay = ()=>{
        this.b.innerText = this.curr;

    }
}



console.log("hello zakwewe ");

const buttons = document.querySelectorAll('[data-nbr]');
const op = document.querySelectorAll('[data-op]');
const output = document.querySelector('.screen');
const bin = '';
const eqBtn = document.querySelector('[data-eq]');
const calculator = new Calculator(bin, output);
const clearAll = document.querySelector('[data-clear]');
buttons.forEach(b => b.addEventListener('click', display))
op.forEach(o => o.addEventListener('click', operation))
eqBtn.addEventListener('click', (b)=>{
    calculator.calc();
    calculator.updateDisplay();
});
clearAll.addEventListener('click', (b)=>{
    calculator.clear();
    calculator.updateDisplay();
});
//get number a
// get operator
// get numberb 
// if = get output
// a= ou
function display (){
    calculator.appendNbr(this.innerText);
    calculator.updateDisplay()
}
function operation (){
    calculator.operator(this.innerText);
    calculator.updateDisplay()
}
let calc  =  new Calculator(10, 0);

