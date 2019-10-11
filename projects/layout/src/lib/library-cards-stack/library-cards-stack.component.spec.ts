import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryCardsStackComponent } from './library-cards-stack.component';

describe('LibraryCardsStackComponent', () => {
  let component: LibraryCardsStackComponent;
  let fixture: ComponentFixture<LibraryCardsStackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryCardsStackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryCardsStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
