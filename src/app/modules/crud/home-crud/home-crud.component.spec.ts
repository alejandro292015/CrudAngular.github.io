import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCrudComponent } from './home-crud.component';

describe('HomeCrudComponent', () => {
  let component: HomeCrudComponent;
  let fixture: ComponentFixture<HomeCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
