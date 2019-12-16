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
    this.data = this.data.filter(f => f !== framework);
    this.appService.deleteFramework(framework).subscribe();
  }
    
  async updateFramework(framework: Framework): Promise<any> {
    await this.appService.updateFData(framework);
    this.getFrameworks();
  }

}