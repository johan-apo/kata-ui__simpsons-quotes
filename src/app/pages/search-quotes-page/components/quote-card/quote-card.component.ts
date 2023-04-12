import { Component, Input } from '@angular/core';
import { Quote } from 'src/models';

@Component({
  selector: 'app-quote-card',
  templateUrl: './quote-card.component.html',
  styleUrls: ['./quote-card.component.scss'],
})
export class QuoteCardComponent {
  @Input() quoteData: Quote | undefined;
}
