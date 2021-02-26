import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MARVEL MASHUP (arm emoji)';
  name = "Brock";

  asgardians = [
    "Loki",
    "Thor",
    "Heimdall"
  ]

}
