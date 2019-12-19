import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Language } from './language';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private apiLUrl = 'http://localhost:8096/languages';
  // define the apiLUrl as a private property

  constructor(private http: HttpClient) { 
    this.getLData();
    // initilise .getLData in constructor
  }

  getLData() {
    return this.http.get(this.apiLUrl);
    // .get returns an observable 
  }

  updateLData(language: Language) {
    const url = `${this.apiLUrl}/${language.languageId}`;
    // defines url to put
    return this.http.put(url, language, httpOptions);
    // returns an observable and subscribes 
  }

  deleteLanguage(language: Language): Observable<Language> {
    const url = `${this.apiLUrl}/${language.languageId}`;
    // defines url to delete
    return this.http.delete<Language>(url);
    // deletes element and returns observable 
  }

  async addLanguage(language: Language) {
    const url = `${this.apiLUrl}`; 
    // defines url to post
    this.http.post(url, language, httpOptions)
    .subscribe(language => {
      return language;
    });
  }


}
