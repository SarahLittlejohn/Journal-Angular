import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Language } from '../language';

@Component({
  selector: 'app-language-form',
  templateUrl: './language-form.component.html',
  styleUrls: ['./language-form.component.css']
})

export class LanguageFormComponent implements OnInit {

  @Output() getLanguages = new EventEmitter();
  
    constructor(private appService: AppService) { }
  
    ngOnInit() {
    }
  
    createLanguage(l_name: string, l_url: string, l_description: string) {
      let new_language = new Language;
      new_language.name = l_name;
      new_language.url = l_url;
      new_language.description = l_description;
      this.appService.addLanguage(new_language);
      this.getLanguages.emit();
    }
    
  }