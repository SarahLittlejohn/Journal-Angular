import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import { ProjectService } from './project.service';
import { Project } from './project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})

export class ProjectComponent {

  title = 'Projects';
  data: any = {};

  constructor(private ProjectService: ProjectService) {
    // constructor initilises .getLangauages 
    this.getProjects();
  }
  
  getProjects() {
    this.ProjectService.getData().subscribe(data => {
    // .getLData returns an observable so it must be subscribed to
    console.log(data);
    // data is logged on the console
    this.data = data
    })
  }

  deleteProject(project: Project): void {
    this.data = this.data.filter((p: Project) => p !== project);
    // .filter() returns a new array after filtering out certain elements
    this.ProjectService.deleteProject(project).subscribe();
    // .deleteProject returns an observable so it needs to be subscribed to
  }
    
  updateProject(project: Project) {
    this.ProjectService.updateLData(project).subscribe();
    // .updateLDatareturns an observable so it needs to be subscribed to
  }

}