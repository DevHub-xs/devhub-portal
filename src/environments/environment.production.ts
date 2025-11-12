// Production environment configuration
import { Environment } from './environment.interface';

export const environment: Environment = {
  production: true,
  envName: 'production',
  apiUrl: 'https://api.devhub.example.com/api',
  apiTimeout: 30000,
  enableDebugMode: false,
  enableConsoleLog: false,
  version: '0.2.1',
  features: {
    authentication: true,
    userManagement: true,
    dashboard: true,
    devTools: false
  },
  auth: {
    tokenKey: 'devhub_auth_token',
    refreshTokenKey: 'devhub_refresh_token',
    tokenExpiryKey: 'devhub_token_expiry'
  }
};
