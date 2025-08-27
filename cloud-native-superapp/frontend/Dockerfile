# Dockerfile for the Next.js frontend

# 1. Builder Stage
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy root package files and install dependencies
# This leverages Docker cache for dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the frontend source code
COPY . .

# Build the Next.js application
RUN npm run build

# 2. Production Stage
FROM node:20-alpine AS production

# Set working directory
WORKDIR /app

# Set production environment
ENV NODE_ENV=production

# Copy built assets from the builder stage
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose the port the app runs on
EXPOSE 9002

# Start the application
CMD ["npm", "start"]
