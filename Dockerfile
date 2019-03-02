ARG NODE_VERSION=8
FROM node:${NODE_VERSION}

RUN apt-get update
RUN apt-get -y install default-jre
RUN apt-get -y install chromium
RUN apt-get -y install firefox-esr
RUN apt-get install --fix-missing -y xvfb

# Create app directory
# WORKDIR /usr/src/app
WORKDIR /var/lib/nodejs/codecept

# Install app dependencies
COPY package*.json ./

RUN npm install
# for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

VOLUME /var/lib/nodejs/codecept/reports
VOLUME /var/lib/nodejs/codecept/output

# Set the entrypoint for Selenium Standalone
RUN chmod +rwx /var/lib/nodejs/codecept/entrypoint
ENTRYPOINT ["/var/lib/nodejs/codecept/entrypoint"]

