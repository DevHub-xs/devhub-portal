/**
 * Certification environment configuration
 * Used for pre-production testing and validation
 */
export const environment = {
  production: false,
  envName: 'certification',
  apiUrl: 'https://api-cert.devhub.example.com',
  apiTimeout: 30000,
  enableDebugTools: true,
  logLevel: 'info',
  features: {
    analytics: true,
    errorReporting: true,
    advancedLogging: true
  }
};
