import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookUpdateComponent } from './book-update.component';

describe('BookUpdateComponent', () => {
  let component: BookUpdateComponent;
  let fixture: ComponentFixture<BookUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
