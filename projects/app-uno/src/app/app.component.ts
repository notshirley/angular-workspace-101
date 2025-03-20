import { Component } from '@angular/core';
import { BackgroundChangerComponent, BackgroundChangerService } from 'the-library';

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
