import { Component, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import { Observable} from 'rxjs';
import { AppService } from '../app.service';
import { resource } from 'selenium-webdriver/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'All';
  private apiUrl = 'http://localhost:8096/resources';
  private apiFUrl = 'http://localhost:8096/frameworks';
  private apiLUrl = 'http://localhost:8096/languages';
  data: any = {};
  data1: any = {};
  data2: any = {};

  constructor(private appService: AppService) {
    this.getResources();
    this.getFrameworks();
    this.getLanguages();
  }

  ngOnInit() {
  }

  getResources() {
    this.appService.getData().subscribe(data => {
      console.log(data);
      this.data = data
    })
  }

  getLanguages() {
    this.appService.getLData().subscribe(data1 => {
      console.log(data1);
      this.data1 = data1
    })
  }

  getFrameworks() {
    this.appService.getFData().subscribe(data2 => {
      console.log(data2);
      this.data2 = data2
    })
  }
}
