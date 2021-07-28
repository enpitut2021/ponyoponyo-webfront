FROM node:alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
RUN yarn install && yarn cache clean
COPY src ./
EXPOSE 3000
ENTRYPOINT [ "yarn", "start" ]

#FROM nginx:stable-alpine
#ARG socket_url
#ENV REACT_APP_SOCKET_URL=$socket_url
#ENV REACT_APP_LIFF_ID=$liff_id
#COPY --from=build /app/build /usr/share/nginx/html
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]

