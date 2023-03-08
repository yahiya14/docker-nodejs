FROM node:18-alpine3.16
RUN mkdir -p /home/app
COPY ./app /home/app
CMD ["node", "/home/app/index.js"]