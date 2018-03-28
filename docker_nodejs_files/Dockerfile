FROM node:slim
ARG FILE_PATH

# Create app directory
RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/app/views
RUN mkdir -p /usr/src/app/node_modules
WORKDIR /usr/src/app

# Bundle app source
COPY server.js /usr/src/app
COPY package.json /usr/src/app
COPY node_modules/ /usr/src/app/node_modules
COPY views/${FILE_PATH}/ /usr/src/app/views


EXPOSE 8080
CMD [ "npm", "start" ]

