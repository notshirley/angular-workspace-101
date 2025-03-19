import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackgroundChangerComponent } from "../../../the-library/src/background-changer/background-changer.component";
import { BackgroundChangerService } from '../../../the-library/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BackgroundChangerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-uno';
  text = ""
  
  constructor(private service: BackgroundChangerService) {
    this.service.getLoremIpsum().subscribe((result) => this.text = result);
  }

}
