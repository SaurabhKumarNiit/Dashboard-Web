import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

const accessToken = sessionStorage.getItem('accessToken');

const headers = new HttpHeaders({
  'Content-Type': 'application/json'
});

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) {}

  data: any;

  baseurl = 'http://16.171.64.141:5002/api/v1';
  
  originurl ='http://16.171.64.141:5002/api/v1';

  loginAdmin(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseurl}/adminLogin`, data);
  }

  sendEmail(data: any): Observable<any>{
    return this.http.post<any>(`${this.baseurl}/auth/login`, data);
  }

  // http://16.171.64.141:5001/api/v1/auth/login
// {sEmail}

  sendOTP(data: any): Observable<any>{
    return this.http.post<any>(`${this.baseurl}/auth/verify-otp`, data);
  }

  verifyOTP(formData:any , accessToken:any): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Verification: accessToken
    });
    return this.http.post(
     this.baseurl + '/auth/verify-otp', formData, { headers: httpHeaders, observe: 'response' }
    );
  }

  login(loginData:any): Observable<any> {
    return this.http.post(
      this.baseurl + '/auth/login', loginData, { headers, observe: 'response' }
    );
  }

  sendEvent(eventData: any): Observable<any> {
    const url = `${this.originurl}/event/create/event`;
    return this.http.post<any>(url, eventData);
  }

  addEvents(eventData:any , accessToken:any): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: accessToken
    });
    return this.http.post(
     this.originurl + '/event/create/event', eventData, { headers: httpHeaders, observe: 'response' }
    );
  }

  // getEvents(organizerId: any, accessToken:any): Observable<any[]> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     Authorization: accessToken
  //   });
  //   return this.http.get<any[]>(
  //     `${this.originurl}/event/organizer/${organizerId}`, { headers: httpHeaders, observe: 'response' }
  //   );
  // }


  getEvents(organizerId:any , accessToken:any): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: accessToken
    });
    return this.http.get<any>(`${this.originurl}/event/organizer/${organizerId}`,{ headers: httpHeaders, observe: 'response' });
  }

  getPastEvents(organizerId:any , accessToken:any): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: accessToken
    });
    return this.http.get<any>(`${this.originurl}/event/past/${organizerId}`,{ headers: httpHeaders, observe: 'response' });
  }

  getUpcomingEvents(organizerId:any , accessToken:any): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: accessToken
    });
    return this.http.get<any>(`${this.originurl}/event/upcoming/${organizerId}`,{ headers: httpHeaders, observe: 'response' });
  }

  getEventsFields(eventId:any , accessToken:any): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: accessToken
    });
    return this.http.get<any>(`${this.originurl}/event/${eventId}`,{ headers: httpHeaders, observe: 'response' });
  }

  DeleteEvent(eventId:any,accessToken:any):Observable<any>{
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: accessToken
    });
    return this.http.delete<any>(`${this.originurl}/event/${eventId}`,{ headers: httpHeaders, observe: 'response' });
  }

  // UpdateEvent(eventId:any,accessToken:any):Observable<any>{
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     Authorization: accessToken
  //   });
  //   return this.http.put<any>(`${this.originurl}/event/${eventId}`,{ headers: httpHeaders, observe: 'response' });
  // }

  UpdateEvent(eventId:any, eventData:any , accessToken:any): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: accessToken
    });
    return this.http.put(`${this.originurl}/event/${eventId}`, eventData, { headers: httpHeaders, observe: 'response' }
    );
  }

}
