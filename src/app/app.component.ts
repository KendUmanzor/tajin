import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingComponent } from "./landing/landing.component";
import { sidebarComponent } from './sidebar/sidebar.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, LandingComponent]
})
export class AppComponent {
  title = 'appweb';
}
