import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
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

  getLData() {
    return this.http.get(this.apiLUrl);
  }

  getFData() {
    return this.http.get(this.apiFUrl);
  }

}
