import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaypalService {
  private baseUrl = 'https://talented-kick-production.up.railway.app';
  private paypalUrl='https://api-m.sandbox.paypal.com';
  // http://localhost:8181/token

  constructor(private http: HttpClient) {}

  createPayment(order: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/pay`, order);
  }

  generateToken(): Observable<any> {
    return this.http.post(`${this.baseUrl}/token`, '');
  }

  getAccessToken(): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/token`, {});
  }


  createOrder(data: any, accessToken: any): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
      'Prefer': 'return=representation',
      'PayPal-Request-Id': 'VALUE=A_v4_style_guid,SCOPE=Globa',
    });

    return this.http.post(
      `${this.paypalUrl}/v2/checkout/orders`, 
      data, 
      { headers: httpHeaders, observe: 'response' }
    );
  }

}
