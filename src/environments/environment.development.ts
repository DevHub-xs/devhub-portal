// Development environment configuration
import { Environment } from './environment.interface';

export const environment: Environment = {
  production: false,
  envName: 'development',
  apiUrl: 'http://localhost:3000/api',
  apiTimeout: 30000,
  enableDebugMode: true,
  enableConsoleLog: true,
  version: '0.2.1',
  features: {
    authentication: true,
    userManagement: true,
    dashboard: true,
    devTools: true
  },
  auth: {
    tokenKey: 'devhub_auth_token',
    refreshTokenKey: 'devhub_refresh_token',
    tokenExpiryKey: 'devhub_token_expiry'
  }
};
