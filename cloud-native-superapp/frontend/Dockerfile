# Dockerfile for the Next.js frontend

# 1. Builder Stage
FROM node:20-slim AS builder

# Set the working directory
WORKDIR /app

# Copy root package files
COPY package.json package-lock.json* ./

# Install all dependencies
RUN npm install --include=dev

# Copy the rest of the source code
COPY . .

# Build the Next.js application
RUN npm run build


# 2. Runner Stage
FROM node:20-slim AS runner
WORKDIR /app

# Set environment variables
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED 1

# Copy standalone output
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static


# Set the correct user
USER nextjs

# Expose the port the app runs on
EXPOSE 9002

# Start the app
CMD ["node", "server.js"]
