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
  }

  getResources() {
    this.appService.getData().subscribe(data => {
      console.log(data);
      this.data = data
    })
  }
  
  updateResource(): void {
    this.appService.updateData(this.data)
  }
  
  // deleteResource(resource: Resource): Observable<Resource> {
  //   console.log('reached');
  //   const url = `${this.apiUrl}/${resource.resourceId}`;
  //   return this.http.delete<Resource>(url);
  // }

  // deleteResourceButton(resource: Resource): void {
  //   this.data = this.data.filter(r => r !== resource);
  //   this.deleteResource(resource).subscribe();
  // }

}