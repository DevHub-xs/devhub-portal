import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Toast, ToastConfig } from '../models/toast.model';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toasts$ = new BehaviorSubject<Toast[]>([]);
  private config: ToastConfig = {
    position: 'top-right',
    duration: 5000,
    maxToasts: 5
  };

  getToasts(): Observable<Toast[]> {
    return this.toasts$.asObservable();
  }

  private generateId(): string {
    return `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  private addToast(toast: Toast): void {
    const currentToasts = this.toasts$.value;
    
    // Remove oldest toast if max limit reached
    if (currentToasts.length >= (this.config.maxToasts || 5)) {
      currentToasts.shift();
    }

    this.toasts$.next([...currentToasts, toast]);

    // Auto remove after duration
    if (toast.duration !== 0) {
      setTimeout(() => {
        this.remove(toast.id);
      }, toast.duration || this.config.duration || 5000);
    }
  }

  success(message: string, title?: string, duration?: number): void {
    this.addToast({
      id: this.generateId(),
      type: 'success',
      title,
      message,
      duration,
      icon: 'check_circle'
    });
  }

  error(message: string, title?: string, duration?: number): void {
    this.addToast({
      id: this.generateId(),
      type: 'error',
      title: title || 'Error',
      message,
      duration: duration || 7000,
      icon: 'error'
    });
  }

  warning(message: string, title?: string, duration?: number): void {
    this.addToast({
      id: this.generateId(),
      type: 'warning',
      title: title || 'Warning',
      message,
      duration,
      icon: 'warning'
    });
  }

  info(message: string, title?: string, duration?: number): void {
    this.addToast({
      id: this.generateId(),
      type: 'info',
      title,
      message,
      duration,
      icon: 'info'
    });
  }

  custom(toast: Partial<Toast>): void {
    this.addToast({
      id: this.generateId(),
      type: 'info',
      message: '',
      ...toast
    } as Toast);
  }

  remove(id: string): void {
    const currentToasts = this.toasts$.value;
    this.toasts$.next(currentToasts.filter(t => t.id !== id));
  }

  clear(): void {
    this.toasts$.next([]);
  }

  setConfig(config: Partial<ToastConfig>): void {
    this.config = { ...this.config, ...config };
  }
}
