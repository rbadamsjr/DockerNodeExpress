# fundera.breakoutfinance.com/api

FROM centos:7

ENV appDir /var/www/app/current

RUN mkdir -p /var/www/app/current

RUN yum -y update && \
    yum -y install epel-release && \
    yum -y install nodejs npm

WORKDIR ${appDir}

COPY ./codebase/ /var/www/app/current

RUN npm install

EXPOSE 8000

CMD ["npm","start"]
