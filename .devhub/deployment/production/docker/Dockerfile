# Production-optimized Dockerfile
FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY . .
RUN npm run build:prod

FROM nginx:alpine
COPY --from=builder /app/dist/devhub-portal-temp /usr/share/nginx/html
COPY .devhub/deployment/production/docker/nginx.conf /etc/nginx/conf.d/default.conf

RUN addgroup -g 1001 -S nginx && \
    adduser -S nginx -u 1001

USER nginx
EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=10s \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
