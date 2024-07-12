# Use Node.js as base image
FROM node:latest as build

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the application code to container
COPY . .

# Build the React app
RUN npm run build

# Use Nginx as base image for serving the static files
FROM nginx:alpine

# Copy build files from previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
