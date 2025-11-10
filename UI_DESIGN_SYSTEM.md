# DevHub Portal - Modern UI/UX Design System

## 🎨 Overview

Modern, delightful UI design system for DevHub Portal featuring smooth animations, glassmorphism effects, and components inspired by top-tier platforms like Facebook, Instagram, and GitHub.

## ✨ Features

### Design Principles
- **60fps animations** - Buttery smooth micro-interactions
- **Glassmorphism & Neumorphism** - Modern depth and visual hierarchy
- **Dark mode support** - Seamless theme switching
- **Accessible** - WCAG compliant components
- **Responsive** - Mobile-first approach
- **Performance-optimized** - Minimal bundle impact

### Key Components

#### 1. Toast Notifications
Modern toast notifications with slide-in animations, auto-dismiss, and action buttons.

```typescript
// Inject the service
constructor(private toast: ToastService) {}

// Usage
this.toast.success('Profile updated successfully!');
this.toast.error('Failed to save changes');
this.toast.warning('Your session will expire soon');
this.toast.info('New messages available');

// With custom options
this.toast.custom({
  type: 'success',
  title: 'Success',
  message: 'Operation completed',
  duration: 3000,
  action: {
    label: 'Undo',
    callback: () => console.log('Undo clicked')
  }
});
```

#### 2. Card Component
Versatile card component with multiple variants and animations.

```html
<!-- Elevated card (default) -->
<app-card [hoverable]="true" [clickable]="true" (cardClick)="handleClick()">
  <div header>
    <h3 class="text-xl font-bold">Card Title</h3>
  </div>
  
  <p>Card content goes here</p>
  
  <div footer>
    <button class="btn-primary">Action</button>
  </div>
</app-card>

<!-- Glassmorphism card -->
<app-card variant="glass" [glassmorphism]="true">
  Content with glass effect
</app-card>

<!-- Outlined card -->
<app-card variant="outlined" [gradient]="true">
  Card with gradient overlay
</app-card>
```

**Card Variants:**
- `elevated` - Shadow and border (default)
- `outlined` - Border only, transparent background
- `flat` - Solid background, no shadow
- `glass` - Glassmorphism effect with backdrop blur

#### 3. Skeleton Loader
Beautiful loading placeholders for better perceived performance.

```html
<!-- Text skeleton -->
<app-skeleton-loader type="text"></app-skeleton-loader>

<!-- Title skeleton -->
<app-skeleton-loader type="title"></app-skeleton-loader>

<!-- Avatar skeleton -->
<app-skeleton-loader type="avatar"></app-skeleton-loader>

<!-- Image skeleton -->
<app-skeleton-loader type="image"></app-skeleton-loader>

<!-- Custom skeleton -->
<app-skeleton-loader 
  type="card" 
  className="h-64 w-full">
</app-skeleton-loader>
```

### Animation Library

Import animations in your components:

```typescript
import { fadeIn, slideInRight, scaleIn, bounceIn } from './shared/animations/animations';

@Component({
  animations: [fadeIn, slideInRight, scaleIn]
})
```

**Available Animations:**
- `fadeIn` / `fadeOut` / `fadeInOut` - Opacity transitions
- `slideInRight` / `slideInLeft` / `slideInUp` / `slideInDown` - Slide animations
- `scaleIn` / `scaleInOut` - Scale transformations
- `bounceIn` - Bouncy entrance
- `shakeAnimation` - Error feedback
- `pulseAnimation` - Attention grabber
- `listAnimation` - Staggered list items
- `modalAnimation` - Modal/dialog animations
- `toastAnimation` - Toast notifications
- `expandCollapse` - Accordion-style
- `rotateAnimation` - Icon rotations

## 🎭 Utility Classes

### Buttons

```html
<!-- Primary button with gradient -->
<button class="btn-primary">
  <span class="material-icons">check</span>
  Save Changes
</button>

<!-- Secondary button -->
<button class="btn-secondary">Submit</button>

<!-- Outlined button -->
<button class="btn-outline">Cancel</button>

<!-- Ghost button -->
<button class="btn-ghost">Learn More</button>
```

### Cards & Surfaces

```html
<!-- Glassmorphism card -->
<div class="glass-card p-6">
  Content with frosted glass effect
</div>

<!-- Neumorphism card -->
<div class="neu-card p-6">
  Content with soft shadows
</div>
```

### Inputs

```html
<!-- Modern input -->
<input type="text" 
       class="input" 
       placeholder="Enter your name">

<!-- Input with error state -->
<input type="email" 
       class="input input-error" 
       placeholder="Email address">
```

### Badges

```html
<span class="badge-primary">New</span>
<span class="badge-success">Active</span>
<span class="badge-error">Error</span>
<span class="badge-warning">Warning</span>
```

### Avatars

```html
<!-- Small avatar -->
<div class="avatar-sm">JD</div>

<!-- Medium avatar -->
<div class="avatar-md">
  <img src="avatar.jpg" alt="User">
</div>

<!-- Large avatar -->
<div class="avatar-lg">AB</div>

<!-- Extra large avatar -->
<div class="avatar-xl">
  <img src="avatar.jpg" alt="User">
</div>
```

