#!/bin/bash
# Development deployment script for frontend

set -e

echo "🚀 Deploying Frontend to Development environment..."

# Start Docker services
echo "📦 Starting Docker container..."
cd .devhub/deployment/development/docker
docker-compose up -d

echo "✅ Frontend development deployment complete!"
echo "🌐 Portal running at http://localhost:4200"
