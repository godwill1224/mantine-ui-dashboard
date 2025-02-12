# Use official Node.js image with Alpine for smaller size
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json for dependency installation
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire app to the container
COPY . .

# Expose the port that Vite will run on
EXPOSE 3000

# Start the Vite dev server
CMD ["npm", "run", "dev"]
