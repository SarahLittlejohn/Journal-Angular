import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import { DefinitionService } from './definition.service';
import { Definition } from './definition';

@Component({
  selector: 'app-definition',
  templateUrl: './definitions.component.html',
  styleUrls: ['./definitions.component.css']
})

export class DefinitionsComponent implements OnInit {
  title = 'Definitions';
  data: any = {};

  constructor(private definitionService: DefinitionService) {
    this.getDefinitions();
  }

  ngOnInit() {
  }

  getDefinitions() {
    this.definitionService.getData().subscribe(data => {
      console.log(data);
      this.data = data
    })
  }

  deleteDefinition(definition: Definition): void {
    this.data = this.data.filter((d: Definition) => d !== definition);
    // .filter() returns a new array after filtering out certain elements
    this.definitionService.deleteDefinition(definition).subscribe();
    // .deleteLanguage returns an observable so it needs to be subscribed to
  }
    
  updateDefinition(definition: Definition) {
    this.definitionService.updateData(definition).subscribe();
    // .updateLDatareturns an observable so it needs to be subscribed to
  }

}
