import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class InquiryService {
  private apiUrl = environment.apiUrl+"Form";

  constructor(private http: HttpClient) { }

  // Create an inquiry
  createInquiry(inquiryData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, inquiryData);
  }

  // Get all inquiries
  getAllInquiries(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Get inquiry by ID
  getInquiryById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Update inquiry
  updateInquiry(id: number, inquiryData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, inquiryData);
  }

  // Delete inquiry
  deleteInquiry(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
