import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skeleton-loader',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [ngClass]="getSkeletonClass()" 
         class="animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 bg-[length:200%_100%] animate-shimmer">
    </div>
  `,
  styles: [`
    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
    .animate-shimmer {
      animation: shimmer 2s ease-in-out infinite;
    }
  `]
})
export class SkeletonLoaderComponent {
  @Input() type: 'text' | 'title' | 'avatar' | 'image' | 'button' | 'card' | 'circle' = 'text';
  @Input() width: string = '100%';
  @Input() height: string = 'auto';
  @Input() className: string = '';

  getSkeletonClass(): string {
    const baseClasses = 'rounded-lg';
    const typeClasses = {
      text: 'h-4 w-full',
      title: 'h-6 w-3/4',
      avatar: 'h-12 w-12 rounded-full',
      image: 'h-48 w-full',
      button: 'h-10 w-32',
      card: 'h-64 w-full',
      circle: 'h-16 w-16 rounded-full'
    };
    
    const typeClass = typeClasses[this.type] || typeClasses.text;
    const customClasses = this.className;
    
    return `${baseClasses} ${typeClass} ${customClasses}`;
  }
}
