import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private exchangeRate = 0.01206; // 1 INR = 0.014 USD

  convertINRtoUSD(amount: number): number {
    return amount * this.exchangeRate;
  }
}
