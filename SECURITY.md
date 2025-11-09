# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 0.0.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability in DevHub Portal, please report it privately to maintain the security of our users.

**Please do not create public GitHub issues for security vulnerabilities.**

### How to Report

Send details to: **paccarini.bar@outlook.com**

Include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

### Response Time

- **Initial Response:** Within 48 hours
- **Status Update:** Within 5 business days
- **Fix Timeline:** Depends on severity

### Security Measures

DevHub Portal implements:
- JWT-based authentication
- HTTP-only secure cookies
- CSRF protection
- XSS prevention
- Input validation and sanitization
- Secure HTTP headers
- Role-based access control

## Best Practices

When deploying DevHub Portal:
1. Always use HTTPS in production
2. Keep dependencies updated
3. Configure CSP headers properly
4. Use strong JWT secrets
5. Enable rate limiting
6. Regular security audits

---

**Copyright © 2024-2025 Pedro Accarini. All Rights Reserved.**
