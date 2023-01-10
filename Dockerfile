FROM node:14.17.0-alpine

# Create app directory
WORKDIR /app/project

# Install app dependencies - For NPM use: `COPY package.json package-lock.lock ./`
COPY package.json ./
# For NPM use: `RUN npm ci`
RUN npm install

# Copy important files - Add ormconfig.ts here if using Typeorm
COPY .eslintrc.js nest-cli.json tsconfig.json tsconfig.build.json ormConfig.js ./

# Entrypoint command - Replace `"yarn"` with `"npm", "run"` if you are using NPM as your package manager.
# You can update this to run other NodeJS apps
CMD [ "npm", "run", "start:dev", "--preserveWatchOutput" ]