# Dockerfile for the frontend Next.js application

# 1. Builder Stage
FROM node:20-alpine AS builder
WORKDIR /app

# Copy root package files from the context's root
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire frontend directory into the builder
COPY ./cloud-native-superapp/frontend .

# Build the Next.js application
RUN npm run build

# 2. Production Stage
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copy built assets from builder stage
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Copy next.config.ts from its correct location in the builder stage
COPY --from=builder /app/next.config.ts ./next.config.ts

# Expose the port the app runs on
EXPOSE 9002

# Start the app
CMD ["npm", "start"]
