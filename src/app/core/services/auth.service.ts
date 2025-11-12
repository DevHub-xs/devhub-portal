import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap, catchError, of } from 'rxjs';
import { ApiService } from './api.service';
import { User, LoginCredentials, RegisterData, AuthResponse } from '../models/user.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();
  
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(
    private apiService: ApiService,
    private router: Router
  ) {
    this.checkAuthStatus();
  }

  /**
   * Check if user is authenticated on app initialization
   */
  private checkAuthStatus(): void {
    const token = this.getToken();
    if (token && !this.isTokenExpired()) {
      this.getCurrentUser().subscribe({
        next: (user) => {
          this.currentUserSubject.next(user);
          this.isAuthenticatedSubject.next(true);
        },
        error: () => {
          this.clearAuthData();
        }
      });
    }
  }

  /**
   * Login user
   */
  login(credentials: LoginCredentials): Observable<AuthResponse> {
    return this.apiService.post<AuthResponse>('/auth/login', credentials)
      .pipe(
        tap(response => {
          this.setAuthData(response);
        })
      );
  }

  /**
   * Register new user
   */
  register(data: RegisterData): Observable<AuthResponse> {
    return this.apiService.post<AuthResponse>('/auth/register', data)
      .pipe(
        tap(response => {
          this.setAuthData(response);
        })
      );
  }

  /**
   * Logout user
   */
  logout(): void {
    this.apiService.post('/auth/logout', {}).subscribe();
    this.clearAuthData();
    this.router.navigate(['/auth/login']);
  }

  /**
   * Refresh access token
   */
  refreshToken(): Observable<AuthResponse> {
    const refreshToken = this.getRefreshToken();
    if (!refreshToken) {
      return of({} as AuthResponse);
    }

    return this.apiService.post<AuthResponse>('/auth/refresh', { refreshToken })
      .pipe(
        tap(response => {
          this.setAuthData(response);
        }),
        catchError(() => {
          this.clearAuthData();
          this.router.navigate(['/auth/login']);
          return of({} as AuthResponse);
        })
      );
  }

  /**
   * Get current user from API
   */
  getCurrentUser(): Observable<User> {
    return this.apiService.get<User>('/auth/me')
      .pipe(
        tap(user => {
          this.currentUserSubject.next(user);
          this.isAuthenticatedSubject.next(true);
        })
      );
  }

  /**
   * Update user profile
   */
  updateProfile(data: Partial<User>): Observable<User> {
    return this.apiService.patch<User>('/auth/profile', data)
      .pipe(
        tap(user => {
          this.currentUserSubject.next(user);
        })
      );
  }

  /**
   * Change password
   */
  changePassword(oldPassword: string, newPassword: string): Observable<any> {
    return this.apiService.post('/auth/change-password', {
      oldPassword,
      newPassword
    });
  }

  /**
   * Request password reset
   */
  forgotPassword(email: string): Observable<any> {
    return this.apiService.post('/auth/forgot-password', { email });
  }

  /**
   * Reset password with token
   */
  resetPassword(token: string, newPassword: string): Observable<any> {
    return this.apiService.post('/auth/reset-password', {
      token,
      newPassword
    });
  }

  /**
   * Set authentication data
   */
  private setAuthData(response: AuthResponse): void {
    if (response.tokens) {
      localStorage.setItem(environment.auth.tokenKey, response.tokens.accessToken);
      localStorage.setItem(environment.auth.refreshTokenKey, response.tokens.refreshToken);
      
      const expiryTime = Date.now() + (response.tokens.expiresIn * 1000);
      localStorage.setItem('token_expiry', expiryTime.toString());
    }

    if (response.user) {
      this.currentUserSubject.next(response.user);
      this.isAuthenticatedSubject.next(true);
    }
  }

  /**
   * Clear authentication data
   */
  private clearAuthData(): void {
    localStorage.removeItem(environment.auth.tokenKey);
    localStorage.removeItem(environment.auth.refreshTokenKey);
    localStorage.removeItem('token_expiry');
    this.currentUserSubject.next(null);
    this.isAuthenticatedSubject.next(false);
  }

  /**
   * Get access token
   */
  getToken(): string | null {
    return localStorage.getItem(environment.auth.tokenKey);
  }

  /**
   * Get refresh token
   */
  private getRefreshToken(): string | null {
    return localStorage.getItem(environment.auth.refreshTokenKey);
  }

  /**
   * Check if token is expired
   */
  private isTokenExpired(): boolean {
    const expiry = localStorage.getItem('token_expiry');
    if (!expiry) return true;
    return Date.now() > parseInt(expiry);
  }

  /**
   * Check if user is authenticated
   */
  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }

  /**
   * Get current user value
   */
  get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  /**
   * Check if user has specific role
   */
  hasRole(role: string): boolean {
    const user = this.currentUserValue;
    return user?.role === role;
  }

  /**
   * Check if user is admin
   */
  isAdmin(): boolean {
    return this.hasRole('admin');
  }
}
