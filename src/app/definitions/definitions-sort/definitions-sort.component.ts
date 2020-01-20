import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Definition } from '../definition';
import { DefinitionService } from '../definition.service';
import { DefinitionsComponent } from '..';

@Component({
  selector: 'app-definitions-sort',
  templateUrl: './definitions-sort.component.html',
  styleUrls: ['./definitions-sort.component.css']
})

export class DefinitionsSortComponent implements OnInit {

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

}
