import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoAuthoresComponent } from './listado-authores.component';

describe('ListadoAuthoresComponent', () => {
  let component: ListadoAuthoresComponent;
  let fixture: ComponentFixture<ListadoAuthoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoAuthoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoAuthoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
