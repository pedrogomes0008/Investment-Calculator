import { Component, signal } from '@angular/core';

import { InvestmentResult } from './investment-result.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  resultsData = signal<InvestmentResult[] | undefined>(undefined);
}
