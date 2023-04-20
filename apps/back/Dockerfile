# Base image
FROM node:18

# Create app directory
WORKDIR /usr/src/app/back

# Bundle app source
COPY --from=afelio/nx-build /home/node/build/dist/apps/back/todocker-back .

RUN npm install
# Start the server using the production build
CMD [ "node", "main.js" ]
