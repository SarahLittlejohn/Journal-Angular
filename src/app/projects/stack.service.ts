import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Stack } from './stack';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class StackService {

  private apiUrl = 'http://localhost:8071/stacks';
  // define the apiLUrl as a private property

  constructor(private http: HttpClient) { 
    this.getData();
    // initilise .getLData in constructor
  }

  getData(): Observable<Stack[]> {
    return this.http.get<Stack[]>(this.apiUrl);
    // .get returns an observable 
  }

  updateData(stack: Stack): Observable<Stack> {
    const url = `${this.apiUrl}/${stack.stackId}`;
    // defines url to put
    return this.http.put<Stack>(url, stack, httpOptions);
    // returns an observable and subscribes 
  }

  deleteStack(stack: Stack): Observable<Stack> {
    const url = `${this.apiUrl}/${stack.stackId}`;
    // defines url to delete
    return this.http.delete<Stack>(url);
    // deletes element and returns observable 
  }

  async addStack(stack: Stack) {
    const url = `${this.apiUrl}`; 
    // defines url to post
    this.http.post<Stack>(url, stack, httpOptions)
    .subscribe(stack => {
      return stack;
    });
  }


}
