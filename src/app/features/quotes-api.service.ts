import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Quote } from 'src/models';

@Injectable()
export class QuotesService {
  constructor(private http: HttpClient) {}

  getRandomQuote() {
    return this.http.get<Quote[]>(environment.theSimpsonsQuotesApiUrl);
  }

  getQuoteByQuery(query: string) {
    return this.http.get<Quote[]>(
      `${environment.theSimpsonsQuotesApiUrl}?character=${query}`
    );
  }
}
