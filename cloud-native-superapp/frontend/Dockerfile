# Dockerfile for the Next.js frontend

# 1. Builder Stage
FROM node:20-slim AS builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to leverage Docker cache
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
# This copies the entire monorepo content into /app
COPY . .

# Build the Next.js application from the root
RUN npm run build

# 2. Runner Stage
FROM node:20-slim AS runner

WORKDIR /app

# Set environment variables
ENV NODE_ENV=production

# Copy the standalone Next.js server output from the builder stage
COPY --from=builder /app/.next/standalone ./

# Copy the public assets from the correct path
COPY --from=builder /app/src/public ./src/public

# Copy the static assets from the correct path
COPY --from=builder /app/.next/static ./.next/static

# Expose the port the app runs on
EXPOSE 9002

# The command to run the app, pointing to the correct server file
CMD ["node", "server.js"]
