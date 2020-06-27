import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajServerComponent } from './dodaj-server.component';

describe('DodajServerComponent', () => {
  let component: DodajServerComponent;
  let fixture: ComponentFixture<DodajServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
