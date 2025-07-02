import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KurtaSetComponent } from './kurta-set.component';

describe('KurtaSetComponent', () => {
  let component: KurtaSetComponent;
  let fixture: ComponentFixture<KurtaSetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KurtaSetComponent]
    });
    fixture = TestBed.createComponent(KurtaSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
