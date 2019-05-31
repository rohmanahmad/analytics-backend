FROM swaggerapi/swagger-ui

COPY ./nginx/documentation.conf /etc/nginx/nginx.conf
COPY ./docker_development/html/main.html /usr/share/nginx/html/main.html
COPY ./docker_development/html/run.sh /usr/share/nginx/run.sh

ENV API_URL=https://petstore.swagger.io/v2/swagger.json

EXPOSE 8080