import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAuteursComponent } from './list-auteurs.component';

describe('ListAuteursComponent', () => {
  let component: ListAuteursComponent;
  let fixture: ComponentFixture<ListAuteursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAuteursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAuteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
