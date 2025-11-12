import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../services/toast.service';
import { Toast } from '../../models/toast.model';
import { toastAnimation } from '../../animations/animations';

@Component({
  selector: 'app-toast-container',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="fixed top-4 right-4 z-50 space-y-3 max-w-sm w-full pointer-events-none">
      <div *ngFor="let toast of toasts"
           [@toastAnimation]
           class="pointer-events-auto transform transition-all duration-300">
        <div [ngClass]="getToastClass(toast.type)" 
             class="p-4 rounded-xl shadow-soft-lg backdrop-blur-md border flex items-start space-x-3 relative overflow-hidden group">
          
          <div class="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300"
               [ngClass]="getGradientClass(toast.type)"></div>
          
          <div class="flex-shrink-0 mt-0.5">
            <div [ngClass]="getIconBgClass(toast.type)" 
                 class="w-8 h-8 rounded-lg flex items-center justify-center">
              <span class="material-icons text-white text-lg">{{ toast.icon }}</span>
            </div>
          </div>
          
          <div class="flex-1 min-w-0 relative z-10">
            <h4 *ngIf="toast.title" 
                class="font-semibold text-sm text-gray-900 dark:text-white mb-0.5">
              {{ toast.title }}
            </h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              {{ toast.message }}
            </p>
          </div>
          
          <button (click)="close(toast.id)"
                  class="flex-shrink-0 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors relative z-10">
            <span class="material-icons text-lg">close</span>
          </button>
          
          <div class="absolute bottom-0 left-0 right-0 h-1 bg-gray-200/30 dark:bg-gray-700/30 overflow-hidden">
            <div class="h-full animate-progress" 
                 [ngClass]="getProgressClass(toast.type)"
                 [style.animation-duration.ms]="toast.duration || 5000"></div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    @keyframes progress {
      from { width: 100%; }
      to { width: 0%; }
    }
    .animate-progress {
      animation: progress linear forwards;
    }
  `],
  animations: [toastAnimation]
})
export class ToastContainerComponent implements OnInit {
  toasts: Toast[] = [];

  constructor(private toastService: ToastService) {}

  ngOnInit(): void {
    this.toastService.getToasts().subscribe(toasts => {
      this.toasts = toasts;
    });
  }

  close(id: string): void {
    this.toastService.remove(id);
  }

  getToastClass(type: string): string {
    const baseClasses = 'border-l-4';
    const typeClasses = {
      success: 'bg-white/90 dark:bg-gray-800/90 border-green-500',
      error: 'bg-white/90 dark:bg-gray-800/90 border-red-500',
      warning: 'bg-white/90 dark:bg-gray-800/90 border-yellow-500',
      info: 'bg-white/90 dark:bg-gray-800/90 border-blue-500'
    };
    return `${baseClasses} ${typeClasses[type as keyof typeof typeClasses]}`;
  }

  getIconBgClass(type: string): string {
    const classes = {
      success: 'bg-gradient-to-br from-green-500 to-green-600',
      error: 'bg-gradient-to-br from-red-500 to-red-600',
      warning: 'bg-gradient-to-br from-yellow-500 to-yellow-600',
      info: 'bg-gradient-to-br from-blue-500 to-blue-600'
    };
    return classes[type as keyof typeof classes];
  }

  getGradientClass(type: string): string {
    const classes = {
      success: 'bg-gradient-to-br from-green-500 to-green-600',
      error: 'bg-gradient-to-br from-red-500 to-red-600',
      warning: 'bg-gradient-to-br from-yellow-500 to-yellow-600',
      info: 'bg-gradient-to-br from-blue-500 to-blue-600'
    };
    return classes[type as keyof typeof classes];
  }

  getProgressClass(type: string): string {
    const classes = {
      success: 'bg-green-500',
      error: 'bg-red-500',
      warning: 'bg-yellow-500',
      info: 'bg-blue-500'
    };
    return classes[type as keyof typeof classes];
  }
}
