import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,              // ✅ mark as standalone
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']       // ✅ correct key is styleUrls
})
export class App {
  protected readonly title = signal('frontend');
}
