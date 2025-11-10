/**
 * Default environment configuration (development)
 * This file is used during local development
 */
export const environment = {
  production: false,
  envName: 'development',
  apiUrl: 'http://localhost:3000',
  apiTimeout: 30000, // 30 seconds
  enableDebugTools: true,
  logLevel: 'debug',
  features: {
    analytics: false,
    errorReporting: false,
    advancedLogging: true
  }
};
