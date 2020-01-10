import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Resource } from '../resource';
import { ResourceService } from 'src/app/resources/resource.service';

@Component({
  selector: 'app-resource-form',
  templateUrl: './resource-form.component.html',
  styleUrls: ['./resource-form.component.css',]
})

export class ResourceFormComponent implements OnInit {

@Output() getResources = new EventEmitter();

  constructor(private resourceService: ResourceService) { }

  ngOnInit() {
  }

  createResource(r_name: string, r_url: string, r_description: string) {
    let new_resource = new Resource;
    new_resource.name = r_name;
    new_resource.url = r_url;
    new_resource.description = r_description;
    this.resourceService.addResource(new_resource);
    setTimeout(()=>{
      this.getResources.emit();
      }, 100);
    }
  
}
