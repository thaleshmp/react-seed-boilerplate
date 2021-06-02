from node:13.12.0-alpine AS build

WORKDIR /app

# install app dependencies
COPY package.json ./

RUN npm install

# add app
COPY . ./

RUN npm run create

FROM nginx:stable-alpine
COPY --from=build /app/public /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]