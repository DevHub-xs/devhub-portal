# DevHub Portal - DevOps Configuration

This directory contains all CI/CD, deployment, and infrastructure configurations for the DevHub Portal (Frontend).

## Structure

```
.devhub/
├── ci/                          # CI/CD Pipeline configurations
│   ├── development/
│   ├── certification/
│   └── production/
│
├── deployment/                  # Deployment configurations
│   ├── development/
│   │   ├── docker/
│   │   └── kubernetes/
│   ├── certification/
│   │   ├── docker/
│   │   ├── kubernetes/
│   │   ├── render/
│   │   └── aws/
│   └── production/
│       ├── docker/
│       ├── kubernetes/
│       ├── render/
│       └── aws/
│
├── scripts/                     # Deployment automation scripts
│   ├── deploy-dev.sh
│   ├── deploy-cert.sh
│   └── deploy-prod.sh
│
└── docs/                        # DevOps documentation
    └── DEPLOYMENT_GUIDE.md
```

## Quick Start

### Local Development
```bash
bash .devhub/scripts/deploy-dev.sh
```

### Certification Deployment
```bash
export DEPLOY_TARGET=k8s  # or 'render', 'aws'
bash .devhub/scripts/deploy-cert.sh
```

### Production Deployment
```bash
export DEPLOY_TARGET=k8s  # or 'aws'
bash .devhub/scripts/deploy-prod.sh
```

## Deployment Targets

- **Docker**: Local development
- **Kubernetes**: Certification and production clusters
- **Render**: Static site hosting (easy deployment)
- **AWS S3 + CloudFront**: Scalable static hosting with CDN
