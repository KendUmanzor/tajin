import { Component } from '@angular/core';
import { sidebarComponent } from '../sidebar/sidebar.component';
import { NavSimpleComponent } from "../nav-simple/nav-simple.component";

@Component({
    selector: 'app-menu',
    standalone: true,
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.scss',
    imports: [NavSimpleComponent, sidebarComponent]
})
export class MenuComponent {

}
