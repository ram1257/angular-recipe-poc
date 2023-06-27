import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  selectedFeature = 'recipe';
  OnNavigate(feature: string) {
    this.selectedFeature = feature;
    console.log(this.selectedFeature, 'selected feature');
  }
}
