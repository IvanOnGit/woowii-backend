# Stage 1: Build stage
FROM --platform=linux/amd64 node:20.15.0 AS builder

# Set npm to version 10.7.0
RUN npm install -g npm@10.7.0

WORKDIR /usr/src/app

# Copy package files
COPY . .

RUN rm -rf node_modules package-lock.json

# Install production dependencies only
RUN npm install --build-from-source

# Copy application files


# Stage 2: Runtime stage
FROM --platform=linux/amd64  node:20.15.0-slim

WORKDIR /usr/src/app

# Copy installed dependencies from builder
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app .

# Create a non-root user and switch to it
EXPOSE 3000

# Run the application (use "start" script for production)
CMD ["npm", "start"]