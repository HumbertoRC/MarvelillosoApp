# Fase 1: compilación
FROM node:20 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

# Fase 2: servir con Nginx
FROM nginx:alpine
COPY --from=build /app/dist/marvelilloso-angular/ /usr/share/nginx/html
COPY ../nginx.conf /etc/nginx/nginx.conf
