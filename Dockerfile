FROM node:18-alpine

WORKDIR /usr/src/app


# First, copy package files
COPY package*.json .

# Then install dependencies
RUN npm install 

# Then copy the rest of your application
COPY . .

# Expose port
EXPOSE 3000

# Command to start your application
CMD ["node", "index.js"]
