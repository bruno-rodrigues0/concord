FROM nginx:alpine

COPY ./api.concord.conf /etc/nginx/conf.d/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
