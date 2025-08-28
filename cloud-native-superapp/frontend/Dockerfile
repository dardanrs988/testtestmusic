# Dockerfile for the frontend Next.js application

# 1. Builder Stage: Build the Next.js application
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy root package files
COPY package.json ./
COPY package-lock.json ./

# Copy the frontend package.json
COPY cloud-native-superapp/frontend/package.json ./cloud-native-superapp/frontend/

# Install all dependencies for the monorepo
# This will install both root dependencies and workspace dependencies
RUN npm install

# Copy the rest of the source code
COPY . .

# Set the working directory to the frontend app for the build
WORKDIR /app/cloud-native-superapp/frontend

# Build the Next.js application
RUN npm run build

# 2. Runner Stage: Create the final, lean production image
FROM node:20-alpine AS runner

WORKDIR /app

# Set production environment variables
ENV NODE_ENV=production

# Copy the standalone Next.js server output from the builder stage
COPY --from=builder /app/cloud-native-superapp/frontend/.next/standalone ./

# Copy the static assets
COPY --from=builder --chown=nextjs:nodejs /app/cloud-native-superapp/frontend/.next/static ./cloud-native-superapp/frontend/.next/static

# Copy the public assets
COPY --from=builder /app/cloud-native-superapp/frontend/public ./cloud-native-superapp/frontend/public

# Start the server
# The server is located in the root of the WORKDIR
CMD ["node", "server.js"]
