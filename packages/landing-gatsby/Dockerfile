FROM mhart/alpine-node:11 AS builder

WORKDIR /app
COPY packages/landing-gatsby /app

FROM nginx:alpine
COPY nginx /etc/nginx/
COPY --from=builder --chown=nginx:nginx /app/public /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK CMD [ "wget", "-q", "localhost:80" ]
CMD ["nginx", "-g", "daemon off;"]
