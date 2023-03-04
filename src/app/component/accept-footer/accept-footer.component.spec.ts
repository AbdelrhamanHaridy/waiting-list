import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptFooterComponent } from './accept-footer.component';

describe('AcceptFooterComponent', () => {
  let component: AcceptFooterComponent;
  let fixture: ComponentFixture<AcceptFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
