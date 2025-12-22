import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackIcon } from './stack-icon';

describe('StackIcon', () => {
  let component: StackIcon;
  let fixture: ComponentFixture<StackIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StackIcon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StackIcon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
