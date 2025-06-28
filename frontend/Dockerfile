# frontend/Dockerfile
FROM node:20-alpine

WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

RUN npm install

# Copy the rest of the application
COPY . .

# Build the application (si vous utilisez un framework comme Next.js, React, etc.)
RUN npm run build

# Expose the port your app runs on (généralement 3000 pour npm run dev)
EXPOSE 3000

# Commande de démarrage
CMD ["npm", "run", "dev"]
