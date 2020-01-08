import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultEditPageComponent } from './default-edit-page.component';

describe('DefaultEditPageComponent', () => {
  let component: DefaultEditPageComponent;
  let fixture: ComponentFixture<DefaultEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultEditPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
