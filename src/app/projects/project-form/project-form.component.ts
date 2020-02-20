import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ProjectService } from 'src/app/projects/project.service';
import { Project } from '../project';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})

export class ProjectFormComponent implements OnInit {

  // Asking the parent (ProjectComponent) to do something 
  @Output() getProjects = new EventEmitter();
  // Getting the info from the parent (StackComponent)
  @Input() stacks = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  createProject(name: string, description: string, start_date: string, stack: string) {
    let new_project = new Project;
    new_project.name = name;
    new_project.description = description;
    new_project.start_date = start_date;
    new_project.stack = stack;
    this.projectService.addProject(new_project); 
    setTimeout(()=>{
      this.getProjects.emit();
      }, 100);
    }

  }

