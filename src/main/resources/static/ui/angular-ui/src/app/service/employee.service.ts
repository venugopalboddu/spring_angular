import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = ["http://localhost:8080"];

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  registerEmployee(employee:any): Observable<any> {
    return this.http.post(BASIC_URL + '/api/employee', employee);
  }

  getAllEmployees(): Observable<any> {
    return this.http.get(BASIC_URL + '/api/all-employees');
  }

  getEmployeeById(id: number): Observable<any> {
    return this.http.get(BASIC_URL + '/api/employee/' + id);
  }

  updateEmployee(id: number, employee: any): Observable<any> {
    return this.http.put(BASIC_URL + '/api/employee/' + id, employee);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(BASIC_URL + '/api/employee/' + id);
  }
}
