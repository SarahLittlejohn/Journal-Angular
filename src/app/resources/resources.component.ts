import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent {
  title = 'Resources';
  private apiUrl = 'http://localhost:8094/resources';
  data: any = {};

  constructor(private http: HttpClient) {
    console.log('Hello');
    this.getResources();
    this.getData();
  }

  getData() {
    return this.http.get(this.apiUrl);
  }

  getResources() {
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data
    })
  }

}