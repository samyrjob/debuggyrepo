import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('glowOnHover', [
      state(
        'inactive',
        style({ backgroundColor: 'transparent', color: '#fff' })
      ),
      state('active', style({ backgroundColor: 'white', color: 'white' })),
      transition('inactive => active', [animate('0.3s')]),
      transition('active => inactive', [animate('0.3s')]),
    ]),
  ],
})
export class HeaderComponent {
  isHovered: { [key: string]: string } = {
    home: 'inactive',
    products: 'inactive',
    aboutUs: 'inactive',
    contact: 'inactive',
  };

  onLiMouseOver(category: string) {
    this.isHovered[category] = 'active';
  }

  onLiMouseLeave(category: string) {
    this.isHovered[category] = 'inactive';
  }

  isHighlighted = true; // Condition to determine whether to apply the class
}
