FROM node:20.18.0 AS build
COPY . /vue3
WORKDIR /vue3
RUN npm install --registry https://mirrors.cloud.tencent.com/npm/ && npm run build

FROM nginx:latest
COPY --from=build /vue3/dist /web/dist
COPY docker/nginx.conf /etc/nginx/conf.d/nginx.conf
CMD ["nginx", "-g","daemon off;"]
