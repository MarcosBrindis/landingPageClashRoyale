import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { BodyComponent } from "../../components/body/body.component";

@Component({
  selector: 'app-card-battles',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, BodyComponent],
  templateUrl: './card-battles.component.html',
  styleUrl: './card-battles.component.scss'
})
export class CardBattlesComponent {

}
