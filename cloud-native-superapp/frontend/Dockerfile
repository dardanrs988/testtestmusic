# Dockerfile for the Next.js frontend

# 1. Builder Stage
FROM node:20-alpine AS builder

# Set the working directory for the entire application
WORKDIR /app

# Copy root dependency definition files
COPY package.json package-lock.json* ./

# Copy the frontend's package.json
COPY cloud-native-superapp/frontend/package.json ./cloud-native-superapp/frontend/

# Install all dependencies for the monorepo
RUN npm install

# Copy the rest of the source code
COPY . .

# Set the working directory to the frontend app and build it
WORKDIR /app/cloud-native-superapp/frontend
RUN npm run build

# 2. Runner Stage
FROM node:20-alpine AS runner

WORKDIR /app

# Copy the standalone Next.js server output
COPY --from=builder /app/cloud-native-superapp/frontend/.next/standalone ./cloud-native-superapp/frontend

# Copy the public assets
COPY --from=builder /app/cloud-native-superapp/frontend/public ./cloud-native-superapp/frontend/public

# Copy the static assets
COPY --from=builder /app/cloud-native-superapp/frontend/.next/static ./cloud-native-superapp/frontend/.next/static

# Expose the port the app runs on
EXPOSE 9002

# Start the app
CMD ["node", "cloud-native-superapp/frontend/server.js"]
