import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Definition } from './definition';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DefinitionService {

  private apiUrl = 'http://localhost:8071/definitions';
  // define the apiUrl as a private property

  constructor(private http: HttpClient) { 
    this.getData();
    // initilise .getData in constructor
  }

  getData(): Observable<Definition[]> {
    return this.http.get<Definition[]>(this.apiUrl);
    // .get returns an observable 
  }

  updateData(definition: Definition): Observable<Definition> {
    const url = `${this.apiUrl}/${definition.dictionaryId}`;
    // defines url to put
    return this.http.put<Definition>(url, definition, httpOptions);
    // returns an observable and subscribes 
  }

  deleteDefinition(definition: Definition): Observable<Definition> {
    const url = `${this.apiUrl}/${definition.dictionaryId}`;
    // defines url to delete
    return this.http.delete<Definition>(url);
    // deletes element and returns observable 
  }

  addDefinition(definition: Definition) {
    const url = `${this.apiUrl}`; 
    // defines url to post
    this.http.post<Definition>(url, definition, httpOptions)
    .subscribe(definition => {
      return definition;
    });
  }


}
