import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import { ProjectService } from './project.service';
import { Project } from './project';
import { StackService } from './stack.service';
import { Stack } from './stack';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})

export class ProjectComponent {

  title = 'Projects';
  data: any = {};
  stack_data: any = {};
  

  constructor(private ProjectService: ProjectService, private StackService: StackService) {
    // constructor initilises .getLangauages 
    this.getProjects();
    this.getStacks();
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

  getStacks() {
    this.StackService.getData().subscribe(stack_data => {
    // .getLData returns an observable so it must be subscribed to
    console.log(stack_data);
    // data is logged on the console
    this.stack_data = stack_data
    })
  }

  deleteStack(stack: Stack): void {
    this.stack_data = this.stack_data.filter((l: Stack) => l !== stack);
    // .filter() returns a new array after filtering out certain elements
    this.StackService.deleteStack(stack).subscribe();
    // .deleteStack returns an observable so it needs to be subscribed to
  }
    
  updateStack(stack: Stack) {
    this.StackService.updateData(stack).subscribe();
    // .updateLDatareturns an observable so it needs to be subscribed to
  }

}
