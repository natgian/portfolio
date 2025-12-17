import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedIconLink } from './animated-icon-link';

describe('AnimatedIconLink', () => {
  let component: AnimatedIconLink;
  let fixture: ComponentFixture<AnimatedIconLink>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimatedIconLink]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatedIconLink);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
