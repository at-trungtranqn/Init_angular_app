import { Component } from '@angular/core';
import { Member } from './member';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [Member]
 
})
export class AppComponent {
  title = 'app';
}
