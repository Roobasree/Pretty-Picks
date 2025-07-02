import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KurtiDetailsComponent } from './kurti-details.component';

describe('KurtiDetailsComponent', () => {
  let component: KurtiDetailsComponent;
  let fixture: ComponentFixture<KurtiDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KurtiDetailsComponent]
    });
    fixture = TestBed.createComponent(KurtiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
