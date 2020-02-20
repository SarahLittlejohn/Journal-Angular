import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Project } from './project';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private apiUrl = 'http://localhost:8071/projects';
  // define the apiLUrl as a private property

  constructor(private http: HttpClient) { 
    this.getData();
    // initilise .getLData in constructor
  }

  getData(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl);
    // .get returns an observable 
  }

  updateData(project: Project): Observable<Project> {
    const url = `${this.apiUrl}/${project.projectId}`;
    // defines url to put
    return this.http.put<Project>(url, project, httpOptions);
    // returns an observable and subscribes 
  }

  deleteProject(project: Project): Observable<Project> {
    const url = `${this.apiUrl}/${project.projectId}`;
    // defines url to delete
    return this.http.delete<Project>(url);
    // deletes element and returns observable 
  }

  async addProject(project: Project) {
    const url = `${this.apiUrl}`; 
    // defines url to post
    this.http.post<Project>(url, project, httpOptions)
    .subscribe(project => {
      return project;
    });
  }


}
