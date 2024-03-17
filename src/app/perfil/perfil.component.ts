import { Component } from '@angular/core';
import { NavSimpleComponent } from "../nav-simple/nav-simple.component";

@Component({
    selector: 'app-perfil',
    standalone: true,
    templateUrl: './perfil.component.html',
    styleUrl: './perfil.component.scss',
    imports: [NavSimpleComponent]
})
export class PerfilComponent {

}