### Status Indicators

```html
<!-- Online status -->
<span class="status-online"></span>

<!-- Offline status -->
<span class="status-offline"></span>

<!-- Busy status -->
<span class="status-busy"></span>

<!-- Away status -->
<span class="status-away"></span>
```

### Text Utilities

```html
<!-- Gradient text -->
<h1 class="text-gradient">Modern Design</h1>

<!-- With hover glow -->
<div class="hover-glow">Hover me</div>

<!-- Custom scrollbar -->
<div class="scrollbar-custom overflow-y-auto">
  Long content...
</div>
```

## 🎨 Color Palette

### Primary Colors
- `primary-50` to `primary-950` - Blue tones
- Default: `primary-600` (#0284c7)

### Secondary Colors
- `secondary-50` to `secondary-900` - Purple tones
- Default: `secondary-600` (#9333ea)

### Semantic Colors
- `success-500/600` - Green
- `error-500/600` - Red
- `warning-500/600` - Yellow

### Dark Theme
- `dark-50` to `dark-950` - Gray scale
- Automatically applied in dark mode

## 🚀 Usage Examples

### Complete Login Form

```html
<app-card variant="glass" class="max-w-md mx-auto">
  <div header>
    <h2 class="text-2xl font-bold text-gradient">Welcome Back</h2>
    <p class="text-gray-600 dark:text-gray-400">Sign in to continue</p>
  </div>
  
  <form class="space-y-4">
    <div>
      <label class="block text-sm font-medium mb-2">Email</label>
      <input type="email" class="input" placeholder="you@example.com">
    </div>
    
    <div>
      <label class="block text-sm font-medium mb-2">Password</label>
      <input type="password" class="input" placeholder="••••••••">
    </div>
    
    <button type="submit" class="btn-primary w-full">
      <span class="material-icons">login</span>
      Sign In
    </button>
  </form>
  
  <div footer>
    <p class="text-sm text-center text-gray-600">
      Don't have an account? 
      <a href="#" class="text-primary-600 hover:underline font-medium">Sign up</a>
    </p>
  </div>
</app-card>
```

### User Profile Card

```html
<app-card [hoverable]="true" class="max-w-sm">
  <div class="text-center">
    <!-- Avatar with status -->
    <div class="relative inline-block">
      <div class="avatar-xl">
        <img src="user-avatar.jpg" alt="User">
      </div>
      <span class="status-online absolute bottom-0 right-0"></span>
    </div>
    
    <!-- User info -->
    <h3 class="text-xl font-bold mt-4">John Doe</h3>
    <p class="text-gray-600 dark:text-gray-400">Full Stack Developer</p>
    
    <!-- Stats -->
    <div class="flex justify-around mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
      <div>
        <div class="text-2xl font-bold text-gradient">128</div>
        <div class="text-xs text-gray-500">Projects</div>
      </div>
      <div>
        <div class="text-2xl font-bold text-gradient">1.2k</div>
        <div class="text-xs text-gray-500">Followers</div>
      </div>
      <div>
        <div class="text-2xl font-bold text-gradient">456</div>
        <div class="text-xs text-gray-500">Following</div>
      </div>
    </div>
    
    <!-- Actions -->
    <div class="flex gap-2 mt-6">
      <button class="btn-primary flex-1">Follow</button>
      <button class="btn-outline flex-1">Message</button>
    </div>
  </div>
</app-card>
```

### Loading State

```html
<app-card *ngIf="loading">
  <app-skeleton-loader type="title"></app-skeleton-loader>
  <app-skeleton-loader type="text" className="mt-2"></app-skeleton-loader>
  <app-skeleton-loader type="text" className="mt-2 w-3/4"></app-skeleton-loader>
  <app-skeleton-loader type="image" className="mt-4"></app-skeleton-loader>
</app-card>

<app-card *ngIf="!loading" [@fadeIn]>
  <!-- Actual content -->
</app-card>
```

## 📱 Responsive Design

All components are mobile-first and responsive:

```html
<!-- Responsive grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <app-card *ngFor="let item of items">
    {{ item.title }}
  </app-card>
</div>
```

## 🌙 Dark Mode

Dark mode is automatically supported. Toggle with:

```typescript
// Add to HTML element
document.documentElement.classList.toggle('dark');
```

## 🎯 Best Practices

1. **Use animations sparingly** - Don't overdo it
2. **Consistent spacing** - Use Tailwind spacing scale
3. **Semantic colors** - Use success/error/warning appropriately
4. **Loading states** - Always show skeleton loaders
5. **Feedback** - Use toasts for user actions
6. **Accessibility** - Include aria labels and keyboard navigation

## 📚 Next Steps

- Create Modal/Dialog component
- Add Infinite Scroll directive
- Implement Pull-to-Refresh
- Create Image Gallery with Lightbox
- Add Autocomplete Input
- Build Notification Center
- Create Timeline component
- Add Chart components

## 🔧 Configuration

Edit `tailwind.config.js` to customize:
- Colors
- Animations
- Spacing
- Fonts
- Breakpoints

Edit `src/styles.scss` for:
- Global styles
- Component overrides
- Custom utilities
