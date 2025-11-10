import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { CardComponent } from '../../shared/components/card/card.component';
import { SkeletonLoaderComponent } from '../../shared/components/skeleton-loader/skeleton-loader.component';
import { ToastService } from '../../shared/services/toast.service';
import { fadeIn, slideInUp, scaleIn, listAnimation } from '../../shared/animations/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink, 
    MatButtonModule,
    CardComponent,
    SkeletonLoaderComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [fadeIn, slideInUp, scaleIn, listAnimation]
})
export class HomeComponent implements OnInit {
  loading = true;
  
  features = [
    {
      icon: '🚀',
      title: 'Developer Platform',
      description: 'Streamline your workflow and boost productivity with modern tools',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '🎨',
      title: 'Modern UI/UX',
      description: 'Beautiful, responsive design with smooth animations',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: '🔒',
      title: 'Secure & Scalable',
      description: 'Enterprise-grade security with role-based access control',
      gradient: 'from-green-500 to-teal-500'
    }
  ];

  constructor(private toastService: ToastService) {}

  ngOnInit(): void {
    // Simulate loading
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  showToast(type: 'success' | 'info' | 'warning' | 'error'): void {
    const messages = {
      success: 'Welcome to DevHub! Your account is ready.',
      info: 'Check out our new features and updates.',
      warning: 'Please complete your profile to continue.',
      error: 'Connection issue. Please try again.'
    };

    this.toastService[type](messages[type]);
  }
}
