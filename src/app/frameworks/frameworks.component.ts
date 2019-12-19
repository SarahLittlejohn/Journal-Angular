import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import { FrameworkService } from 'src/app/frameworks/framework.service';
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

  constructor(private frameworkService: FrameworkService) {
    console.log('Hello');
    this.getFrameworks();
  }

  getFrameworks() {
    this.frameworkService.getFData().subscribe(data => {
      console.log(data);
      this.data = data
    })
  }
  
  async deleteFramework(framework: Framework) {
    this.data = this.data.filter(f => f !== framework);
    this.frameworkService.deleteFramework(framework).subscribe();
  }
    
  updateFramework(framework: Framework) {
    this.frameworkService.updateFData(framework).subscribe();
  }

}