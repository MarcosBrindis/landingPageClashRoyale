import { Component } from '@angular/core';
import { BodyCardsComponent } from "../body-cards/body-cards.component";
import { BottonSearchComponent } from "../../shared/botton-search/botton-search.component";

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [ BodyCardsComponent, BottonSearchComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {

}
