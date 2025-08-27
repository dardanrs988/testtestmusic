# Stage 1: Builder
FROM node:20-alpine AS builder

# Set working directory for the entire monorepo
WORKDIR /app

# Copy root package files first
COPY package.json package-lock.json* ./

# Install all dependencies for the monorepo
RUN npm install

# Copy the rest of the source code
# This includes the frontend, backend, etc.
COPY . .

# Build the Next.js application
# The --workspace flag is not needed if the build script is correctly defined in the root package.json
# For clarity, we can run the build command from the root.
RUN npm run build

# Stage 2: Production
FROM node:20-alpine AS production

# Set working directory for the Next.js app
WORKDIR /app

# Set production environment
ENV NODE_ENV=production

# We need to create a standalone server, so we copy only the necessary files
# The build output is in .next/standalone
COPY --from=builder /app/cloud-native-superapp/frontend/.next/standalone ./
COPY --from=builder /app/cloud-native-superapp/frontend/.next/static ./cloud-native-superapp/frontend/.next/static
COPY --from=builder /app/cloud-native-superapp/frontend/public ./cloud-native-superapp/frontend/public

# Expose the port the app runs on
EXPOSE 9002

# The command to start the app is now the standalone server
CMD ["node", "cloud-native-superapp/frontend/server.js"]
