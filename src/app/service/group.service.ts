import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private apiUrl = 'https://5f7415b4b63868001615ff6f.mockapi.io/group/';

  constructor(private http: HttpClient) {}

  getList(): Observable<any> {
    return this.http.get(this.apiUrl);
    console.log(this.apiUrl);
  }

  GetSingle(id: number): Observable<any> {
    return this.http.get(this.apiUrl + id);
  }

  Search(keyword:string): Observable<any>{
    return this.http.get(this.apiUrl + "?search=" + keyword);
  }

  Updated(id: number, data: any): Observable<any> {
    return this.http.put(this.apiUrl + id, data);
  }

  Add(data: any): Observable<any>{
    return this.http.post(this.apiUrl, data);
  }

  Delete(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + id);
  }
}
