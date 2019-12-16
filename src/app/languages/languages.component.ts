import { Component, OnInit } from '@angular/core';
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
  static createLanguage(l_name: string, l_url: string, l_description: string) {
    throw new Error("Method not implemented.");
  }
  title = 'Languages';
  private apiUrl = 'http://localhost:8096/languages';
  data: any = {};

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

  deleteLanguage(language: Language): void {
    this.data = this.data.filter(l => l !== language);
    this.appService.deleteLanguage(language).subscribe();
  }
    
  async updateLanguage(language: Language): Promise<any> {
    await this.appService.updateLData(language);
    this.getLanguages();
  }

}