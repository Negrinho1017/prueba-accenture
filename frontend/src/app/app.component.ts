import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  selectedColor: String = "#F8F8FF";

  changeSelectedColor(selectedColor:String){
    this.selectedColor = selectedColor;
    localStorage.setItem('selectedColor',<string> this.selectedColor);
  }
}
