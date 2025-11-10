#!/bin/bash
# Certification deployment script for frontend

set -e

echo "🚀 Deploying Frontend to Certification environment..."

# Build production Docker image
echo "🔨 Building Docker image..."
docker build -f .devhub/deployment/certification/docker/Dockerfile -t devhub-portal:cert .

# Deploy based on target
if [ "$DEPLOY_TARGET" == "k8s" ]; then
    echo "☸️  Deploying to Kubernetes..."
    kubectl apply -f .devhub/deployment/certification/kubernetes/
fi

if [ "$DEPLOY_TARGET" == "render" ]; then
    echo "🎨 Deploying to Render..."
    echo "Push to certification branch to trigger Render deployment"
fi

if [ "$DEPLOY_TARGET" == "aws" ]; then
    echo "☁️  Deploying to AWS S3..."
    npm run build:cert
    aws s3 sync dist/devhub-portal-temp s3://devhub-portal-cert --delete
    aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
fi

echo "✅ Certification deployment complete!"
