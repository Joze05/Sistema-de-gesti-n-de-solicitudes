import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalResponseComponent } from './legal-response.component';

describe('LegalResponseComponent', () => {
  let component: LegalResponseComponent;
  let fixture: ComponentFixture<LegalResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalResponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
