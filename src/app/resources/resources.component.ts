import { Component, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import { Resource } from './resource';
import { Observable} from 'rxjs';
import { AppService } from '../app.service';
import { resource } from 'selenium-webdriver/http';
import { promise } from 'protractor';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css',]
})

export class ResourcesComponent {
  title = 'Resources';
  private apiUrl = 'http://localhost:8096/resources';
  data: any = {};
  ResourceService: any;
  resources: Resource[];

  constructor(private appService: AppService) {
    console.log('Hello');
    this.getResources();
  }

  getResources() {
    this.appService.getData().subscribe(data => {
      console.log(data);
      this.data = data
    })
  }

  async deleteResource(resource: Resource) {
    this.data = this.data.filter(r => r !== resource);
    this.appService.deleteResource(resource).subscribe();
  }

  async updateResource(resource: Resource): Promise<any> {
    await this.appService.updateData(resource);
    this.getResources();
  }

  getResourcesByFilter(id: number, filterBy: any): void {
    this.appService.filterResources(id, filterBy)
      .subscribe(resources => this.resources = resources);
  }

}