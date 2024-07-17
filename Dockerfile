# Use the official Nginx image from the Docker Hub
FROM nginx:latest

# Giving ARG path for my artifact
ARG artifact_path=./dist

# Set the working directory inside the container
WORKDIR /usr/share/nginx/html

# Copy the entire directory specified by ${artifact_path} into the container's Nginx root directory
COPY ${artifact_path} .

# Expose port 80 (Nginx listens on port 80 by default)
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]
