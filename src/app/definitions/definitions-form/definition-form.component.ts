import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Definition } from '../definition';
import { DefinitionService } from '../definition.service';

@Component({
  selector: 'app-definition-form',
  templateUrl: './definition-form.component.html',
  styleUrls: ['./definition-form.component.css',]
})

export class DefinitionFormComponent implements OnInit {

@Output() getDefinitions = new EventEmitter();

  constructor(private definitionService: DefinitionService) { }

  ngOnInit() {
  }

  createDefinition(name: string, info: string) {
    let new_definition = new Definition;
    new_definition.name = name;
    new_definition.info = info;
    this.definitionService.addDefinition(new_definition);
    setTimeout(()=>{
      this.getDefinitions.emit();
      }, 100);
    }
  
}
