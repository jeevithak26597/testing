import { CalculatorComponent } from './calculator.component';
describe('Calcultor', () => {
    let firstNumber :number = 0;
    let secondNumber :number = 0;
    let result : number = 0;
    let objCaculator : CalculatorComponent;
    beforeEach(() => { 
        this.objCaculator = new CalculatorComponent();
    });
    afterEach(() => { 
        this.objCaculator=null;
        this.firstNumber=0;
        this.secondNumber=0;
        this.result=0;
    });
    it('additionOfTwoNumbers', () => {
        this.firstNumber=10;
        this.secondNumber=20;
        this.result=this.firstNumber + this.secondNumber;
        expect(this.objCaculator.additionOfTwoNumbers())
            .toEqual(this.result);
    });
    it('subtractionOfTwoNumbers', () => {
        this.firstNumber=10;
        this.secondNumber=20;
        this.result=this.firstNumber - this.secondNumber;
        expect(this.objCaculator.subtractionOfTwoNumbers())
            .toEqual(this.result);
    });
    it('multiplicationOfTwoNumbers', () => {
        this.firstNumber=10;
        this.secondNumber=20;
        this.result=this.firstNumber * this.secondNumber;
        expect(this.objCaculator.multiplicationOfTwoNumbers())
            .toEqual(this.result);
    });
    it('divisionOfTwoNumbers', () => {
      this.firstNumber=10;
      this.secondNumber=20;
      this.result=this.firstNumber / this.secondNumber;
      expect(this.objCaculator.divisionOfTwoNumbers())
          .toEqual(this.result);
  });
});