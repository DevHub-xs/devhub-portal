import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { ApiResponse, QueryParams } from '../models/api.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  /**
   * GET request
   */
  get<T>(endpoint: string, params?: QueryParams): Observable<T> {
    const httpParams = this.buildParams(params);
    return this.http.get<ApiResponse<T>>(`${this.apiUrl}${endpoint}`, { params: httpParams })
      .pipe(
        map(response => this.handleResponse(response)),
        catchError(error => this.handleError(error))
      );
  }

  /**
   * POST request
   */
  post<T>(endpoint: string, body: any): Observable<T> {
    return this.http.post<ApiResponse<T>>(`${this.apiUrl}${endpoint}`, body)
      .pipe(
        map(response => this.handleResponse(response)),
        catchError(error => this.handleError(error))
      );
  }

  /**
   * PUT request
   */
  put<T>(endpoint: string, body: any): Observable<T> {
    return this.http.put<ApiResponse<T>>(`${this.apiUrl}${endpoint}`, body)
      .pipe(
        map(response => this.handleResponse(response)),
        catchError(error => this.handleError(error))
      );
  }

  /**
   * PATCH request
   */
  patch<T>(endpoint: string, body: any): Observable<T> {
    return this.http.patch<ApiResponse<T>>(`${this.apiUrl}${endpoint}`, body)
      .pipe(
        map(response => this.handleResponse(response)),
        catchError(error => this.handleError(error))
      );
  }

  /**
   * DELETE request
   */
  delete<T>(endpoint: string): Observable<T> {
    return this.http.delete<ApiResponse<T>>(`${this.apiUrl}${endpoint}`)
      .pipe(
        map(response => this.handleResponse(response)),
        catchError(error => this.handleError(error))
      );
  }

  /**
   * Upload file
   */
  upload<T>(endpoint: string, file: File, additionalData?: any): Observable<T> {
    const formData = new FormData();
    formData.append('file', file);
    
    if (additionalData) {
      Object.keys(additionalData).forEach(key => {
        formData.append(key, additionalData[key]);
      });
    }

    return this.http.post<ApiResponse<T>>(`${this.apiUrl}${endpoint}`, formData)
      .pipe(
        map(response => this.handleResponse(response)),
        catchError(error => this.handleError(error))
      );
  }

  /**
   * Build HTTP params from query params
   */
  private buildParams(params?: QueryParams): HttpParams {
    let httpParams = new HttpParams();

    if (params) {
      Object.keys(params).forEach(key => {
        const value = params[key as keyof QueryParams];
        if (value !== undefined && value !== null) {
          if (typeof value === 'object') {
            httpParams = httpParams.append(key, JSON.stringify(value));
          } else {
            httpParams = httpParams.append(key, value.toString());
          }
        }
      });
    }

    return httpParams;
  }

  /**
   * Handle successful API response
   */
  private handleResponse<T>(response: ApiResponse<T>): T {
    if (response.success && response.data !== undefined) {
      return response.data;
    }
    throw new Error(response.message || 'Unknown error occurred');
  }

  /**
   * Handle API errors
   */
  private handleError(error: any): Observable<never> {
    let errorMessage = 'An error occurred';

    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = error.error?.message || error.message || errorMessage;
      
      if (error.status === 401) {
        errorMessage = 'Unauthorized. Please login again.';
      } else if (error.status === 403) {
        errorMessage = 'Access forbidden.';
      } else if (error.status === 404) {
        errorMessage = 'Resource not found.';
      } else if (error.status === 500) {
        errorMessage = 'Server error. Please try again later.';
      }
    }

    console.error('API Error:', errorMessage, error);
    return throwError(() => new Error(errorMessage));
  }
}
