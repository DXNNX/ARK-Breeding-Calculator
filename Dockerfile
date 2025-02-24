FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy the rest of the application code
COPY . .

# Copy SSL certificate files
COPY ssl /app/ssl

# Expose the HTTPS port
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]