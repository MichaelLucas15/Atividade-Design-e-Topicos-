import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaUsersComponent } from './listaUsers.component';

describe('ListaUsersComponent', () => {
  let component: ListaUsersComponent;
  let fixture: ComponentFixture<ListaUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
