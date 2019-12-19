import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Resource } from './resource';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ResourceService {

  private apiUrl = 'http://localhost:8096/resources';
  // define the apiUrl as a private property

  constructor(private http: HttpClient) { 
    this.getData();
    // initilise .getData in constructor
  }

  getData(): Observable<Resource> {
    return this.http.get<Resource>(this.apiUrl);
    // .get returns an observable 
  }

  updateData(resource: Resource): Observable<Resource> {
    const url = `${this.apiUrl}/${resource.resourceId}`;
    // defines url to put
    return this.http.put<Resource>(url, resource, httpOptions);
    // returns an observable and subscribes 
  }

  deleteResource(resource: Resource): Observable<Resource> {
    const url = `${this.apiUrl}/${resource.resourceId}`;
    // defines url to delete
    return this.http.delete<Resource>(url);
    // deletes element and returns observable 
  }

  async addResource(resource: Resource) {
    const url = `${this.apiUrl}`; 
    // defines url to post
    this.http.post(url, resource, httpOptions)
    .subscribe(resource => {
      return resource;
    });
  }

}
