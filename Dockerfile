# Start from the official Node.js 18.16.0 image
FROM node:20.10.0-alpine

# Set the working directory in the Docker container
WORKDIR /usr/src/app

ENV NEXT_TELEMETRY_DISABLED 1

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy app source code to the Docker container
COPY . .

# Build the app
RUN npm run build

# Expose port 3000 to be able to access the app
EXPOSE 3000

# Start the app
CMD [ "npm", "start" ]
