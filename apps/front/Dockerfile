# Base image
FROM node:18 as build

# Create app directory
WORKDIR /usr/src/app/front

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN npx nx build front-todocker-front

#Stage 2
FROM nginx:1.23.2-alpine

# Copy dist
COPY --from=build /usr/src/app/front/dist/apps/front/todocker-front /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
