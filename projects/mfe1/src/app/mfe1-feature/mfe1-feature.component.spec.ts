import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mfe1FeatureComponent } from './mfe1-feature.component';

describe('Mfe1FeatureComponent', () => {
  let component: Mfe1FeatureComponent;
  let fixture: ComponentFixture<Mfe1FeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mfe1FeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mfe1FeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
