FROM swaggerapi/swagger-ui

COPY ../nginx/documentation.conf /etc/nginx/nginx.conf
COPY ./html/main.html /usr/share/nginx/html/main.html
COPY ./html/run.sh /usr/share/nginx/run.sh

ENV API_URL=http://localhost:8001/open-api/accounts

EXPOSE 8080