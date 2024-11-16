# Node.js-Image für den Build
FROM node:jod-bullseye

# Arbeitsverzeichnis im Container
WORKDIR /app

# Kopiere die package.json und package-lock.json
COPY package*.json ./

# Installiere die Abhängigkeiten
RUN npm install

# Kopiere den Rest des Quellcodes
COPY . .

# Port für ExpressJS
EXPOSE 3000

# Starte die Anwendung
CMD ["npm", "start", "dev"]