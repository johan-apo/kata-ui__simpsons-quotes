import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { QuotesService } from 'src/app/features/quotes-api.service';
import { Quote } from 'src/models';

@Component({
  selector: 'app-search-quotes',
  templateUrl: './search-quotes-page.component.html',
  styleUrls: ['./search-quotes-page.component.scss'],
})
export class SearchQuotesPageComponent implements OnInit {
  quote: Quote | undefined;

  constructor(private quotesService: QuotesService) {}

  onGetQuote(quoteObservable: Observable<Quote>) {
    quoteObservable.subscribe((quote) => (this.quote = quote));
  }

  ngOnInit(): void {
    this.quotesService
      .getRandomQuote()
      .pipe(map((quotes) => quotes[0]))
      .subscribe((quote) => (this.quote = quote));
  }
}
