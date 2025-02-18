import { Component, signal } from '@angular/core';

import { InvestmentService } from '../services/investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectReturn = signal('5');
  duration = signal('10');

  constructor(private investmentService: InvestmentService) { 

  }

  onSubmit(){
    this.investmentService.calculateInvestmentResults(
      {
        initialInvestment: +this.enteredInitialInvestment(),
        duration: +this.duration(),
        expectedReturn: +this.enteredExpectReturn(),
        annualInvestment: +this.enteredAnnualInvestment()
      }
    );

    this.enteredInitialInvestment = signal('0');
    this.enteredAnnualInvestment = signal('0');
    this.enteredExpectReturn = signal('5');
    this.duration = signal('10');
  }
}
