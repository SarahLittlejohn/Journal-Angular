import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ProjectService } from 'src/app/projects/project.service';
import { Project } from '../project';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})

export class ProjectFormComponent implements OnInit {

  @Output() getProjects = new EventEmitter();

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  createProject(name: string, stack: string, description: string, start_date: string) {
    let new_project = new Project;
    new_project.name = name;
    new_project.description = description;
    new_project.stack = stack;
    new_project.start_date = start_date;
    this.projectService.addProject(new_project); 
    setTimeout(()=>{
      this.getProjects.emit();
      }, 100);
    }
  
}

