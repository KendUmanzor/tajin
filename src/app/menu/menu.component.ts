import { Component } from '@angular/core';
import { sidebarComponent } from '../sidebar/sidebar.component';
import { NavSimpleComponent } from "../nav-simple/nav-simple.component";
import { FootComponent } from '../foot/foot.component';

@Component({
    selector: 'app-menu',
    standalone: true,
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.scss',
    imports: [NavSimpleComponent, sidebarComponent, FootComponent]
})
export class MenuComponent {

}
