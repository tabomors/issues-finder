FROM node:10 as intermediate

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json ./
RUN npm install

# Copying source files
COPY . .

# Building app
RUN npm run build

FROM node:10-alpine

WORKDIR /usr/src/app

COPY --from=intermediate /usr/src/app ./

ENV NODE_ENV=production

# Running the app
CMD [ "npm", "start" ]
