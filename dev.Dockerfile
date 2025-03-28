# Use the official Node.js image with the specific version
FROM node:20.15.0

# Set npm to version 10.7.0
RUN npm install -g npm@10.7.0

# Install nodemon globally
RUN npm install -g nodemon

# Create and set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first for better caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "run", "legacy-dev"]