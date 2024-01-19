FROM node:20 as build
RUN apt-get update && apt-get install -y build-essential gcc autoconf automake libghc-zlib-dev libpng-dev libvips-dev git
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /opt/
COPY package.json package-lock.json ./

RUN ulimit -a

RUN npm config set maxsockets 5 -g && npm install -g node-gyp 
RUN npm config set fetch-retry-maxtimeout 600000 -g \ 
    && npm install --only=production
ENV PATH /opt/node_modules/.bin:$PATH
WORKDIR /opt/app
COPY . .
RUN npm run build

# Creating final production image
FROM node:20
RUN apt-get update && apt-get install libvips -y
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /opt/
COPY --from=build /opt/node_modules ./node_modules
WORKDIR /opt/app
COPY --from=build /opt/app ./
ENV PATH /opt/node_modules/.bin:$PATH

RUN chown -R node:node /opt/app \ 
    && npm config delete maxsockets
USER node
EXPOSE 1337
CMD ["npm", "run", "start"]
