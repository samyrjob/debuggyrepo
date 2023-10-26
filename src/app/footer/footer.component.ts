// footer.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  // Add properties or methods here if needed

  subscribeToNewsletter() {
    // Add your logic for handling newsletter subscriptions here
    alert('Subscribed to the newsletter!');
  }
}
