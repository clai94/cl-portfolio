import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistHomeComponent } from './todolist-home.component';

describe('TodolistHomeComponent', () => {
  let component: TodolistHomeComponent;
  let fixture: ComponentFixture<TodolistHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodolistHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodolistHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
