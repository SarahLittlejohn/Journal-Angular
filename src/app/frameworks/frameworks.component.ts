import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import { AppService } from '../app.service';
import { Framework } from './framework';

@Component({
  selector: 'app-frameworks',
  templateUrl: './frameworks.component.html',
  styleUrls: ['./frameworks.component.css']
})

export class FrameworksComponent {
  title = 'Frameworks';
  private apiUrl = 'http://localhost:8096/frameworks';
  data: any = {};
  ResourceService: any;

  constructor(private appService: AppService) {
    console.log('Hello');
    this.getFrameworks();
  }

  getFrameworks() {
    this.appService.getFData().subscribe(data => {
      console.log(data);
      this.data = data
    })
  }
  
  async deleteFramework(framework: Framework) {
    await this.appService.deleteFramework(framework);
    this.getFrameworks();
  }
    
  async updateFramework(framework: Framework) {
    this.appService.updateFData(framework);
    this.getFrameworks();
  }

  async createFramework(framework: Framework) {
    await this.appService.addFramework(framework);
    this.getFrameworks();
  }

}