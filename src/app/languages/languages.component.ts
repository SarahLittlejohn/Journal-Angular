import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import { AppService } from '../app.service';
import { Language } from './language';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})

export class LanguagesComponent {
  title = 'Languages';
  private apiUrl = 'http://localhost:8096/languages';
  data: any = {};
  ResourceService: any;

  constructor(private appService: AppService) {
    console.log('Hello');
    this.getLanguages();
  }
  
  getLanguages() {
    this.appService.getLData().subscribe(data => {
      console.log(data);
      this.data = data
    })
  }

  async deleteLanguage(language: Language) {
    await this.appService.deleteLanguage(language);
    this.getLanguages();
  }
    
  async updateLanguage(language: Language) {
    await this.appService.updateLData(language);
    this.getLanguages();
  }

}