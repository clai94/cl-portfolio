import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectRoiComponent } from './project-roi.component';

describe('ProjectRoiComponent', () => {
  let component: ProjectRoiComponent;
  let fixture: ComponentFixture<ProjectRoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectRoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectRoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
