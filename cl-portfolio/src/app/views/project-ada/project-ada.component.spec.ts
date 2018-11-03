import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAdaComponent } from './project-ada.component';

describe('ProjectAdaComponent', () => {
  let component: ProjectAdaComponent;
  let fixture: ComponentFixture<ProjectAdaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectAdaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectAdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
