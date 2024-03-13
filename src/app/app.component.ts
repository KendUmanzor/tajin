import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { LandingComponent } from "./landing/landing.component";
import { OficiosComponent } from "./oficios/oficios.component";
import { SugComponent } from "./sug/sug.component";
import { FootComponent } from "./foot/foot.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, NavbarComponent, LandingComponent, OficiosComponent, SugComponent, FootComponent]
})
export class AppComponent {
  title = 'appweb';
}
