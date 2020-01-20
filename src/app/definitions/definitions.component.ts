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
    // .getData() returns the data as observables and is subscribed to
      console.log(data);
      // the data is logged on the console
      this.data = data.sort((a, b) => {
      // the data that is subscribed to is the sorted version of the data recieved
        if (a.name === b.name) return -1;
        // if the two names are the same put a before b
        return a.name.localeCompare(b.name);
        // return 1 if b is sorted before a and -1 if a is sorted before b
        // this goes through all the data two values at a time and sorts
      });
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
