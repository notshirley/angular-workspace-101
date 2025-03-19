import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackgroundChangerComponent } from "../../../the-library/src/background-changer/background-changer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BackgroundChangerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-uno';
}
