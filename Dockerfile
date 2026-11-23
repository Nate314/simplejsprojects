# typeracer.js is browser JS (it reads the typeracer.com page DOM), so this only serves the file as-is.
FROM nginxinc/nginx-unprivileged:alpine
USER root
# Drop nginx's sample pages so only this repo's files are served. There is no index.html,
# so list the files at / instead of returning 403.
RUN rm /usr/share/nginx/html/* \
 && echo 'autoindex on;' > /etc/nginx/conf.d/pages.conf
COPY . /usr/share/nginx/html
USER 101
EXPOSE 8080
