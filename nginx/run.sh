#! /bin/sh

set -e
BASE_URL=${BASE_URL:-/}
NGINX_ROOT=/usr/share/nginx/html
INDEX_FILE=$NGINX_ROOT/index.html

node /usr/share/nginx/configurator $INDEX_FILE

exec nginx -g 'daemon off;'