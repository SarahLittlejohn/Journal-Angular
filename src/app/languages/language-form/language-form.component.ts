import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Language } from '../language';
import { LanguageService } from 'src/app/languages/language.service';

@Component({
  selector: 'app-language-form',
  templateUrl: './language-form.component.html',
  styleUrls: ['./language-form.component.css']
})

export class LanguageFormComponent implements OnInit {

  @Output() getLanguages = new EventEmitter();
  
    constructor(private LanguageService: LanguageService) { }
  
    ngOnInit() {
    }
  
    async createLanguage(l_name: string, l_url: string, l_description: string) {
      let new_language = new Language;
      new_language.name = l_name;
      new_language.url = l_url;
      new_language.description = l_description;
      await this.LanguageService.addLanguage(new_language);
      this.getLanguages.emit();
    }
    
  }