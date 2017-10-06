FROM node:6
MAINTAINER kiendang91@gmail.com

# Prepare app directory
RUN mkdir -p /src/app
ADD . /src/app

# start app
WORKDIR /src/app
EXPOSE 3000
CMD ["npm", "start"]



