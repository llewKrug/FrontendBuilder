import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptUi } from './dept-ui';

describe('DeptUi', () => {
  let component: DeptUi;
  let fixture: ComponentFixture<DeptUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeptUi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeptUi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
