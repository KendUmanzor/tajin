import { Component } from '@angular/core';
import { sidebarComponent } from '../sidebar/sidebar.component'

@Component({
  selector: 'app-nav-simple',
  standalone: true,
  imports: [sidebarComponent],
  templateUrl: './nav-simple.component.html',
  styleUrl: './nav-simple.component.scss'
})
export class NavSimpleComponent {

}
