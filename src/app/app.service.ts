import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Resource } from './resources/resource';
import { MessageService } from './message.service';
import { Language } from './languages/language';
import { Framework } from './frameworks/framework';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class AppService {

private apiUrl = 'http://localhost:8096/resources';
private apiLUrl = 'http://localhost:8096/languages';
private apiFUrl = 'http://localhost:8096/frameworks';

httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

  constructor(private http: HttpClient,
    private messageService: MessageService) { }

  getData() {
    return this.http.get(this.apiUrl);
  }

  async updateData(resource: Resource) {
    const url = `${this.apiUrl}/${resource.resourceId}`;
    return new Promise<void>(resolve => {
      this.http.put(url, resource, httpOptions).subscribe();
    }); 
  }

  deleteResource (resource: Resource): Observable<Resource> {
    const url = `${this.apiUrl}/${resource.resourceId}`; 
    return this.http.delete<Resource>(url);
  }

  addResource (resource: Resource) {
    const url = `${this.apiUrl}`; 
    this.http.post(url, resource, httpOptions)
    .subscribe(res => {
      return res;
    });
  }

  filterResources(id: number, filterBy: any): Observable<Resource[]> {
    const url =  `${this.apiUrl}/${filterBy}/${id}`;
    return this.http.get<Resource[]>(url);
  }

  getLData() {
    return this.http.get(this.apiLUrl);
  }

  async updateLData(language: Language) {
    const url = `${this.apiLUrl}/${language.languageId}`;
    return new Promise<void>(resolve => {
    this.http.put(url, language, httpOptions).subscribe();
  }); 
  }

  deleteLanguage(language: Language): Observable<Language> {
    const url = `${this.apiLUrl}/${language.languageId}`;
    return this.http.delete<Language>(url);
  }

  addLanguage(language: Language) {
    const url = `${this.apiLUrl}`; 
    this.http.post(url, language, httpOptions)
    .subscribe(res => {
      return res;
    });
  }

  getFData() {
    return this.http.get(this.apiFUrl);
  }

  async updateFData(framework: Framework) {
    const url = `${this.apiFUrl}/${framework.frameworkId}`;
    return new Promise<void>(resolve => {
      this.http.put(url, framework, httpOptions).subscribe();
    }); 
  }

  deleteFramework (framework: Framework) {
    const url = `${this.apiFUrl}/${framework.frameworkId}`; 
    return this.http.delete<Framework>(url);
  }

  async addFramework (framework: Framework) {
    const url = `${this.apiFUrl}`; 
    return new Promise<void>(resolve => {
    this.http.post(url, framework, httpOptions)
    .subscribe(res => {
      return res;
    });
    this.getFData();
    });
  }
}
