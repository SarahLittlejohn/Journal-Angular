import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Framework } from './framework';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class FrameworkService {

  private apiUrl = 'http://localhost:8096/frameworks';
  // define the apiUrl as a private property

  constructor(private http: HttpClient) { 
    this.getFData();
    // initilise .getFData in constructor
  }

  getFData(): Observable<Framework> {
    return this.http.get<Framework>(this.apiUrl);
    // .get returns an observable 
  }

  updateFData(framework: Framework): Observable<Framework> {
    const url = `${this.apiUrl}/${framework.frameworkId}`;
    // defines url to put
    return this.http.put<Framework>(url, framework, httpOptions);
    // returns an observable and subscribes 
  }

  deleteFramework(framework: Framework): Observable<Framework> {
    const url = `${this.apiUrl}/${framework.frameworkId}`;
    // defines url to delete
    return this.http.delete<Framework>(url);
    // deletes element and returns observable 
  }

  async addFramework(framework: Framework) {
    const url = `${this.apiUrl}`; 
    // defines url to post
    this.http.post(url, framework, httpOptions)
    .subscribe(framework => {
      return framework;
    });
  }

}
