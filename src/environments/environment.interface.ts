/**
 * Environment configuration interface
 * Ensures type safety across all environment files
 */
export interface Environment {
  production: boolean;
  envName: string;
  apiUrl: string;
  apiTimeout: number;
  enableDebugMode: boolean;
  enableConsoleLog?: boolean;
  version: string;
  features: {
    authentication: boolean;
    userManagement: boolean;
    dashboard: boolean;
    devTools?: boolean;
  };
  auth: {
    tokenKey: string;
    refreshTokenKey: string;
    tokenExpiryKey: string;
  };
}
