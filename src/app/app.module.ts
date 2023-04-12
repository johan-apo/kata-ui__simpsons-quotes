import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { NotFoundPageComponent } from './pages/404-page/404-page.component';
import { SearchQuotesPageComponent } from './pages/search-quotes-page/search-quotes-page.component';

import { TheSimpsonsTrademarkComponent } from './components/the-simpsons-trademark/the-simpsons-trademark.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchQuoteByCharacterComponent } from './pages/search-quotes-page/components/search-quote-by-character/search-quote-by-character.component';
import { QuoteCardComponent } from './pages/search-quotes-page/components/quote-card/quote-card.component';
import { QuotesService } from './features/quotes-api.service';
import { MenuComponent } from './components/navbar/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    NotFoundPageComponent,
    SearchQuotesPageComponent,
    TheSimpsonsTrademarkComponent,
    NavbarComponent,
    QuoteCardComponent,
    SearchQuoteByCharacterComponent,
    MenuComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [QuotesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
