# 1. Builder Stage
FROM node:20-alpine AS builder
WORKDIR /app

# Copy root package.json and lockfile
COPY package.json ./
COPY package-lock.json ./

# Copy frontend-specific package.json
COPY cloud-native-superapp/frontend/package.json ./cloud-native-superapp/frontend/

# Install all dependencies from the workspace root
RUN npm install

# Copy the rest of the source code
COPY . .

# Run the build for the frontend workspace
RUN npm run build -w frontend

# 2. Runner Stage
FROM node:20-alpine AS runner
WORKDIR /app

# Set production environment
ENV NODE_ENV=production

# Copy necessary files from the builder stage
COPY --from=builder /app/cloud-native-superapp/frontend/.next/standalone ./
COPY --from=builder /app/cloud-native-superapp/frontend/.next/static ./cloud-native-superapp/frontend/.next/static
COPY --from=builder /app/cloud-native-superapp/frontend/public ./cloud-native-superapp/frontend/public

# Expose the port the app runs on
EXPOSE 9002

# The command to start the app
CMD ["node", "cloud-native-superapp/frontend/server.js"]
