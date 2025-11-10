#!/bin/bash
# Production deployment script for frontend

set -e

echo "🚀 Deploying Frontend to Production environment..."
echo "⚠️  This will deploy to PRODUCTION. Are you sure? (yes/no)"
read confirmation

if [ "$confirmation" != "yes" ]; then
    echo "❌ Deployment cancelled"
    exit 1
fi

# Build production image
echo "🔨 Building production Docker image..."
docker build -f .devhub/deployment/production/docker/Dockerfile -t devhub-portal:prod .

# Deploy based on target
if [ "$DEPLOY_TARGET" == "k8s" ]; then
    echo "☸️  Deploying to Kubernetes..."
    kubectl apply -f .devhub/deployment/production/kubernetes/
fi

if [ "$DEPLOY_TARGET" == "aws" ]; then
    echo "☁️  Deploying to AWS S3..."
    npm run build:prod
    aws s3 sync dist/devhub-portal-temp s3://devhub-portal-prod --delete
    aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
fi

echo "✅ Production deployment complete!"
