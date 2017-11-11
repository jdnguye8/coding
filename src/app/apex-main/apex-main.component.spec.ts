import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexMainComponent } from './apex-main.component';

describe('ApexMainComponent', () => {
  let component: ApexMainComponent;
  let fixture: ComponentFixture<ApexMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApexMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApexMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
