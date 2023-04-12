import { AppComponent } from './app.component';
import { render, screen } from '@testing-library/angular';

describe('AppComponent', () => {
  it('should PASS', async () => {
    await render(AppComponent, {
      componentProperties: {
        title: 'Hello world!',
      },
    });

    const welcomeText = screen.getByText(/hell world/i);

    expect(welcomeText).toBeInTheDocument();
  });
});
