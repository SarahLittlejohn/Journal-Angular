import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinitionsSortComponent } from './definitions-sort.component';

describe('DefinitionsSortComponent', () => {
  let component: DefinitionsSortComponent;
  let fixture: ComponentFixture<DefinitionsSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefinitionsSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinitionsSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
