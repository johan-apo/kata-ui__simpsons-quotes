import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { NotFoundPageComponent } from './pages/404-page/404-page.component';
import { SearchQuotesPageComponent } from './pages/search-quotes-page/search-quotes-page.component';


const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomePageComponent,
  },
  {
    path: 'search-quotes',
    component: SearchQuotesPageComponent,
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
