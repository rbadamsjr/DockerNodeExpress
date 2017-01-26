# fundera.breakoutfinance.com/api

FROM centos:7

ENV appDir /var/www/app/current

RUN mkdir -p /var/www/app/current

RUN yum -y update && \
    yum -y install epel-release && \
    yum -y install nodejs npm && \
    yum -y install nginx

COPY ./configs/ssl-params.conf /etc/nginx/snippets/
COPY ./configs/default /etc/nginx/sites-enabled/default
WORKDIR ${appDir}

COPY ./codebase/ /var/www/app/current

RUN npm install

EXPOSE 8000

CMD ["npm","start"]

# For Production
# CMD ["pm2","start","server.js"]
