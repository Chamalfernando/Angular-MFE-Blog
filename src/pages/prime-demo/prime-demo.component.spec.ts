import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeDemoComponent } from './prime-demo.component';

describe('PrimeDemoComponent', () => {
  let component: PrimeDemoComponent;
  let fixture: ComponentFixture<PrimeDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimeDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
