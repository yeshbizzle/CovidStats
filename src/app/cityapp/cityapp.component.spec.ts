import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityappComponent } from './cityapp.component';

describe('CityappComponent', () => {
  let component: CityappComponent;
  let fixture: ComponentFixture<CityappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
