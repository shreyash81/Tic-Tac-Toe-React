# Use the official Nginx image from the Docker Hub
FROM nginx:1.27.0

# Set the working directory inside the container
WORKDIR /usr/share/nginx/html

# Copy the contents of the local 'dist' directory to the Nginx serving directory inside the container
COPY ./dist/ .

# Create /var/www/html directory inside the container
RUN mkdir -p /var/www/html

# Copy the index.html file to /var/www/html
RUN cp /usr/share/nginx/html/index.html /var/www/html/

# Copy the custom Nginx configuration file to the container
COPY nginx.conf /etc/nginx/nginx.conf


# Expose port 80 (Nginx listens on port 80 by default)
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]



