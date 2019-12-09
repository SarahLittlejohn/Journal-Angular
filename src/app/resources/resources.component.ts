import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import { Resource } from './resource';
import { Observable} from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})

export class ResourcesComponent {
  title = 'Resources';
  private apiUrl = 'http://localhost:8096/resources';
  data: any = {};
  ResourceService: any;

  constructor(private appService: AppService) {
    console.log('Hello');
    this.getResources();
    // this.deleteResource(Resource);
  }

  getResources() {
    this.appService.getData().subscribe(data => {
      console.log(data);
      this.data = data
    })
  }

  async deleteResource(resource: Resource): void {
    await this.appService.deleteResource(resource);
    this.getResources();
  }
    
  async updateResource(resource: Resource): void {
    await this.appService.updateData(resource);
    this.getResources();
  }

  async addResource(resource: Resource): void {
    await this.appService.addResource(resource);
    this.getResources();
  }

}