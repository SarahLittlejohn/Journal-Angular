import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import { LanguageService } from 'src/app/languages/language.service';
import { Language } from './language';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})

export class LanguagesComponent {

  title = 'Languages';
  data: any = {};

  constructor(private LanguageService: LanguageService) {
    // constructor initilises .getLangauages 
    this.getLanguages();
  }
  
  getLanguages() {
    this.LanguageService.getLData().subscribe(data => {
    // .getLData returns an observable so it must be subscribed to
    console.log(data);
    // data is logged on the console
    this.data = data
    })
  }

  deleteLanguage(language: Language): void {
    this.data = this.data.filter((l: Language) => l !== language);
    // .filter() returns a new array after filtering out certain elements
    this.LanguageService.deleteLanguage(language).subscribe();
    // .deleteLanguage returns an observable so it needs to be subscribed to
  }
    
  updateLanguage(language: Language) {
    this.LanguageService.updateLData(language).subscribe();
    // .updateLDatareturns an observable so it needs to be subscribed to
  }

}