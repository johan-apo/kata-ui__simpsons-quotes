import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchQuotesPageComponent } from './search-quotes-page.component';

describe('SearchQuotesComponent', () => {
  let component: SearchQuotesPageComponent;
  let fixture: ComponentFixture<SearchQuotesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchQuotesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchQuotesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
