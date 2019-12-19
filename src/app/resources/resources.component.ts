import { Component, OnInit, Output } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import { Resource } from './resource';
import { ResourceService } from 'src/app/resources/resource.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css',]
})

export class ResourcesComponent {

  title = 'Resources';
  data: any = {};

  constructor(private ResourceService: ResourceService) {
    this.getResources();
  }

  getResources() {
    this.ResourceService.getData().subscribe(data => {
      console.log(data);
      this.data = data
    })
  }

  deleteResource(resource: Resource) {
    this.data = this.data.filter(r => r !== resource);
    this.ResourceService.deleteResource(resource).subscribe();
    this.ResourceService.getData().subscribe();
  }

  updateResource(resource: Resource) {
    this.ResourceService.updateData(resource).subscribe();
    this.ResourceService.getData().subscribe();
  }

}