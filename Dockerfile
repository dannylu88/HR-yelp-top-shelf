FROM node:8
COPY . /HR-yelp-top-shelf
WORKDIR /HR-yelp-top-shelf
RUN npm install
EXPOSE 3006
CMD ["npm","run","docker"]
