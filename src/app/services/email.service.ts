import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private apiUrl = 'https://nexiphor.onrender.com/send-email';
  private warmUpUrl = 'https://nexiphor.onrender.com/warm-up';

  constructor(private http: HttpClient) { }

  sendEmail(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
  warmUpServer(): Observable<any> {
    return this.http.get(this.warmUpUrl);
  }
}