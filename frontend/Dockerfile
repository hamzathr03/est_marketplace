# Use Node image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the code
COPY . .

# Build the app
RUN npm run build

# Expose port (if running dev server)
EXPOSE 3000

# Start app (if you want dev server)
CMD ["npm", "start"]
