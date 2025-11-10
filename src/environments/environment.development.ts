/**
 * Development environment configuration
 * Used for local development and testing
 */
export const environment = {
  production: false,
  envName: 'development',
  apiUrl: 'http://localhost:3000',
  apiTimeout: 30000,
  enableDebugTools: true,
  logLevel: 'debug',
  features: {
    analytics: false,
    errorReporting: false,
    advancedLogging: true
  }
};
