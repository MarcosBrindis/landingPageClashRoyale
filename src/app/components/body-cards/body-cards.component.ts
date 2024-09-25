import { Component } from '@angular/core';
import { CardComponent } from "../../shared/card/card.component";
@Component({
  selector: 'app-body-cards',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './body-cards.component.html',
  styleUrl: './body-cards.component.scss'
})
export class BodyCardsComponent {

}
