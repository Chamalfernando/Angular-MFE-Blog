import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfeCompComponent } from './mfe-comp.component';

describe('MfeCompComponent', () => {
  let component: MfeCompComponent;
  let fixture: ComponentFixture<MfeCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MfeCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MfeCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
