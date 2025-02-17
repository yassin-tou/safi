import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { equipment } from './equipment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'safi';
  lang: string = 'en'; // Default language
  equipments : equipment[] =[
    {title: "equipment1",src:"../assets/images/image1.jpg"},
    {title: "equipment2",src:"../assets/images/image1.jpg"},
    {title: "equipment3",src:"../assets/images/image1.jpg"},
    {title: "equipment4",src:"../assets/images/image1.jpg"},
    {title: "equipment5",src:"../assets/images/image1.jpg"},
  ];
changeLanguage(event: Event) {
  const selectedLang = (event.target as HTMLSelectElement).value;
  this.lang = selectedLang;
  console.log("Language changed to:", this.lang);
  // Here, you can add logic to update the app's language settings.
}
}
