import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'library-background-changer',
  standalone: true,
  imports: [FormsModule],
  template: `
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <div class="container mt-3">
      <div class="input-group">
        <input type="text" class="form-control" [(ngModel)]="colorInput" placeholder="Enter a color">
        <button type="button" class="btn btn-primary" (click)="changeBackground()">Change</button>
      </div>
    </div>

  `,
  styleUrl: './background-changer.component.css'
})
export class BackgroundChangerComponent {
  colorInput: string = '';

  changeBackground() {
    console.log(this.colorInput);
    const container = document.querySelector('.background-change') as HTMLElement;
    if (container) {
      container.style.backgroundColor = this.colorInput;
    }  
  }
}
