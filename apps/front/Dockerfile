FROM nginx:1.23.2-alpine

# Copy dist
COPY --from=afelio/nx-build /home/node/build/dist/apps/front/todocker-front /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
