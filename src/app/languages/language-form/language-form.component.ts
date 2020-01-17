import { Component, OnInit, EventEmitter, Output } from '@angular/core';
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
  
    createLanguage(l_name: string, l_url: string, l_description: string) {
      let new_language = new Language;
      new_language.name = l_name;
      new_language.url = l_url;
      new_language.description = l_description;
      this.LanguageService.addLanguage(new_language);
      setTimeout(()=>{
        this.getLanguages.emit();
        }, 100);
      }

  }