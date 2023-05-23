import { LightningElement,track } from 'lwc';

export default class BMICalculator extends LightningElement {
    @track height = ''
    @track  weight = ''
    @track BMI = ''

    inputHandler(event){
        const { name, value } = event.target;
    this[name] = value;
    }
    submitHandler(event){
        event.preventDefault();
        this.calculate();
    }

    calculate() {
        let height = Number(this.height) / 100;
        let weight = Number(this.weight);
        
        if (height > 0 && weight > 0) {
            let bmi = weight / (height * height);
            console.log('BMI value is ' + bmi);
            this.BMI = Math.trunc(bmi);
        } else {
            console.log('Invalid height or weight input');
        }
    }
    
}