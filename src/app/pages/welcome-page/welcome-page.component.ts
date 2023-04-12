import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
})
export class WelcomePageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.mockWelcomeSplashScreen();
  }

  mockWelcomeSplashScreen() {
    this.redirectToSearchQuotesPageInNSeconds();
  }

  redirectToSearchQuotesPageInNSeconds(seconds: number = 3) {
    const delayInMilliseconds = seconds * 1000;

    setTimeout(() => {
      this.router.navigate(['search-quotes']);
    }, delayInMilliseconds);
  }
}
