import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { StackService } from '../stack.service';
import { Stack } from '../stack';

@Component({
  selector: 'app-stack-form',
  templateUrl: './stack-form.component.html',
  styleUrls: ['./stack-form.component.css']
})

export class StackFormComponent implements OnInit {

  @Output() getStacks = new EventEmitter();

  constructor(private stackService: StackService) { }

  ngOnInit() {
  }

  createStack(name: string, stack: string) {
    let new_stack = new Stack;
    new_stack.name = name;
    new_stack.stack = stack;
    this.stackService.addStack(new_stack); 
    setTimeout(()=>{
      this.getStacks.emit();
      }, 100);
    }
  
}
