import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservabilityDocumentationComponent } from './observability-documentation.component';

describe('ObservabilityDocumentationComponent', () => {
  let component: ObservabilityDocumentationComponent;
  let fixture: ComponentFixture<ObservabilityDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObservabilityDocumentationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObservabilityDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
