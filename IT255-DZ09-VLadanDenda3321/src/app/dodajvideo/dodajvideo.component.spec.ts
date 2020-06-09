import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajvideoComponent } from './dodajvideo.component';

describe('DodajvideoComponent', () => {
  let component: DodajvideoComponent;
  let fixture: ComponentFixture<DodajvideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajvideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
