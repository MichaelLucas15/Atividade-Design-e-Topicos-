import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaHOMEComponent } from './telaHOME.component';

describe('TelaHomeComponent', () => {
  let component: TelaHOMEComponent;
  let fixture: ComponentFixture<TelaHOMEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaHOMEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaHOMEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
