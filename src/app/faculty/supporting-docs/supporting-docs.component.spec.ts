import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportingDocsComponent } from './supporting-docs.component';

describe('SupportingDocsComponent', () => {
  let component: SupportingDocsComponent;
  let fixture: ComponentFixture<SupportingDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportingDocsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupportingDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
