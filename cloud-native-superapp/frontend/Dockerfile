
# 1. Builder Stage: Build the Next.js application
FROM node:20-alpine AS builder

# Set the working directory in the builder stage
WORKDIR /app

# Copy package.json and lock file from the root
COPY package*.json ./

# Install all dependencies
RUN npm install

# Copy the entire project context
# This gives the builder access to all files needed for the build
COPY . .

# Build the Next.js application
# This will use the config and source code from ./cloud-native-superapp/frontend
RUN npm run build --workspace=frontend

# 2. Runner Stage: Create the final, lean production image
FROM node:20-alpine AS runner

WORKDIR /app

# Set production environment variable
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
ENV HOSTNAME 0.0.0.0
ENV PORT 9002

# Copy the minimal standalone server output from the builder stage
COPY --from=builder /app/cloud-native-superapp/frontend/.next/standalone ./

# Copy the public assets from the correct location
COPY --from=builder /app/cloud-native-superapp/frontend/public ./cloud-native-superapp/frontend/public

# Copy the static assets from the correct location
COPY --from=builder /app/cloud-native-superapp/frontend/.next/static ./cloud-native-superapp/frontend/.next/static


EXPOSE 9002

# Start the application
CMD ["node", "cloud-native-superapp/frontend/server.js"]
