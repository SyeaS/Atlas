import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalendarSimpleComponent } from './calendar-simple-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CalendarSimpleComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('atlas');
}
