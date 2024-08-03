# Stage 1: Build the application
FROM node:18 AS build

# Set the working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the application code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:1.27.0

# Copy the build output to the Nginx serving directory
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Optionally, copy a custom Nginx configuration file
#COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]




