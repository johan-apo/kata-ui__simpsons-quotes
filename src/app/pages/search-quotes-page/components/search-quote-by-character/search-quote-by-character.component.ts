import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  Observable,
  Subject,
  debounceTime,
  distinctUntilChanged,
  map,
  switchMap,
} from 'rxjs';
import { QuotesService } from 'src/app/features/quotes-api.service';
import { Quote } from 'src/models';

@Component({
  selector: 'app-search-quote-by-character',
  templateUrl: './search-quote-by-character.component.html',
  styleUrls: ['./search-quote-by-character.component.scss'],
})
export class SearchQuoteByCharacterComponent {
  @Output() onSearch = new EventEmitter<Observable<Quote>>();

  quote$: Observable<Quote> | undefined;
  private searchText$ = new Subject<string>();

  constructor(private quotesService: QuotesService) {}

  ngOnInit() {
    this.quote$ = this.searchText$.pipe(
      debounceTime(800),
      distinctUntilChanged(),
      switchMap((query) => this.quotesService.getQuoteByQuery(query)),
      map((element) => element[0])
    );
    this.onSearch.emit(this.quote$)
  }

  onSearchQueryChange(query: string) {
    this.searchText$.next(query);
    
    // this.onSearch.emit(this.quote$);
  }
}
