# Use official Node.js runtime
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install dependencies
RUN npm install 

# Copy the app source
COPY . .

# Set environment variable
ENV PORT=5000

# Expose port
EXPOSE 5000

# Start the app
CMD ["node", "index.js"]
