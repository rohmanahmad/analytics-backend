FROM node:alpine

COPY package.json .

ENV APIS=malangsoftware
ENV NODE_ENV=development

RUN ["npm", "install", "--production"]

COPY . .

EXPOSE 8004

CMD ["npm", "run", "start"]
