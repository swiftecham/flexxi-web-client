FROM node:13

WORKDIR /website
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install --ignore-engines
COPY . .
RUN yarn build

FROM nginx:stable

WORKDIR /usr/share/nginx/html
COPY --from=0 /website/dist .
COPY nginx.conf /etc/nginx/conf.d/default.conf
