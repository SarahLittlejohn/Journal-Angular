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

  updateData(resource: Resource) {
    const url = `${this.apiUrl}/${resource.resourceId}`;
    this.http.put(url, resource, httpOptions).subscribe();
  }

  deleteResource (resource: Resource) {
    const url = `${this.apiUrl}/${resource.resourceId}`; 
    this.http.delete(url, httpOptions)
    .subscribe(res => {
      return res;
    });
  }

  addResource (resource: Resource) {
    const url = `${this.apiUrl}`; 
    this.http.post(url, resource, httpOptions)
    .subscribe(res => {
      return res;
    });
  }

  getLData() {
    return this.http.get(this.apiLUrl);
  }

  updateLData(language: Language) {
    const url = `${this.apiLUrl}/${language.languageId}`;
    this.http.put(url, language, httpOptions).subscribe();
  }

  deleteLanguage (language: Language) {
    const url = `${this.apiLUrl}/${language.languageId}`; 
    this.http.delete(url, httpOptions)
    .subscribe(res => {
      return res;
    });
  }

  addLanguage (language: Language) {
    const url = `${this.apiLUrl}`; 
    this.http.post(url, language, httpOptions)
    .subscribe(res => {
      return res;
    });
  }

  getFData() {
    return this.http.get(this.apiFUrl);
  }

  updateFData(framework: Framework) {
    const url = `${this.apiFUrl}/${framework.frameworkId}`;
    this.http.put(url, framework, httpOptions).subscribe();
  }

  deleteFramework (framework: Framework) {
    const url = `${this.apiFUrl}/${framework.frameworkId}`; 
    this.http.delete(url, httpOptions)
    .subscribe(res => {
      return res;
    });
  }

  addFramework (framework: Framework) {
    const url = `${this.apiFUrl}`; 
    this.http.post(url, framework, httpOptions)
    .subscribe(res => {
      return res;
    });
  }
}
