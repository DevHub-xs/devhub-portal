# Environment Configuration

This directory contains environment-specific configuration files for the DevHub Portal.

## Files

- **`environment.ts`** - Base environment (default)
- **`environment.development.ts`** - Local development environment
- **`environment.certification.ts`** - Staging/Certification environment
- **`environment.production.ts`** - Production environment
- **`environment.local.template.ts`** - Template for creating custom local configs

## Configuration

### API URL
Update the `apiUrl` in each environment file to point to your backend API:

- **Development**: `http://localhost:3000/api`
- **Certification**: `https://api-cert.devhub.example.com/api`
- **Production**: `https://api.devhub.example.com/api`

### Feature Flags
Enable/disable features per environment:

```typescript
features: {
  authentication: true,
  userManagement: true,
  dashboard: true,
  devTools: true  // Only enabled in development
}
```

### Authentication
Configure auth token storage keys:

```typescript
auth: {
  tokenKey: 'devhub_auth_token',
  refreshTokenKey: 'devhub_refresh_token',
  tokenExpiryKey: 'devhub_token_expiry'
}
```

## Usage

The environment files are automatically swapped during build/serve based on the configuration:

```bash
# Development (uses environment.development.ts)
npm run start
npm run start:dev

# Certification (uses environment.certification.ts)
npm run start:cert
npm run build:cert

# Production (uses environment.production.ts)
npm run start:prod
npm run build:prod
```

## Security Notes

⚠️ **Never commit sensitive data** like API keys, secrets, or credentials to these files.

For sensitive configuration:
1. Use `.env` files (not committed to git)
2. Use environment variables
3. Use a secrets management service

## Creating Custom Local Environment

1. Copy `environment.local.template.ts` to `environment.local.ts`
2. Customize your settings
3. Update `angular.json` to use it (optional)
