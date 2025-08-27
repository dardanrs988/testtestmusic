
# 1. Builder Stage
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy root package files and install dependencies
# This is needed because the frontend depends on the root package.json
COPY package.json package-lock.json* ./
RUN npm install

# Copy the frontend-specific source code
COPY . .

# Build the Next.js application
RUN npm run build

# 2. Production Stage
FROM node:20-alpine AS production

WORKDIR /app

# Copy built assets from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.ts ./next.config.ts

# Install production dependencies
RUN npm install --production

EXPOSE 9002

CMD ["npm", "start"]
