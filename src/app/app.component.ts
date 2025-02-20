import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../enironments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BuildandPro';
  apiUrl = environment.apiUrl
}
