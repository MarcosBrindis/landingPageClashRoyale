import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardBattlesComponent } from "./pages/card-battles/card-battles.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardBattlesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'landingPageClash';
}
