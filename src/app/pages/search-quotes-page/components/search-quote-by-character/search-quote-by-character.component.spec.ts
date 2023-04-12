import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchQuoteByCharacterComponent } from './search-quote-by-character.component';

describe('SearchQuoteByCharacterComponent', () => {
  let component: SearchQuoteByCharacterComponent;
  let fixture: ComponentFixture<SearchQuoteByCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchQuoteByCharacterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchQuoteByCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
