# Use official Node.js image with Alpine for smaller size
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json for dependency installation
COPY package.json package-lock.json ./

# Install dependencies including devDependencies (needed for Vite)
RUN npm install --legacy-peer-deps

# Copy the entire app to the container
COPY . .

# Expose the port that Vite will run on
EXPOSE 3000

# Update Vite command to specify host
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]