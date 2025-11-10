import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToastContainerComponent } from './shared/components/toast-container/toast-container.component';
import { routeAnimation } from './shared/animations/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToastContainerComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [routeAnimation]
})
export class AppComponent implements OnInit {
  title = 'DevHub Portal';
  isDarkMode = true;
  
  ngOnInit() {
    // Set dark mode by default
    this.applyDarkMode();
  }
  
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.applyDarkMode();
  }
  
  private applyDarkMode() {
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', this.isDarkMode.toString());
  }
  
  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
}
