# Use a different Node.js version
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Update npm to the latest version
RUN npm install -g npm@latest

# Clean npm cache and install dependencies
RUN npm cache clean --force && npm install

# Copy the rest of the application files to the working directory
COPY . .

# Build the application
RUN npm run build

# Start the application
CMD ["npm", "start"]
