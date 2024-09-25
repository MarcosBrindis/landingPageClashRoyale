import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyCardsComponent } from './body-cards.component';

describe('BodyCardsComponent', () => {
  let component: BodyCardsComponent;
  let fixture: ComponentFixture<BodyCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
