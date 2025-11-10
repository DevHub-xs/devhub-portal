import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { scaleIn, hoverScale } from '../../animations/animations';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [@scaleIn]
         [ngClass]="getCardClass()"
         (mouseenter)="isHovered = true"
         (mouseleave)="isHovered = false"
         (click)="handleClick()"
         class="group relative overflow-hidden transition-all duration-300">
      
      <!-- Glassmorphism overlay (optional) -->
      <div *ngIf="glassmorphism" 
           class="absolute inset-0 bg-gray-200/40 dark:bg-navy-900/60 backdrop-blur-lg"></div>
      
      <!-- Gradient overlay (optional) -->
      <div *ngIf="gradient" 
           [ngClass]="getGradientClass()"
           class="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300"></div>
      
      <!-- Card content -->
      <div class="relative z-10">
        <!-- Header slot -->
        <div *ngIf="hasHeader" class="p-6 pb-0">
          <ng-content select="[header]"></ng-content>
        </div>
        
        <!-- Body slot -->
        <div [ngClass]="{'p-6': padding}">
          <ng-content></ng-content>
        </div>
        
        <!-- Footer slot -->
        <div *ngIf="hasFooter" class="p-6 pt-0 border-t border-neon-300 dark:border-gold-500/20">
          <ng-content select="[footer]"></ng-content>
        </div>
      </div>
      
      <!-- Hover effect indicator -->
      <div *ngIf="hoverable" 
           class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-500 to-neon-400 dark:from-gold-500 dark:to-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </div>
  `,
  animations: [scaleIn, hoverScale]
})
export class CardComponent {
  @Input() variant: 'elevated' | 'outlined' | 'flat' | 'glass' = 'elevated';
  @Input() padding: boolean = true;
  @Input() hoverable: boolean = true;
  @Input() clickable: boolean = false;
  @Input() gradient: boolean = false;
  @Input() glassmorphism: boolean = false;
  @Input() className: string = '';
  
  @Output() cardClick = new EventEmitter<void>();
  
  isHovered = false;
  hasHeader = false;
  hasFooter = false;

  ngAfterContentInit(): void {
    // Check for slotted content
    this.hasHeader = true; // Simplified for now
    this.hasFooter = true;
  }

  handleClick(): void {
    if (this.clickable) {
      this.cardClick.emit();
    }
  }

  getCardClass(): string {
    const baseClasses = 'rounded-2xl transition-all duration-300';
    const variantClasses = {
      elevated: 'bg-white dark:bg-navy-950 shadow-soft hover:shadow-soft-lg border border-neon-400 dark:border-gold-500/30 text-gray-900 dark:text-gold-400',
      outlined: 'bg-transparent border-2 border-neon-500 dark:border-navy-900 hover:border-neon-600 dark:hover:border-gold-500 text-gray-900 dark:text-gold-400',
      flat: 'bg-gray-100 dark:bg-navy-950 text-gray-900 dark:text-gold-400',
      glass: 'bg-white/95 dark:bg-navy-950/90 backdrop-blur-xl shadow-glass border border-neon-400/60 dark:border-gold-500/30 text-gray-900 dark:text-gold-400'
    };
    
    const hoverClass = this.hoverable ? 'hover:-translate-y-1' : '';
    const clickClass = this.clickable ? 'cursor-pointer active:scale-98' : '';
    
    return `${baseClasses} ${variantClasses[this.variant]} ${hoverClass} ${clickClass} ${this.className}`;
  }

  getGradientClass(): string {
    return 'bg-gradient-to-br from-gold-500 via-primary-500 to-gold-600';
  }
}
