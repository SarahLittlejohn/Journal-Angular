import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FrameworkService } from 'src/app/frameworks/framework.service';
import { Framework } from '../framework';

@Component({
  selector: 'app-framework-form',
  templateUrl: './framework-form.component.html',
  styleUrls: ['./framework-form.component.css']
})

export class FrameworkFormComponent implements OnInit {

  @Output() getFrameworks = new EventEmitter();

  constructor(private frameworkService: FrameworkService) { }

  ngOnInit() {
  }

  createFramework(f_name: string, f_url: string, f_description: string) {
    let new_framework = new Framework;
    new_framework.name = f_name;
    new_framework.url = f_url;
    new_framework.description = f_description;
    this.frameworkService.addFramework(new_framework); 
    setTimeout(()=>{
      this.getFrameworks.emit();
      }, 100);
    }
  
}

