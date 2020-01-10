import { Component, OnInit, Output } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import { ResourceService } from '../resources/resource.service';
import { FrameworkService } from '../frameworks/framework.service';
import { LanguageService } from '../languages/language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  title = 'All';
  data: any = {};
  data1: any = {};
  data2: any = {};

  constructor(private resourceService: ResourceService, private frameworkService: FrameworkService, private languageService: LanguageService) {
    this.getResources();
    this.getFrameworks();
    this.getLanguages();
  }

  ngOnInit() {
  }

  getResources() {
    this.resourceService.getData().subscribe(data => {
      console.log(data);
      this.data = data
    })
  }

  getLanguages() {
    this.languageService.getLData().subscribe(data1 => {
      console.log(data1);
      this.data1 = data1
    })
  }

  getFrameworks() {
    this.frameworkService.getFData().subscribe(data2 => {
      console.log(data2);
      this.data2 = data2
    })
  }
}
