FROM nginx:alpine

COPY ./concord-certificate.crt /etc/ssl/certs/
COPY ./concord-private.key /etc/ssl/private/
COPY ./api.concord.conf /etc/nginx/conf.d/

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
