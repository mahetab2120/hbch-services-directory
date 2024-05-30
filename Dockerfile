# Use the official Node.js image as the base image for building
FROM node:14-alpine as build

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install || \
    (echo "npm install failed, retrying..." && sleep 5 && npm install)

# Copy the rest of the application code to the container
COPY . .

# Build the React app for production
RUN npm run build

# Use the official Nginx image as the base image for serving
FROM nginx:alpine

# Copy the build output from the previous stage to Nginx's web directory
COPY --from=build /app/build /usr/share/nginx/html

# Copy the custom Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]
