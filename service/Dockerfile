# Use the official Node.js image as the base image
FROM node:20-alpine

# Set the working directory in the container to /app
WORKDIR /app

# Copy the package.json file to the working directory
COPY package.json .

# Install the dependencies
RUN npm install

# Copy the rest of the application to the working directory
COPY . .

# Start the application
CMD ["node", "src/server.js"]