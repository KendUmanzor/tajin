import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl:'./sidebar.component.html' ,
  styleUrl: './sidebar.component.scss'
})
export class sidebarComponent {
  isExpanded: boolean = false;

  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
  }
}
