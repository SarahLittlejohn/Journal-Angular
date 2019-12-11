import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Framework } from '../framework';

@Component({
  selector: 'app-framework-form',
  templateUrl: './framework-form.component.html',
  styleUrls: ['./framework-form.component.css']
})

export class FrameworkFormComponent implements OnInit {

  @Output() getFrameworks = new EventEmitter();

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  async createFramework(f_name: string, f_url: string, f_description: string) {
    let new_framework = new Framework;
    new_framework.name = f_name;
    new_framework.url = f_url;
    new_framework.description = f_description;
    await this.appService.addFramework(new_framework);
    this.getFrameworks.emit();
  }
  
}

