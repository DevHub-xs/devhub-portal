# Environment Configuration Template
# Copy this file and customize for your local environment
# 
# Available environment files:
# - environment.ts (base/default)
# - environment.development.ts (local development)
# - environment.certification.ts (staging/cert)
# - environment.production.ts (production)

export const environment = {
  production: false,
  envName: 'local',
  
  // API Configuration
  apiUrl: 'http://localhost:3000/api',  // Change to your API URL
  apiTimeout: 30000,                     // API timeout in milliseconds
  
  // Debug Settings
  enableDebugMode: true,
  enableConsoleLog: true,
  
  // Application Version
  version: '0.2.1',
  
  // Feature Flags
  features: {
    authentication: true,
    userManagement: true,
    dashboard: true,
    devTools: true
  },
  
  // Authentication Configuration
  auth: {
    tokenKey: 'devhub_auth_token',
    refreshTokenKey: 'devhub_refresh_token',
    tokenExpiryKey: 'devhub_token_expiry'
  }
};
