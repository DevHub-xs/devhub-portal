/**
 * Production environment configuration
 * Used for live production deployment
 */
export const environment = {
  production: true,
  envName: 'production',
  apiUrl: 'https://api.devhub.example.com',
  apiTimeout: 30000,
  enableDebugTools: false,
  logLevel: 'error',
  features: {
    analytics: true,
    errorReporting: true,
    advancedLogging: false
  }
};
