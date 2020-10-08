# pull official base image
FROM node:12-alpine

# Create backend directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

COPY . .

# start app
CMD ["node", "server.js"]