// Base environment configuration
// This is the default environment that gets replaced by specific configs
import { Environment } from './environment.interface';

export const environment: Environment = {
  production: false,
  envName: 'default',
  apiUrl: 'http://localhost:3000/api',
  apiTimeout: 30000,
  enableDebugMode: true,
  version: '0.2.1',
  features: {
    authentication: true,
    userManagement: true,
    dashboard: true
  }
};
