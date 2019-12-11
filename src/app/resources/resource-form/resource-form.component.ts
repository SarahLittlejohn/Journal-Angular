import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Resource } from '../resource';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-resource-form',
  templateUrl: './resource-form.component.html',
  styleUrls: ['./resource-form.component.css',]
})

export class ResourceFormComponent implements OnInit {

@Output() getResources = new EventEmitter();

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  async createResource(r_name: string, r_url: string, r_description: string) {
    let new_resource = new Resource;
    new_resource.name = r_name;
    new_resource.url = r_url;
    new_resource.description = r_description;
    await this.appService.addResource(new_resource);
    this.getResources.emit();
  }
  
}
