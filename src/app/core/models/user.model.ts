// User model for MongoDB Atlas
export interface User {
  _id?: string;
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
  avatar?: string;
  role: UserRole;
  createdAt?: Date;
  updatedAt?: Date;
  lastLogin?: Date;
  isActive?: boolean;
}

export enum UserRole {
  ADMIN = 'admin',
  DEVELOPER = 'developer',
  VIEWER = 'viewer'
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  username: string;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

export interface AuthResponse {
  user: User;
  tokens: AuthTokens;
}
