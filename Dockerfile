# Use Node.js base image
FROM node:16-alpine


#Giving ARG path for my artifact
ARG artifact_path=./dis


# Set the working directory inside the container
WORKDIR /usr/src/app


# Copy the entire directory specified by ${artifact_path} into the contianer and rename as app/ directory
COPY ${artifact_path} app/

#You can copy the entire directiory specified by ${artifact_path} into working directory also
#COPY ${artifact_path}./


# Expose port 3000 (if your Node.js application listens on a different port, adjust accordingly)
EXPOSE 3000

# Command to run the Node.js application
CMD ["node", "app/server.js"]
