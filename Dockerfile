FROM node:latest as build

# Create app directory
WORKDIR /home/node/build

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN npx nx run-many --target=build --parallel --verbose