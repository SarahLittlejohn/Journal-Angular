import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import { StackService } from './stack.service';
import { Stack } from './stack';

@Component({
  selector: 'app-stacks',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css']
})

export class StacksComponent {

  title = 'Stacks';
  data: any = {};

  constructor(private StackService: StackService) {
    // constructor initilises .getLangauages 
    this.getStacks();
  }
  
  getStacks() {
    this.StackService.getData().subscribe(data => {
    // .getLData returns an observable so it must be subscribed to
    console.log(data);
    // data is logged on the console
    this.data = data
    })
  }

  deleteStack(stack: Stack): void {
    this.data = this.data.filter((l: Stack) => l !== stack);
    // .filter() returns a new array after filtering out certain elements
    this.StackService.deleteStack(stack).subscribe();
    // .deleteStack returns an observable so it needs to be subscribed to
  }
    
  updateStack(stack: Stack) {
    this.StackService.updateData(stack).subscribe();
    // .updateLDatareturns an observable so it needs to be subscribed to
  }

}