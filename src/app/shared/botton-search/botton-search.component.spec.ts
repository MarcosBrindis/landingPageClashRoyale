import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottonSearchComponent } from './botton-search.component';

describe('BottonSearchComponent', () => {
  let component: BottonSearchComponent;
  let fixture: ComponentFixture<BottonSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottonSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottonSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
