# Etapa 1: compilar la aplicación Ionic
# Se usa Node 22 porque Angular 22 no funciona con Node 20.
FROM node:22-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Etapa 2: publicar los archivos web
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/www /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
