FROM node:alpine

COPY package.json .

ENV APIS=rohmanwebid
ENV NODE_ENV=development

RUN ["npm", "install", "--production"]

COPY . .

EXPOSE 8005

CMD ["npm", "run", "start"]
